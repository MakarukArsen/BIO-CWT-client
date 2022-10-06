import React from "react";
import classes from "./Gallery.module.scss";
import ImageSlider from "../../components/imageSlider/ImageSlider";
import Materials from "../../components/materials/Materials";
import Questions from "../../components/questions/Questions";

const Gallery = () => {
    return (
        <div className={classes.gallery}>
            <ImageSlider />
            <Materials />
            <Questions />
        </div>
    );
};

export default Gallery;
