import { useState } from 'react';
import styles from './topbaritem.module.css'

function TopBarItem({name}){

    const [active,setActive] = useState(false);

    const toggleActive = () =>{
        setActive(prevState => !prevState);
    }

    return(
        <div onClick={toggleActive} className={active ? styles.selected : styles.container}>
            {name}
        </div>
    );
}

export default TopBarItem;