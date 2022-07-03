import img1 from "./foclab.png"
import styles from "./foccard.module.css";
import {Link} from "react-router-dom"

function FocCard() {
  return (
    <Link to={`/foclab`} style={{all: 'unset'}}>
    <div className={styles.container}>
      <img className={styles.img1} src={img1} alt="FOCLab" />
    </div>
    </Link>
  );
}

export default FocCard;