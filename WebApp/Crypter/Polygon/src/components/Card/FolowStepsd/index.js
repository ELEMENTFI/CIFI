import React from "react";
import cn from "classnames";
import styles from "./FolowSteps.module.sass";
import Icon from "../../../components/Icon";
//import Loader from "../../../components/Loader";
//import LoaderCircle from "../../../components/LoaderCircle";

const FolowStepsd = ({ className,viewhistory}) => {

  console.log("viewh",viewhistory[0].address)
  //console.log("viewasset",viewhistorys)
  const checkasset=(x)=>{

    console.log("checkasset inside")
  
    let url="https://mumbai.polygonscan.com/asset/"+x;

  
    window.open(url);
  }

  const checkaddress=(y)=>{

    console.log("checkasset inside")  
    let url="https://mumbai.polygonscan.com/address/"+y;
    //0xa9CBD39dfA719BA4f713B03dd0F8345Cc2c934dA
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
                <div> 
{/* <h5 style={{cursor:"pointer"}} onClick={e => checkasset(viewhistory[0].asset)}>Asset-Id &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{viewhistory[0].asset}</h5> */}

<h5 style={{cursor:"pointer"}} onClick={e => checkaddress(viewhistory[0].address)}>Contract Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{(viewhistory[0].address).slice(0,10)}....</h5>

<h5 style={{cursor:"pointer"}} onClick={e => checkaddress(viewhistory[0].owaddress)}>Creator Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{(viewhistory[0].owaddress).slice(0,10)}....</h5>
</div>
                {/* {viewhistory.map((x, index) => ( 
                              
                    <div> 
<h5 style={{cursor:"pointer"}} onClick={e => checkasset(x.asset)}>Asset-Id &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{x.asset}</h5>
{x.address.map((y,index)=>(
<>

  <h5 style={{cursor:"pointer"}} onClick={e => checkaddress(y)}> Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {y.slice(0,15)}...</h5>                   
  
                   
</>
))}
               </div>
              ))} */}
              </tbody>
                </div>                            
            </div>
          </div>
          
          {/* <button type="submit" className={cn("button-small", styles.button)} >Done</button> */}
          {/* <button type="submit" onClick={()=>dones()}>Start nowss</button> */}
        </div>                  
      </div>
    </div>
  );
};

export default FolowStepsd;
