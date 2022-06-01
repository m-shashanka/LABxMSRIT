import styles from './prerequisite.module.css';
import Ellipse from '../Ellipse/Ellipse';

function Prerequisite(props){
return(
    <div className={styles.prereq}>
       <h4>Prerequisite:</h4>
      { (props.arrayOfItems).map((dataStructure) => {
        <Ellipse dataStructure={dataStructure} key={dataStructure} />
       })}
    </div>
);
}

export default Prerequisite;