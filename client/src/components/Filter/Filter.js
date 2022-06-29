import { useState } from 'react';
import { Link } from 'react-router-dom';
import Question from '../Question/Question';
import Questions from '../../Data/Questions';
import FilterChip from '../FilterChip/FilterChip';
import styles from './filter.module.css'

function Filter(){

    const [tag,setTag] = useState([]);

    const addTag = (newTag) => {
        setTag(oldArray => [...oldArray, newTag]);
    }    

    const removeTag = (oldTag) => {
        setTag(oldArray => oldArray.filter(item => item != oldTag));
    }

    console.log(tag);

    return(
        <>
            <div className={styles.filterContainer}>
                <FilterChip name="Stack" addTag={addTag} removeTag={removeTag} />
                <FilterChip name="Queue" addTag={addTag} removeTag={removeTag} />
                <FilterChip name="Linked List" addTag={addTag} removeTag={removeTag} />
                <FilterChip name="Sparse Matrix" addTag={addTag} removeTag={removeTag} />
                <FilterChip name="Array" addTag={addTag} removeTag={removeTag} />
                <FilterChip name="Graph" addTag={addTag} removeTag={removeTag} />
                <FilterChip name="Tree" addTag={addTag} removeTag={removeTag} />
                <FilterChip name="Heap" addTag={addTag} removeTag={removeTag} />
            </div>
            <div className={styles.qContainer}>
                {Questions.map((question) => (
                    <Link to={`/dslab/question/${question.id}`} style={{all: 'unset'}} key={question.id}>
                    <Question 
                        id={question.id}
                        question={question.value}
                    />
                    </Link>
                ))
                }
            </div>
        </>
    );
}

export default Filter;