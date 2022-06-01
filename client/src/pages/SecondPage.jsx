import React from "react";
import Question from "../components/Question/Question";
import Prerequisite from "../components/Prerequisite/Prerequisite";
import Objectives from "../components/Objectives/Objectives";
import InputOutput from "../components/InputOutput/InputOutput";
import IFrame from "../components/IFrame/IFrame";
import Questions from "../Data/Questions";
import DetailedQuestionData from "../Data/DetailedQuestionData";
import {useParams} from "react-router-dom";
import Code from "../components/Code/Code";

function SecondPage(){
  const {id} = useParams();

    return (
        <>
          {Questions.map((question) => 
            (id == question.id) ? <Question  id={question.id} question={question.value} /> : null
            )}

          {DetailedQuestionData.map(question => 
           (id == question.id) ? 
           [<Prerequisite arrayOfItems={question.PreReq} />,
           <Objectives text={question.Objective} />,
           <IFrame src={question.YouTubeLink} title={question.YouTubeLinkTitle} />,
           <InputOutput input={question.Input} output={question.Output} />,
           <Code code={question.Code} />
           ]
           :null
           )}
        </>
    );
}

export default SecondPage;