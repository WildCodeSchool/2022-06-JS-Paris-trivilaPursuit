import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function random(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export default function Categories() {
  const [categories, setcategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/questions")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        // console.log(result);
        const myCategories = Object.keys(result);
        // console.log(myCategories);
        setcategory(myCategories);
      });
  }, []);

  const arrColor = ["red", "blue", "green", "yellow", "pink", "grey"];
  return (
    <div className="categorie-choice">
      <h2>Choix des catégories : </h2>
      <div className="container-categories">
        {categories.length &&
          categories.map((category, index) => (
            <div key={category}>
              <Link to={`/Game/${category}`}>
                <button
                  type="button"
                  className="btncats"
                  style={{
                    backgroundColor: arrColor.filter((_, idx) => idx === index),
                  }}
                >
                  {/* <button type="button" className={`btncats ${ arrColor.filter((_, idx) => idx==index )}`}> */}
                  {category}
                </button>
              </Link>
            </div>
          ))}
        <Link to={`/Game/${categories[random(0, categories.length - 1)]}`}>
          <button type="button" className="btnCatsAleatoire">
            {" "}
            Questionnaire aléatoire
          </button>
        </Link>
      </div>
    </div>
  );
}
