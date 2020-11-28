import React from "react";
import styles from "./index.module.css";
import Heading from "./Heading/index.js";
import Main from "../dashboard/Main/index.js";
import Main1 from "../dashboard/Main1/index.js";
const Deshboard=()=>{
    return(
        <div className={styles.container}>
            <Heading/>
            <Main/>
            <Main1/>
        </div>
    )
}
export default Deshboard;