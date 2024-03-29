import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import boopSfx1 from "@assets/Homer_-_D_OH.mp3";
import boopSfx2 from "@assets/c.mp3";
import useSound from "use-sound";
import boopSfx3 from "@assets/Wouhou.mp3";

export default function Aleatoire() {
  const [infos, setInfos] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(true);
  const [play] = useSound(boopSfx1);
  const [play2] = useSound(boopSfx2);
  const [play3] = useSound(boopSfx3);
  const [timer, setTimer] = useState(15);
  const [showTimer, setShowTimer] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
      if (timer === 0) {
        if (currentQuestion !== 9) {
          setCurrentQuestion(currentQuestion + 1);
          setTimer(15);
        } else {
          setShowTimer(false);
          setShowScore(false);
          clearInterval(interval);
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

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

  const devEnvironement = import.meta.env.DEV;

  useEffect(() => {
    fetch(
      devEnvironement
        ? "http://localhost:5000/questions"
        : "https://trivial-pursuit-milkode.herokuapp.com/questions"
    )
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
        theEvent.target.style.backgroundColor = "green";
        theEvent.target.style.borderColor = "green";
        play3();
        setScore(score + 1);
      } else if (
        theEvent.target.value !== `${infos[currentQuestion].réponse}`
      ) {
        theEvent.target.style.backgroundColor = "red";
        theEvent.target.style.borderColor = "red";
        play2();
      }
    }
    if (nextQuestion === 10) {
      setShowScore(false);
      setShowTimer(false);
    }

    if (nextQuestion < 10) {
      setTimeout(() => {
        setTimer(15);
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
          <p className="yourscore"> Tu es Teubé </p>
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
          <p className="yourscore"> Tu es un peu Teubé </p>
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
          <p className="yourscore"> Tu n'es pas trop Teubé </p>
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
        <p className="yourscore"> Tu n'es pas Teubé </p>
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
          <div className="btn-croix">
            <button type="button" className="croix" onClick={play}>
              <Link to="/"> ✖️ </Link>
            </button>
          </div>
          <div className="game">Questions aléatoires</div>
          {showTimer ? <div> {timer} </div> : null}
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
                <h1 className="score"> Ton score : {score} /10 </h1>
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
