import styles from "./question.module.css";

function Question(props){
    return(
        <div className={props.disableHover ? styles.qbox : `${styles.qbox} ${styles.qboxHover}`} >
        {props.id}.{props.question}
        </div>
    );
}

export default Question;