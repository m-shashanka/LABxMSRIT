import { useState } from 'react';
import styles from './codeExplanation.module.css'
    

function CodeExplanation({text}){
    
    return(
        <div className={styles.algo}>
        <h3>Algorithm:</h3>
        <span>{text}</span>
        </div>
    );
}

export default CodeExplanation;