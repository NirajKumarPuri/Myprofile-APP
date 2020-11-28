import React from "react";
import styles from "./index.module.css";
const Main1=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.content1}>
            <div className={styles.content1box1}>
                <p className={styles.heading}>A BAG OF SURPRISES NEVER SEEN BEFORE</p>
                </div>    
                <div className={styles.content1box2}>
                 <p className={styles.para}>-Take a look at our app features-</p>
                </div>
            </div>
            <div className={styles.content2}>
            <div className={styles.content2box1}>
              <div className={styles.box1}>
               <div className={styles.textbox}>
                <p className={styles.text1}>BOND</p>
                 <p className={styles.text2}>A new way to enable “within event networking” in Sociana. Secured, friendly and fun!</p>
                </div>
                <div className={styles.iconbox}>
               <div className={styles.icon}>
                   <i class="fa fa-lock fa-lg"></i>
               </div>
               </div>
              </div>
            </div>
            <div className={styles.content2box2}>

            </div>
            <div className={styles.content2box3}>

            </div>
            </div>

        </div>
    )
}
export default Main1;