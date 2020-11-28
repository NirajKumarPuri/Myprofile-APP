import React from "react";
import styles from "./index.module.css";
import playstore from "../../Asset/playstore.png";
import appstore from "../../Asset/appstore.png";
const Appstore=()=>{
    return(
        <div className={styles.container}>
        <img className={styles.img1} src={playstore}/>
        <img className={styles.img2} src={appstore}/>
        </div>
    )
}
export default Appstore;