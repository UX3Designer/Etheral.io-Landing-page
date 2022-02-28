import { useMemo } from "react";
import { getTokenContract } from "../utils/contractHelper";
import { getVaultContract } from "../utils/contractHelper";


export const useTokenContract = (address: string) => {
  return useMemo(() => getTokenContract(address), [address]);
};



export const useVaultContract = (vault: string) => {
  return useMemo(() => getVaultContract(vault), [vault]);
};