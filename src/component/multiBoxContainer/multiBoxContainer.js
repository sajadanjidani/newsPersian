import styles from './multiBoxContainer.module.css'
import MuiSmallBox from '../muiSmallBox/muiSmallBox'

const MultiBoxContainer = () => {
    return(
        <div className={styles.container}>
            <MuiSmallBox></MuiSmallBox>
        </div>
    )
}

export default MultiBoxContainer