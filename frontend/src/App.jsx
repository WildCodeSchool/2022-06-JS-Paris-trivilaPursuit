import React, { useState, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import UserContext from "@pages/UserContext.js";
import Categories from "@components/Categories";
import Accueil from "@components/Accueil";
import Game from "./components/Game";
import Home from "./pages/Home";
import "./styles/header.css";
import "./styles/home.css";
import "./styles/accueil.css";
import "./styles/categories.css";

function App() {
  const [name, setName] = useState("");
  const valueName = useMemo(() => ({ name, setName }), [name, setName]);
  return (
    <div>
      <div className="header">
        <h1 className="header-title">Teubé or</h1>
        <img src="src/assets/aie.jpg" alt="aie" className="header-logo" />
        <h1 className="header-title">not Teubé</h1>
      </div>
      <UserContext.Provider value={valueName}>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/components/Accueil" element={<Accueil />} />
          <Route path="/game/:categoryId" element={<Game />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
