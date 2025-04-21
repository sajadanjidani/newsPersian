import styles from './sliderContainer.module.css'
import ItemSlider from '../itemSlider/itemSlider'

const SliderContainer = () => {
    return(
        <div className={styles.container}>
            <ItemSlider></ItemSlider>
            <ItemSlider></ItemSlider>
            <ItemSlider></ItemSlider>
            <ItemSlider></ItemSlider>
        </div>
    )
}

export default SliderContainer