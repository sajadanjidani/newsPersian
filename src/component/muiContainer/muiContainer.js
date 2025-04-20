import styles from './muiContainer.module.css'

const MuiContainer = () => {
    return(
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <h1 className={styles.titleSection}>فوتبال</h1>
                <div className={styles.newsContainer}></div>
            </div>
        </div>
    )
}

export default MuiContainer