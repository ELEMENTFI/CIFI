import React, { useState,useEffect } from "react";
import cn from "classnames";
import Slider from "react-slick";
import { Link,useHistory } from "react-router-dom";
import styles from "./Popular.module.sass";
import Add from "./Add";
import Icon from "../../../components/Icon";
import Dropdown from "../../../components/Dropdown";
import DropdownEmpty from "../../../components/DropdownEmpty";
import firebase from "../../UploadDetails/firebase";
import moment from 'moment';

//../UploadDetails/firebase
const items = [
  {
    name: "Edd Harris",
    sign: "1",
    number: "1",
    url: "/profile",
    color: "#3772FF",
    avatar: "/images/content/gayle.jpg",
    reward: "/images/content/reward-1.svg",
    price: "<span>2.456</span> BNB",
  },
  {
    name: "Odell Hane",
    sign: "1",
    number: "2",
    url: "/profile",
    color: "#9757D7",
    avatar: "/images/content/babar.jpeg",
    reward: "/images/content/reward-1.svg",
    price: "<span>2.456</span> BNB",
  },
  {
    name: "Marlee Kuphal",
    sign: "1",
    number: "3",
    url: "/profile",
    color: "#45B26B",
    avatar: "/images/content/bens.jpeg",
    reward: "/images/content/reward-1.svg",
    price: "<span>2.456</span> BNB",
  },
  {
    name: "Payton Kunde",
    sign: "1",
    number: "4",
    url: "/profile",
    color: "#23262F",
    avatar: "/images/content/kevin.jpg",
    reward: "/images/content/reward-1.svg",
    price: "<span>2.456</span> BNB",
  },
  {
    name: "Payton Buckridge",
    sign: "1",
    number: "5",
    url: "/profile",
    color: "#777E90",
    avatar: "/images/content/dhoni image.jpg",
    reward: "/images/content/reward-1.svg",
    price: "<span>2.456</span> BNB",
  },
  {
    name: "Edd Harris",
    sign: "1",
    number: "1",
    url: "/profile",
    color: "#3772FF",
    avatar: "/images/content/kohli image.jpg",
    reward: "/images/content/reward-1.svg",
    price: "<span>2.456</span> BNB",
  },
  {
    name: "Odell Hane",
    sign: "1",
    number: "2",
    url: "/profile",
    color: "#9757D7",
    avatar: "/images/content/JontyRhodes.jpg",
    reward: "/images/content/reward-1.svg",
    price: "<span>2.456</span> BNB",
  },
  {
    name: "Marlee Kuphal",
    sign: "1",
    number: "3",
    url: "/profile",
    color: "#45B26B",
    avatar: "/images/content/bens2.jpeg",
    reward: "/images/content/reward-1.svg",
    price: "<span>2.456</span> BNB",
  },
];


const itemss = [
  {
    name: "Edd Harris",
    sign: "1",
    number: "1",
    url: "/profile",
    color: "#3772FF",
    avatar: "/images/content/dhoni image.jpg",
    reward: "/images/content/reward-1.svg",
    price: "<span>2.456</span> BNB",
  },
  {
    name: "Odell Hane",
    sign: "1",
    number: "2",
    url: "/profile",
    color: "#9757D7",
    avatar: "/images/content/babar.jpeg",
    reward: "/images/content/reward-1.svg",
    price: "<span>2.456</span> BNB",
  },
  {
    name: "Marlee Kuphal",
    sign: "1",
    number: "3",
    url: "/profile",
    color: "#45B26B",
    avatar: "/images/content/bens.jpeg",
    reward: "/images/content/reward-1.svg",
    price: "<span>2.456</span> BNB",
  },
  {
    name: "Payton Kunde",
    sign: "1",
    number: "4",
    url: "/profile",
    color: "#23262F",
    avatar: "/images/content/kevin.jpg",
    reward: "/images/content/reward-1.svg",
    price: "<span>2.456</span> BNB",
  },
  {
    name: "Payton Buckridge",
    sign: "1",
    number: "5",
    url: "/profile",
    color: "#777E90",
    avatar: "/images/content/dhoni image.jpg",
    reward: "/images/content/reward-1.svg",
    price: "<span>2.456</span> BNB",
  },
  {
    name: "Edd Harris",
    sign: "1",
    number: "1",
    url: "/profile",
    color: "#3772FF",
    avatar: "/images/content/kohli image.jpg",
    reward: "/images/content/reward-1.svg",
    price: "<span>2.456</span> BNB",
  },
  {
    name: "Odell Hane",
    sign: "1",
    number: "2",
    url: "/profile",
    color: "#9757D7",
    avatar: "/images/content/JontyRhodes.jpg",
    reward: "/images/content/reward-1.svg",
    price: "<span>2.456</span> BNB",
  },
  {
    name: "Marlee Kuphal",
    sign: "1",
    number: "3",
    url: "/profile",
    color: "#45B26B",
    avatar: "/images/content/bens2.jpeg",
    reward: "/images/content/reward-1.svg",
    price: "<span>2.456</span> BNB",
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);


const Popular = () => {
  let history=useHistory();

  const onClo=()=>{

    console.log("hello onclo")
    
    //setIsOpen(false);
    history.push("/search01")
    window.location.reload();

  }


  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    adaptiveHeight: true,
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
        breakpoint: 1340,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
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

const dateOptions = ["1", "7", "30"];
const directionOptions = ["Sellers", "Buyers"];
  const [date, setDate] = useState(dateOptions[0]);
  const [direction, setDirection] = useState(directionOptions[0]);


  console.log("ses",direction);
  console.log("sesd",date);

  const[getI,setgetI]=useState([]);
  console.log("getImgalsell",getI)

  const[getIm,setgetIm]=useState([]);
  console.log("getImgalgossssell",getIm)

  const[getIb,setgetIb]=useState([]);
  console.log("getImgalbuy",getIb)

  const[getImb,setgetImb]=useState([]);
  console.log("getImgalgosssbuy",getImb)

  


  //buyers

  const dbcallalgobuy=async()=>{
    //console.log("inside dbcallalgobuy function")
    let req2 = [];//imagerefexplore//
    firebase.database().ref("imagerefbuy").on("value", (data) => {
      if (data) {
        data.forEach((d) => {
          req2.push(d.val())          
        });        
      }
      
    });
    
    setgetImb(req2)

    let req=[];

    getImb.map((a)=>{
      //console.log(`abb`, a)    
      Object.keys(a).map((b)=>{

        //console.log(a[b].id);
                req.push({
                price: a[b].id,
                sign: a[b].priceSet,
                // sign: "/images/content/cup.svg",
                number: a[b].keyId,
                name:a[b].userName ,
                //bid: 'New bid <span role="img" aria-label="fire">🔥</span>',
                bid:a[b].ownerAddress,
                avatar: a[b].imageUrl,
                image2x: a[b].paramsdb,
                category: a[b].privatekey,
                categoryText: a[b].cAddress,
                //purchasing !
                url: a[b].datesets,
                users: [                
                  {
                    avatar: "/images/content/avatar-4.jpg",
                  },
                ],
              })
              
      })      
      setgetIb(req)    
    })    
    //console.log("cfbbba",req) 
  
  }
  
  useEffect(()=>{dbcallalgobuy()},[getImb])


  //seller
  const dbcallsalealgo=async()=>{
    //console.log("inside dbcallsalealgo function")
    let req2 = [];//imagerefexplore//
    firebase.database().ref("imagerefexploreone").on("value", (data) => {
      if (data) {
        data.forEach((d) => {
          req2.push(d.val())                    
        });        
      }
      setgetIm(req2)  
    })  
    
    let req=[];
    getIm.map((a)=>{
      //console.log(`abb`, a)    
      Object.keys(a).map((b)=>{

        //console.log(a[b].id);
                req.push({
                price: a[b].id,
                sign: a[b].priceSet,
                //sign: "/images/content/cup.svg",
                number: a[b].keyId,
                name:a[b].userName ,
                //bid: 'New bid <span role="img" aria-label="fire">🔥</span>',
                bid:a[b].ownerAddress,
                avatar: a[b].imageUrl,
                image2x: a[b].paramsdb,
                category: a[b].privatekey,
                categoryText: a[b].cAddress,
                //purchasing !
                url: a[b].datesets,
                users: [                
                  {
                    avatar: "/images/content/avatar-4.jpg",
                  },
                ],
              })
              
      })      
      setgetI(req)    
    })    
    //console.log("cfbbba",req) 
  
  }
  useEffect(()=>{dbcallsalealgo()},[getIm])

  const filterdata=()=>{
    console.log("inside filter function")

    if(direction === 'Sellers'){

      if(date === '1')
      {
        console.log("one")
        return items;
      }    
        
        return items;    
    }


    if(date === '1')
    {
        
      return itemss;
    }    
      
      return itemss;    



    // if(direction === 'Sellers') {

    //   if(date === '1')
    //   {
    //     console.log("one")
    //       let data = getI.filter((val)=>{
    //       let currentdate=moment()
    //       let createddate=moment(val.url)
    //       return currentdate===createddate 
    //     })
    //     console.log("R1",data)
    //     return data;
    //   }    
    //     let data = getI.filter((val)=>{
    //       console.log("sellers7get",val)
    //     console.log("sellers7",val.url)
    //       console.log("sellers two")
    //       let currentdate=moment().subtract(1,"days")
    //       let weekdate=moment().subtract(parseInt(date),"days")
    //       //let createddate=moment(val.url)
    //       return moment(val.url).isBetween(weekdate,currentdate)
    //     })

    //     console.log("R7",data)
    //     return data;    
    // }


    // if(date === '1')
    // {
    //     let data = getIb.filter((val)=>{
    //     let currentdate=moment()
    //     let createddate=moment(val.url)
    //     return currentdate===createddate 
    //   })
    //   console.log("B1",data)
    //   return data;
    // }    
    //   let data = getIb.filter((val)=>{

    //     console.log("Buyers7get",val)
    //     console.log("Buyers7",val.url)
    //     let currentdate=moment().subtract(1,"days")
    //     let weekdate=moment().subtract(parseInt(date),"days")
    //     //let createddate=moment(val.adddate)
    //     return moment(val.url).isBetween(weekdate,currentdate)        
    //   })

    //   console.log("B7",data)
    //   return data;    

    //return getIb;

  }

  
  // useEffect(()=>{filterdata()},[])

  return (
    <div className={cn("section-bg", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.top}>
          <div className={styles.box}>
            <div className={styles.stage}>Popular</div>
            <DropdownEmpty
              className={styles.dropdown}
              value={direction}
              setValue={setDirection}
              options={directionOptions}
              //onChange={changeSelectOptionHandler}
            />
          </div>
          {/* <div className={styles.field}>
            <div className={styles.label}>timeframe</div>
            <Dropdown
              className={styles.dropdown}
              value={date}
              setValue={setDate}
              options={dateOptions}
            />
          </div> */}
        </div>

        
        {/* {direction==="Sellers"  ? (
        <div className={styles.field}>              
  <button className={cn("button-small")} onClick={dbcallsalealgo}>More Sellers</button>        
  </div>
  
        ):(
          <div className={styles.field}>            
          <button className={cn("button-small")} onClick={dbcallalgobuy}>More Buyers</button>        
          </div>
        )} */}
          
          
          {/* {getIb.length === 0 && getI.length === 0 ? ( */}

            {direction==="Sellers"  ? (
            
<div className={styles.wrapper}>
          <Slider className="popular-slider" {...settings}>
            
{getI.map((x, index) => (
              <div className={styles.slide} key={index} onClick={() => onClo()}>
                <div className={styles.item}>
                  <div className={styles.head} >
                    <div
                      className={styles.rating}
                      style={{ backgroundColor: x.color }}
                    >
                      <div className={styles.icon} >
                        {/* <img src={x.sign} alt="Rating" /> */}
                        
                      </div>
                      <div className={styles.number}>#{x.number}</div>
                    </div>
                    <div className={styles.control}>
                      {/* <Add className={styles.button} /> */}
                      {/* <Link className={styles.button} to={x.url}>
                        <Icon name="arrow-expand" size="24" />
                      </Link> */}
                    </div>
                  </div>
                  <div className={styles.body}>
                    <div className={styles.avatar}>
                      <img src={x.avatar} alt="Avatar" />
                      <div className={styles.reward}>
                        {/* <img src={x.reward} alt="Reward" /> */}
                      </div>
                    </div>
                    <div className={styles.name}>{x.name}</div>
                    <div
                      className={styles.price}
                      dangerouslySetInnerHTML={{ __html: x.price }}
                    />
                    <div
                      className={styles.price}
                      dangerouslySetInnerHTML={{ __html: x.sign }}
                    />
                  </div>
                </div>
              </div>
            ))}
            </Slider>
        </div>
            
          ):            
          (
            <div className={styles.wrapper}>
          <Slider className="popular-slider" {...settings}>
            {getIb.map((x, index) => (
              <div className={styles.slide} key={index} onClick={() =>onClo()}>
                <div className={styles.item}>
                  <div className={styles.head}>
                    <div
                      className={styles.rating}
                      style={{ backgroundColor: x.color }}
                    >
                      <div className={styles.icon}>
                        {/* <img src={x.sign} alt="Rating" /> */}
                      </div>
                      <div className={styles.number}>#{x.number}</div>
                    </div>
                    <div className={styles.control}>
                      {/* <Add className={styles.button} /> */}
                      {/* <Link className={styles.button} to={x.url}>
                        <Icon name="arrow-expand" size="24" />
                      </Link> */}
                    </div>
                  </div>
                  <div className={styles.body}>
                    <div className={styles.avatar}>
                      <img src={x.avatar} alt="Avatar" />
                      <div className={styles.reward}>
                        {/* <img src={x.reward} alt="Reward" /> */}
                      </div>
                    </div>
                    <div className={styles.name}>{x.name}</div>
                    <div
                      className={styles.price}
                      dangerouslySetInnerHTML={{ __html: x.price }}
                    />
                    <div
                      className={styles.price}
                      dangerouslySetInnerHTML={{ __html: x.sign }}
                    />
                  </div>
                </div>
              </div>
            ))}
            </Slider>
        </div>
            
          )
  
  }
          
      </div>
    </div>
  );
};

export default Popular;
