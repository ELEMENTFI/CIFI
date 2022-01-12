import React from "react";
import { useState,useEffect} from "react";
import cn from "classnames";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import styles from "./Collections.module.sass";
import Icon from "../../../components/Icon";
import firebase from "../../UploadDetails/firebase";

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Liveauctions = () => {

const divStyle = {
    color: 'blue',
    border: '2px solid rgba(0, 0, 0, 0.10)',
    width:"200px",
    height:"200px",
};
  
const directionOptions = ["Minor League", "Major League","Triangle League","Aryan Shah","Others"];
const [direction, setDirection] = useState(directionOptions[0]);
console.log("sesleague",direction);
const[getImgreffalgobuy,setgetImgreffalgobuy]=useState([]);
console.log("getlt",getImgreffalgobuy)

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
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
      firebase.database().ref("imagerefAlgolt2").on("value", (data) => {          
        if (data) {          
          data.forEach((d) => {            
            let value=d.val();
            req.push({
              userSymbol:value.userSymbol,
              title: value.id,
              price: value.priceSet,
              highestBid: value.keyId,
              counter:value.userName ,
              //bid: 'New bid <span role="img" aria-label="fire">🔥</span>',
              bid:value.ownerAddress,
              image: value.imageUrl,
              image2x: value.paramsdb,
              category: value.privatekey,
              categoryText: value.cAddress,
              //purchasing !
              url: value.history,
              date:value.datesets,
              description:value.description,
              extra:value.extra1,
              ipfsurl:value.ipfsUrl,
              previousaddress:value.previousoaddress,
              soldd:value.soldd,
              whois:value.whois,
              Mnemonic:value.Mnemonic,
              usdcids:value.usdcids,
            applicationid:value.applicationid,
            escrowaddress:value.escrowaddress,
            resdata1:"",
              users: [                
                {                  
                  avatar: value.imageUrl,
                },
              ],
            })                                                                                                    
              
          });      
          setgetImgreffalgobuy(req);    
        }        
      });      
    };
    fetchPosts();
  }, []);

  return (
    <div className={cn("section-bg", styles.section)}>
      <div className={cn("container", styles.container)} >
        <div className={styles.wrapper} >          
          <h3 className={cn("h3", styles.title)}>Live auctions</h3>                    
<Slider className="collection-slider" {...settings}>
{getImgreffalgobuy.map((x, index) => (
  <Link className={styles.item} to={{pathname:`/profileuserview`,state:{address:x.bid}}}>              
  <div style={divStyle}>         
        <div className={styles.preview} key={index}>
          <img src={x.image} alt="Collectiond" style={{width:"150px",height:"150px",marginLeft:"2px",marginRight:"2px"}}/>
        </div>                
        <div className={styles.author}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>{x.counter}</span>
        </div>        
      </div>  
      </Link>    
))}
</Slider>
     </div>         
      </div>
    </div>
  );
};
export default Liveauctions;
// {/* <Link className={styles.item} to={{pathname:`/profilecopy`,state:{add:'0x2709807c7bc1bb23fb3a7b8d2a2D829499212740',team:x.title,logo:x.avatar}}} key={index}></Link>
// </Link> */}