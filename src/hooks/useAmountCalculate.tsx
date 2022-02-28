import Web3 from "web3";
import { useMemo, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { useVaultContract } from "./useContracts";
import { AddressZero } from "@ethersproject/constants";

export const useAmountCalculate = (
  vault: string, 
  amount: any
) => {
  const { account } = useWeb3React();
  const vaultContract = useVaultContract(vault);
  let tokensToMint: any;
  return useMemo(() => {
        vaultContract.methods
        .getLatestPrices()
        .call({ from: account })
        .then((isaPerUSD : any ) => {
            let response =  JSON.parse(JSON.stringify(isaPerUSD))
            return response[0];
        })
        .then((result: any ) => {
            console.log('result*****************************')

            console.log(result)
            
            let amountBN = Web3.utils.toBN(amount)
            let priceBN = Web3.utils.toBN(result)

            tokensToMint = amountBN.mul(priceBN)

            // tokensToMint = Web3.utils.toBN(price).mul(Web3.utils.toBN(amountHex))
        });
    return tokensToMint;
  }, []);
};
