import { useState } from 'react';
import styles from './objective.module.css'
    

function Objectives(props){
    var text = props.text;

    const [isReacMoreEnabled, setReadMore] = useState(false);

    const toggleBtn = () =>{
        setReadMore(prevState => !prevState)
    }

    return(
        <div className={styles.obj}>
        <h3>Objective:</h3>
        {isReacMoreEnabled ? text : text.substring(0,10)}
        <button onClick={toggleBtn}>{isReacMoreEnabled? 'Read Less' : 'Read More'} </button>
        </div>
    );
}

export default Objectives;