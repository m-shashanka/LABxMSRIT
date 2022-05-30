import styles from './IFrame.module.css'

function IFrame(props){
    return(
        <>
        <iframe width="1060" height="520" className={styles.iframe}
        src={props.src}
        title={props.title} frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture" allowFullScreen >
        </iframe>

        </>
    );
}

export default IFrame;