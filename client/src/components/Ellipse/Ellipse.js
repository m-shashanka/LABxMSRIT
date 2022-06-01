import styles from './ellipse.module.css'
import {Link} from "react-router-dom"

function Ellipse(props){
return(
    <div className={styles.ellipse}>
    <Link to={"/datastructure"} style={{all: 'unset'}}>
     {props.name}
     </Link>
    </div>
);
}

export default Ellipse;