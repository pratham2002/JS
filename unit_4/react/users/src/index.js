import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import AuthContextProvider from "./context/AuthContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </StrictMode>,
  rootElement
);
