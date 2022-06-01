import styles from './code.module.css'

function Code(props){
    return(
        <div className={styles.code}>
         {props.code}
        </div>
    )
}

export default Code;