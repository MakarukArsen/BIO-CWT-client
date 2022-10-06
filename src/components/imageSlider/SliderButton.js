import React from "react";
import classes from "./ImageSlider.module.scss";
import SliderArrow from "../icons/SliderArrow";
const SliderButton = ({ direction, ...props }) => {
    return <SliderArrow {...props} className={direction === "next" ? classes.rigthArrow : classes.leftArrow} />;
};

export default SliderButton;
