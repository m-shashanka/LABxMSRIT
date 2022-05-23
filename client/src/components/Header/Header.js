import styles from './header.module.css';

function Header() {
    return (
        <header className={styles.dslab}>
            <img className={styles.logo1} src="http://d2e9h3gjmozu47.cloudfront.net/brand.png" alt="logo1-img" />
            <h1>Data Structures LAB</h1>
            <img className={styles.logo2} src="./icon.png" alt="logo2-img" />
        </header>
    );
}

export default Header;