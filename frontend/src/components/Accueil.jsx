import { Link } from "react-router-dom";

function Accueil() {
  return (
    <div className="App">
      <p>Teubé or not Teubé</p>
      <Link to="/categories">
        <button type="button"> Jouer </button>
      </Link>

      {/* <button> Clique </button> */}
    </div>
  );
}

export default Accueil;
