import styles from './muiSmallBox.module.css'

const MuiSmallBox = () => {
    return(
        <div className={styles.container}>
            <div className={styles.imagebox}></div>
            <h3 className={styles.title}>فوتبال رعال با اتلتیک</h3>
        </div>
    )
}

export default MuiSmallBox