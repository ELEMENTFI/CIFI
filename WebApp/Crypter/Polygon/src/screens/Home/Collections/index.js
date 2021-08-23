import React from "react";
import { useState,useEffect} from "react";
import cn from "classnames";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import styles from "./Collections.module.sass";
import Icon from "../../../components/Icon";
import firebase from "../../UploadDetails/firebase";
import DropdownEmptyCopy from "../../../components/DropdownEmptyCopy";

//../UploadDetails/firebase
const items = [
  {
    title: "Awesome collection",
    author: "Kennith Olson",
    counter: "28",
    avatar: "/images/content/dhoni image.jpg",
    gallery: [
      "/images/content/dhoni image.jpg",
      "/images/content/dhoni image.jpg",
      "/images/content/dhoni image.jpg",
      "/images/content/dhoni image.jpg",
    ],
  },
  {
    title: "Awesome collection",
    author: "Willie Barton",
    counter: "28",
    avatar: "/images/content/kohli image.jpg",
    gallery: [
      "/images/content/kohli image.jpg",
      "/images/content/kohli image.jpg",
      "/images/content/kohli image.jpg",
      "/images/content/kohli image.jpg",
    ],
  },
  {
    title: "Awesome collection",
    author: "Halle Jakubowski",
    counter: "28",
    avatar: "/images/content/babar.jpeg",
    gallery: [
      "/images/content/babar.jpeg",
      "/images/content/babar.jpeg",
      "/images/content/babar.jpeg",
      "/images/content/babar.jpeg",
    ],
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Collections = () => {
  
const directionOptions = ["Minor League", "Major League","Triangle League","Aryan Shah","Others"];
const [direction, setDirection] = useState(directionOptions[0]);
console.log("sesleague",direction);
const[getImgreffalgobuy,setgetImgreffalgobuy]=useState([]);
console.log("getlt",getImgreffalgobuy)

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

  const dbcallalgobuy=async()=>{
    console.log("inside dbcallalgobuy function")
    
    let req = [];
  
    // if(localStorage.getItem("wallet") === null || localStorage.getItem("wallet") === "0x"){
  
    // }
    //else{
  
    
//      let getalgo=localStorage.getItem("wallet");
      
      //let kreq =[];
      firebase.database().ref("imagerefPolylt").on("value", (data) => {
          
        if (data) {
          data.forEach((d) => {
            //console.log("keycheck",d.key)
            let value=d.val();
            req.push(
              
              {
                title: value.id,
                price: value.priceSet,
                highestBid: value.keyId,
                counter:value.userName ,
                //bid: 'New bid <span role="img" aria-label="fire">🔥</span>',
                bid:value.ownerAddress,
                image: value.imageUrl,
                image2x:value.paramsdb,
                category: value.privatekey,
                categoryText: value.cAddress,
                //purchasing !
                url: value.history,
                league:value.league,
                team:value.team,
                users: [                
                  {
                    avatar: "/images/content/avatar-4.jpg",
                  },
                ],
              },
            
            )
  
            //image:images/content/card-pic-1.jpg
            //image2x: "/images/content/card-pic-1@2x.jpg",
  
            //req.push(d.key)          
          });        
        }
      });
      setgetImgreffalgobuy(req);
    
    
    //console.log("acc",getalgo)
  
  }
  
  useEffect(()=>{dbcallalgobuy()},[])



  return (
    <div className={cn("section-bg", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrapper}>          
          <h3 className={cn("h3", styles.title)}>Hot collections</h3>          
          
          <button className={cn("button-small")} onClick={dbcallalgobuy}>
      <span>Filter</span>
            </button>
            <br></br>
            <br></br>


          {/* <div className={styles.top}>
          <DropdownEmptyCopy
              className={styles.dropdown}
              value={direction}
              setValue={setDirection}
              options={directionOptions}
              //onChange={changeSelectOptionHandler}
            />

<button className={cn("button-small")} onClick={dbcallalgobuy}>
      <span>Filter</span>
            </button>
</div> */}
          <div className={styles.box}>

          
{/* <select  style={{width:"815px"}}>
            <option value='Minor League'>Minor League</option>
            <option value='Major League'>Major League</option>
            <option value='Triangle League'>Triangle League</option>
            <option value='Aryan Shah'>Aryan Shah</option>
            <option value='Others'>Others</option>
          </select>

&nbsp;&nbsp;&nbsp;
          <button className={cn("button-small")} onClick={dbcallalgobuy}>
      <span>Filter</span>
            </button>

<br></br> */}




            
          
            </div>
          

{getImgreffalgobuy === null || getImgreffalgobuy === "" ?(

<div className={styles.inner}>
            <Slider className="collection-slider" {...settings}>

{items.map((x, index) => (
  <Link className={styles.item} to="/search01copy" key={index}>
    <div className={styles.gallery}>
      {x.gallery.map((x, index) => (
        <div className={styles.preview} key={index}>
          <img src={x} alt="Collection" />
        </div>
      ))}
    </div>
    <div className={styles.subtitle}>{x.title}</div>
    <div className={styles.line}>
      <div className={styles.user}>
        <div className={styles.avatar}>
          <img src={x.avatar} alt="Avatar" />
        </div>
        <div className={styles.author}>
          By <span>{x.author}</span>
        </div>
      </div>
      <div className={cn("status-stroke-black", styles.counter)}>
        <span>{x.counter}</span>
      </div>
    </div>
  </Link>
))}
</Slider>
</div>


):(
  <div className={styles.inner}>
            <Slider className="collection-slider" {...settings}>

{getImgreffalgobuy.map((x, index) => (
  <Link className={styles.item} to={{pathname:`/profilecopy`,state:x.bid}}   key={index}>
    
    <div className={styles.gallery}>
    <div className={styles.preview} key={index}>
          <img src={x.image} alt="Collection" />
        </div>
      {/* {x.image.map((x, index) => (
        <div className={styles.preview} key={index}>
          <img src={x} alt="Collection" />
        </div>
      ))} */}
      <div className={styles.preview} key={index}>
          <img src={x.image} alt="Collection" />
        </div>
        <div className={styles.preview} key={index}>
          <img src={x.image} alt="Collection" />
        </div>
        <div className={styles.preview} key={index}>
          <img src={x.image} alt="Collection" />
        </div>
    </div>
    <div className={styles.subtitle}>{x.title}</div>
    <div className={styles.line}>
      <div className={styles.user}>
        <div className={styles.avatar}>
          <img src={x.image} alt="Avatar" />          
        </div>
        <div className={styles.author}>        
          By <span>{x.counter}</span>
        </div>        
      </div>
      <div className={cn("status-stroke-black", styles.counter)}>
        <span>{x.league}</span>              
      </div>      
      
    </div>    
  </Link>
))}

</Slider>
</div>
)}

     </div>         
      </div>
    </div>
  );
};

export default Collections;
