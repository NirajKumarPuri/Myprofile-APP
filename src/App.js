import React from "react";
import styles from "./App.module.css";
import Routes from"./Router/Index.js";
const App=()=>{
  return(
    <div className={styles.container}>
      <Routes/>
    </div>
  )
}
export default App;


