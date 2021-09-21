import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Discover.module.sass";
import { Range, getTrackBackground } from "react-range";
import Slider from "react-slick";
import Icon from "../../../components/Icon";
//import Card from "../../../components/Card";
import Dropdown from "../../../components/Dropdown";
import firebase from "../../UploadDetails/firebase"
//import firebase from "../UploadDetails/firebase";
// data
//import { bids } from "../../../mocks/bids";
//import CardBuy from "../../../components/CardBuy";
import CardDiscover from "../../../components/CardDiscover";

const navLinks = ["All items", "Art", "Game", "Photography", "Music", "Video"];

const dateOptions = ["Recently added", "Long added"];
const priceOptions = ["Highest price", "The lowest price"];
const likesOptions = ["Most liked", "Least liked"];
const creatorOptions = ["Verified only", "All", "Most liked"];
const sortingOptions = [];
navLinks.map((x) => sortingOptions.push(x));

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Discover = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [date, setDate] = useState(dateOptions[0]);
  const [price, setPrice] = useState(priceOptions[0]);
  const [likes, setLikes] = useState(likesOptions[0]);
  const [creator, setCreator] = useState(creatorOptions[0]);
  const [sorting, setSorting] = useState(sortingOptions[0]);

  const [values, setValues] = useState([5]);
  const [visible, setVisible] = useState(false);

  const[getI,setgetI]=useState([]);
  console.log("getImgal",getI)

  const[getIm,setgetIm]=useState([]);
  console.log("getImgalgosss",getIm)


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

  const dbcallsaleal=async(index)=>{
    setActiveIndex(index)
    console.log("inside dbcallsalealgo function")


    if(localStorage.getItem("walletalgo") === null || localStorage.getItem("walletalgo") === "0x"){

    }
    else{

    
    let getalgo=localStorage.getItem("walletalgo");
    //let req = [];
  
    if(getalgo === ""){
  
    }else{

      //let req = [];
    let req2 = [];//imagerefexplore//
    firebase.database().ref("imagerefexploreoneAlgos").on("value", (data) => {
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
}
  useEffect(()=>{dbcallsaleal()},[])

  const STEP = 0.1;
  const MIN = 0.01;
  const MAX = 10;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 100000,
        settings: "unslick",
      },
    ],
  };

  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <h3 className={cn("h3", styles.title)}>Discover</h3>
        <div className={styles.top}>
          <div className={styles.dropdown}>
            <Dropdown
              className={styles.dropdown}
              value={date}
              setValue={setDate}
              options={dateOptions}
            />
          </div>
          <div className={styles.nav}>
            {navLinks.map((x, index) => (
              <button
                className={cn(styles.link, {
                  [styles.active]: index === activeIndex,
                })}
                onClick={() =>
                dbcallsaleal()  
                }
                key={index}
              >
                {x}
              </button>
            ))}
          </div>
          <div className={cn("tablet-show", styles.dropdown)}>
            <Dropdown
              className={styles.dropdown}
              value={sorting}
              setValue={setSorting}
              options={sortingOptions}
            />
          </div>
          <button
            className={cn(styles.filter, { [styles.active]: visible })}
            onClick={() => setVisible(!visible)}
          >
            <div className={styles.text}>Filter</div>
            <div className={styles.toggle}>
              <Icon name="filter" size="18" />
              <Icon name="close" size="10" />
            </div>
          </button>
        </div>
        <div className={cn(styles.filters, { [styles.active]: visible })}>
          <div className={styles.sorting}>
            <div className={styles.cell}>
              <div className={styles.label}>Price</div>
              <Dropdown
                className={styles.dropdown}
                value={price}
                setValue={setPrice}
                options={priceOptions}
              />
            </div>
            <div className={styles.cell}>
              <div className={styles.label}>likes</div>
              <Dropdown
                className={styles.dropdown}
                value={likes}
                setValue={setLikes}
                options={likesOptions}
              />
            </div>
            <div className={styles.cell}>
              <div className={styles.label}>creator</div>
              <Dropdown
                className={styles.dropdown}
                value={creator}
                setValue={setCreator}
                options={creatorOptions}
              />
            </div>
            <div className={styles.cell}>
              <div className={styles.label}>Price range</div>
              <Range
                values={values}
                step={STEP}
                min={MIN}
                max={MAX}
                onChange={(values) => setValues(values)}
                renderTrack={({ props, children }) => (
                  <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{
                      ...props.style,
                      height: "27px",
                      display: "flex",
                      width: "100%",
                    }}
                  >
                    <div
                      ref={props.ref}
                      style={{
                        height: "8px",
                        width: "100%",
                        borderRadius: "4px",
                        background: getTrackBackground({
                          values,
                          colors: ["#3772FF", "#E6E8EC"],
                          min: MIN,
                          max: MAX,
                        }),
                        alignSelf: "center",
                      }}
                    >
                      {children}
                    </div>
                  </div>
                )}
                renderThumb={({ props, isDragged }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: "24px",
                      width: "24px",
                      borderRadius: "50%",
                      backgroundColor: "#3772FF",
                      border: "4px solid #FCFCFD",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "-33px",
                        color: "#fff",
                        fontWeight: "600",
                        fontSize: "14px",
                        lineHeight: "18px",
                        fontFamily: "Poppins",
                        padding: "4px 8px",
                        borderRadius: "8px",
                        backgroundColor: "#141416",
                      }}
                    >
                      {values[0].toFixed(1)}
                    </div>
                  </div>
                )}
              />
              <div className={styles.scale}>
                <div className={styles.number}>0.01 Algos</div>
                <div className={styles.number}>10 Algos</div>
              </div>
            </div>
          </div>
        </div>
        <Link className={styles.card} to={"/search01"}>
        <div className={styles.list}>
          <Slider
            className={cn("discover-slider", styles.slider)}
            {...settings}
          >
            {items.map((x, index) => (
              
              <CardDiscover className={styles.card} item={x} key={index} />
            
            ))}
          </Slider>
        </div>
        </Link>
        
        {/* <div className={styles.btns}>
          <button className={cn("button-stroke button-small", styles.button)}>
            <span>Load more</span>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Discover;
