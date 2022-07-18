import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function Game() {
  const params = useParams();
  const [infos, setInfos] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(true);

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
    const nextQuestion = currentQuestion + 1;
    const theEvent = event;
    if (nextQuestion <= 10 && score < 10) {
      if (theEvent.target.value === `${infos[currentQuestion].réponse}`) {
        theEvent.target.style.backgroundColor = "green";
        theEvent.target.style.borderColor = "green";
        setScore(score + 1);
      } else if (
        theEvent.target.value !== `${infos[currentQuestion].réponse}`
      ) {
        theEvent.target.style.backgroundColor = "red";
        theEvent.target.style.borderColor = "red";
      }
    }
    if (nextQuestion === 10) setShowScore(false);

    if (nextQuestion < 10) {
      setTimeout(() => {
        setCurrentQuestion(nextQuestion);
      }, "350");
    }
  };

  const resultat = () => {
    if (score < 4)
      return (
        <>
          <iframe
            title="giphy"
            src="https://giphy.com/embed/Q1aRmd8e90WIw"
            width="200"
            height="200"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          />
          <p> Tu es Teubé </p>
        </>
      );

    if (score < 7)
      return (
        <>
          <iframe
            title="giphy2"
            src="https://giphy.com/embed/SqNL0UQbUC1SYzQ5xN"
            width="200"
            height="200"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          />
          <p> Tu es un peu Teubé </p>
        </>
      );

    if (score < 10)
      return (
        <>
          <iframe
            title="giphy3"
            src="https://giphy.com/embed/q1mHcB8wOCWf6"
            width="200"
            height="200"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          />
          <p> Tu n'es pas trop Teubé </p>
        </>
      );
    return (
      <>
        <iframe
          title="giphy4"
          src="https://giphy.com/embed/eMu0803X2zkWY"
          width="200"
          height="200"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        />
        <p> Tu n'es pas Teubé </p>
      </>
    );
  };
  // console.log("params: ", params.categoryId);
  // console.log(typeof(infos));

  return (
    infos &&
    infos.length && (
      <>
        <div className="question-section">
          <div className="game">{params.categoryId}</div>

          <div className="app">
            {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
            {/* {false ? ( */}
            {showScore ? (
              <>
                <div className="question-section2">
                  <div className="question-count" />
                  Question : {currentQuestion + 1} /10
                </div>
                <div className="question-text">
                  {infos[currentQuestion].question}
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
                  <div className="anecdote">
                    {infos[currentQuestion].anecdote}
                  </div>
                </div>
              </>
            ) : (
              <div className="resultat">
                <h1> Ton score : {score} /10 </h1>
                {/* <iframe
                  title="giphy"
                  src="https://giphy.com/embed/Q1aRmd8e90WIw"
                  width="200"
                  height="200"
                  frameBorder="0"
                  className="giphy-embed"
                  allowFullScreen
                /> */}
                <h1> {resultat()} </h1>
              </div>
            )}
          </div>
        </div>
        <div className="container-btn">
          <button type="button" className="btn-back">
            <Link to="/components/Accueil">Retour à l'Accueil !</Link>
          </button>
        </div>
      </>
    )
  );
}
