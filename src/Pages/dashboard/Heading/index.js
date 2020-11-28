import React from "react";
import styles from "./index.module.css";
import Logo from "../../../Component/Logo/index";
import Icon from "../../../Component/Menu/index.js";
import Nav from "../../../Component/Navbar/index.js";

const Heading=()=>{
    return(
        <div className={styles.container}>
        <Logo/>
        <Icon/>
        <Nav/>
        </div>
    )
}
export default Heading;