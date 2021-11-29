# Moonshooter NFT
## Development stacks
* `hardhat` for development ([https://hardhat.org/getting-started/](https://hardhat.org/getting-started/))
* `ethers` for connecting with the network ([https://docs.ethers.io/v5/](https://docs.ethers.io/v5/))
* `waffle` for testing ([https://ethereum-waffle.readthedocs.io/](https://ethereum-waffle.readthedocs.io/))

## Setup and run
Setting up by installing node modules:

```bash
yarn install
```

### Run local ethereum node
Run command below to setup a local node of Ethereum network. More information [here](https://hardhat.org/hardhat-network/).

```bash
yarn hardhat node
```

For BSC mainnet fork, run:

```bash
yarn hardhat node --fork "https://bsc-dataseed.binance.org"
```
or adding forking config in `hardhat.config.ts`

### Run test
To run all test, use below command:

```
yarn test
```
or run a specific test file:

```
yarn test path/to/test/file
```

**NOTES**:


### Compile
To compile, use below command:

```
yarn compile
```
Hardhat supports multiple compilers adhere to each contract requirements. Check it out at [https://hardhat.org/guides/compile-contracts.html](https://hardhat.org/guides/compile-contracts.html).

### Deploy
Create `.env` file as environment for deployment since we use `dotenv` library.

```
cp .env.example .env
```

Deploy by running specific deployment script for a specific network:

```
yarn deploy --tags <DEPLOYEMENT_TAG> --network <NETWORK>
```

**NOTES**: When deploying contracts related to Moonshot-ERC20, you might want to visit line 749-756 of this contract to uncomment the appropriate contract address for router.

### Verify
Verifying using hardhat is easy with [this guide](https://www.binance.org/en/blog/verify-with-hardhat/).
Add your BSCscan API key as environment variable `BLOCK_EXPLORER_API_KEY`. Then run below command
```
yarn verify --network mainnet
```
This also works on BSC testnet.

## Contracts
