import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Game() {
  const params = useParams();
  // console.log("&&&&&", params);
  // const [categories, setcategory] = useState([]);
  const [infos, setInfos] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  function shuffledArray(array) {
    // console.log(arrayToShuffle);
    const arrayToShuffle = array;
    for (let i = arrayToShuffle.length - 1; i > 0; i -= 1) {
      const randomPosition = Math.floor(Math.random() * (i + 1));
      const temp = arrayToShuffle[i];
      arrayToShuffle[i] = arrayToShuffle[randomPosition];
      arrayToShuffle[randomPosition] = temp;
    }
    return arrayToShuffle;
  }

  useEffect(() => {
    fetch("http://localhost:5000/questions")
      .then((res) => res.json())
      .then((data) => {
        setInfos(shuffledArray(data[params.categoryId]));
      });
    // .catch((err) => {
    //   console.log(err);
    // });
  }, []);
  const handleAnswerButtonClick = (event) => {
    // console.log(event.target.value)
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion <= 10 && score < 10) {
      if (event.target.value === `${infos[currentQuestion].réponse}`) {
        setScore(score + 1);
      }
      if (nextQuestion < 10) {
        setCurrentQuestion(nextQuestion);
      }
    }
  };

  // console.log("params: ", params.categoryId);
  // console.log(typeof(infos));

  return (
    infos &&
    infos.length && (
      <div className="question-section">
        <div className="Game">{params.categoryId}</div>
        <h2>Let's play ! : </h2>

        <div className="app">
          {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
          {/* {false ? ( */}
          <div className="score-section">
            You scored : {score} /10 {/* {questions.length} */}
          </div>
          {/* )  */}
          <div className="question-section">
            Question : {currentQuestion + 1} /10
            <div className="question-count" />
            <div className="question-text">
              {infos[currentQuestion].question}
            </div>
          </div>
          <div className="answer-section">
            {infos[currentQuestion].propositions.map((proposition) => (
              <button
                onClick={handleAnswerButtonClick}
                key={proposition}
                type="button"
                className="btnquestion"
                value={proposition}
              >
                {proposition}
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  );
}
