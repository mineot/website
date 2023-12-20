import "@/core/i18n";
import "@/main.scss";
import "bootstrap/dist/js/bootstrap.min.js";

import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { DocumentProvider } from "./doc";

import App from "@/app";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DocumentProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DocumentProvider>
  </React.StrictMode>,
);
