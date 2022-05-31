import styles from "./question.module.css";

function Question(props){
    return(
        <div className={styles.qbox} >
        {props.id}.{props.question}
        </div>
    );
}

export default Question;