import Web3 from "web3";
import { useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import { useTokenContract } from "./useContracts";
import { getTokenContract } from "../utils/contractHelper";

export const useTokenName = (tokenAddress: string) => {
  const { account } = useWeb3React();
  const token = useTokenContract(tokenAddress);
  return useCallback(async (): Promise<any> => {
    const result = await token.methods.name().call({ from: account });
    return result;
  }, [account, token.methods]);
};

export const useTokenSymbol = () => {
  const { account } = useWeb3React();
  return useCallback(async (tokenAddress: string): Promise<string> => {
    try {
      let symbol = "";
      if (Web3.utils.isAddress(tokenAddress)) {
        const token = getTokenContract(tokenAddress);
        symbol = await token.methods.symbol().call({ from: account });
        return symbol;
      }
      return symbol;
    } catch (error) {
      console.log(error);
      return "";
    }
  }, []);
};
