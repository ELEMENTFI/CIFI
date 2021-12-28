import React from "react";
import cn from "classnames";
import styles from "./FolowSteps.module.sass";
//import Icon from "../assets/img/close.png";
import Icon from "../assets/img/alert.png";
//import Loader from "../../../components/Loader";
//import LoaderCircle from "../../../components/LoaderCircle";

const FolowStepsdcopy = ({ className,viewhistory}) => {
  return (
    <div className={cn(className, styles.steps)}>
      {/* <h1>{test}</h1> */}
      <div className={cn("h4", styles.title)}></div>
      <div className={styles.list}>

      <div className={cn(styles.item, styles.done)}>
    
          <div className={styles.head}>
          <div className={styles.icon}>
          <img src={Icon} alt="Avatar"  style={{width:"60px",height:"60px"}}/>
            </div>
            <div className={styles.details}>
              <div className={styles.info}>{viewhistory}</div>
            </div>
          </div>
          {/* <button type="submit" className={cn("button-small", styles.button)} onClick={onClo()}>Done</button> */}
          <center><button type="submit" className={cn("button-small", styles.title)} onClick={()=>window.location.reload()}>ok</button></center>
        </div>

        
            
          
      </div>
    </div>
  );
};

export default FolowStepsdcopy;
