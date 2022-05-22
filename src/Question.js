import React from "react";

function Question(props){
    return(
        <div className="boxed">
        {props.id}.{props.question}
        </div>
    );
}

export default Question;