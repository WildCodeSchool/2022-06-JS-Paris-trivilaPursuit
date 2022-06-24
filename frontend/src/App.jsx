// import Home from "@pages/Home";
import "./App.css";
// import { useEffect } from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <p>Teubé or not Teubé</p>

      <Link to="/categories">
        <button type="button"> Categories </button>
      </Link>

      {/* <button> Clique </button> */}
    </div>
  );
}

export default App;
