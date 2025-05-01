import styles from './sliderContainer.module.css'

const SliderContainer = ({children}) => {
    
    return(
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default SliderContainer