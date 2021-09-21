import React,{useEffect,useState} from "react";
import cn from "classnames";
import Slider from "react-slick";
import styles from "./HotBid.module.sass";
import Icon from "../Icon";
import Card from "../Card";
import firebase from "../../screens/UploadDetails/firebase";

// data
import { bids } from "../../mocks/bids";
import Cards from "../Cards";

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const navLinks = ["All items", "Art", "Game", "Photography", "Music", "Video"];

const Hot = ({ classSection }) => {

  const items = [
    {
      title: "Chicago Blasters",
      content: "Highest bid",
      counter: "18 in stock",
      price: "1.125Algos",
      url: "/search01",
      avatar: "/images/Chicago Blasters.png",
      image: "/images/Chicago Blasters.png",
      image2x: "/images/Chicago Blasters.png",
      highestBid: "",
      bid:"",
      category: "green",
      categoryText: "",
      users: [                
        {
          avatar: "/images/Chicago Blasters.png",
        },
      ],
    },
    {
      title: "Morrisville Cardinals",
      content: "1 of 12",
      price: "0.27Algos",
      url: "/search01",
      avatar: "/images/Morrisville Cardinals.png",
      image: "/images/Morrisville Cardinals.png",
      image2x: "/images/Morrisville Cardinals.png",
      highestBid: "",
      counter:"",
      bid:"",
      category: "green",
      categoryText: "",
      users: [                
        {
          avatar: "/images/Morrisville Cardinals.png",
        },
      ],
    },
    {
      title: "Empire State Titans",
      content: "1 of 3",
      price: "0.27Algos",
      url: "/search01",
      avatar: "/images/Empire State Titans.png",
      image: "/images/Empire State Titans.png",
      image2x: "/images/Empire State Titans.png",
      highestBid: "",
      counter:"",
      bid:"",
      category: "green",
      categoryText: "",
      users: [                
        {
          avatar: "/images/Empire State Titans.png",
        },
      ],
    },
    {
      
      title: "Silicon Valley Strikers",
      content: "1 of 4",
      price: "0.27Algos",
      url: "/search01",
      avatar: "/images/Silicon Valley Strikers.png",
      image: "/images/Silicon Valley Strikers.png",
      image2x: "/images/Silicon Valley Strikers.png",
      highestBid: "",
      counter:"",
      bid:"",
      category: "green",
      categoryText: "",
      users: [                
        {
          avatar: "/images/Silicon Valley Strikers.png",
        },
      ],
    },
  ];

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
              {items.map((x, index) => (
                <Cards key={index} className={styles.card} item={x} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hot;
