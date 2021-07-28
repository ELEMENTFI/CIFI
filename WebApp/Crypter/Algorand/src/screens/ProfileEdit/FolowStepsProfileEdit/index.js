import React from "react";
import cn from "classnames";
import styles from "./FolowSteps.module.sass";
import Icon from "../../../components/Icon";
//import Loader from "../../../components/Loader";
//import LoaderCircle from "../../../components/LoaderCircle";

const FolowStepsProfileEdit = ({ className,onClose}) => {

  return (
    <div className={cn(className, styles.steps)}>
      {/* <h1>{test}</h1> */}
      <div className={cn("h4", styles.title)}>Notification</div>
      <div className={styles.list}>

      <div className={cn(styles.item, styles.done)}>
          <div className={styles.head}>
            <div className={styles.icon}>
              <Icon name="upload-file" size="24" />
            </div>
            <div className={styles.details}>
              <div className={styles.info}>Profile Updated</div>
              
            </div>
          </div>
          <button type="submit" className={cn("button done", styles.button)} onClick={onClose()}>Done</button>
          {/* <button type="submit" onClick={()=>dones()}>Start nowss</button> */}
          {/* onClick={onClo()} */}
        </div>

        
        
            
          
      </div>
    </div>
  );
};

export default FolowStepsProfileEdit;
