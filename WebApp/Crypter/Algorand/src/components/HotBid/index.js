import React,{useEffect,useState} from "react";
import cn from "classnames";
import Slider from "react-slick";
import styles from "./HotBid.module.sass";
import Icon from "../Icon";
import Card from "../Card";
import firebase from "../../screens/UploadDetails/firebase";

// data
import { bids } from "../../mocks/bids";

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const navLinks = ["All items", "Art", "Game", "Photography", "Music", "Video"];

const Hot = ({ classSection }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
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
        breakpoint: 1179,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
    ],
  };

  const sortingOptions = [];
  navLinks.map((x) => sortingOptions.push(x));

  const[getI,setgetI]=useState([]);
  console.log("getImgal",getI)

  const[getIm,setgetIm]=useState([]);
  console.log("getImgalgosss",getIm)

  const dbcallsaleal=async(index)=>{
    //setActiveIndex(index)
    console.log("inside dbcallsalealgo function")
    let getalgo=localStorage.getItem("walletalgo");
    //let req = [];
  
    if(getalgo === ""){
  
    }else{

      //let req = [];
    let req2 = [];//imagerefexplore//
    firebase.database().ref("imagerefexploreone").on("value", (data) => {
      if (data) {
        data.forEach((d) => {
          req2.push(d.val())          
        });        
      }
      
    });
    
    setgetIm(req2)

    let req=[];

    getIm.map((a)=>{
      console.log(`abb`, a)    
      Object.keys(a).map((b)=>{

        console.log(a[b].id);
                req.push({
                title: a[b].id,
                price: a[b].priceSet,
                highestBid: a[b].keyId,
                counter:a[b].userName ,
                //bid: 'New bid <span role="img" aria-label="fire">🔥</span>',
                bid:a[b].ownerAddress,
                image: a[b].imageUrl,
                image2x: a[b].imageUrl,
                category: "green",
                categoryText: a[b].cAddress,
                //purchasing !
                url: "/",
                users: [                
                  {
                    avatar: "/images/content/avatar-4.jpg",
                  },
                ],
              })
              
      })      
      setgetI(req)    
    })    
    console.log("cfbbba",req) 
    
  }
  
}
  useEffect(()=>{dbcallsaleal()},[])

  return (
     <div className={cn(classSection, styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrapper}>
          <h3 className={cn("h3", styles.title)}>Hot bid</h3>
          <div className={styles.inner}>
            <Slider className="bid-slider" {...settings}>
              {bids.map((x, index) => (
                <Card key={index} className={styles.card} item={x} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hot;
