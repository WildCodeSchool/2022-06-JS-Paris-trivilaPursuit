import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Game() {
  const params = useParams();
  // console.log("&&&&&", params);
  // const [categories, setcategory] = useState([]);
  // const [questions, setquestion] = useState([]);
  const [infos, setInfos] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/questions")
      .then((res) => res.json())
      .then((data) => {
        setInfos(data);
      });
    // .catch((err) => {
    //   console.log(err);
    // });
  }, []);

  // console.log("params: ", params.categoryId);
  // console.log(infos);

  return (
    infos &&
    infos.animaux && (
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
          {/* )  */}
          <div className="question-section">
            <div className="question-count">
              {/* <span>Question 1</span>{questions.length} */}
            </div>
            <div className="question-text">
              {infos[params.categoryId][0].question}
            </div>
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
        </div>
      </div>
    )
  );
}
