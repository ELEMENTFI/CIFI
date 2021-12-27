import React from "react";
import cn from "classnames";
import styles from "./FolowSteps.module.sass";
//import Icon from "../../../components/Icon";
//import Loader from "../../../components/Loader";
//import LoaderCircle from "../../../components/LoaderCircle";
import { useState } from "react";
//import fireDb from '../../UploadDetails/firebase';


const FolowStepsList = ({ className,data,datas}) => {
  //console.log("listfollow",data[0].address)

  const [folow, setfolow] = useState("");
  const [aset, asetis] = useState(false);
  console.log("listfollow",folow)

  
  return (
    <div >
      {/* <h1>{test}</h1> */}
      <div ></div>
      <div >

      <div >
          <div >
            {/* <div className={styles.icon}>
              <Icon name="upload-file" size="24" />
            </div> */}
            <div >            
               {data.map((x) => (
                    // <h6 style={{cursor:"pointer",color:bgcolor}} onClick={()=>boxClick()}>{x.address}</h6>))}               
                    <>
                    <h6  className={cn(styles.details)} style={{cursor:"pointer",color:'#2a7cda'}} onClick={()=>{(datas(x.address)) 
                    localStorage.setItem("wallet",x.address)
                    }}>{x.address.slice(0,15)}....{x.address.slice(48,58)}</h6>
                    {/*  {x.address}</h6>                 */}
                    </>
                    ))}                             
                    
            </div>            
          </div>
          {/* onClick={onPrint(x.address)} */}
          {/* <button type="submit" className={cn("button-small", styles.button)} onClick={onClo()}>Done</button> */}
          {/* <button type="submit" onClick={()=>dones()}>Start nowss</button> */}
        </div>          
      </div>
    </div>
  );
};

export default FolowStepsList;
