import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

import { HardhatUserConfig } from "hardhat/types";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-abi-exporter";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-deploy";
import "hardhat-deploy-ethers";

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    testnet: {
      url: process.env.BSC_TESTNET_RPC || "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: [process.env.BSC_TESTNET_PRIVATE_KEY!],
    },
    mainnet: {
      url: process.env.BSC_MAINNET_RPC || "https://bsc-dataseed.binance.org",
      accounts: [process.env.BSC_MAINNET_PRIVATE_KEY!],
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  etherscan: {
    apiKey: process.env.BLOCK_EXPLORER_API_KEY!,
  },
  mocha: {
    timeout: 500000,
  },
};

export default config;
