import React from "react";
import classes from "./AboutUsPage.module.scss";
import AboutUs from "../../components/aboutUs/AboutUs";
import ImageSlider from "../../components/imageSlider/ImageSlider";
import Questions from "../../components/questions/Questions";

const AboutUsPage = () => {
    return (
        <div className={classes.aboutUs}>
            <AboutUs />
            <ImageSlider />
            <Questions />
        </div>
    );
};

export default AboutUsPage;
