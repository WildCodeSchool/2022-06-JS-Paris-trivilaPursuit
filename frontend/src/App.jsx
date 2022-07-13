import React, { useState, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import UserContext from "@pages/UserContext.js";
import CurrentContext from "@pages/CurrentContext";
import PictureContext from "@pages/PictureContext";
import Categories from "@components/Categories";
import Accueil from "@components/Accueil";
import Aleatoire from "@components/Aleatoire";
import Game from "./components/Game";
import Home from "./pages/Home";
import "./styles/header.css";
import "./styles/home.css";
import "./styles/accueil.css";
import "./styles/categories.css";

function App() {
  const avatar = [
    "/src/assets/face1-mini.jpg",
    "/src/assets/face3-mini.jpg",
    "/src/assets/face5-mini.jpg",
    "/src/assets/face6-mini.jpg",
    "/src/assets/face7-mini.jpg",
    "/src/assets/mini-bidon.jpg",
    "/src/assets/mini-didi.jpg",
    "/src/assets/mini-face-8.jpg",
  ];
  const [name, setName] = useState("");
  const valueName = useMemo(() => ({ name, setName }), [name, setName]);
  const [currentAvatarId, setCurrentAvatarId] = useState();
  const ValueCurrentAvatarId = useMemo(
    () => ({ currentAvatarId, setCurrentAvatarId }),
    [currentAvatarId, setCurrentAvatarId]
  );
  const valueAvatar = useMemo(() => ({ avatar }), [avatar]);
  return (
    <div>
      <div className="header">
        <h1 className="header-title">Teubé or</h1>
        <img src="src/assets/logo-simpson-mini.jpg" alt="aie" className="header-logo" />
        <h1 className="header-title">not Teubé</h1>
      </div>
      <PictureContext.Provider value={valueAvatar}>
        <CurrentContext.Provider value={ValueCurrentAvatarId}>
          <UserContext.Provider value={valueName}>
            <Routes>
              <Route path="*" element={<Home />} />
              <Route path="/components/Accueil" element={<Accueil />} />
              <Route path="/game/:categoryId" element={<Game />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/aleatoire" element={<Aleatoire />} />
            </Routes>
          </UserContext.Provider>
        </CurrentContext.Provider>
      </PictureContext.Provider>
    </div>
  );
}

export default App;
