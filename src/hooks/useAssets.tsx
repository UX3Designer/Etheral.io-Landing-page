import { useMemo } from "react";
import { useWeb3React } from "@web3-react/core";
import { AssetsContracts } from "../utils/contractHelper";

export const useAssetsContracts = (name: string | null) => {
  const { library } = useWeb3React();
  return useMemo(() => AssetsContracts(name, library), [name]);
};