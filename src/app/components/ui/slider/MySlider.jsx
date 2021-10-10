import React, {useState, useEffect} from 'react';
import style from './css/style.module.css'
import slide1 from './imgs/1.png'
import slide2 from './imgs/2.png'
import slide3 from './imgs/3.png'
import slide4 from './imgs/4.png'


const img = [
    <img key={slide1} src={slide1} />,
    <img key={slide2} src={slide2} />,
    <img key={slide3} src={slide3} />,
    <img key={slide4} src={slide4} />,
]

const MySlider = () => {

    // Индекс текущего слайда
    const [activeIndex, setActiveIndex] = useState(0);
    const [sideFlip, setSideFlip] = useState(0) //left
    console.log('style.sliderImg', style['slider-img'])


// Хук Effect
    useEffect(() => {
        // Запускаем интервал
        const interval = setInterval(() => {
            // Меняем состояние
            setActiveIndex((current) => {
                // Вычисляем индекс следующего слайда, который должен вывестись
                const res = current === img.length - 1 ? 0 : current + 1
                // Возвращаем индекс
                return res
            })
        }, 7000)
        // Выключаем интервал
        return () => clearInterval()
    }, [])

    useEffect(() => {
        setActiveIndex(sideFlip)
        console.log('sideFlip',sideFlip)
    }, [sideFlip])

// Вычисляем индекс предыдущего слайда
    const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
// Вычисляем индекс следующего слайда
    const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1

    return (
        <>
            <div className={style.slider}>
                <div className={[style['slider-img'], style['slider-img-prev']].join(' ')}
                     key={prevImgIndex}>
                    {img[prevImgIndex]}
                </div>
                <div className={style.sliderImg}
                     key={activeIndex}>
                    {img[activeIndex]}
                </div>
                <div className={[style['slider-img'], style['slider-img-next']].join(' ')}
                     key={nextImgIndex}>
                    {img[nextImgIndex]}
                </div>
            </div>
            <button onClick={() => setSideFlip(nextImgIndex)}>
                Left
            </button>
            <button onClick={() => setSideFlip(prevImgIndex)}>
                Right
            </button>
        </>
    );
};

export default MySlider;