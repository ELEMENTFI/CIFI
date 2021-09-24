import React,{useState} from "react";
import cn from "classnames";
import styles from "./Itemsss.module.sass";
//import styles from "./Itemss.module.sass";
import Cardss from "../../../components/Cardss";
import Loader from "../../../components/Loader";
import Cards from "../../../components/Cards";
import CardsCollection from "../../../components/CardsCollection";

const Itemssss = ({ className, items,items2,items3,items4 }) => {
  const [getA,setA] = useState("Player");

  console.log("Aprint",getA)

  console.log("items",items)
  return (
    
    <div className={cn(styles.items, className)}>
      <br></br><br></br><br></br><br></br>
      <div className={styles.list}>
        
        &nbsp;&nbsp;&nbsp;&nbsp;
      <button className={cn("button-stroke button-small")} onClick={()=>setA("Player")}>
      <span>Player</span>
            </button>
            &nbsp;

            <button className={cn("button-stroke button-small")} onClick={()=>setA("Trophy")}>
      <span>Trophy</span>
            </button>
            &nbsp;
            
            <button className={cn("button-stroke button-small")} onClick={()=>setA("Award")}>
      <span>Award</span>
            </button>
            &nbsp;

            <button className={cn("button-stroke button-small")} onClick={()=>setA("Others")}>
      <span>Others</span>
            </button>
            
      <br></br>
      <br></br>
      
      {getA === "Player" ? (
<>


        {items.map((x, index) => (            
                    // {console.log("itcheck",x.type)}
          <CardsCollection className={styles.card} item={x} key={index} />           
        ))}
        </>
      ):(
        <>

{getA === "Award" ? (
<>
{items2.map((x, index) => (
             
             // {console.log("itcheck",x.type)}
   <CardsCollection className={styles.card} item={x} key={index} /> 
 ))}

</>
):(  
<>
{getA === "Trophy" ? (
<>
{items3.map((x, index) => (
             
             // {console.log("itcheck",x.type)}
   <CardsCollection className={styles.card} item={x} key={index} /> 
 ))}

</>
):(
<>
{getA === "Others" ? (
<>
{items4.map((x, index) => (
             
             // {console.log("itcheck",x.type)}
   <CardsCollection className={styles.card} item={x} key={index} /> 
 ))}

</>
):(
<>
</>
)}
</>
)}

</>
)}
</>
      )}

      </div>
      <Loader className={styles.loader} />
    </div>
  );
};

export default Itemssss;
