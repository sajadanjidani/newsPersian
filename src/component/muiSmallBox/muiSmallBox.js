import styles from './muiSmallBox.module.css'

const MuiSmallBox = ({id ,title, imageSrc}) => {
    let href = '../newsContent/newsContent.html#' + id
    return(
        <a href={href} className={styles.container}>
            <div className={styles.imagebox}>
                <img className={styles.imageCover} src={imageSrc} alt='cover'></img>
            </div>
            <h3 className={styles.title}>{title}</h3>
        </a>
    )
}

export default MuiSmallBox