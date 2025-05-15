import styles from './footer.module.css'

const Footer = () => {
    return(
        <div className={styles.container}>
            <div className={styles.logobox}>
                <div className={styles.logo}>P-NEWS</div>
            </div>
            <div className={styles.listbox}>
                <ul>
                    <li><a href="../category/category.html#Game">اخبار بازی</a></li>
                    <li class='customeListStyle'>/</li>
                    <li><a href="../category/category.html#Footbal">اخبار فوتبال</a></li>
                    <li class='customeListStyle'>/</li>
                    <li><a href="../category/category.html#Video">اخبار فیلم و سریال</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer