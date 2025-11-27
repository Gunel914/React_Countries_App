import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CountriesProvider } from "./Context/CountriesContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <BrowserRouter>
      <CountriesProvider>
        <App />
      </CountriesProvider>
    </BrowserRouter>
  
);