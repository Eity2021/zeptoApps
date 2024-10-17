import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import AppContextZepto from "./AppContextZepto";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextZepto>
        <App />
      </AppContextZepto>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
