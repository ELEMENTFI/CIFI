import React from "react";
import cn from "classnames";
import styles from "./FolowSteps.module.sass";
import Icon from "../../../components/Icon";
//import Loader from "../../../components/Loader";
//import LoaderCircle from "../../../components/LoaderCircle";

const FolowStepsd = ({ className,viewhistory}) => {

  console.log("viewh",viewhistory)
  //console.log("viewasset",viewhistorys)
  const checkasset=(x)=>{

    console.log("checkasset inside")
  
    let url="https://testnet.algoexplorer.io/asset/"+x;
    window.open(url);
  }

  const checkaddress=(y)=>{

    console.log("checkasset inside")  
    let url="https://testnet.algoexplorer.io/address/"+y;
    window.open(url);

  }
  
  
  
  return (
    <div className={cn(className, styles.steps)}>
      {/* <h1>{test}</h1> */}
      <div className={cn("h4", styles.title)}>Asset History</div>
      <div className={styles.list}>

      <div className={cn(styles.item, styles.done)}>
          <div className={styles.head}>
            {/* <div className={styles.icon}>
              <Icon name="upload-file" size="24" />
            </div> */}
            <div className={styles.details}>
              <div className={styles.info}>
                {/* <h1>{viewhistory()}</h1> */}

                <tbody>
                {viewhistory.map((x, index) => ( 
                              
                    <div> 
<h5 style={{cursor:"pointer"}} onClick={e => checkasset(x.asset)}>Asset-Id &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{x.asset}</h5>
{x.address.map((y,index)=>(
<>

  <h5 style={{cursor:"pointer"}} onClick={e => checkaddress(y)}> Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {y.slice(0,15)}...</h5>                   
  
                   
</>
))}
               </div>
              ))}
              </tbody>
                </div>                            
            </div>
          </div>
          
          {/* <button type="submit" className={cn("button-small", styles.button)} onClick={viewhistory()}>Done</button> */}
          {/* <button type="submit" onClick={()=>dones()}>Start nowss</button> */}
        </div>                  
      </div>
    </div>
  );
};

export default FolowStepsd;
