import styles from './leftbaritem.module.css'

function LeftBarItem({name,tag,addTag,removeTag}){

    const toggleActive = () =>{
        if(name === tag)
            removeTag();
        else
            addTag(name);
    }

    return(
        <div onClick={toggleActive} className={name === tag ? `${styles.container} ${styles.selected}` : styles.container}>
            {name}
            <span>&#8921;</span>
        </div>
    );
}

export default LeftBarItem;