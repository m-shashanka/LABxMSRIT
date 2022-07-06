import { useState } from 'react';
import styles from './topbaritem.module.css'

function TopBarItem({name,tag,addTag,removeTag}){

    const toggleActive = () =>{
        if(name === tag)
            removeTag();
        else
            addTag(name);
    }

    return(
        <div onClick={toggleActive}  className={name === tag ? styles.selected : styles.container}>
            {name}
        </div>
    );
}

export default TopBarItem;