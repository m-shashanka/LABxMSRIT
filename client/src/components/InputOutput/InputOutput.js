import styles from './inputOutput.module.css'

function InputOutput(props){

    function copyText(str){
        const text = document.getElementById(str);
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    return(
        <div className={styles.inout}>
        <div className={styles.input}>
            <h4>Input</h4>
            <button onClick={()=>copyText('input')}>Copy</button>
        </div>
        <textarea disabled id='input' value={props.input}></textarea>
        <hr className={styles.border}/>
        <div className={styles.input}>
            <h4>Output</h4>
            <button onClick={()=>copyText('output')}>Copy</button>
        </div>
         <textarea disabled id='output' value={props.output}></textarea>
        </div>
    );
}

export default InputOutput;