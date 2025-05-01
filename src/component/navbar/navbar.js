import styles from './navbar.module.css'

const Navbar = () => {
    return(
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <div className={styles.iconbox}></div>
                <div className={styles.imagebox}>P-NEWS</div>
                <div className={styles.listbox}>
                    <ul>
                        <li>بازی</li>
                        <li>فوتبال</li>
                        <li>فیلم و سریال</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar