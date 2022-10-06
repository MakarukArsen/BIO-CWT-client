import React from "react";
import classes from "./AdminItem.module.scss";
const AdminItem = ({ data, handleDelete }) => {
    const { _id, name, phone, date, question } = data;
    return (
        <div className={classes.message}>
            <div>
                <div className={classes.contactInfo}>
                    <p className={classes.name}>Name: {name}</p>
                    <p className={classes.phone}>Phone: {phone}</p>
                    <p className={classes.date}>Date: {date}</p>
                </div>
                <div className={classes.question}>Questiuon: {question}</div>
            </div>
            <button onClick={() => handleDelete(_id)} className={classes.button}>
                Delete
            </button>
        </div>
    );
};

export default AdminItem;
