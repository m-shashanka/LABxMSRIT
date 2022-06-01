import styles from './code.module.css'

function Code(props){
    return(
        <code className={styles.codeSnippet}>{props.code}</code>
    )
}

export default Code;