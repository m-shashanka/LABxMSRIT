import React from "react";
import Header from "../components/Header/Header";
import Question from "../components/Question/Question";
import Questions from "../Data/Questions";
import { Link } from "react-router-dom";
import Filter from "../components/Filter/Filter";

function DSLab() {
  return (
    <>
      <Header />
      <h1 style={{textAlign: "center"}}>Questions Filtering will come here</h1>
      <Filter />
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