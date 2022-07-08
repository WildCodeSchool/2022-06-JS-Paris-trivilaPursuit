import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "@pages/UserContext.js";
import useSound from "use-sound";
import boopSfx from "@assets/herewego.mp3";
import CurrentContext from "./CurrentContext";
import PictureContext from "./PictureContext";

function Home() {
  const { name, setName } = useContext(UserContext);
  const { avatar } = useContext(PictureContext);
  const { currentAvatarId, setCurrentAvatarId } = useContext(CurrentContext);
  const styles = { border: "2px solid green" };
  const handleClick = (id) => {
    setCurrentAvatarId(id);
  };

  const [play] = useSound(boopSfx);

  return (
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
      <div>
        <div className="img-avatar" style={{ borderColor: "green" }}>
          <h3>Choisis ton Avatar :</h3>
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
        <Link to="../components/Accueil">
          <button type="button" className="play-btn" onClick={play}>
            {" "}
            Jouer{" "}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
