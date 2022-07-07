import { Link } from "react-router-dom";
import UserContext from "@pages/UserContext.js";
import React, { useContext } from "react";

function Accueil() {
  const { name } = useContext(UserContext);
  return (
    <div className="App">
      <h1>Hello {name && ` ${name}`}</h1>
      <p>Teubé or not Teubé</p>
      <Link to="/categories">
        <button type="button"> categories </button>
      </Link>
    </div>
  );
}

export default Accueil;
