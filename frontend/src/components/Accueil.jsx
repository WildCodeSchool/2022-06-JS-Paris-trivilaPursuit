import { Link } from "react-router-dom";
import UserContext from "@pages/UserContext.js";
import CurrentContext from "@pages/CurrentContext";
import PictureContext from "@pages/PictureContext";
import React, { useContext } from "react";

function Accueil() {
  const { name } = useContext(UserContext);
  const { avatar } = useContext(PictureContext);
  const { currentAvatarId } = useContext(CurrentContext);
  return (
    <div className="welcome-bloc">
      <div className="welcome">
        <h1>
          Salut
          {name && ` ${name}`}
        </h1>
        <img src={avatar[currentAvatarId]} alt="" className="welcome-avatar" />
      </div>
      <div className="welcome-btn">
      <Link to="/categories">
        <button type="button"> Catégories </button>
      </Link>
      <Link to="/aleatoire">
        <button type="button">Questions aléatoires</button>
      </Link>
      </div>
    </div>
  );
}

export default Accueil;
