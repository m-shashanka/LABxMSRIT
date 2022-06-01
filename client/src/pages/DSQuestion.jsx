import React from "react";
import Question from "../components/Question/Question";
import Prerequisite from "../components/Prerequisite/Prerequisite";
import Objectives from "../components/Objectives/Objectives";
import InputOutput from "../components/InputOutput/InputOutput";
import IFrame from "../components/IFrame/IFrame";
import DetailedQuestionData from "../Data/DetailedQuestionData";
import {useParams} from "react-router-dom";
import Code from "../components/Code/Code";

function DSQuestion(){
  const {id} = useParams();

  const question = DetailedQuestionData.filter(q => id == q.id)[0];

  return (
      <>
        <Question id={question.id} question={question.value} disableHover/>
        <Prerequisite arrayOfItems={question.PreReq} />

        {/* {DetailedQuestionData.map(question => 
           (id == question.id) ? 
           <div key={question.id}>
           <Prerequisite arrayOfItems={question.PreReq} />,
           <Objectives text={question.Objective} />,
           <IFrame src={question.YouTubeLink} title={question.YouTubeLinkTitle} />,
           <InputOutput input={question.Input} output={question.Output} />,
           <Code code={question.Code} />
           </div>
           :null
        )} */}
      </>
  );
}

export default DSQuestion;