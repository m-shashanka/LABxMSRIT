import { useState } from 'react';
import styles from './codeExplanation.module.css'
    

function CodeExplanation({text}){
    
    return(
        <div className={styles.algo}>
        <h3>Code Explanation:</h3>
        {text}
        </div>
    );
}

export default CodeExplanation;