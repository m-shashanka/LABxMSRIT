import React from "react";
import Header from "../components/Header/Header";
import Question from "../components/Question/Question";
import Questions from "../Data/Questions";
import { Link } from "react-router-dom";
import Filter from "../components/Filter/Filter";
import TopBar from "../components/TopBar/TopBar";

function DSLab() {
  return (
    <>
      <Header />
      {/* <Filter /> */}
      {/* <TopBar /> */}
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