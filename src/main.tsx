import { BrowserRouter } from "react-router-dom";
import { i18nInit } from "@/app/core/i18n";
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/js/bootstrap.min.js";
import "@/main.scss";

import App from "@/app/app";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

i18nInit();
