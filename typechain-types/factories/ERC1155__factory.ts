/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC1155, ERC1155Interface } from "../ERC1155";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "uri_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620016223803806200162283398101604081905262000034916200011b565b6200003f8162000046565b5062000234565b80516200005b9060029060208401906200005f565b5050565b8280546200006d90620001f7565b90600052602060002090601f016020900481019282620000915760008555620000dc565b82601f10620000ac57805160ff1916838001178555620000dc565b82800160010185558215620000dc579182015b82811115620000dc578251825591602001919060010190620000bf565b50620000ea929150620000ee565b5090565b5b80821115620000ea5760008155600101620000ef565b634e487b7160e01b600052604160045260246000fd5b600060208083850312156200012f57600080fd5b82516001600160401b03808211156200014757600080fd5b818501915085601f8301126200015c57600080fd5b81518181111562000171576200017162000105565b604051601f8201601f19908116603f011681019083821181831017156200019c576200019c62000105565b816040528281528886848701011115620001b557600080fd5b600093505b82841015620001d95784840186015181850187015292850192620001ba565b82841115620001eb5760008684830101525b98975050505050505050565b600181811c908216806200020c57607f821691505b602082108114156200022e57634e487b7160e01b600052602260045260246000fd5b50919050565b6113de80620002446000396000f3fe608060405234801561001057600080fd5b50600436106100875760003560e01c80634e1273f41161005b5780634e1273f41461010a578063a22cb4651461012a578063e985e9c51461013d578063f242432a1461017957600080fd5b8062fdd58e1461008c57806301ffc9a7146100b25780630e89341c146100d55780632eb2c2d6146100f5575b600080fd5b61009f61009a366004610be0565b61018c565b6040519081526020015b60405180910390f35b6100c56100c0366004610c23565b610223565b60405190151581526020016100a9565b6100e86100e3366004610c47565b610275565b6040516100a99190610cad565b610108610103366004610e0c565b610309565b005b61011d610118366004610eb6565b6103a0565b6040516100a99190610fbc565b610108610138366004610fcf565b6104ca565b6100c561014b36600461100b565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b61010861018736600461103e565b6104d9565b60006001600160a01b0383166101fd5760405162461bcd60e51b815260206004820152602b60248201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60448201526a65726f206164647265737360a81b60648201526084015b60405180910390fd5b506000908152602081815260408083206001600160a01b03949094168352929052205490565b60006001600160e01b03198216636cdb3d1360e11b148061025457506001600160e01b031982166303a24d0760e21b145b8061026f57506301ffc9a760e01b6001600160e01b03198316145b92915050565b606060028054610284906110a3565b80601f01602080910402602001604051908101604052809291908181526020018280546102b0906110a3565b80156102fd5780601f106102d2576101008083540402835291602001916102fd565b820191906000526020600020905b8154815290600101906020018083116102e057829003601f168201915b50505050509050919050565b6001600160a01b0385163314806103255750610325853361014b565b61038c5760405162461bcd60e51b815260206004820152603260248201527f455243313135353a207472616e736665722063616c6c6572206973206e6f74206044820152711bdddb995c881b9bdc88185c1c1c9bdd995960721b60648201526084016101f4565b6103998585858585610560565b5050505050565b606081518351146104055760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604482015268040dad2e6dac2e8c6d60bb1b60648201526084016101f4565b6000835167ffffffffffffffff81111561042157610421610cc0565b60405190808252806020026020018201604052801561044a578160200160208202803683370190505b50905060005b84518110156104c25761049585828151811061046e5761046e6110de565b6020026020010151858381518110610488576104886110de565b602002602001015161018c565b8282815181106104a7576104a76110de565b60209081029190910101526104bb8161110a565b9050610450565b509392505050565b6104d533838361073d565b5050565b6001600160a01b0385163314806104f557506104f5853361014b565b6105535760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260448201526808185c1c1c9bdd995960ba1b60648201526084016101f4565b610399858585858561081e565b81518351146105c25760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206044820152670dad2e6dac2e8c6d60c31b60648201526084016101f4565b6001600160a01b0384166105e85760405162461bcd60e51b81526004016101f490611125565b3360005b84518110156106cf576000858281518110610609576106096110de565b602002602001015190506000858381518110610627576106276110de565b602090810291909101810151600084815280835260408082206001600160a01b038e1683529093529190912054909150818110156106775760405162461bcd60e51b81526004016101f49061116a565b6000838152602081815260408083206001600160a01b038e8116855292528083208585039055908b168252812080548492906106b49084906111b4565b92505081905550505050806106c89061110a565b90506105ec565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb878760405161071f9291906111cc565b60405180910390a4610735818787878787610944565b505050505050565b816001600160a01b0316836001600160a01b031614156107b15760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b60648201526084016101f4565b6001600160a01b03838116600081815260016020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0384166108445760405162461bcd60e51b81526004016101f490611125565b3361085d81878761085488610aaf565b61039988610aaf565b6000848152602081815260408083206001600160a01b038a1684529091529020548381101561089e5760405162461bcd60e51b81526004016101f49061116a565b6000858152602081815260408083206001600160a01b038b81168552925280832087850390559088168252812080548692906108db9084906111b4565b909155505060408051868152602081018690526001600160a01b03808916928a821692918616917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a461093b828888888888610afa565b50505050505050565b6001600160a01b0384163b156107355760405163bc197c8160e01b81526001600160a01b0385169063bc197c819061098890899089908890889088906004016111fa565b602060405180830381600087803b1580156109a257600080fd5b505af19250505080156109d2575060408051601f3d908101601f191682019092526109cf91810190611258565b60015b610a7f576109de611275565b806308c379a01415610a1857506109f3611291565b806109fe5750610a1a565b8060405162461bcd60e51b81526004016101f49190610cad565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e20455243313135356044820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b60648201526084016101f4565b6001600160e01b0319811663bc197c8160e01b1461093b5760405162461bcd60e51b81526004016101f49061131b565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110610ae957610ae96110de565b602090810291909101015292915050565b6001600160a01b0384163b156107355760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e6190610b3e9089908990889088908890600401611363565b602060405180830381600087803b158015610b5857600080fd5b505af1925050508015610b88575060408051601f3d908101601f19168201909252610b8591810190611258565b60015b610b94576109de611275565b6001600160e01b0319811663f23a6e6160e01b1461093b5760405162461bcd60e51b81526004016101f49061131b565b80356001600160a01b0381168114610bdb57600080fd5b919050565b60008060408385031215610bf357600080fd5b610bfc83610bc4565b946020939093013593505050565b6001600160e01b031981168114610c2057600080fd5b50565b600060208284031215610c3557600080fd5b8135610c4081610c0a565b9392505050565b600060208284031215610c5957600080fd5b5035919050565b6000815180845260005b81811015610c8657602081850181015186830182015201610c6a565b81811115610c98576000602083870101525b50601f01601f19169290920160200192915050565b602081526000610c406020830184610c60565b634e487b7160e01b600052604160045260246000fd5b601f8201601f1916810167ffffffffffffffff81118282101715610cfc57610cfc610cc0565b6040525050565b600067ffffffffffffffff821115610d1d57610d1d610cc0565b5060051b60200190565b600082601f830112610d3857600080fd5b81356020610d4582610d03565b604051610d528282610cd6565b83815260059390931b8501820192828101915086841115610d7257600080fd5b8286015b84811015610d8d5780358352918301918301610d76565b509695505050505050565b600082601f830112610da957600080fd5b813567ffffffffffffffff811115610dc357610dc3610cc0565b604051610dda601f8301601f191660200182610cd6565b818152846020838601011115610def57600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a08688031215610e2457600080fd5b610e2d86610bc4565b9450610e3b60208701610bc4565b9350604086013567ffffffffffffffff80821115610e5857600080fd5b610e6489838a01610d27565b94506060880135915080821115610e7a57600080fd5b610e8689838a01610d27565b93506080880135915080821115610e9c57600080fd5b50610ea988828901610d98565b9150509295509295909350565b60008060408385031215610ec957600080fd5b823567ffffffffffffffff80821115610ee157600080fd5b818501915085601f830112610ef557600080fd5b81356020610f0282610d03565b604051610f0f8282610cd6565b83815260059390931b8501820192828101915089841115610f2f57600080fd5b948201945b83861015610f5457610f4586610bc4565b82529482019490820190610f34565b96505086013592505080821115610f6a57600080fd5b50610f7785828601610d27565b9150509250929050565b600081518084526020808501945080840160005b83811015610fb157815187529582019590820190600101610f95565b509495945050505050565b602081526000610c406020830184610f81565b60008060408385031215610fe257600080fd5b610feb83610bc4565b91506020830135801515811461100057600080fd5b809150509250929050565b6000806040838503121561101e57600080fd5b61102783610bc4565b915061103560208401610bc4565b90509250929050565b600080600080600060a0868803121561105657600080fd5b61105f86610bc4565b945061106d60208701610bc4565b93506040860135925060608601359150608086013567ffffffffffffffff81111561109757600080fd5b610ea988828901610d98565b600181811c908216806110b757607f821691505b602082108114156110d857634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060001982141561111e5761111e6110f4565b5060010190565b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604082015264647265737360d81b606082015260800190565b6020808252602a908201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60408201526939103a3930b739b332b960b11b606082015260800190565b600082198211156111c7576111c76110f4565b500190565b6040815260006111df6040830185610f81565b82810360208401526111f18185610f81565b95945050505050565b6001600160a01b0386811682528516602082015260a06040820181905260009061122690830186610f81565b82810360608401526112388186610f81565b9050828103608084015261124c8185610c60565b98975050505050505050565b60006020828403121561126a57600080fd5b8151610c4081610c0a565b600060033d111561128e5760046000803e5060005160e01c5b90565b600060443d101561129f5790565b6040516003193d81016004833e81513d67ffffffffffffffff81602484011181841117156112cf57505050505090565b82850191508151818111156112e75750505050505090565b843d87010160208285010111156113015750505050505090565b61131060208286010187610cd6565b509095945050505050565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b606082015260800190565b6001600160a01b03868116825285166020820152604081018490526060810183905260a06080820181905260009061139d90830184610c60565b97965050505050505056fea26469706673582212209ab2e155beb45898d3349595954f17671c3a962cb082ab884902ae456631c62064736f6c63430008090033";

type ERC1155ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1155ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1155__factory extends ContractFactory {
  constructor(...args: ERC1155ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    uri_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC1155> {
    return super.deploy(uri_, overrides || {}) as Promise<ERC1155>;
  }
  getDeployTransaction(
    uri_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(uri_, overrides || {});
  }
  attach(address: string): ERC1155 {
    return super.attach(address) as ERC1155;
  }
  connect(signer: Signer): ERC1155__factory {
    return super.connect(signer) as ERC1155__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155Interface {
    return new utils.Interface(_abi) as ERC1155Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155 {
    return new Contract(address, _abi, signerOrProvider) as ERC1155;
  }
}
