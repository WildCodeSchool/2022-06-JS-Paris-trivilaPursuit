import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Game() {
  const params = useParams();
  // console.log("&&&&&", params);
  // const [categories, setcategory] = useState([]);
  // const [questions, setquestion] = useState([]);
  const [infos, setInfos] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);

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
  const handleAnswerButtonClick = () => {
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
  };
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
              {infos[params.categoryId].length}
            </div>
            <div className="question-text">
              {infos[params.categoryId][currentQuestion].question}
            </div>
          </div>
          <div className="answer-section">
            {infos[params.categoryId][currentQuestion].propositions.map(
              (proposition) => (
                <button
                  onClick={handleAnswerButtonClick}
                  key={proposition}
                  type="button"
                  className="btnquestion"
                >
                  {proposition}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    )
  );
}
