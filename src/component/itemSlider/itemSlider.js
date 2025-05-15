import styles from './itemSlider.module.css'

const ItemSlider = ({id, title, imageSrc}) => {
    let href = '../newsContent/newsContent.html#' + id
    return(
        <a href={href} className={styles.container}>
            <div className={styles.imagebox}>
                <img className={styles.imageSlider} src={imageSrc} alt='itemPoster'></img>
            </div>
            <h3 className={styles.title}>{title}</h3>
        </a>
    )
}

export default ItemSlider