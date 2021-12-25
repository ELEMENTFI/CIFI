import React from "react";
import cn from "classnames";
import styles from "./Itemss.module.sass";
import Cards from "../../../components/Cards";
import Loader from "../../../components/Loader";
import Cardsuserview from "../../../components/Cardsuserview";
import Cardsuserviewcreated from "../../../components/Cardsuserviewcreated";

const Itemsscreated = ({ className, items,addresssend }) => {
  console.log("items",items)  
  return (
    <div className={cn(styles.items, className)}>      
      <div className={styles.list}>      
        {items.map((x, index) => (
          <Cardsuserviewcreated className={styles.card} item={x} key={index} addresssendcard={addresssend} />
        ))}      
      </div>
      {/* <Loader className={styles.loader} /> */}
    </div>
  );
};

export default Itemsscreated;
