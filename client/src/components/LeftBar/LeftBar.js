import { useState } from 'react';
import { Link } from 'react-router-dom';
import Question from '../Question/Question';
import Questions from '../../Data/Questions';
import LeftBarItem from '../LeftBarItem/LeftBarItem';
import styles from './leftbar.module.css'

function LeftBar(){

    const [tag,setTag] = useState(null);

    const addTag = (newTag) => {
        setTag(newTag);
    }    

    const removeTag = () => {
        setTag(null);
    }

    return(
        <div className={styles.page}>
            <div className={styles.container}>
                <strong>Data Structures</strong>
                <LeftBarItem name="Stack" tag={tag} addTag={addTag} removeTag={removeTag} />
                <LeftBarItem name="Queue" tag={tag} addTag={addTag} removeTag={removeTag} />
                <LeftBarItem name="Linked List" tag={tag} addTag={addTag} removeTag={removeTag} />
                <LeftBarItem name="Sparse Matrix" tag={tag} addTag={addTag} removeTag={removeTag} />
                <LeftBarItem name="Array" tag={tag} addTag={addTag} removeTag={removeTag} />
                <LeftBarItem name="Graph" tag={tag} addTag={addTag} removeTag={removeTag} />
                <LeftBarItem name="Tree" tag={tag} addTag={addTag} removeTag={removeTag} />
                <LeftBarItem name="Heap" tag={tag} addTag={addTag} removeTag={removeTag} />
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
        </div>
    );
}

export default LeftBar;