import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { HashRouter } from "react-router-dom";
import React from "react";
import GlobalStyles from "./styles/GlobalStyle.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  
  <React.StrictMode>
    <HashRouter basename="/">
      <GlobalStyles />  
      <App />
    </HashRouter>
  </React.StrictMode>
);
