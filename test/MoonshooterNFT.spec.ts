import { ethers, waffle } from "hardhat";
const { deployContract } = waffle;
import { utils } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { MoonshooterNFT } from "../typechain-types";
import MoonshooterNFTABI from "../artifacts/contracts/MoonshooterNFT.sol/MoonshooterNFT.json";
import { expect } from "./chai-setup";

describe("MoonshooterNFT", () => {
  let nft: MoonshooterNFT;

  // Accounts
  let deployer: SignerWithAddress;
  let alice: SignerWithAddress;
  let bob: SignerWithAddress;

  const MINTER_ROLE = utils.keccak256(utils.toUtf8Bytes("MINTER_ROLE"));
  const PAUSER_ROLE = utils.keccak256(utils.toUtf8Bytes("PAUSER_ROLE"));
  const BASE_TOKEN_URI = "https://api.project-moonshot.me/nft";

  before(async () => {
    [deployer, alice, bob] = await ethers.getSigners();
  });

  beforeEach(async () => {
    nft = (await deployContract(deployer, MoonshooterNFTABI, [`${BASE_TOKEN_URI}/{id}.json`])) as MoonshooterNFT;
  });

  context("initialized states", () => {
    it("has a correct initial state variables", async () => {
      expect(await nft.hasRole(MINTER_ROLE, deployer.address)).to.be.true;
      expect(await nft.hasRole(PAUSER_ROLE, deployer.address)).to.be.true;
      expect(await nft.hasRole(MINTER_ROLE, alice.address)).to.be.false;
      expect(await nft.hasRole(PAUSER_ROLE, alice.address)).to.be.false;
      expect(await nft.hasRole(MINTER_ROLE, bob.address)).to.be.false;
      expect(await nft.hasRole(PAUSER_ROLE, bob.address)).to.be.false;
      expect(await nft.uri(0)).to.eq(`${BASE_TOKEN_URI}/{id}.json`);
      expect(await nft.uri(1000)).to.eq(`${BASE_TOKEN_URI}/{id}.json`);
    });
  });

  context("#grantRole", () => {
    it("only allows default admin to grant minter role", async () => {
      await expect(nft.connect(alice).grantRole(MINTER_ROLE, alice.address)).to.be.reverted;
      expect(await nft.hasRole(MINTER_ROLE, alice.address)).to.be.false;
      await nft.grantRole(MINTER_ROLE, alice.address);
      expect(await nft.hasRole(MINTER_ROLE, alice.address)).to.be.true;
    });

    it("only allows default admin to grant pauser role", async () => {
      await expect(nft.connect(alice).grantRole(PAUSER_ROLE, alice.address)).to.be.reverted;
      expect(await nft.hasRole(PAUSER_ROLE, alice.address)).to.be.false;
      await nft.grantRole(PAUSER_ROLE, alice.address);
      expect(await nft.hasRole(PAUSER_ROLE, alice.address)).to.be.true;
    });
  });

  context("#mintShip", () => {
    beforeEach(async () => {
      await nft.grantRole(MINTER_ROLE, alice.address);
    });

    it("mints correctly", async () => {
      await nft.connect(alice).mintShip(bob.address);
      expect(await nft.balanceOf(alice.address, 0)).to.eq(0);
      expect(await nft.balanceOf(bob.address, 0)).to.eq(1);
      expect(await nft.balanceOf(alice.address, 1)).to.eq(0);
      expect(await nft.balanceOf(bob.address, 1)).to.eq(0);

      await nft.connect(alice).mintShip(alice.address);
      expect(await nft.balanceOf(alice.address, 0)).to.eq(0);
      expect(await nft.balanceOf(bob.address, 0)).to.eq(1);
      expect(await nft.balanceOf(alice.address, 1)).to.eq(1);
      expect(await nft.balanceOf(bob.address, 1)).to.eq(0);

      expect((await nft.tokensOwned(deployer.address)).map((e) => e.toString())).to.eql([]);
      expect((await nft.tokensOwned(alice.address)).map((e) => e.toString())).to.eql(["1"]);
      expect((await nft.tokensOwned(bob.address)).map((e) => e.toString())).to.eql(["0"]);
    });
  });

  context("#mintShips", () => {
    beforeEach(async () => {
      await nft.grantRole(MINTER_ROLE, alice.address);
    });

    it("mints ships correctly", async () => {
      const tokensList = [0, 1, 2, 3, 4, 5];
      let aliceAddresses = new Array<string>();
      let bobAddresses = new Array<string>();
      tokensList.forEach(() => {
        aliceAddresses.push(alice.address);
        bobAddresses.push(bob.address);
      });

      await nft.connect(alice).mintShips(bob.address, 3);
      expect((await nft.balanceOfBatch(aliceAddresses, tokensList)).map((e) => e.toNumber())).to.eql([
        0, 0, 0, 0, 0, 0,
      ]);
      expect((await nft.balanceOfBatch(bobAddresses, tokensList)).map((e) => e.toNumber())).to.eql([1, 1, 1, 0, 0, 0]);

      await nft.connect(alice).mintShips(alice.address, 2);
      expect((await nft.balanceOfBatch(aliceAddresses, tokensList)).map((e) => e.toNumber())).to.eql([
        0, 0, 0, 1, 1, 0,
      ]);
      expect((await nft.balanceOfBatch(bobAddresses, tokensList)).map((e) => e.toNumber())).to.eql([1, 1, 1, 0, 0, 0]);

      expect((await nft.tokensOwned(deployer.address)).map((e) => e.toString())).to.eql([]);
      expect((await nft.tokensOwned(alice.address)).map((e) => e.toString())).to.eql(["3", "4"]);
      expect((await nft.tokensOwned(bob.address)).map((e) => e.toString())).to.eql(["0", "1", "2"]);
    });
  });
});
