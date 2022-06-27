import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Game() {
  const params = useParams();
  // console.log("&&&&&", params);
  // const [categories, setcategory] = useState([]);
  // const [questions, setquestion] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/questions").then((response) => {
      return response.json();
    });
    // .then((result) => {
    // console.log(result);
    // const myCategories = Object.keys(result);
    // const myObjects = (Object.values(result));
    // const myQuestion = result.animaux[0].question;
    // console.log(myQuestion);
    // console.log(myCategories);
    // setcategory(myCategories);
  });
  // }
  // , [])
  // ;

  return (
    <div className="question-section">
      <div className="Game">{params.categoryId}</div>
      <h2>Let's play ! : </h2>

      <div className="app">
        {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
        {/* {false ? ( */}
        <div className="score-section">
          You scored 1 out of {/* {questions.length} */}
        </div>
        {/* )  */}: (
        <div className="question-section">
          <div className="question-count">
            <span>Question 1</span>/{/* {questions.length} */}
          </div>
          <div className="question-text">question ici</div>
        </div>
        <div className="answer-section">
          <button type="button" className="btnquestion">
            Answer 1
          </button>
          <button type="button" className="btnquestion">
            Answer 2
          </button>
          <button type="button" className="btnquestion">
            Answer 3
          </button>
          <button type="button" className="btnquestion">
            Answer 4
          </button>
        </div>
        ) {/* } */}
      </div>
    </div>
  );
}
