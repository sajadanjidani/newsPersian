import styles from './muiBigBox.module.css'

const MuiBigBox = ({id, title, imageSrc}) => {
    let href = '../newsContent/newsContent.html#' + id
    return(
        <a href={href} className={styles.container}>
            <div className={styles.imageBox}>
                <img className={styles.imageCover} src={imageSrc} alt='cover'></img>
            </div>
            <h1 className={styles.titleNews}>{title}</h1>
        </a>
    )
}

export default MuiBigBox