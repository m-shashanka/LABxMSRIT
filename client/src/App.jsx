import Header from "./components/Header/Header";
import Question from "./components/Question/Question";
import Questions from "./Data/Questions";

function App() {

  return (
    <>
      <Header />
      <h1 style={{textAlign: "center"}}>Questions Filtering will come here</h1>
      {Questions.map((question) => (
          <Question 
              id={question.id}
              question={question.value}
          />
      ))
      }
    </>
  );
}

export default App;