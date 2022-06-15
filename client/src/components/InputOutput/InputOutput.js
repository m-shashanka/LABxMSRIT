import styles from './inputOutput.module.css'

function InputOutput(props){

    function copyText(){
        const text = document.getElementById('input');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    return(
        <div className={styles.inout}>
        <div className={styles.input}>
            <h4>Input</h4>
            <button onClick={copyText}>Copy</button>
        </div>
        <textarea disabled id='input' value={props.input}></textarea>
        <hr className={styles.border}/>
         <h4>Output</h4>
         <textarea disabled value={props.output}></textarea>
        </div>
    );
}

export default InputOutput;