import { SupportedChainId } from './chains'



/**
 * These are the network URLs used by the interface when there is not another available source of chain data
 */
export const NETWORK_URLS: { [key in SupportedChainId]: string } = {
  [SupportedChainId.AVALANCHE]: `https://api.avax.network/ext/bc/C/rpc`,
  [SupportedChainId.AVALANCHE_FUJI]: `https://api.avax-test.network/ext/bc/C/rpc`,
  [SupportedChainId.MUMBAI]: `https://rpc-mumbai.maticvigil.com/v1/339698a173cf5372ac9dea4ddf41502a23e216da`,

}

/**
 * This is used to call the add network RPC
 */
interface AddNetworkInfo {
  readonly rpcUrl: string
  readonly nativeCurrency: {
    name: string // e.g. 'Goerli ETH',
    symbol: string // e.g. 'gorETH',
    decimals: number // e.g. 18,
  }
}

export enum NetworkType {
  L1,
  L2,
}

interface BaseChainInfo {
  readonly networkType: NetworkType
  readonly blockWaitMsBeforeWarning?: number
  // readonly docs: string
  // readonly bridge?: string
  readonly explorer: string
  // readonly infoLink: string
  // readonly logoUrl: string
  // readonly label: string
  // readonly helpCenterUrl?: string
  readonly addNetworkInfo: AddNetworkInfo
}

export interface ChainInfo extends BaseChainInfo {
  readonly networkType: NetworkType.L1
}


export type ChainInfoMap = { readonly [chainId: number]: ChainInfo  } & 
  { readonly [chainId in SupportedChainId]: ChainInfo }

export const CHAIN_INFO: ChainInfoMap = {
  [SupportedChainId.AVALANCHE]: {
    networkType: NetworkType.L1,
    // docs: 'https://docs.uniswap.org/',
    explorer: 'https://snowtrace.io/',
    // infoLink: 'https://info.uniswap.org/#/',
    // label: 'Ethereum',
    // logoUrl: ethereumLogoUrl,
    addNetworkInfo: {
      nativeCurrency: { name: 'AVAX', symbol: 'AVAX', decimals: 18 },
      rpcUrl: NETWORK_URLS[SupportedChainId.AVALANCHE],
    },
  },
  [SupportedChainId.AVALANCHE_FUJI]: {
    networkType: NetworkType.L1,
    explorer: 'https://testnet.snowtrace.io/',
    addNetworkInfo: {
      nativeCurrency: { name: 'AVAX', symbol: 'AVAX', decimals: 18 },
      rpcUrl: NETWORK_URLS[SupportedChainId.AVALANCHE_FUJI],
    },
  },
  [SupportedChainId.MUMBAI]: {
    networkType: NetworkType.L1,
    explorer: 'https://mumbai.polygonscan.com',
    addNetworkInfo: {
      nativeCurrency: { name: 'MUMBAI', symbol: 'MUMBAI', decimals: 18 },
      rpcUrl: NETWORK_URLS[SupportedChainId.MUMBAI],
    },
  }
}
