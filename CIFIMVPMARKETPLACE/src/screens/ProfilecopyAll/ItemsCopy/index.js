import React from "react";
import cn from "classnames";
import styles from "./Items.module.sass";
import Loader from "../../../components/Loader";
import CardcopyAll from "../../../components/CardcopyAll";
import Card from "../../../components/Card";

const ItemsCopy = ({ className, items }) => {
  console.log("items",items)
  return (
    <div className={cn(styles.items, className)}>
      <div className={styles.list}>      
        {items.map((x, index) => (
          <>
          {console.log("itemcopy",x)}
          <CardcopyAll className={styles.card} item={x} key={index} />
          </>
        ))}
      </div>
      <Loader className={styles.loader} />
    </div>
  );
};

export default ItemsCopy;
