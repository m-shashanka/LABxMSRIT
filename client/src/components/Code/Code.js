import { useEffect, useRef, useState } from 'react';
import {useLocation } from 'react-router-dom'
import styles from './code.module.css'
import programs from './Programs';
import FocPrograms from './FocPrograms';

function Code({idx}){

    const [showCode,setShowCode] = useState(false);

    const toggleCode = () =>{
        setShowCode(prevState => !prevState);
    }

    function copyText(){
        const text = document.getElementById('code');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    var myText;
    const location = useLocation();
    (location.pathname[1] === 'd') ? myText =  programs[idx] : myText = FocPrograms[idx]  

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
                <h2 onClick={toggleCode}>{showCode ? "\u25b2" : "\u25bc"}</h2>
            </div>
            {showCode && <div className={styles.codeArea}>
                <textarea id='code' className={styles.codeSnippet} 
                    defaultValue={myText} readOnly  
                    ref={textAreaRef}
                >
                </textarea>
                <button onClick={copyText}>Copy</button>
            </div>}
        </div>
    )
}

export default Code;