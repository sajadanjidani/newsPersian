import styles from './multiBoxContainer.module.css'

const MultiBoxContainer = ({children}) => {
    return(
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default MultiBoxContainer