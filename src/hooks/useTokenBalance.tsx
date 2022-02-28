import Web3 from "web3";
import { useMemo, useState } from "react";
import { useTokenContract } from "./useContracts";
import { AddressZero } from "@ethersproject/constants";

export const useTokenBalance = (
  address: string,
  from: string | null | undefined
) => {
  const token = useTokenContract(address);
  const [balance, setBalance] = useState("0");
  return useMemo(() => {
    if (address.length === 0 || address === AddressZero || from === undefined) setBalance("0");
    else {
      token.methods
        .balanceOf(from)
        .call({ from })
        .then((_balance: string) => {
            setBalance(Web3.utils.fromWei(_balance,"ether"));
        });
    }
    return balance;
  }, [balance, address,from]);
};
