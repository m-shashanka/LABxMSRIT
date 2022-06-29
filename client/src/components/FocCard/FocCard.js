import img1 from "./foclab.png"
import styles from "./foccard.module.css";

function FocCard() {
  return (
    <div className={styles.container}>
      <img className={styles.img1} src={img1} alt="DSLab" />
    </div>
  );
}

export default FocCard;