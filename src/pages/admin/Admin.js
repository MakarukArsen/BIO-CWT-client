import React, { useEffect, useState } from "react";
import AdminItem from "../../components/admin/AdminItem";
import Button from "../../components/UI/button/Button";
import classes from "./Admin.module.scss";
import axios from "axios";
import { v4 } from "uuid";

const Admin = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useState(false);
    const [apiData, setApiData] = useState([]);
    const [refresh, setRefresh] = useState(0);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        if (auth) {
            axios
                .get(process.env.REACT_APP_API_URL)
                .then((res) => setApiData(res.data))
                .catch((rej) => console.log(rej));
        }
    }, [auth, refresh]);

    const handleDelete = (_id) => {
        axios
            .delete(`${process.env.REACT_APP_API_URL}/${_id}`)
            .then(() => setRefresh(refresh + 1))
            .catch((rej) => console.log(rej));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (login !== "admin") {
            return;
        }
        if (password !== "1234") {
            return;
        }
        setAuth(true);
    };

    const filteredData = apiData.filter((question) => {
        question = Object.values(question).join();
        return question.toLowerCase().includes(searchValue.toLowerCase());
    });

    return (
        <div className={classes.admin}>
            <div className="lines-bg"></div>
            <div className="container">
                {auth ? (
                    <div className={classes.content}>
                        <h1 className={classes.title}>Questions</h1>
                        <input
                            className={classes.search}
                            placeholder="Search by"
                            type="text"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                        {filteredData.reverse().map((item) => {
                            return <AdminItem handleDelete={handleDelete} key={v4()} data={item} />;
                        })}
                    </div>
                ) : (
                    <div className={classes.auth}>
                        <form className={classes.form}>
                            <input
                                onChange={(e) => setLogin(e.target.value)}
                                value={login}
                                className={classes.input}
                                type="text"
                                placeholder="Login"
                            />
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                className={classes.input}
                                type="text"
                                placeholder="Password"
                            />
                            <div className={classes.button}>
                                <Button onClick={handleSubmit}>Submit</Button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Admin;
