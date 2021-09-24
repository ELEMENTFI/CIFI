import React from "react";
import { useState,useEffect} from "react";
import cn from "classnames";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import styles from "./Collections.module.sass";
import Icon from "../../../components/Icon";
import firebase from "../../UploadDetails/firebase";
//import DropdownEmptyCopy from "../../../components/DropdownEmptyCopy";

//../UploadDetails/firebase
const items = [
  {
    title: "Atlanta Fire",
    author: "Atlanta Fire",
    counter: "28",
    avatar: "/images/AtlantaFire.png",
  },
  {
    title: "Atlanta Param Veers",
    author: "Atlanta Param Veers",
    counter: "28",
    avatar: "/images/AtlantaParamVeers.png",
  },
  {
    title: "Florida Beamers",
    author: "Florida Beamers",
    counter: "28",
    avatar: "/images/FloridaBeamers.png",
    
  },
  {
    title: "Ft. Lauderdale Lions",
    author: "Ft. Lauderdale Lions",
    counter: "28",
    avatar: "/images/FT.LauderdaleLions.png",
  },
  {
    title: "Morrisville Cardinals",
    author: "Morrisville Cardinals",
    counter: "28",
    avatar: "/images/MorrisviCardinals.png",
  },
  {
    title: "Orlando Galaxy",
    author: "Orlando Galaxy",
    counter: "28",
    avatar: "/images/OrlandoGalaxy.png",
  },
  {
    title: "DC Hawks",
    author: "DC Hawks",
    counter: "28",
    avatar: "/images/DcHawks.png",  
  },
  {
    title: "Empire State Titans",
    author: "Empire State Titans",
    counter: "28",
    avatar: "/images/EmpireStateTitans.png",  
  },
  {
    title: "Manhattan Yorkers",
    author: "Manhattan Yorkers",
    counter: "28",
    avatar: "/images/ManhattanYorkers.png",  
  },
  {
    title: "New England Eagles",
    author: "New England Eagles",
    counter: "28",
    avatar: "/images/NewEnglandEagles.png",    
  },
  {
    title: "New Jersey Somerset Cavaliers",
    author: "New Jersey Somerset Cavaliers",
    counter: "28",
    avatar: "/images/NewJerseySomersetCavaliers.png",    
  },
  {
    title: "New Jersey Stallions",
    author: "New Jersey Stallions",
    counter: "28",
    avatar: "/images/NewJerseyStallions.png",    
  },
  {
    title: "The Philadelphians",
    author: "The Philadelphians",
    counter: "28",
    avatar: "/images/ThePhiladelphians.png",    
  },
  {
    title: "Austin Athletics",
    author: "Austin Athletics",
    counter: "28",
    avatar: "/images/AustinAthletics.png",
  },
  {
    title: "Chicago Blasters",
    author: "Chicago Blasters",
    counter: "28",
    avatar: "/images/ChicagoBlasters.png",  
  },
  {
    title: "Chicago Catchers",
    author: "Chicago Catchers",
    counter: "28",
    avatar: "/images/ChicagoCatchers.png",    
  },
  {
    title: "Houston Hurricanes",
    author: "Houston Hurricanes",
    counter: "28",
    avatar: "/images/HoustonHurricanes.png",    
  },
  {
    title: "Irving Mustangs",
    author: "Irving Mustangs",
    counter: "28",
    avatar: "/images/IrvingMustangs.png",    
  },
  {
    title: "Michigan Cricket Stars",
    author: "Michigan Cricket Stars",
    counter: "28",
    avatar: "/images/MichiganCricketStars.png",    
  },
  {
    title: "St. Louis Americans",
    author: "St. Louis Americans",
    counter: "28",
    avatar: "/images/ST.LouisAmericans.png",    
  },
  {
    title: "East Bay Blazers",
    author: "East Bay Blazers",
    counter: "28",
    avatar: "/images/EastBayBlazers.png",    
  },
  {
    title: "Golden State Grizzlies",
    author: "Golden State Grizzlies",
    counter: "28",
    avatar: "/images/Golden State Grizzlies.png",    
  },
  {
    title: "Hollywood Master Blasters",
    author: "Hollywood Master Blasters",
    counter: "28",
    avatar: "/images/HollywoodMasterBlasters.png",    
  },
  {
    title: "San Diego Surf Riders",
    author: "San Diego Surf Riders",
    counter: "28",
    avatar: "/images/SanDiegoSurfRiders.png",    
  },
  {
    title: "Seattle Thunderbolts",
    author: "Seattle Thunderbolts",
    counter: "28",
    avatar: "/images/SeattleThunderBolts.png",    
  },
  {
    title: "Silicon Valley Strikers",
    author: "Silicon Valley Strikers",
    counter: "28",
    avatar: "/images/SiliconValleyStrikers.png",    
  },
  {
    title: "Socal Lashings",
    author: "Socal Lashings",
    counter: "28",
    avatar: "/images/SocalLashings.png",    
  },  
  {
    title: "Others",
    author: "Others",
    counter: "28",
    avatar: "/images/logocifis.png",    
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



  useEffect(() => {
    const fetchPosts = async () => {

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
                type:value.type,
                teamlogo:value.teamlogo,
                dimen:value.dimen,
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
        setgetImgreffalgobuy(req);  
      });
      
    };
    fetchPosts();
  }, []);

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
                type:value.type,
                teamlogo:value.teamlogo,
                dimen:value.dimen,
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
      //setgetImgreffalgobuy(req);
    
    
    //console.log("acc",getalgo)
  
  }
  
  useEffect(()=>{dbcallalgobuy()},[])



  return (
    <div className={cn("section-bg", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrapper}>          
          <h3 className={cn("h3", styles.title)}>Hot collections</h3>          
          <div className={styles.box}>
          
            </div>
          

<div className={styles.inner}>
<Slider className="collection-slider" {...settings}>

{items.map((x, index) => (
  <Link className={styles.item} to={{pathname:`/profilecopy`,state:{add:'0x2709807c7bc1bb23fb3a7b8d2a2D829499212740',team:x.title,logo:x.avatar}}}   key={index}>
    <div className={styles.gallery}>
      
        <div className={styles.preview} key={index}>
          <img src={x.avatar} alt="Collectiond" />
        </div>

    </div>
    {/* <div className={styles.subtitle}>{x.title}</div> */}
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



     </div>         
      </div>
    </div>
  );
};

export default Collections;
