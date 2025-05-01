import styles from './muiBigBox.module.css'

const MuiBigBox = ({title, imageSrc}) => {
    return(
        <div className={styles.container}>
            <div className={styles.imageBox}>
                <img className={styles.imageCover} src={imageSrc} alt='cover'></img>
            </div>
            <h1 className={styles.titleNews}>{title}</h1>
        </div>
    )
}

export default MuiBigBox