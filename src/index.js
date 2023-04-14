import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

// Internal Imports
import App from "./App";
import Jokes from "../src/components/Jokes";

// CSS
import "./css/normalize.css";
import "./css/main.css";

// Browser History
const history = ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/jokes" element={<Jokes />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
