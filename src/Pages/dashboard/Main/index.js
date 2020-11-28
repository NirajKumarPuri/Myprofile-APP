import React from "react";
import styles from "./index.module.css";
import Micon from "../../../Asset/sociana1.png";
import Appstore from "../../../Component/Appstore/index.js";
const Main=()=>{
    return(
        <div className={styles.container}>
        <div className={styles.content1}>
        <img  className={styles.image} src={Micon}/>
        </div >
        <div className={styles.content2}>
            <h1 className={styles.htext}>INTRODUCING THE FIRST GENUINE AUTOMATION TOOL FOR YOUR ENTIRE EVENT EXPERIENCE</h1>
        </div>
        <div className={styles.content3}>
            <i class="fa fa-angle-left fa-3x" style={{color:"gray"}}></i>
            <i class="fa fa-angle-right fa-3x" style={{color:"gray"}}></i>
        </div>
        <Appstore/>
        <div className={styles.content4}>
            <p className={styles.para}>Download the App now – Lets Monitor, Manage and Organise Now!</p>
        </div>
        </div>
    )
}
export default Main;