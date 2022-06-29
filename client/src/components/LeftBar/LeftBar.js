import { Link } from 'react-router-dom';
import Question from '../Question/Question';
import Questions from '../../Data/Questions';
import LeftBarItem from '../LeftBarItem/LeftBarItem';
import styles from './leftbar.module.css'

function LeftBar(){

    return(
        <div className={styles.page}>
            <div className={styles.container}>
                <strong>Data Structures</strong>
                <LeftBarItem name="Stack" />
                <LeftBarItem name="Queue" />
                <LeftBarItem name="Linked List" />
                <LeftBarItem name="Sparse Matrix" />
                <LeftBarItem name="Array" />
                <LeftBarItem name="Graph" />
                <LeftBarItem name="Tree" />
                <LeftBarItem name="Heap" />
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