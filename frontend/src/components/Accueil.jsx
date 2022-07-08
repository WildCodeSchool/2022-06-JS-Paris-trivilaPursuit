import { Link } from "react-router-dom";
import UserContext from "@pages/UserContext.js";
import React, { useContext } from "react";

function Accueil() {
  const { name } = useContext(UserContext);
  return (
    <div className="welcome-bloc">
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
