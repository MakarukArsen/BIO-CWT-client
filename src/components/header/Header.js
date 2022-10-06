import React, { useEffect, useState } from "react";
import Logo from "../icons/Logo";
import classes from "./Header.module.scss";
import { NavLink, Link } from "react-router-dom";
import useScrollPosition from "../../hooks/headerScroll";
const Header = () => {
    const [menuActive, setMenuActive] = useState(false);

    const scrollPosition = useScrollPosition();

    useEffect(() => {
        menuActive ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto");
    }, [menuActive]);

    return (
        <header className={classes.header + " " + (scrollPosition > 0 ? classes.header_scroll : "")}>
            <div className="container">
                <div className={classes.header__body}>
                    <Link to="/" className={classes.logoblock + " " + classes.link}>
                        <Logo className={classes.logo} />
                        <p className={classes.logo__text}>
                            BIO
                            <br />
                            CWT
                        </p>
                    </Link>
                    <ul className={menuActive ? classes.header__list_active : classes.header__list} onClick={() => setMenuActive(false)}>
                        <li className={classes.list__item}>
                            <NavLink className={classes.link} to="gallery">
                                Gallery
                            </NavLink>
                        </li>
                        <li className={classes.list__item}>
                            <NavLink className={classes.link} to="services">
                                Prices for services
                            </NavLink>
                        </li>
                        <li className={classes.list__item}>
                            <NavLink className={classes.link} to="aboutUs">
                                About us
                            </NavLink>
                        </li>
                        <li className={classes.list__item}>
                            <NavLink className={classes.link} to="contact">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <div className={menuActive ? classes.menu__button_active : classes.menu__button} onClick={() => setMenuActive(!menuActive)}>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
