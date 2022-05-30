import styles from './prerequisite.module.css';
import Ellipse from '../Ellipse/Ellipse';

function Prerequisite(){
return(
    <div className={styles.prereq}>
       <h4>Prerequisite:</h4>
       <Ellipse name="Stack"/>
       <Ellipse name="Queue"/>
       <Ellipse name="Linked List"/>
    </div>
);
}

export default Prerequisite;