import React from "react";
import cn from "classnames";
import styles from "./FolowSteps.module.sass";
//import Icon from "../../../components/Icon";
import Loader from "../Loader";
//import LoaderCircle from "../../../components/LoaderCircle";

const FolowStepPro = ({ className,onClose}) => {

  return (
    <div className={cn(className, styles.steps)}>
      {/* <h1>{test}</h1> */}
      <div className={cn("h4", styles.title)}></div>
      <div className={styles.list}>

      <div className={cn(styles.item, styles.done)}>
          <div className={styles.head}>
            {/* <div className={styles.icon}>
              <Icon name="upload-file" size="24" />
            </div> */}
            <div className={styles.details}>
          
              <div className={styles.info}>Please Wait..... </div>
              <div className={styles.saving}>                  
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Loader className={styles.loader} />
              </div>          
              
            </div>
          </div>
          
        </div>

        
        
            
          
      </div>
    </div>
  );
};

export default FolowStepPro;
