import React from "react";
import styles from "./index.module.css";
import Heading from "./Heading/index.js";
import Main from "../dashboard/Main/index.js";
import Main1 from "../dashboard/Main1/index.js";

const Deshboard = (props) => {
    console.log('Token : ', window.sessionStorage.getItem('token'));

    if (!window.sessionStorage.getItem('token')) {
        props.history.push('/login')
    }

    return (
        <div className={styles.container}>
            <Heading />
            <Main />
            <Main1 />
        </div>
    )
}
export default Deshboard;