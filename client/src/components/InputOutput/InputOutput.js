import styles from './inputOutput.module.css'
import { useEffect, useRef } from 'react';

function InputOutput(props){

    function copyText(str){
        const text = document.getElementById(str);
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const textAreaRef1 = useRef(null);
    const textAreaRef2 = useRef(null);

    useEffect(() => {
            textAreaRef1.current.style.height = "1px";
            textAreaRef1.current.style.height = (textAreaRef1.current.scrollHeight)+"px";
            
            textAreaRef2.current.style.height = "1px";
            textAreaRef2.current.style.height = (textAreaRef2.current.scrollHeight)+"px";
    },[]);

    return(
        <div className={styles.inout}>
        <div className={styles.input}>
            <h4>Input</h4>
            <button onClick={()=>copyText('input')}>Copy</button>
        </div>
        <textarea disabled id='input' value={props.input} ref={textAreaRef1}></textarea>
        <hr className={styles.border}/>
        <div className={styles.input}>
            <h4>Output</h4>
            <button onClick={()=>copyText('output')}>Copy</button>
        </div>
         <textarea disabled id='output' value={props.output} ref={textAreaRef2}></textarea>
        </div>
    );
}

export default InputOutput;