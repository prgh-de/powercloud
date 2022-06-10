import style from "./Carousel.module.css";
import {useEffect, useState} from "react";


const Carousel = (props) => {
        const {children} = props
        const [currentIndex, setCurrentIndex] = useState(0)
        const [length, setLength] = useState(children.length)

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
        if (currentIndex === length-1) {
            setCurrentIndex(prevState => prevState - (length - 1))
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
        if (currentIndex === 0)
            setCurrentIndex(prevState => prevState + (length-1))
    }
        useEffect(() => {
            setLength(children.length)
        }, [children])

        return (
            <div className={style.carousel}>
                <div className={style.carouselContentWrapper}>
                    <div
                        className={style.carouselContent}
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {children}
                    </div>
                </div>

                <div className={style.control}>
                    <div className={style.counter}> {currentIndex + 1} / 4</div>
                    <button className={style.leftArrow} onClick={prev}>
                        &#8592;
                    </button>
                    <button className={style.rightArrow} onClick={next}>
                        &#8594;
                    </button>
                </div>
            </div>

        )
    }
export default Carousel
