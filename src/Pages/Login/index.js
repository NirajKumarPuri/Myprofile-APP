import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
const Login=()=>{
    return(
        <div className={styles.content}>
            <div className={styles.contentbox1}>
                <h1 className={styles.heading}>Login Form</h1>
            </div>
            <div className={styles.contentbox2}>
                <input className={styles.text1} type="text" placeholder="Email" autoFocus/>

            </div>
            <div className={styles.contentbox3}>
                <input className={styles.text2} type="password" placeholder="Password" />

            </div>
            <div className={styles.contentbox4}>
                <button type="submit"  className={styles.button}>Login</button>

            </div>
            <div className={styles.contentbox5}>
              <Link className={styles.button1} to="/">Signup</Link>
            </div>

        </div>
    )
}
export default Login;