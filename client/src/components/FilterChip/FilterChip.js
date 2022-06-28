import { useState } from 'react';
import styles from './filterchip.module.css'

function FilterChip({name, addTag, removeTag}){

    const [active,setActive] = useState(false);

    const toggleActive = () =>{
        setActive(prevState => !prevState);
    }

    return(
        <div onClick={toggleActive} className={active ? `${styles.chipContainer} ${styles.selected}` : styles.chipContainer}>
            <span>{name}</span>
            {active && <i className={styles.close}>x</i>}
        </div>
    );
}

export default FilterChip;