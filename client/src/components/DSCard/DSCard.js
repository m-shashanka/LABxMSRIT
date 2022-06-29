import img1 from "./dslab.png"
import styles from "./dscard.module.css";
import {Link} from "react-router-dom"

function DSCard() {
  return (
    <Link to={`/dslab`} style={{all: 'unset'}}>
      <div className={styles.container}>
        <img className={styles.img1} src={img1} alt="DSLab" />
      </div>
    </Link>
  );
}

export default DSCard;