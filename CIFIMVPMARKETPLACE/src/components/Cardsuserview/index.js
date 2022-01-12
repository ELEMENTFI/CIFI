/* global AlgoSigner */
import React, { useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
//import styles from "../Card.module.sass";
import styles from "../Card/Card.module.sass"
import Icon from "../Icon";
import fireDb from "../../screens/UploadDetails/firebase";
import { Refresh } from "@material-ui/icons";
//import axios from 'axios';

const Cardsuserview = ({ className, item ,addresssendcard}) => {
  const divStyle = {
    color: 'blue',
    border: '3px solid rgba(0, 0, 0, 0.10)',
  };
  const [visible, setVisible] = useState(true);
  //setVisible(!visible)

  const dislikedb=()=>{
    if(addresssendcard === null || addresssendcard === "0x")
    {
    }
    else{
    let getalgo=addresssendcard;
    console.log("addlikedb function call");
    console.log("getalgo",getalgo)
    console.log("idget",item.highestBid)
    fireDb.database().ref(`imagereflikes2/${getalgo}`).child(item.highestBid).remove().then(()=>{
        //setVisible(!visible)
        window.location.reload(false)       
     })
    }
  }
  const Refreshmetadata=()=>{
    //'darkMode';
    localStorage.setItem("storageKey","true");
    window.location.reload(false)    
    //alert("Refresh Metadata")    
  }
  
  return (
    <div className={cn(styles.card, className)}>
      <div style={divStyle}>        
      {/* <h4 style={{color:"black",marginTop:"3px",
    marginLeft:"185px",
    cursor:"true"
     }}>Refresh</h4> */}
      <div className={styles.users}>
        
              {item.users.map((x, index) => (                
                
                <div className={styles.avatar} key={index}>                                  
                  <img src={x.avatar} alt="Avatar" onClick={()=>{alert("hello ")}}/>                                                                                      
                </div>                          
       
       ))}               
{/*        
             <div
    style={{ 
    marginTop:"10px",
    marginLeft:"185px", 
    width: "10px",
    height: "10px",
    background:"white",
    mozborderradius: "1px",
    webkitborderradius: "3px",
    borderradius: "3px"  
    }} >

    
</div> */}
     
<h3 style={{color:"black",marginTop:"3px",
    marginLeft:"180px",
    cursor:"true"
     }} onClick={()=>{Refreshmetadata()}}>...</h3>
            </div>                        
       

            
      <div className={styles.status}>                          
        </div>        
      <div className={styles.preview}>        
        <img srcSet={`${item.image2x} 2x`} src={item.image} alt="Card" style={{width:"200px",height:"150px",marginLeft:"20px",marginRight:"20px"}}/>
        {/* <div className={styles.control}>             */}
          <div
            className={cn(
              { "status-green": item.category === "green" },
              styles.category
            )}
          >              
            {/* {item.categoryText} */}
          </div>
          <button
            className={cn(styles.favorite, { [styles.active]: visible })}            
            onClick={dislikedb}            
            // ()=>setVisible(!visible)
          >
            <Icon name="heart" size="20" />
          </button>
          {/* <button
            className={cn(styles.favorite, { [styles.active]: visible })}
            onClick={dislikedb}
             //()=>setVisible(!visible)
          >
            <Icon name="heart" size="20" />
          </button> */}
           {/* <button className={cn("button-small", styles.button)} >
            <span>Place a sale</span>
            <Icon name="scatter-up" size="16" />
          </button>  */}
        {/* </div>         */}
      </div>
      <br></br>
      {/* onClick={buynftapp} */}
      {item.price ?         
       <>
       <button className={cn("button-small")} style={{marginLeft:"20px",marginRight:"3px"}}>
      <span>BUY</span>      
    </button>
    <button className={cn("button-small")}style={{marginRight:"3px"}}>
      <span>Share</span>      
    </button>
    <button className={cn("button-small")}>
      <span>Report</span>      
    </button>
    
       </> :
       <>
       </>        
}
      <Link className={styles.link} to={item.url} style={{marginLeft:"20px",marginRight:"20px"}}>
        <div className={styles.body}>
          <div className={styles.line}>
          </div>
          <div className={styles.line}>            
            <div className={styles.counter} >{item.counter}</div>
          </div>
        </div>        
      </Link>
      </div>
    </div>
  );
};

export default Cardsuserview;
