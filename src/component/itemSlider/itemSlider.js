import styles from './itemSlider.module.css'

const ItemSlider = () => {
    return(
        <div className={styles.container}>
            <div className={styles.imagebox}></div>
            <h3 className={styles.title}>فوتبال رعال و اتلتیک</h3>
        </div>
    )
}

export default ItemSlider