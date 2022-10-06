import React from "react";
import classes from "./AboutUs.module.scss";
const AboutUs = () => {
    return (
        <div className={classes.aboutUs}>
            <div className={classes.aboutUs__body}>
                <div className="container">
                    <div className={classes.aboutUs__content}>
                        <div className={classes.aboutUs__textblock}>
                            <h2 className={classes.aboutUs__title}>ABOUT US</h2>
                            <p className={classes.aboutUs__text}>
                                <span>BIO CWT</span> - We manufacture solid wood products according to individual drawings. We make chairs, armchairs,
                                wardrobes, beds and much more in our own workshop, equipped with all the necessary industrial equipment.
                            </p>
                        </div>
                        <div className={classes.aboutUs__imageblock}>
                            <div className={classes.aboutUs__image}>
                                <div className={classes.image}>
                                    <img className={classes.first} src={require("../../assets/about-us1.jpg")} alt="" />
                                </div>
                                <div className={classes.image}>
                                    <img className={classes.second} src={require("../../assets/about-us2.jpg")} alt="" />
                                </div>
                                <div className={classes.image}>
                                    <img className={classes.third} src={require("../../assets/about-us3.jpg")} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
