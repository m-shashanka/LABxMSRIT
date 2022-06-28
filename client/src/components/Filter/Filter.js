import FilterChip from '../FilterChip/FilterChip';
import styles from './filter.module.css'

function Filter(props){
    return(
        <div className={styles.filterContainer}>
            <FilterChip name="Stack" />
            <FilterChip name="Queue" />
        </div>
    );
}

export default Filter;