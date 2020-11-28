import React from "react";
import styles from "./index.module.css";
import Flogo from "../../Component/Flogo/index.js";
const Nav=()=>{
    return(
        <div className={styles.container}>
           <a className={styles.Item} href="#features">Features</a>
           <a className={styles.Item} href="reviews">Reviews</a>
           <a className={styles.Item} href="about">About</a>
           <a className={styles.Item} href="screenshots">Screenshots</a>
           <a className={styles.Item} href="demo">Demo</a>
           <a className={styles.Item} href="contact">Contact</a>
           <Flogo/>
           
        </div>
    )
}
export default Nav;