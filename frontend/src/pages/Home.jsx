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
    <div className="div-play-btn">
      <div className="home-bloc">
        <form>
          <br />
          <label htmlFor="name">
            <h2 className="title-bloc">Entrez un pseudo</h2>
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
        <div className="bloc-avatar" style={{ borderColor: "green" }}>
          <h2>Choisis ton Avatar :</h2>
          {avatar.map((image, id) => {
            return (
              <button
                style={currentAvatarId === id ? styles : null}
                onClick={() => handleClick(id)}
                key={image}
                type="button"
                className="btn-img-avatar"
              >
                <img key={image} src={image} alt="" className="img-avatar" />
              </button>
            );
          })}
        </div>
      </div>
      <Link to="../components/Accueil">
        <button type="button" className="play-btn" onClick={play}>
          {" "}
          Jouer{" "}
        </button>
      </Link>
    </div>
  );
}

export default Home;
