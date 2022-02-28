import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { css, Global, Theme } from "@emotion/react";
import Web3ReactManager from './components/Web3ReactManager'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import routes from "./routes";

const App: React.FC = () => {
  return (
    <div className="App">
      <Web3ReactManager >
      <Suspense fallback>
      <Global styles={globalStyles} />
      <Routes>
        {routes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
      <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
      </Suspense>
      </Web3ReactManager>
    </div>
  );
};

export default App;

const globalStyles = (theme: Theme) => css`
  body {
    color: ${theme.color.primary};
  }

  /* Text Helper Classes */
  .text-primary {
    color: ${theme.color.primary} !important;
  }
  .text-secondary {
    color: ${theme.color.secondary} !important;
  }
  .text-disabled {
    color: ${theme.color.disabled} !important;
  }

  /* Background helper classes */
  .bg-primary {
    background-color: ${theme.background.primary} !important;
  }
  .bg-secondary {
    background-color: ${theme.background.secondary} !important;
  }
  .bg-tertiary {
    background-color: ${theme.background.tertiary} !important;
  }

  /* cursor utils */
  .cursor-pointer {
    cursor: pointer;
  }
`;
