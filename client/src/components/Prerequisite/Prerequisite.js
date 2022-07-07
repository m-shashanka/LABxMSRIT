import styles from './prerequisite.module.css';
import Chip from '../Chip/Chip';

function Prerequisite(props){
return(
    <div className={styles.prereq}>
      <h4>Prerequisites: &nbsp;</h4>
      {props.arrayOfItems.map((dataStructure) =>
        <Chip foc={props.foc} name={dataStructure} key={dataStructure} />
      )}
    </div>
);
}

export default Prerequisite;