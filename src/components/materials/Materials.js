import React from "react";
import classes from "./Materials.module.scss";
import Checkmark from "../icons/Checkmark";
import XMark from "../icons/XMark";
const Materials = () => {
    return (
        <div className={classes.materials}>
            <div className="container">
                <div className={classes.materials__body}>
                    <h2 className={classes.materials__title}>
                        THE WOOD WE <br /> WORK WITH
                    </h2>
                    <div className={classes.materials__itemsBox}>
                        <div className={classes.materials__item}>
                            <div className={classes.materialsItem__image}>
                                <img src={require("../../assets/oak.jpg")} alt="oak" />
                            </div>
                            <h4 className={classes.materialsItem__title}>Oak</h4>
                            <ul className={classes.materialsItem__description}>
                                <li>
                                    <Checkmark className={classes.icon} /> Durability
                                </li>
                                <li>
                                    <Checkmark className={classes.icon} />
                                    Beautiful texture
                                </li>
                                <li>
                                    <Checkmark className={classes.icon} />
                                    Water resistance
                                </li>
                                <li>
                                    <XMark className={classes.icon} />
                                    Expensive
                                </li>
                            </ul>
                        </div>
                        <div className={classes.materials__item}>
                            <div className={classes.materialsItem__image}>
                                <img src={require("../../assets/buk.jpg")} alt="buk" />
                            </div>
                            <h4 className={classes.materialsItem__title}>Buk</h4>
                            <ul className={classes.materialsItem__description}>
                                <li>
                                    <Checkmark className={classes.icon} />
                                    Durability
                                </li>
                                <li>
                                    <XMark className={classes.icon} />
                                    Hard to handle
                                </li>
                            </ul>
                        </div>
                        <div className={classes.materials__item}>
                            <div className={classes.materialsItem__image}>
                                <img src={require("../../assets/ash.jpg")} alt="ash" />
                            </div>
                            <h4 className={classes.materialsItem__title}>Ash</h4>
                            <ul className={classes.materialsItem__description}>
                                <li>
                                    <Checkmark className={classes.icon} />
                                    Durability
                                </li>
                                <li>
                                    <XMark className={classes.icon} />
                                    Hard to handle
                                </li>
                            </ul>
                        </div>
                        <div className={classes.materials__item}>
                            <div className={classes.materialsItem__image}>
                                <img src={require("../../assets/ash.jpg")} alt="ash" />
                            </div>
                            <h4 className={classes.materialsItem__title}>Ash</h4>
                            <ul className={classes.materialsItem__description}>
                                <li>
                                    <Checkmark className={classes.icon} />
                                    Durability
                                </li>
                                <li>
                                    <XMark className={classes.icon} />
                                    Hard to handle
                                </li>
                            </ul>
                        </div>
                        <div className={classes.materials__item}>
                            <div className={classes.materialsItem__image}>
                                <img src={require("../../assets/ash.jpg")} alt="ash" />
                            </div>
                            <h4 className={classes.materialsItem__title}>Ash</h4>
                            <ul className={classes.materialsItem__description}>
                                <li>
                                    <Checkmark className={classes.icon} />
                                    Durability
                                </li>
                                <li>
                                    <XMark className={classes.icon} />
                                    Hard to handle
                                </li>
                            </ul>
                        </div>
                        <div className={classes.materials__item}>
                            <div className={classes.materialsItem__image}>
                                <img src={require("../../assets/ash.jpg")} alt="ash" />
                            </div>
                            <h4 className={classes.materialsItem__title}>Ash</h4>
                            <ul className={classes.materialsItem__description}>
                                <li>
                                    <Checkmark className={classes.icon} />
                                    Durability
                                </li>
                                <li>
                                    <XMark className={classes.icon} />
                                    Hard to handle
                                </li>
                            </ul>
                        </div>
                        <div className={classes.materials__item}>
                            <div className={classes.materialsItem__image}>
                                <img src={require("../../assets/ash.jpg")} alt="ash" />
                            </div>
                            <h4 className={classes.materialsItem__title}>Ash</h4>
                            <ul className={classes.materialsItem__description}>
                                <li>
                                    <Checkmark className={classes.icon} />
                                    Durability
                                </li>
                                <li>
                                    <XMark className={classes.icon} />
                                    Hard to handle
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Materials;
