/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC1155Upgradeable,
  ERC1155UpgradeableInterface,
} from "../ERC1155Upgradeable";

const _abi = [
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
  "0x608060405234801561001057600080fd5b506113ec806100206000396000f3fe608060405234801561001057600080fd5b50600436106100775760003560e01c8062fdd58e1461007c57806301ffc9a7146100a25780630e89341c146100c55780632eb2c2d6146100e55780634e1273f4146100fa578063a22cb4651461011a578063e985e9c51461012d578063f242432a14610169575b600080fd5b61008f61008a366004610e76565b61017c565b6040519081526020015b60405180910390f35b6100b56100b0366004610f69565b610215565b6040519015158152602001610099565b6100d86100d3366004610fa8565b610267565b6040516100999190611129565b6100f86100f3366004610d35565b6102fb565b005b61010d610108366004610e9f565b610392565b60405161009991906110e8565b6100f8610128366004610e3c565b6104f3565b6100b561013b366004610d03565b6001600160a01b03918216600090815260666020908152604080832093909416825291909152205460ff1690565b6100f8610177366004610dda565b6105ca565b60006001600160a01b0383166101ed5760405162461bcd60e51b815260206004820152602b60248201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60448201526a65726f206164647265737360a81b60648201526084015b60405180910390fd5b5060009081526065602090815260408083206001600160a01b03949094168352929052205490565b60006001600160e01b03198216636cdb3d1360e11b148061024657506001600160e01b031982166303a24d0760e21b145b8061026157506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060606780546102769061124e565b80601f01602080910402602001604051908101604052809291908181526020018280546102a29061124e565b80156102ef5780601f106102c4576101008083540402835291602001916102ef565b820191906000526020600020905b8154815290600101906020018083116102d257829003601f168201915b50505050509050919050565b6001600160a01b0385163314806103175750610317853361013b565b61037e5760405162461bcd60e51b815260206004820152603260248201527f455243313135353a207472616e736665722063616c6c6572206973206e6f74206044820152711bdddb995c881b9bdc88185c1c1c9bdd995960721b60648201526084016101e4565b61038b8585858585610651565b5050505050565b606081518351146103f75760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604482015268040dad2e6dac2e8c6d60bb1b60648201526084016101e4565b600083516001600160401b0381111561042057634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610449578160200160208202803683370190505b50905060005b84518110156104eb576104b085828151811061047b57634e487b7160e01b600052603260045260246000fd5b60200260200101518583815181106104a357634e487b7160e01b600052603260045260246000fd5b602002602001015161017c565b8282815181106104d057634e487b7160e01b600052603260045260246000fd5b60209081029190910101526104e4816112b5565b905061044f565b509392505050565b336001600160a01b038316141561055e5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b60648201526084016101e4565b3360008181526066602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6001600160a01b0385163314806105e657506105e6853361013b565b6106445760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260448201526808185c1c1c9bdd995960ba1b60648201526084016101e4565b61038b858585858561084d565b81518351146106b35760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206044820152670dad2e6dac2e8c6d60c31b60648201526084016101e4565b6001600160a01b0384166106d95760405162461bcd60e51b81526004016101e490611184565b3360005b84518110156107df57600085828151811061070857634e487b7160e01b600052603260045260246000fd5b60200260200101519050600085838151811061073457634e487b7160e01b600052603260045260246000fd5b60209081029190910181015160008481526065835260408082206001600160a01b038e1683529093529190912054909150818110156107855760405162461bcd60e51b81526004016101e4906111c9565b60008381526065602090815260408083206001600160a01b038e8116855292528083208585039055908b168252812080548492906107c4908490611236565b92505081905550505050806107d8906112b5565b90506106dd565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb878760405161082f9291906110fb565b60405180910390a4610845818787878787610977565b505050505050565b6001600160a01b0384166108735760405162461bcd60e51b81526004016101e490611184565b3361088c81878761088388610ae2565b61038b88610ae2565b60008481526065602090815260408083206001600160a01b038a168452909152902054838110156108cf5760405162461bcd60e51b81526004016101e4906111c9565b60008581526065602090815260408083206001600160a01b038b811685529252808320878503905590881682528120805486929061090e908490611236565b909155505060408051868152602081018690526001600160a01b03808916928a821692918616917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a461096e828888888888610b3b565b50505050505050565b6001600160a01b0384163b156108455760405163bc197c8160e01b81526001600160a01b0385169063bc197c81906109bb9089908990889088908890600401611045565b602060405180830381600087803b1580156109d557600080fd5b505af1925050508015610a05575060408051601f3d908101601f19168201909252610a0291810190610f8c565b60015b610ab257610a116112fc565b806308c379a01415610a4b5750610a26611314565b80610a315750610a4d565b8060405162461bcd60e51b81526004016101e49190611129565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e20455243313135356044820152732932b1b2b4bb32b91034b6b83632b6b2b73a32b960611b60648201526084016101e4565b6001600160e01b0319811663bc197c8160e01b1461096e5760405162461bcd60e51b81526004016101e49061113c565b60408051600180825281830190925260609160009190602080830190803683370190505090508281600081518110610b2a57634e487b7160e01b600052603260045260246000fd5b602090810291909101015292915050565b6001600160a01b0384163b156108455760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e6190610b7f90899089908890889088906004016110a3565b602060405180830381600087803b158015610b9957600080fd5b505af1925050508015610bc9575060408051601f3d908101601f19168201909252610bc691810190610f8c565b60015b610bd557610a116112fc565b6001600160e01b0319811663f23a6e6160e01b1461096e5760405162461bcd60e51b81526004016101e49061113c565b80356001600160a01b0381168114610c1c57600080fd5b919050565b600082601f830112610c31578081fd5b81356020610c3e82611213565b604051610c4b8282611289565b8381528281019150858301600585901b87018401881015610c6a578586fd5b855b85811015610c8857813584529284019290840190600101610c6c565b5090979650505050505050565b600082601f830112610ca5578081fd5b81356001600160401b03811115610cbe57610cbe6112e6565b604051610cd5601f8301601f191660200182611289565b818152846020838601011115610ce9578283fd5b816020850160208301379081016020019190915292915050565b60008060408385031215610d15578182fd5b610d1e83610c05565b9150610d2c60208401610c05565b90509250929050565b600080600080600060a08688031215610d4c578081fd5b610d5586610c05565b9450610d6360208701610c05565b935060408601356001600160401b0380821115610d7e578283fd5b610d8a89838a01610c21565b94506060880135915080821115610d9f578283fd5b610dab89838a01610c21565b93506080880135915080821115610dc0578283fd5b50610dcd88828901610c95565b9150509295509295909350565b600080600080600060a08688031215610df1578081fd5b610dfa86610c05565b9450610e0860208701610c05565b9350604086013592506060860135915060808601356001600160401b03811115610e30578182fd5b610dcd88828901610c95565b60008060408385031215610e4e578182fd5b610e5783610c05565b915060208301358015158114610e6b578182fd5b809150509250929050565b60008060408385031215610e88578182fd5b610e9183610c05565b946020939093013593505050565b60008060408385031215610eb1578182fd5b82356001600160401b0380821115610ec7578384fd5b818501915085601f830112610eda578384fd5b81356020610ee782611213565b604051610ef48282611289565b8381528281019150858301600585901b870184018b1015610f13578889fd5b8896505b84871015610f3c57610f2881610c05565b835260019690960195918301918301610f17565b5096505086013592505080821115610f52578283fd5b50610f5f85828601610c21565b9150509250929050565b600060208284031215610f7a578081fd5b8135610f858161139d565b9392505050565b600060208284031215610f9d578081fd5b8151610f858161139d565b600060208284031215610fb9578081fd5b5035919050565b6000815180845260208085019450808401835b83811015610fef57815187529582019590820190600101610fd3565b509495945050505050565b60008151808452815b8181101561101f57602081850181015186830182015201611003565b818111156110305782602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b0386811682528516602082015260a06040820181905260009061107190830186610fc0565b82810360608401526110838186610fc0565b905082810360808401526110978185610ffa565b98975050505050505050565b6001600160a01b03868116825285166020820152604081018490526060810183905260a0608082018190526000906110dd90830184610ffa565b979650505050505050565b602081526000610f856020830184610fc0565b60408152600061110e6040830185610fc0565b82810360208401526111208185610fc0565b95945050505050565b602081526000610f856020830184610ffa565b60208082526028908201527f455243313135353a204552433131353552656365697665722072656a656374656040820152676420746f6b656e7360c01b606082015260800190565b60208082526025908201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604082015264647265737360d81b606082015260800190565b6020808252602a908201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60408201526939103a3930b739b332b960b11b606082015260800190565b60006001600160401b0382111561122c5761122c6112e6565b5060051b60200190565b60008219821115611249576112496112d0565b500190565b600181811c9082168061126257607f821691505b6020821081141561128357634e487b7160e01b600052602260045260246000fd5b50919050565b601f8201601f191681016001600160401b03811182821017156112ae576112ae6112e6565b6040525050565b60006000198214156112c9576112c96112d0565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b600060033d111561131157600481823e5160e01c5b90565b600060443d10156113225790565b6040516003193d81016004833e81513d6001600160401b03816024840111818411171561135157505050505090565b82850191508151818111156113695750505050505090565b843d87010160208285010111156113835750505050505090565b61139260208286010187611289565b509095945050505050565b6001600160e01b0319811681146113b357600080fd5b5056fea264697066735822122026ce1e6f16aca5491bb97eecb31a063a563c642a52b5b6a3519ba0fb8e6e7bc564736f6c63430008040033";

export class ERC1155Upgradeable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC1155Upgradeable> {
    return super.deploy(overrides || {}) as Promise<ERC1155Upgradeable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC1155Upgradeable {
    return super.attach(address) as ERC1155Upgradeable;
  }
  connect(signer: Signer): ERC1155Upgradeable__factory {
    return super.connect(signer) as ERC1155Upgradeable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155UpgradeableInterface {
    return new utils.Interface(_abi) as ERC1155UpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155Upgradeable {
    return new Contract(address, _abi, signerOrProvider) as ERC1155Upgradeable;
  }
}
