// import Home from "@pages/Home";
import "./App.css";
// import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categories from "@components/Categories";
import Home from "@pages/Home";

function App() {
  // avec axios :
  // const [question, setQuestion] = useState("")
  // const getQuestionAsyncAwait = async () => {
  //   try {
  //     const promiseQuestion = await axios.get(
  //       'http://localhost:5000/questions'
  //     )
  //     console.log('question:', promiseQuestion.data)
  //     setQuestion(promiseQuestion.data)
  //   } catch (err) {
  //     console.log(err)
  //  }
  // }
  // getQuestionAsyncAwait();

  // useEffect(() => {
  //   fetch("http://localhost:5000/questions")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((result) => {
  //       console.log(result);
  //     });
  // }, []);

  return (
    <div className="App">
      <p>Teubé or not Teubé</p>

      <Router>
        <Home />
        <div>
          <Routes>
            <Route path="@pages/Home" element={<Home />} />

            {/* <Route path="/App" element={<App />} /> */}
            <Route path="/Categories" element={<Categories />} />
          </Routes>
        </div>
      </Router>

      {/* <button> Clique </button> */}
    </div>
  );
}

export default App;
