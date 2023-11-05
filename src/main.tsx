import "@/main.scss";
import "bootstrap/dist/js/bootstrap.min.js";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "@/app/app";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
