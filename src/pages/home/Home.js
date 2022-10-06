import React from "react";
import Button from "../../components/UI/button/Button";
import classes from "./Home.module.scss";
import Materials from "../../components/materials/Materials";
import AboutUs from "../../components/aboutUs/AboutUs";
import Questions from "../../components/questions/Questions";
import ImageSlider from "../../components/imageSlider/ImageSlider";

const Home = () => {
    return (
        <div className={classes.home}>
            <div className={classes.home__mainScreen}>
                <div className={classes.mainScreen__background} />
                <div className={classes.mainScreen__content}>
                    <div className={classes.mainScreen__textblock}>
                        <h1 className={classes.mainScreen__title}>Solid wood products</h1>
                        <p className={classes.subtitle}>
                            Oak, beech, ash from <span>1700 CZK</span> per m3
                        </p>
                        <div className={classes.button}>
                            <Button>
                                <span>Order</span>
                            </Button>
                        </div>
                    </div>
                    <div className={classes.mainScreen__imageblock}>
                        <img className={classes.image + " " + classes.first} src={require("../../assets/product2.jpg")} alt="photo" />
                        <img className={classes.image + " " + classes.second} src={require("../../assets/product1.jpg")} alt="photo" />
                        <img className={classes.image + " " + classes.third} src={require("../../assets/product3.jpg")} alt="photo" />
                    </div>
                </div>
            </div>
            <Materials />
            <ImageSlider />
            <div className={classes.advantages}>
                <div className="container">
                    <div className={classes.advantages__body}>
                        <h2 className={classes.advantages__title}>
                            Advantages <br /> working with us
                        </h2>
                        <div className={classes.advantages__content}>
                            <div className={classes.advantages__imageBlock}>
                                <img src={require("../../assets/advantages1.jpg")} alt="" />
                            </div>
                            <div className={classes.advantages__textBlock}>
                                <p>In-house carpentry production</p>
                                <p>We only treat wood with environmentally friendly and safe products</p>
                                <p>Prices from the manufacturer, no extra charges</p>
                            </div>
                        </div>
                        <div className={classes.advantages__button}>
                            <Button>Receive a consultation</Button>
                        </div>
                    </div>
                </div>
            </div>
            <AboutUs />
            <Questions />
        </div>
    );
};

export default Home;
