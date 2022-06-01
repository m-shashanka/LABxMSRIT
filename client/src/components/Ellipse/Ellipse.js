import styles from './ellipse.module.css'
import {Link} from "react-router-dom"

function Ellipse(props){
    console.log(props.dataStructure);
return(
    <div className={styles.ellipse}>
    <Link to={"/datastructure"} style={{all: 'unset'}}>
     {props.dataStructure}
     </Link>
    </div>
);
}

export default Ellipse;