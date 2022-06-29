import { useState } from 'react';
import styles from './leftbaritem.module.css'

function LeftBarItem({name}){

    const [active,setActive] = useState(false);

    const toggleActive = () =>{
        setActive(prevState => !prevState);
    }

    return(
        <div onClick={toggleActive} className={active ? `${styles.container} ${styles.selected}` : styles.container}>
            {name}
            <span>&#8921;</span>
        </div>
    );
}

export default LeftBarItem;