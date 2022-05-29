import styles from './IFrame.module.css'

function IFrame(){
    return(
        <>
        <iframe width="1060" height="520" className={styles.iframe}
        src="https://www.youtube.com/embed/gYgV0Xsn1GM" 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture" allowFullScreen >
        </iframe>

        </>
    );
}

export default IFrame;