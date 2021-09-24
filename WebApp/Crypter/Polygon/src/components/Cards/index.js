/* global AlgoSigner */
import React, { useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
//import styles from "../Card.module.sass";
import styles from "../Card/Card.module.sass"
import Icon from "../Icon";
import fireDb from "../../screens/UploadDetails/firebase";
//import axios from 'axios';

const Cards = ({ className, item }) => {
  const [visible, setVisible] = useState(true);
  //setVisible(!visible)

  const dislikedb=()=>{
   
    let getalgo=localStorage.getItem("walletalgo");
    console.log("addlikedb function call");

    console.log("getalgo",getalgo)
    console.log("idget",item.highestBid)

    fireDb.database().ref(`imagereflikes/${getalgo}`).child(item.highestBid).remove().then(()=>{

        //setVisible(!visible)
        window.location.reload(false)   
    
     })
    

  }

  return (
    <div className={cn(styles.card, className)}>
      <div className={styles.preview}>
        
        <img srcSet={`${item.image2x} 2x`} src={item.image} alt="Card" />
        <div className={styles.control}>
            
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
          </button>  */}
           
           {/* <button className={cn("button-small", styles.button)} >
            <span>Place a sale</span>
            <Icon name="scatter-up" size="16" />
          </button>  */}
        </div>
        
      </div>
      <br></br>
      {item.price ? 
        
       <div></div> :
       <div></div>
        
}
      <Link className={styles.link} to={item.url}>
        <div className={styles.body}>
          <div className={styles.line}>

          </div>
          <div className={styles.line}>
            <div className={styles.users}>
              {item.users.map((x, index) => (
                <div className={styles.avatar} key={index}>
                  {/* <img src={x.avatar} alt="Avatar" /> */}
                  
                </div>
              ))}
            </div>
            {/* <div className={styles.counter}>{item.counter}</div> */}
          </div>
        </div>
        <div className={styles.foot}>
          <div className={styles.status}>
            
            
            {/* <Icon name="candlesticks-up" size="20" ></Icon> */}
            {/* <button type="button">set price</button> */}
            
            
            {/* Highest bid <span>{item.highestBid}</span> */}
          </div>
          {/* <div
            className={styles.bid}
            dangerouslySetInnerHTML={{ __html: item.bid }}
          /> */}
        </div>
      </Link>
    </div>
  );
};

export default Cards;
