import React, { useState,useEffect} from "react";
import cn from "classnames";
import styles from "./Followers.module.sass";
import Loader from "../../../components/Loader";
import Cards from "../../../components/Cards";
import Slider from "react-slick";
import Icon from "../../../components/Icon";

const Followerscopy = ({ className, items,items2,items3,items4 }) => {
  const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
    <button {...props}>{children}</button>
  );
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <SlickArrow>
        <Icon name="arrow-next" size="14" />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon name="arrow-prev" size="14" />
      </SlickArrow>
    ),
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [getA,setA] = useState("Player");

  console.log("Aprint",getA)

  //onClick={dbcallalgobuy}
  // const commondbcall=(a)=>{
  //   console.log("aFollowcopy",a)
  //   if(a=== "Player"){

  //   }else if(a=== "trophy"){

  //   }
  //   else if(a === "Award"){

  //   }
  //   else{

  //   }
  // }
  return (
    <>
    
    <div className={cn(styles.followers, className)}>
      <div className={styles.list}>
      <button className={cn("button-small")} onClick={()=>setA("Player")}>
      <span>Player</span>
            </button>
            &nbsp;

            <button className={cn("button-small")} onClick={()=>setA("Trophy")}>
      <span>Trophy</span>
            </button>
            &nbsp;

            <button className={cn("button-small")} onClick={()=>setA("Award")}>
      <span>Award</span>
            </button>
            &nbsp;

            <button className={cn("button-small")} onClick={()=>setA("Others")}>
      <span>Others</span>
            </button>
            

      </div>
      <Loader className={styles.loader} />
    </div>


    <br></br>    
<div className={styles.inner}>
           <Slider className="collection-slider" {...settings}>  
				</Slider>
		</div>


<br></br>
     
{getA === "Player" ? (
  <>
  <div className={cn("section-bg", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrapper}>                
          <div className={styles.box}>                   
            </div>         
<div className={cn(styles.items, className)}>
      <div className={styles.list}>
      
        {items.map((x, index) => (
                    <>
                    {console.log("itcheck",x.type)}
          <Cards className={styles.card} item={x} key={index} />
          </>
        ))}
      </div>
      <Loader className={styles.loader} />
    </div>
    </div>         
      </div>
    </div>

  </>
) : (
  <>
  {getA === "Award" ? (
    <>

    </>
  ) : (
    <>
    {getA === "Trophy" ? (
      <>

      </>
    ) : (
      <>

  </>
    )}
  </>
  )}
  </>
)}


</>
  );
};

export default Followerscopy;
