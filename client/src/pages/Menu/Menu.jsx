import DSCard from "../../components/DSCard/DSCard";
import Header from "../../components/Header/Header";
import styles from "./menu.module.css";

function Menu() {
  return (
    <>
      <Header name="LABxRIT" />
      <div className={styles.container}>
        <DSCard />
        <DSCard />
      </div>
    </>
  );
}

export default Menu;