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
      <img src={avatar[currentAvatarId]} alt="" />
      <h1 className="welcome">
        Hello <br />
        {name && ` ${name}`}
      </h1>
      <Link to="/categories">
        <button type="button"> Catégories </button>
      </Link>
    </div>
  );
}

export default Accueil;
