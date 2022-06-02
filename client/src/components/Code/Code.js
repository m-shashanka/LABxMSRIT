import { useEffect, useRef } from 'react';
import styles from './code.module.css'
import programs from './Programs';

function Code({idx}){

    const myText = programs[idx];

    const textAreaRef = useRef(null);

    useEffect(() => {
        textAreaRef.current.style.height = "1px";
        textAreaRef.current.style.height = (textAreaRef.current.scrollHeight - 45)+"px";
    },[]);

    return(
        <textarea className={styles.codeSnippet} 
            defaultValue={myText} readOnly  
            ref={textAreaRef}
        >
        </textarea>
    )
}

export default Code;