import { useState } from 'react';
import styles from './objective.module.css'
    

function Objectives({text}){

    const [isReadMoreEnabled, setReadMore] = useState(false);

    const toggleBtn = () =>{
        setReadMore(prevState => !prevState)
    }

    return(
        <div className={styles.obj}>
        <h3>Objective:</h3>
        {isReadMoreEnabled ? text : text.substring(0,10)}
        <button onClick={toggleBtn}>{isReadMoreEnabled? 'Read Less' : 'Read More'} </button>
        </div>
    );
}

export default Objectives;