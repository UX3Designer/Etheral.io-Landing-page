import { useCallback } from "react";
import { useApprove } from "./useApprove";
import { useAllowance } from "./useAllowance";
import contracts from "../constants/contracts";
import { useWeb3React } from "@web3-react/core";
import { useTokenContract } from "./useContracts";
import { MaxUint256 } from "@ethersproject/constants";
import { RouterContract } from "../utils/contractHelper";

export const useSwap = (tokenA: string, tokenB: string) => {
  const { account } = useWeb3React();
  const router = RouterContract();
  const allowed = useAllowance(account as string, contracts.router);
  const isApproved = useApprove(tokenA);
  const token = useTokenContract(tokenB);

  return useCallback(
    async (isApproved: boolean, to: string): Promise<void> => {
      try {
        console.log(router.methods);
      } catch (error) {
        console.log(error);
      }
    },
    [tokenA, tokenB, account]
  );
};
