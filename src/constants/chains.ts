export enum SupportedChainId {
    AVALANCHE_FUJI = 43113,
    AVALANCHE = 43114,
    MUMBAI = 80001
}


export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(SupportedChainId).filter(
    (id) => typeof id === "number"
) as SupportedChainId[]



export const SUPPORTED_GAS_ESTIMATE_CHAIN_IDS = [SupportedChainId.AVALANCHE, SupportedChainId.AVALANCHE_FUJI,SupportedChainId.MUMBAI]