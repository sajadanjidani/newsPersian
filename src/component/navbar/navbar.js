import styles from './navbar.module.css'

const Navbar = () => {

    let openMenu = () => {
        document.querySelector('#openBtn').styles.display = 'none'
        document.querySelector('#closeBtn').styles.display = 'block'
    }
    let closeMenu = () => {
        document.querySelector('#openBtn')
        document.querySelector('#closeBtn')
    }

    return(
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <div className={styles.iconbox}>
                    <span id='openBtn' className={styles.openMenuBtn} onClick={() => openMenu()}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                            <path fill='white' d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                        </svg>
                    </span>
                    <span id='closeBtn' className={styles.closeMenuBtn} onClick={() => closeMenu()}>
                        <svg width="40px" height="40px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#fff"/>
                        </svg>
                    </span>
                </div>
                <div className={styles.imagebox}>P-NEWS</div>
                <div className={styles.listbox}>
                    <ul>
                        <li><a href='/category/category.html'>بازی</a></li>
                        <li><a href='/category/category.html'>فوتبال</a></li>
                        <li><a href='/category/category.html'>فیلم و سریال</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar