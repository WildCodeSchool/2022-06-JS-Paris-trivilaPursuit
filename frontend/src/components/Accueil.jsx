import { Link } from "react-router-dom";
import UserContext from "@pages/UserContext.js";
import CurrentContext from "@pages/CurrentContext";
import PictureContext from "@pages/PictureContext";
import React, { useContext } from "react";
import boopSfx from "@assets/Homer_-_D_OH.mp3";
import useSound from "use-sound";

function Accueil() {
  const { name } = useContext(UserContext);
  const { avatar } = useContext(PictureContext);
  const { currentAvatarId } = useContext(CurrentContext);
  const [play] = useSound(boopSfx);
  return (
    <div className="welcome-bloc">
      <div className="btn-croix">
        <button type="button" className="croix" onClick={play}>
          <Link to="/"> ✖️ </Link>
        </button>
      </div>
      <div className="welcome">
        <h1>
          Salut
          {name && ` ${name}`}
        </h1>
        <img src={avatar[currentAvatarId]} alt="" className="welcome-avatar" />
      </div>
      <div className="welcome-btn">
        <Link to="/categories">
          <button className="play2-btn" type="button">
            {" "}
            Catégories{" "}
          </button>
        </Link>
        <Link to="/aleatoire">
          <button className="play2-btn" type="button">
            Questions aléatoires
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Accueil;
