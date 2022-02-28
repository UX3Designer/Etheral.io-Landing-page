import { useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import { useTokenContract } from "./useContracts";
import { MaxUint256 } from "@ethersproject/constants";

export const useApprove = (tokenAddress: string) => {
	const { account } = useWeb3React();
	const token = useTokenContract(tokenAddress);

	return useCallback(
		async (isApproved: boolean,to:string): Promise<void> => {
			try {
				if (!isApproved) {
					const tx = await token.methods
						.approve(to, MaxUint256.toString())
						.send({ from: account });
					console.log(tx);
				}
			} catch (error) {
				console.log(error)
			}
		},
		[tokenAddress,account]
	);
};
