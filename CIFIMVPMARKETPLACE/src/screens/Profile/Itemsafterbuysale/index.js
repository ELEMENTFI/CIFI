import React from "react";
import cn from "classnames";
import styles from "./Items.module.sass";
import Cardaftersale from "../../../components/Cardaftersale";
import Loader from "../../../components/Loader";

const Itemsafterbuysale = ({ className, items }) => {
  console.log("items",items)
  return (
    <div className={cn(styles.items, className)}>
      <div className={styles.list}>
      
        {items.map((x, index) => (
          <Cardaftersale className={styles.card} item={x} key={index} />
        ))}
      </div>
      <Loader className={styles.loader} />
    </div>
  );
};

export default Itemsafterbuysale;
