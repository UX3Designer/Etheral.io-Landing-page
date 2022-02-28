import Web3 from "web3";
import { AbiItem } from "web3-utils";
import { Contract } from "web3-eth-contract";
import contracts from "../constants/contracts";

import TokenABI from "../abis/erc20.json";
import { Tokens } from "../constants/tokens";
import VaultbtcABI from "../abis/vaultBTC.json";
import VaultethABI from "../abis/vaultETH.json";
import VaultetyABI from "../abis/vaultETY.json";
import IsaoracleABI from "../abis/isaOracle.json";

// Exchange 

import PairABI from "../abis/pair.json";
import RouterABI from "../abis/router.json";
import FactoryABI from "../abis/factory.json";

export const simpleRpcProvider = new Web3(
  // new Web3.providers.HttpProvider("https://api.avax-test.network/ext/bc/C/rpc")
  new Web3.providers.HttpProvider(
    "https://rpc-mumbai.maticvigil.com/v1/339698a173cf5372ac9dea4ddf41502a23e216da"
  )
);

const getContract = (abi: AbiItem[], address: string, signer: Web3) => {
  return new signer.eth.Contract(abi, address);
};

export const getTokenContract = (address: string) => {
  const signerOrProvider = new Web3(Web3.givenProvider) ?? simpleRpcProvider;
  return getContract(TokenABI as AbiItem[], address, signerOrProvider);
};


export const getVaultContract = (vault: string) => {
  const signerOrProvider = new Web3(Web3.givenProvider) ?? simpleRpcProvider;
  var abiItem: AbiItem[] = VaultetyABI as AbiItem[];
  var address: string = contracts.vaultETY3;
  switch(vault){
    case("ety5"):
      abiItem = VaultetyABI as AbiItem[];
      address = contracts.vaultETY5
      break;
    case("ety10"):
      abiItem = VaultetyABI as AbiItem[];
      address = contracts.vaultETY10
      break;
    case("btc"):
      abiItem = VaultbtcABI as AbiItem[];
      address = contracts.vaultBTC
      break;
    case("eth"):
      abiItem = VaultethABI as AbiItem[];
      address = contracts.vaultETH
      break;
  }
  return getContract(abiItem as AbiItem[], address, signerOrProvider);
};

export const isaOracleContract = (signer: Web3) => {
  const signerOrProvider = new Web3(Web3.givenProvider) ?? simpleRpcProvider;
  return getContract(
    IsaoracleABI as AbiItem[],
    contracts.isaOracle,
    signerOrProvider
  );
};

export const vaultBTCContract = (signer: Web3) => {
  const signerOrProvider = new Web3(Web3.givenProvider) ?? simpleRpcProvider;
  return getContract(
    VaultbtcABI as AbiItem[],
    contracts.vaultBTC,
    signerOrProvider
  );
};

export const vaultETHContract = (signer: Web3) => {
  const signerOrProvider = new Web3(Web3.givenProvider) ?? simpleRpcProvider;
  return getContract(
    VaultethABI as AbiItem[],
    contracts.vaultETH,
    signerOrProvider
  );
};

export const vaultETY3Contract = (signer: Web3) => {
  const signerOrProvider = new Web3(Web3.givenProvider) ?? simpleRpcProvider;
  return getContract(
    VaultetyABI as AbiItem[],
    contracts.vaultETY3,
    signerOrProvider
  );
};

export const vaultETY5Contract = (signer: Web3) => {
  const signerOrProvider = new Web3(Web3.givenProvider) ?? simpleRpcProvider;
  return getContract(
    VaultetyABI as AbiItem[],
    contracts.vaultETY5,
    signerOrProvider
  );
};

export const vaultETY10Contract = (signer: Web3) => {
  const signerOrProvider = new Web3(Web3.givenProvider) ?? simpleRpcProvider;
  return getContract(
    VaultetyABI as AbiItem[],
    contracts.vaultETY10,
    signerOrProvider
  );
};

interface IBonds {
  contracts: Array<Contract>;
  addresses: Array<string>;
}

export const AssetsContracts = (bond: string | null, signer: Web3): IBonds => {
  switch (bond) {
    case "eBTC": {
      const btcVault = vaultBTCContract(signer);
      const btc = getTokenContract(Tokens["btc"].address);
      const ebtc = getTokenContract(Tokens["ebtc"].address);
      return {
        contracts: [btcVault, btc, ebtc],
        addresses: [
          contracts.vaultBTC,
          Tokens["btc"].address,
          Tokens["ebtc"].address,
          Tokens["isa"].address,
        ],
      };
    }

    case "eETH": {
      const ethVault = vaultETHContract(signer);
      const eth = getTokenContract(Tokens["eth"].address);
      const eeth = getTokenContract(Tokens["eeth"].address);
      return {
        contracts: [ethVault, eth, eeth],
        addresses: [
          contracts.vaultETH,
          Tokens["eth"].address,
          Tokens["eeth"].address,
          Tokens["isa"].address,
        ],
      };
    }

    case "eTY3":
    case "eITY3": {
      const etyVault = vaultETY3Contract(signer);
      const eTY3 = getTokenContract(Tokens["eTY3"].address);
      const eITY3 = getTokenContract(Tokens["eITY3"].address);
      return {
        contracts: [etyVault, eTY3, eITY3],
        addresses: [
          contracts.vaultETY3,
          Tokens["eTY3"].address,
          Tokens["eITY3"].address,
          Tokens["isa"].address,
        ],
      };
    }

    case "eTY5":
    case "eITY5": {
      const etyVault = vaultETY5Contract(signer);
      const eTY5 = getTokenContract(Tokens["eTY5"].address);
      const eITY5 = getTokenContract(Tokens["eITY5"].address);
      return {
        contracts: [etyVault, eTY5, eITY5],
        addresses: [
          contracts.vaultETY5,
          Tokens["eTY5"].address,
          Tokens["eITY5"].address,
          Tokens["isa"].address,
        ],
      };
    }

    case "eTY10":
    case "eITY10": {
      const etyVault = vaultETY10Contract(signer);
      const eTY10 = getTokenContract(Tokens["eTY10"].address);
      const eITY10 = getTokenContract(Tokens["eITY10"].address);
      return {
        contracts: [etyVault, eTY10, eITY10],
        addresses: [
          contracts.vaultETY10,
          Tokens["eTY10"].address,
          Tokens["eITY10"].address,
          Tokens["isa"].address,
        ],
      };
    }

    default:
      break;
  }
  return { contracts: [], addresses: ["", "", "", ""] };
};

export const RouterContract = () => {
  const signerOrProvider = new Web3(Web3.givenProvider) ?? simpleRpcProvider;
  return getContract(
    RouterABI as AbiItem[],
    contracts.router,
    signerOrProvider
  );
};

export const FactoryContract = () => {
  const signerOrProvider = new Web3(Web3.givenProvider) ?? simpleRpcProvider;
  return getContract(
    FactoryABI as AbiItem[],
    contracts.router,
    signerOrProvider
  );
};

export const PairContract = (address:string)=>{
  const signerOrProvider = new Web3(Web3.givenProvider) ?? simpleRpcProvider;
  return getContract(
    PairABI as AbiItem[],
    address,
    signerOrProvider
  );
}