import styles from './footer.module.css'

const Footer = () => {
    return(
        <div className={styles.container}>
            <div className={styles.logobox}>
                <div className={styles.logo}>P-NEWS</div>
            </div>
            <div className={styles.listbox}>
                <ul>
                    <li>اخبار بازی</li>
                    <li className={styles.customeListStyle}>/</li>
                    <li>داغ ترینها</li>
                    <li className={styles.customeListStyle}>/</li>
                    <li>تازه ترینها</li>
                    <li className={styles.customeListStyle}>/</li>
                    <li>اخبار فوتبال</li>
                    <li className={styles.customeListStyle}>/</li>
                    <li>اخبار فیلم و سریال</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer