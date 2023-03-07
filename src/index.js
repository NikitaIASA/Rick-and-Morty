import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { SearchProvider } from "./context/SearchProvider";
import { CharacterProvider } from "./context/CharactersProvider";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CharacterProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </CharacterProvider>
    </BrowserRouter>
  </React.StrictMode>
);
