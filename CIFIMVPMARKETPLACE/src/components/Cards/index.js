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

    if(localStorage.getItem("walletalgo") === null || localStorage.getItem("walletalgo") === "0x")
    {

    }
    else{

    
   
    let getalgo=localStorage.getItem("walletalgo");
    console.log("addlikedb function call");

    console.log("getalgo",getalgo)
    console.log("idget",item.highestBid)

    fireDb.database().ref(`imagereflikes/${getalgo}`).child(item.highestBid).remove().then(()=>{

        //setVisible(!visible)
        window.location.reload(false)   
    
     })
    }

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
          >
            <Icon name="heart" size="20" />
          </button>
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
                </div>
              ))}
            </div>            
          </div>
        </div>
        <div className={styles.foot}>
          <div className={styles.status}>
          </div>          
        </div>
      </Link>
    </div>
  );
};

export default Cards;
