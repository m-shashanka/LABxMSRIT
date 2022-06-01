import React,{useState} from "react";
import Header from "../components/Header/Header";
import Question from "../components/Question/Question";
import Questions from "../Data/Questions";
import { Link } from "react-router-dom";

function FirstPage() {

  // function handleClick(event){
  //   console.log(event.target.id);
  // }
  return (
    <>
      <Header />
      <h1 style={{textAlign: "center"}}>Questions Filtering will come here</h1>
      {Questions.map((question) => (
         <Link to={`/main/${question.id}`} style={{all: 'unset'}} key={question.id}>
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

export default FirstPage;
