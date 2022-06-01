import styles from './inputOutput.module.css'

function InputOutput(props){
    return(
        <div className={styles.inout}>
         {props.input} {props.output}
        </div>
    );
}

export default InputOutput;