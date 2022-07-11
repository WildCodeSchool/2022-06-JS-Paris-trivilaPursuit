import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Aleatoire() {
  const [infos, setInfos] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(true);

  function shuffledArray(newArray) {
    const arrayToShuffle = newArray;
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
        const newData = Object.values(data);
        let newArray = [];
        newData.forEach((el) => {
          newArray = newArray.concat(el);
        });
        setInfos(shuffledArray(newArray));
      });
  }, []);
  // Je veux renvoyer une question de façon aléatoire provenant de mon API
  // data est un objet qui contient des tableaux d'objets
  // Je souhaite que data devienne un seul et même tableau d'objets qui contient les questions de manière aléatoire
  // [] [] => [   ] pour ça, on utilise la méthode concat() et object.values()

  const handleAnswerButtonClick = (event) => {
    const nextQuestion = currentQuestion + 1;
    const theEvent = event;
    if (nextQuestion <= 10 && score < 10) {
      if (theEvent.target.value === `${infos[currentQuestion].réponse}`) {
        theEvent.target.style.backgroundColor = "green + 20";
        theEvent.target.style.borderColor = "green";
        setScore(score + 1);
      } else if (
        theEvent.target.value !== `${infos[currentQuestion].réponse}`
      ) {
        theEvent.target.style.backgroundColor = "red + 20";
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
    if (score < 4) return "Teubé";
    if (score < 7) return "Un peu Teubé";
    if (score < 10) return "Pas trop Teubé";
    return "Pas Teubé";
  };
  // console.log("params: ", params.categoryId);
  // console.log(typeof(infos));

  return (
    infos &&
    infos.length && (
      <div className="question-section">
        <div className="Game">Questions aléatoires</div>

        <div className="app">
          {/* HINT: replace "false" with logic to display the 
          score when the user has answered all the questions */}
          {/* {false ? ( */}
          {showScore ? (
            <>
              <div className="question-section">
                Question : {currentQuestion + 1} /10
                <div className="question-count" />
                <div className="question-text">
                  {infos[currentQuestion].question}
                </div>
                <div>{infos[currentQuestion].anecdote}</div>
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
            </>
          ) : (
            <div>
              <h1> Ton score : {score} /10 </h1>
              <h2> Tu es : {resultat()} </h2>
            </div>
          )}
        </div>
        <button type="button" className="btn">
          <Link to="/Categories">Retour aux Teubégories !</Link>
        </button>
      </div>
    )
  );
}
