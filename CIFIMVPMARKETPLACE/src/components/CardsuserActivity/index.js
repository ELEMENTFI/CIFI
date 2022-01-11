/* global AlgoSigner */
import React, { useState,useEffect } from "react";
import cn from "classnames";
import styles from "../Card/Card.module.sass"
import Icon from "../Icon";
//import fireDb from "../../screens/UploadDetails/firebase";
//import axios from 'axios';

const CardsuserActivity = ({ className, item ,addresssendcard,linkid}) => 
{

  console.log("CardsuserActivityp",item)
  const divStyle = {
    color: 'blue',
    border: '3px solid rgba(0, 0, 0, 0.10)',
    width:'950px',
    marginTop:'5px'

  };  
  
  
  return (

<div style={divStyle}>              
<div className={styles.users}>              
<h6>{item.id}</h6>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<td onClick={()=> window.open(`https://testnet.algoexplorer.io/tx/${item.id}`, "_blank")} style={{marginLeft:"300px",cursor:"pointer"}}>
<Icon name="share" size="15"/>
</td>
<br></br>
</div>                                           
<div className={styles.status}>                          
{item['tx-type'] === 'axfer' ? (
  <>
  <h6>asset-transfer-transaction</h6>
  <br></br>
  <h6>{item.sender}</h6>
  </>
):(
  <>
  {item['tx-type'] === 'acfg' ? (
    <>
    <h6>asset-config-transaction</h6>
    <br></br>
    <h6>{item.sender}</h6>
    </>
  ):(
    <>
    {item['tx-type'] === 'appl' ? (
      <>
  <h6>application-transaction</h6>
  <br></br>
  <h6>{item.sender}</h6>
  </>
):(
  <>
{item['tx-type'] === 'pay' ? (
  <>
  <h6>close-rewards</h6>
  <br></br>
  <h6>{item.sender}</h6>
  </>
):(
  <></>
)}
</>
)}
    </>  
  )}
</>
)}
</div>        
</div>              
)
};

export default CardsuserActivity;