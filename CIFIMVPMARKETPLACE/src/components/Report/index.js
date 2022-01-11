import React, { useState } from "react";
import cn from "classnames";
import styles from "./Report.module.sass";
import TextArea from "../TextArea";
import fireDb from '../../screens/./UploadDetails/./firebase';

const Report = ({ className,addressreport}) => {
  const [reportget,reportset]=useState("");
  console.log("reportget",reportget)
  const reportdata=async()=>{
    if(reportget === null ||reportget === undefined || reportget === "")
    {

    }
    else{
          let ref2=fireDb.database().ref(`imageref/${localStorage.getItem("wallet")}`);
          let dateset=new Date().toDateString();
          console.log("dateget",dateset)
          const db = ref2.push().key;                         
          console.log("dbcheck",db)
          ref2.child(db).set({id:"",reportaddress:addressreport,keyId:db,
          reporteraddress:localStorage.getItem("wallet"),extra1:"",datesets:dateset,
          reason:reportget}).then(()=>{
            alert("Reported sent successfully...")
            window.location.reload(false)
          })
        }
  }
  return (
    <div className={cn(className, styles.transfer)}>
      <div className={cn("h4", styles.title)}>Report</div>
      <div className={styles.text}>
        Describe why you think this item should be removed from marketplace
      </div>
      <TextArea
        className={styles.field}
        label="message"
        name="Message"
        placeholder="Tell us the details"
        required="required"
        onChange={event => reportset(event.target.value)}
      />
      <div className={styles.btns}>
        <button className={cn("button", styles.button)} onClick={()=>reportdata()}>Send now</button>
        <button className={cn("button-stroke", styles.button)}>Cancel</button>
      </div>
    </div>
  );
};

export default Report;
