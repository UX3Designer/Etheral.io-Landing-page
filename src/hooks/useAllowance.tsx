import Web3 from "web3";
import { useMemo, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { useTokenContract } from "./useContracts";
import { AddressZero } from "@ethersproject/constants";

export const useAllowance = (
  address: string,
  to: string | null | undefined
) => {
  const { account } = useWeb3React();
  const token = useTokenContract(address);
  const [isApproved, setIsApproved] = useState(false);
  return useMemo(() => {
    if (address.length === 0 || address === AddressZero || account === undefined) setIsApproved(false);
    else {
      token.methods
        .allowance(account, to)
        .call({ from: account })
        .then((_allowance: string) => {
          if (Web3.utils.toBN(_allowance).eq(Web3.utils.toBN(0)))
            setIsApproved(false);
          else setIsApproved(true);
        });
    }
    return isApproved;
  }, [isApproved, address, account]);
};
