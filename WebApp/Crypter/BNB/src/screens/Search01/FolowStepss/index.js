import React from "react";
import cn from "classnames";
import styles from "./FolowSteps.module.sass";
import Icon from "../../../components/Icon";
import Loader from "../../../components/Loader";
//import LoaderCircle from "../../../components/LoaderCircle";

const FolowStepss = ({ className,onSub}) => {
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
              <div className={styles.info}>Loading........</div>              
            </div>
          </div>
          {/* <button type="submit" className={cn("button done", styles.button)} onClick={onSubmitNFT()}>Done</button> */}
          {/* <button className={cn("button", styles.button)} onClick={onSub()}>Done</button> */}
          {/* <button type="submit" onClick={()=>dones()}>Start nowss</button> */}
        </div>
        <div className={styles.saving}>
                  <span>Auto saving</span>
                  <Loader className={styles.loader} />
                </div>
        
          {/* <button className={cn("button disabled", styles.button)}>
            Start now
          </button> */}
          </div>
          </div>
  );
};

export default FolowStepss;
