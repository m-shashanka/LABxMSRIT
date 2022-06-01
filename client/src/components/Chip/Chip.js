import styles from './chip.module.css'
import {Link} from "react-router-dom"

function Chip(props){
    return(
        <Link to={"/datastructure"} style={{all: 'unset'}}>
            <div className={styles.chip}>
                {props.name}
            </div>
        </Link>
    );
}

export default Chip;