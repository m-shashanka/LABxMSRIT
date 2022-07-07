import { Link } from 'react-router-dom';
import styles from './header.module.css';

function Header({name}) {
    return (
        <header className={styles.dslab}>
            <img className={styles.logo1} src="http://d2e9h3gjmozu47.cloudfront.net/brand.png" alt="logo1-img" />
            <h1>{name}</h1>
            <Link to={`/`} style={{ all: 'unset' }}>
                <img className={styles.logo2} src="./icon.png" alt="logo2-img" />
            </Link>
        </header>
    );
}

export default Header;