import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

  return (
    <div>
      <h2>Choix des catégories : </h2>
      <div className="containercategories">
        {categories.length &&
          categories.map((category) => (
            <div key={category}>
              <Link to={`/Game/${category}`}>
                <button type="button" className="btncats">
                  {category}
                </button>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
