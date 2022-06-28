import { useState } from 'react';
import FilterChip from '../FilterChip/FilterChip';
import styles from './filter.module.css'

function Filter(props){

    const [tag,setTag] = useState([]);

    const addTag = (newTag) => {
        setTag(oldArray => [...oldArray, newTag]);
    }    

    const removeTag = (oldTag) => {
        setTag(oldArray => oldArray.filter(item => item != oldTag));
    }

    console.log(tag);

    return(
        <div className={styles.filterContainer}>
            <FilterChip name="Stack" addTag={addTag} removeTag={removeTag} />
            <FilterChip name="Queue" addTag={addTag} removeTag={removeTag} />
        </div>
    );
}

export default Filter;