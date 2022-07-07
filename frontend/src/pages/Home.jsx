import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "@pages/UserContext.js";

function Home() {
  const { name, setName } = useContext(UserContext);

  return (
    <div>
      <form>
        <br />
        <label htmlFor="name">
          Type your Name:
          <br />
          <input
            id="name"
            type="text"
            placeholder="James Bond"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
      </form>
      <Link to="../components/Accueil">
        <button type="button"> Jouer </button>
      </Link>
    </div>
  );
}

export default Home;
