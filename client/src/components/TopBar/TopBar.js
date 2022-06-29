import { Link } from 'react-router-dom';
import Question from '../Question/Question';
import Questions from '../../Data/Questions';
import TopBarItem from '../TopBarItem/TopBarItem';
import styles from './topbar.module.css'

function TopBar(props){

    return(<>
        <div className={styles.container}>
            <TopBarItem name="Stack" />
            <TopBarItem name="Queue" />
            <TopBarItem name="Linked List" />
            <TopBarItem name="Sparse Matrix" />
            <TopBarItem name="Array" />
            <TopBarItem name="Graph" />
            <TopBarItem name="Tree" />
            <TopBarItem name="Heap" />
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
    </>);
}

export default TopBar;