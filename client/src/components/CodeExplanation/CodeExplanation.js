import { useState } from 'react';
import styles from './codeExplanation.module.css'
    

function CodeExplanation({text}){

    // const [isReadMoreEnabled, setReadMore] = useState(false);

    // const toggleBtn = () =>{
    //     setReadMore(prevState => !prevState)
    // }

    //in the return include these inplace of text
    // {isReadMoreEnabled ? text : text.substring(0,100)}
    // <button onClick={toggleBtn}>{isReadMoreEnabled? 'Read Less' : 'Read More'} </button>

    return(
        <div className={styles.obj}>
        <h3>Code Explanation:</h3>
        {text}
        </div>
    );
}

export default CodeExplanation;