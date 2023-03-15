import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";

import { AuthProvider } from "./context/AuthProvider";
import { SearchProvider } from "./context/SearchProvider";
import App from "./App";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <SearchProvider>
        <SnackbarProvider>
          <App />
        </SnackbarProvider>
      </SearchProvider>
    </AuthProvider>
  </BrowserRouter>
);
