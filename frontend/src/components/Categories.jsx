import { useState, useEffect } from "react";

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
      {categories.length &&
        categories.map((category) => <button type="button">{category}</button>)}
    </div>
  );
}
