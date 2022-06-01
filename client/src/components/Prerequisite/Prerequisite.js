import styles from './prerequisite.module.css';
import Ellipse from '../Ellipse/Ellipse';

function Prerequisite(props){
    console.log(props.arrayOfItems)
return(
    <div className={styles.prereq}>
       <h4>Prerequisite:</h4>
      { (props.arrayOfItems).map((dataStructure) => {
        <Ellipse name={dataStructure} />
       })}
    </div>
);
}

export default Prerequisite;