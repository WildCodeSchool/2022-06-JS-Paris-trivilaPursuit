import React from "react";
import ReactDOM from "react-dom/client";
import Categories from "@components/Categories";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Game from "./components/Game";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/game/:categoryId" element={<Game />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
