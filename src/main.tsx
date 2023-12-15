import "@/core/i18n";
import "@/main.scss";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter } from "react-router-dom";
import { DocumentProvider } from "./doc";
import App from "@/app";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DocumentProvider
      children={
        <BrowserRouter>
          <App />
        </BrowserRouter>
      }
    ></DocumentProvider>
  </React.StrictMode>,
);
