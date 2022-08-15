import { useState } from 'react';
import { Link } from 'react-router-dom';
import Question from '../Question/Question';
import DSQuestions from '../../Data/DetailedQuestionData';
import LeftBarItem from '../LeftBarItem/LeftBarItem';
import styles from './leftbar.module.css'
import FocQuestions from '../../Data/FocQuestionData';

function LeftBar(props) {
    const [tag, setTag] = useState(null);
    const [dsquestions, setDSQuestions] = useState(DSQuestions);
    const [focquestions, setFOCQuestions] = useState(FocQuestions);

    const addTag = (newTag) => {
        setTag(newTag);
        if(props.name === "Data Structures"){
            let temp = DSQuestions.filter(item => item.PreReq.includes(newTag.replace(/\s+/g, '')));
            setDSQuestions(temp);
        }
        else{
            let temp = FocQuestions.filter(item => item.PreReq.includes(newTag.replace(/\s+/g, '')));
            setFOCQuestions(temp);
        }
    }

    const removeTag = () => {
        setTag(null);
        if(props.name === "Data Structures")
            setDSQuestions(DSQuestions);
        else
            setFOCQuestions(FocQuestions);
    }

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <strong>{props.name}</strong>
                <div className={styles.filterContainer}>
                    {props.arr.map((title) => (
                        <LeftBarItem key={title} name={title} tag={tag} addTag={addTag} removeTag={removeTag} />
                    ))}
                </div>    
            </div>
           { (props.name === "Data Structures") ?
           <div>
            <div className={styles.qContainer}>
                {tag && <div className={styles.dsPage}>
                    <Link to={`/datastructure/${tag.replace(/\s+/g, '')}`} style={{ all: 'unset' }}>
                        <h2>Learn about {tag} &#8921;</h2>
                    </Link>
                </div>}
                {(tag === 'Tree' || tag === 'Graph') && <div className={styles.graph}>
                    <a href="https://graph-visualizer-labxrit.herokuapp.com" target="_blank" rel="noreferrer">
                        <h2>&#8920; {tag} Visualizer &#8921;</h2>
                    </a>
                </div>}
                {dsquestions.map((question) => (
                    <Link to={`/dslab/question/${question.id}`} style={{ all: 'unset' }} key={question.id}>
                        <Question
                            id={question.id}
                            question={question.value}
                        />
                    </Link>
                ))
                }
            </div>
            </div>:
            <div className={styles.qContainer}>
                {tag && <div className={styles.dsPage}>
                    <Link to={`/foclab/${tag.replace(/\s+/g, '')}`} style={{ all: 'unset' }}>
                        <h2>Learn about {tag} &#8921;</h2>
                    </Link>
                </div>}
                {focquestions.map((question) => (
                    <Link to={`/foclab/question/${question.id}`} style={{ all: 'unset' }} key={question.id}>
                        <Question
                            id={question.id}
                            question={question.value}
                        />
                    </Link>
                ))
                }
            </div>}
        </div>
    );
}

export default LeftBar;