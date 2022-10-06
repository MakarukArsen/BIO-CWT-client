import React from "react";
import classes from "./Services.module.scss";
import ImageSlider from "../../components/imageSlider/ImageSlider";
import Questions from "../../components/questions/Questions";
const Services = () => {
    return (
        <div className={classes.services}>
            <ImageSlider />
            <Questions />
        </div>
    );
};

export default Services;
