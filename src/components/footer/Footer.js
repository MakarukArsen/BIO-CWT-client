import React from "react";
import Phone from "../icons/Phone";
import Location from "../icons/Locations";
import classes from "./Footer.module.scss";
import Logo from "../icons/Logo";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className="container">
                <div className={classes.footer__body}>
                    <div className={classes.footer__content}>
                        <Link to="/" className={classes.logoblock + " " + classes.link}>
                            <Logo className={classes.logo} />
                            <p className={classes.logo__text}>
                                BIO
                                <br />
                                CWT
                            </p>
                        </Link>
                        <div className={classes.links}>
                            <a href="*" className={classes.phone + " " + classes.link}>
                                <Phone className={classes.icon} />
                                +420 000 000 000
                            </a>
                            <a href="*" className={classes.address + " " + classes.link}>
                                <Location className={classes.icon} />
                                Na Plzeňce 1166/0 150 00
                            </a>
                        </div>
                    </div>

                    <p className={classes.copyright}>Privacy Policy</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
