import TopBarItem from '../TopBarItem/TopBarItem';
import styles from './topbar.module.css'

function TopBar(props){

    return(
        <div className={styles.container}>
            <TopBarItem name="Stack" />
            <TopBarItem name="Queue" />
            <TopBarItem name="Linked List" />
            <TopBarItem name="Sparse Matrix" />
            <TopBarItem name="Array" />
            <TopBarItem name="Graph" />
            <TopBarItem name="Tree" />
            <TopBarItem name="Heap" />
        </div>
    );
}

export default TopBar;