// import Home from "@pages/Home";
import "./App.css";
// import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categories from "@components/Categories";
import Home from "@pages/Home";

function App() {
  
  return (
    <div className="App">
      <p>Teubé or not Teubé</p>

      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/App" element={<App />} /> */}
            <Route path="/Categories" element={<Categories />} />
          </Routes>
        </div>
      </Router>

      {/* <button> Clique </button> */}
    </div>
  );
}

export default App;
