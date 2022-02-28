import { NETWORK_URLS } from '../constants/chainInfo'
import { NetworkConnector } from './NetworkConnector'
import { InjectedConnector } from '@web3-react/injected-connector'
import { SafeAppConnector } from '@gnosis.pm/safe-apps-web3-react'



const SUPPORTED_CHAIN_IDS = [43113, 43114, 80001]



export const injected = new InjectedConnector({ supportedChainIds: SUPPORTED_CHAIN_IDS })

export const network = new NetworkConnector({
  urls: NETWORK_URLS,
  defaultChainId: 43113,
})


export const gnosisSafe = new SafeAppConnector()
