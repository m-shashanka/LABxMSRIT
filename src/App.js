import React from "react";
import Header from "./Header.js";
import Question from "./Question.js";
import ListOfQues from "./ListOfQues.js";

function App(){
    return(
    <div> 
    <Header /> 
    <h1 style={{textAlign: "center"}}>Questions Mound</h1>
    {ListOfQues.map((question) => (
        <Question 
            id={question.id}
            question={question.value}
        />
    ))
    }
    </div>
    );
}

export default App;