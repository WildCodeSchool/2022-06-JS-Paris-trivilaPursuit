import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "@pages/UserContext.js";

function Home() {
  const avatar = [
    "/src/assets/face1-mini.jpg",
    "/src/assets/face3-mini.jpg",
    "/src/assets/face5-mini.jpg",
    "/src/assets/face6-mini.jpg",
    "/src/assets/face7-mini.jpg",
    "/src/assets/mini-bidon.jpg",
    "/src/assets/mini-didi.jpg",
  ];

  const { name, setName } = useContext(UserContext);
  const [currentAvatarId, setCurrentAvatarId] = useState();
  const styles = { border: "2px solid green" };
  const handleClick = (id) => {
    setCurrentAvatarId(id);
  };

  return (
    <div>
      <div style={{ borderColor: "green" }}>
        Choisis ton Avatar :
        {avatar.map((image, id) => {
          return (
            <button
              style={currentAvatarId === id ? styles : null}
              onClick={() => handleClick(id)}
              key={image}
              type="button"
            >
              <img key={image} src={image} alt="" />
            </button>
          );
        })}
      </div>

      <div className="home-bloc">
        <form>
          <br />
          <label htmlFor="name">
            <h3>Entrez un pseudo</h3>
            <br />
            <input
              id="name"
              type="text"
              maxLength="20"
              placeholder="Teubé"
              value={name}
              className="pseudo"
              onChange={(event) => setName(event.target.value)}
            />
          </label>
        </form>
        <Link to="../components/Accueil">
          <button type="button" className="play-btn">
            {" "}
            Jouer{" "}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
