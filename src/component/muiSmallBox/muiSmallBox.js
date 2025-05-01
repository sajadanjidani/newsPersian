import styles from './muiSmallBox.module.css'

const MuiSmallBox = ({title, imageSrc}) => {
    return(
        <div className={styles.container}>
            <div className={styles.imagebox}>
                <img className={styles.imageCover} src={imageSrc} alt='cover'></img>
            </div>
            <h3 className={styles.title}>{title}</h3>
        </div>
    )
}

export default MuiSmallBox