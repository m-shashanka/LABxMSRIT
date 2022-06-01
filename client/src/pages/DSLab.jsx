import React from "react";
import Header from "../components/Header/Header";
import Question from "../components/Question/Question";
import Questions from "../Data/Questions";
import { Link } from "react-router-dom";

function DSLab() {
  return (
    <>
      <Header />
      <h1 style={{textAlign: "center"}}>Questions Filtering will come here</h1>
      {Questions.map((question) => (
        <Link to={`/dslab/question/${question.id}`} style={{all: 'unset'}} key={question.id}>
          <Question 
            id={question.id}
            question={question.value}
          />
        </Link>
      ))
      }
    </>
  );
}

export default DSLab;