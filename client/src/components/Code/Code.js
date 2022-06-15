import { useEffect, useRef, useState } from 'react';
import styles from './code.module.css'
import programs from './Programs';

function Code({idx}){

    const [showCode,setShowCode] = useState(false);

    const toggleCode = () =>{
        setShowCode(prevState => !prevState)
    }

    function copyText(){
        const text = document.getElementById('code');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const myText = programs[idx];

    const textAreaRef = useRef(null);

    useEffect(() => {
        if(showCode){
            textAreaRef.current.style.height = "1px";
            textAreaRef.current.style.height = (textAreaRef.current.scrollHeight - 45)+"px";
        }
    },[showCode]);

    return(
        <div className={styles.codeContainer}>
            <div className={styles.dropDown}>
                <h2>Code</h2>
                <h2 onClick={toggleCode}>{showCode ? "\u2191" : "\u2193"}</h2>
            </div>
            {showCode && <textarea id='code' className={styles.codeSnippet} 
                defaultValue={myText} readOnly  
                ref={textAreaRef}
            >
            </textarea>}
            {showCode && <button onClick={copyText}>Copy</button>}
        </div>
    )
}

export default Code;