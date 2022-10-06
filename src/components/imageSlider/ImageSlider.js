import React, { useEffect, useState } from "react";
import { imageSlider } from "../../data";
import classes from "./ImageSlider.module.scss";
import SliderButton from "./SliderButton";
import { v4 } from "uuid";
const ImageSlider = () => {
    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        if (slideIndex === imageSlider.length) {
            setSlideIndex(1);
            return;
        }
        setSlideIndex(slideIndex + 1);
    };

    const prevSlide = () => {
        if (slideIndex === 1) {
            setSlideIndex(imageSlider.length);
            return;
        }
        setSlideIndex(slideIndex - 1);
    };

    useEffect(() => {
        const auto = setTimeout(() => {
            nextSlide();
        }, 7000);

        return () => clearTimeout(auto);
    }, [slideIndex]);

    const handleDotClick = (index) => {
        setSlideIndex(index + 1);
    };

    return (
        <div className={classes.slider}>
            <div className="container">
                <h2 className={classes.title}>Our work</h2>
                <div className={classes.slider__body}>
                    <div className={classes.slider__content}>
                        <div className={classes.slider__arrow}>
                            <SliderButton direction="prev" onClick={prevSlide} />
                        </div>
                        <div className={classes.slider__images}>
                            {imageSlider.map((slide, index) => {
                                return (
                                    <div key={v4()} className={slideIndex === index + 1 ? classes.slide_active : classes.slide}>
                                        <img src={require(`../../assets/slider${slideIndex}.jpg`)} alt={slide.image} />
                                    </div>
                                );
                            })}
                        </div>
                        <div className={classes.slider__arrow}>
                            <SliderButton direction="next" onClick={nextSlide} />
                        </div>
                    </div>
                    <div className={classes.slider__dots}>
                        <div className={classes.phone__arrow}>
                            <SliderButton direction="prev" onClick={prevSlide} />
                        </div>

                        <div className={classes.dots}>
                            {imageSlider.map((item, index) => {
                                return (
                                    <div
                                        key={v4()}
                                        onClick={() => handleDotClick(index)}
                                        className={slideIndex === index + 1 ? classes.slider__dot_active : classes.slider__dot}></div>
                                );
                            })}
                        </div>

                        <div className={classes.phone__arrow}>
                            <SliderButton direction="next" onClick={nextSlide} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;
