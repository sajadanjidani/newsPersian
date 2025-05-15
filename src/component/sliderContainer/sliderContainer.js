import { useRef } from 'react';
import styles from './sliderContainer.module.css';

const SliderContainer = ({ children }) => {
  const sliderRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const onMouseDown = (e) => {
    isDown = true;
    sliderRef.current.classList.add(styles.active);
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  const onMouseLeave = () => {
    isDown = false;
    sliderRef.current.classList.remove(styles.active);
  };

  const onMouseUp = () => {
    isDown = false;
    sliderRef.current.classList.remove(styles.active);
  };

  const onMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.25;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // مشابه برای تاچ اسکرین
  const onTouchStart = (e) => {
    isDown = true;
    startX = e.touches[0].pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  const onTouchEnd = () => {
    isDown = false;
  };

  const onTouchMove = (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.25;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      className={styles.container}
      ref={sliderRef}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onTouchMove={onTouchMove}
    >
      {children}
    </div>
  );
};

export default SliderContainer;
