import styles from './itemSlider.module.css'

const ItemSlider = ({title, imageSrc}) => {
    return(
        <div className={styles.container}>
            <div className={styles.imagebox}>
                <img className={styles.imageSlider} src={imageSrc} alt='itemPoster'></img>
            </div>
            <h3 className={styles.title}>{title}</h3>
        </div>
    )
}

export default ItemSlider