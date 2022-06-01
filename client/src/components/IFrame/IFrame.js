import styles from './IFrame.module.css'

function IFrame(props){
    return(
        <div className={styles.videoContainer}>
            <iframe className={styles.iframe}
                src={props.src}
                title={props.title} frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; 
                gyroscope; picture-in-picture" allowFullScreen >
            </iframe>
        </div>
    );
}

export default IFrame;