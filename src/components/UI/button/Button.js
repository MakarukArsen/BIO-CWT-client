import React from "react";
import classes from "./Button.module.scss";
const Button = ({ children, valid, ...props }) => {
    return (
        <button {...props} className={valid === "disabled" ? classes.button_disabled : classes.button}>
            <p className={classes.button__text}>{children}</p>
        </button>
    );
};

export default Button;
