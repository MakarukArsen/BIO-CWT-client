import React from "react";
import classes from "./Contact.module.scss";
import Phone from "../../components/icons/Phone";
import Location from "../../components/icons/Locations";
const Contact = () => {
    return (
        <div className={classes.contact}>
            <div className="container">
                <div className={classes.contact__body}>
                    <div className={classes.textBlock}>
                        <h1 className={classes.title}>Contact</h1>
                        <a className={classes.link} href="">
                            <Phone className={classes.icon} />
                            +420 000 000 000
                        </a>
                        <a className={classes.link} href="">
                            <Location className={classes.icon} />
                            Na Plzeňce 1166/0 150 00
                        </a>
                    </div>
                    <div className={classes.map}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20981.16019670366!2d24.64524187171694!3d48.90310188451677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c6d5aae17ecd%3A0x5360951efb130348!2z0JrRgNC40YXRltCy0YbRliwg0IbQstCw0L3Qvi3QpNGA0LDQvdC60ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3NjQ5Mw!5e0!3m2!1suk!2sua!4v1663933149500!5m2!1suk!2sua"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
