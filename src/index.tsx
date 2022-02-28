import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {createWeb3ReactRoot, Web3ReactProvider} from "@web3-react/core"

import "bootstrap/dist/css/bootstrap.min.css";
import { NetworkContextName } from './constants/misc'

import App from "./App";
import ThemeProvider from "./components/ThemeProvider";
import { store } from "./redux/store";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import getLibrary from './utils/getLibrary'


const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)
if (!!window.ethereum) {
  window.ethereum.autoRefreshOnNetworkChange = false
}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
        <Web3ReactProvider getLibrary={getLibrary}>
          <Web3ProviderNetwork getLibrary={getLibrary}>
           <App />
          </Web3ProviderNetwork>
        </Web3ReactProvider >


        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
