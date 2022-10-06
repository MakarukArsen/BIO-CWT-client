import React from "react";
import classes from "./Questions.module.scss";
import Button from "../../components/UI/button/Button";
import axios from "axios";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
const Questions = () => {
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,
    } = useForm({
        mode: "all",
        shouldFocusError: false,
    });

    const onSubmit = (data) => {
        const currentDate = format(new Date(), "k:mm dd/MM/yyy");
        data.date = currentDate;
        axios.post(process.env.REACT_APP_API_URL, data).catch((rej) => console.log(rej));
        reset();
    };

    return (
        <div className={classes.questions}>
            <div className="container">
                <div className={classes.questions__body}>
                    <h2 className={classes.title}>Any questions?</h2>
                    <div className={classes.questions__content}>
                        <form onSubmit={handleSubmit(onSubmit)} className={classes.questions__form}>
                            <label>
                                <input
                                    {...register("name", {
                                        required: "Please enter your name",
                                    })}
                                    className={classes.questions__input}
                                    placeholder="Your name"
                                    type="text"></input>
                                <p className={classes.error}>{errors?.name && errors?.name?.message}</p>
                            </label>
                            <label>
                                <input
                                    {...register("phone", {
                                        required: "Please enter your phone",
                                    })}
                                    className={classes.questions__input}
                                    placeholder="Your telephone number"
                                    type="tel"></input>
                                <p className={classes.error}>{errors?.phone && errors?.phone?.message}</p>
                            </label>
                            <label>
                                <textarea
                                    {...register("question", {
                                        required: "Please enter your question",
                                    })}
                                    className={classes.questions__textarea}
                                    placeholder="Your question"></textarea>
                                <p className={classes.error}>{errors?.question && errors?.question?.message}</p>
                            </label>
                            <div className={classes.button}>
                                <Button valid={!isValid ? "disabled" : ""} type="submit">
                                    Send
                                </Button>
                            </div>
                        </form>
                        <div className={classes.questions__textblock}>
                            <p>Write to us and we will be sure to answer all your questions and give you a comprehensive consultation.</p>
                        </div>
                    </div>

                    <div className={classes.questions__image}>
                        <img src={require("../../assets/questions1.png")} alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;
