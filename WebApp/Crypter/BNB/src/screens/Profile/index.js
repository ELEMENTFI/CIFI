import React, { useState,useEffect} from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Profile.module.sass";
import Icon from "../../components/Icon";
import User from "./User";
import Items from "./Items";
import Itemss from "./Itemss";
//import Itemsss from "./Itemsss";
import Followers from "./Followers";
import firebase from "../UploadDetails/firebase";
//import web3 from '../UploadDetails/web3';
import Compress from "react-image-file-resizer";
//import axios from 'axios';

// data
//import { bids } from "../../mocks/bids";
//import { isStepDivisible } from "react-range/lib/utils";

const navLinks = [
  "On Sale",
  "Collectibles",
  "Created",
  "Likes"  
];

// "Following",
//   "Followers",

const socials = [
  {
    title: "twitter",
    url: "https://twitter.com/ui8",
  },
  {
    title: "instagram",
    url: "https://www.instagram.com/ui8net/",
  },
  {
    title: "facebook",
    url: "https://www.facebook.com/ui8.net/",
  },
];

const following = [
  {
    name: "Sally Fadel",
    counter: "161 followers",
    avatar: "/images/content/avatar-5.jpg",
    url: "https://ui8.net",
    buttonClass: "stroke",
    buttonContent: "Unfollow",
    gallery: [
      "/images/content/follower-pic-1.jpg",
      "/images/content/follower-pic-2.jpg",
      "/images/content/follower-pic-3.jpg",
      "/images/content/follower-pic-4.jpg",
    ],
  },
  {
    name: "Aniya Harber",
    counter: "161 followers",
    avatar: "/images/content/avatar-6.jpg",
    url: "https://ui8.net",
    buttonClass: "stroke",
    buttonContent: "Unfollow",
    gallery: [
      "/images/content/follower-pic-5.jpg",
      "/images/content/follower-pic-6.jpg",
      "/images/content/follower-pic-1.jpg",
      "/images/content/follower-pic-3.jpg",
    ],
  },
  {
    name: "Edwardo Bea",
    counter: "161 followers",
    avatar: "/images/content/avatar-7.jpg",
    url: "https://ui8.net",
    buttonClass: "stroke",
    buttonContent: "Unfollow",
    gallery: [
      "/images/content/follower-pic-4.jpg",
      "/images/content/follower-pic-1.jpg",
      "/images/content/follower-pic-3.jpg",
      "/images/content/follower-pic-6.jpg",
    ],
  },
  {
    name: "Reymundo",
    counter: "161 followers",
    avatar: "/images/content/avatar-8.jpg",
    url: "https://ui8.net",
    buttonClass: "stroke",
    buttonContent: "Unfollow",
    gallery: [
      "/images/content/follower-pic-5.jpg",
      "/images/content/follower-pic-2.jpg",
      "/images/content/follower-pic-6.jpg",
      "/images/content/follower-pic-1.jpg",
    ],
  },
  {
    name: "Jeanette",
    counter: "161 followers",
    avatar: "/images/content/avatar-9.jpg",
    url: "https://ui8.net",
    buttonClass: "stroke",
    buttonContent: "Unfollow",
    gallery: [
      "/images/content/follower-pic-1.jpg",
      "/images/content/follower-pic-3.jpg",
      "/images/content/follower-pic-5.jpg",
      "/images/content/follower-pic-4.jpg",
    ],
  },
];

const followers = [
  {
    name: "Sally Fadel",
    counter: "161 followers",
    avatar: "/images/content/avatar-5.jpg",
    url: "https://ui8.net",
    buttonClass: "blue",
    buttonContent: "Follow",
    gallery: [
      "/images/content/follower-pic-1.jpg",
      "/images/content/follower-pic-2.jpg",
      "/images/content/follower-pic-3.jpg",
      "/images/content/follower-pic-4.jpg",
    ],
  },
  {
    name: "Aniya Harber",
    counter: "161 followers",
    avatar: "/images/content/avatar-6.jpg",
    url: "https://ui8.net",
    buttonClass: "blue",
    buttonContent: "Follow",
    gallery: [
      "/images/content/follower-pic-5.jpg",
      "/images/content/follower-pic-6.jpg",
      "/images/content/follower-pic-1.jpg",
      "/images/content/follower-pic-3.jpg",
    ],
  },
  {
    name: "Edwardo Bea",
    counter: "161 followers",
    avatar: "/images/content/avatar-7.jpg",
    url: "https://ui8.net",
    buttonClass: "blue",
    buttonContent: "Follow",
    gallery: [
      "/images/content/follower-pic-4.jpg",
      "/images/content/follower-pic-1.jpg",
      "/images/content/follower-pic-3.jpg",
      "/images/content/follower-pic-6.jpg",
    ],
  },
  {
    name: "Reymundo",
    counter: "161 followers",
    avatar: "/images/content/avatar-8.jpg",
    url: "https://ui8.net",
    buttonClass: "blue",
    buttonContent: "Follow",
    gallery: [
      "/images/content/follower-pic-5.jpg",
      "/images/content/follower-pic-2.jpg",
      "/images/content/follower-pic-6.jpg",
      "/images/content/follower-pic-1.jpg",
    ],
  },
  {
    name: "Jeanette",
    counter: "161 followers",
    avatar: "/images/content/avatar-9.jpg",
    url: "https://ui8.net",
    buttonClass: "blue",
    buttonContent: "Follow",
    gallery: [
      "/images/content/follower-pic-1.jpg",
      "/images/content/follower-pic-3.jpg",
      "/images/content/follower-pic-5.jpg",
      "/images/content/follower-pic-4.jpg",
    ],
  },
];

const Profile = () => {
  const [Img,setImg] = useState("")
  const [buffer,setBuffer] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  const [getcover,setgetcover] = useState("");
  
  console.log("getcoverss",getcover)
  console.log("Buffers",buffer)

  
  //const[getImgreff,setgetImgreff]=useState([]);
//const[getIm,setgetIm]=useState([]);

//console.log("getImg",getImgreff)
//console.log("getIm",getIm)

const[getImgreffalgo,setgetImgreffalgo]=useState([]);
console.log("getImgalgo",getImgreffalgo)

const[getImgreffalgosale,setgetImgreffalgosale]=useState([]);
console.log("getImgalgosale",getImgreffalgosale)

const[getImgreffalgolikes,setgetImgreffalgolikes]=useState([]);
console.log("getImgalgolikes",getImgreffalgolikes)

const[getImgreffalgobuy,setgetImgreffalgobuy]=useState([]);
console.log("getImgalgobuy",getImgreffalgobuy)




const dbcallalgolikes=async()=>{
  console.log("inside dbcallsalealgo function")
  let getalgo=localStorage.getItem("wallet");
  let req = [];
    
  if(localStorage.getItem("wallet") === null){

  }
  else{

  
    //let kreq =[];
    firebase.database().ref("imagereflikes").child(getalgo).on("value", (data) => {
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
              image2x: value.imageUrl,
              category: "green",
              categoryText: value.cAddress,
              //purchasing !
              url: value.history,
              users: [                
                {
                  avatar: "/images/content/avatar-4.jpg",
                },
              ],
            },
          
          )
        });        
      }
    });
    setgetImgreffalgolikes(req);
  }
  
  console.log("acc",getImgreffalgolikes)

}

useEffect(()=>{dbcallalgolikes()},[])



const dbcallsalealgo=async()=>{
  console.log("inside dbcallsalealgo function")
  let getalgo=localStorage.getItem("wallet");
  let req = [];

  if(localStorage.getItem("wallet") === null){

  }else{
    
    //let kreq =[];
    firebase.database().ref("imagerefexploreone").child(getalgo).on("value", (data) => {
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
              image2x: value.paramsdb,
              category: value.privatekey,
              categoryText: value.cAddress,
              //purchasing !
              url: value.history,
              users: [                
                {
                  avatar: "/images/content/avatar-4.jpg",
                },
              ],
            },
          
          )
        });        
      }
    });
    setgetImgreffalgosale(req);  
  }
  console.log("acc",getImgreffalgosale)

}

useEffect(()=>{dbcallsalealgo()},[])


const dbcallalgo=async()=>{
  console.log("inside dbcallalgo function")
  let getalgo=localStorage.getItem("wallet");
  let req = [];

  if(localStorage.getItem("wallet") === null){

  }
  else{

  
    
    //let kreq =[];
    firebase.database().ref("imageref").child(getalgo).on("value", (data) => {
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
    setgetImgreffalgo(req);
  
  }
  console.log("acc",getalgo)

}

useEffect(()=>{dbcallalgo()},[])


const dbcallalgobuy=async()=>{
  console.log("inside dbcallalgobuy function")
  let getalgo=localStorage.getItem("wallet");
  let req = [];

  if(localStorage.getItem("wallet") === null){

  }
  else{

  
    
    //let kreq =[];
    firebase.database().ref("imagerefbuy").child(getalgo).on("value", (data) => {
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
  
  }
  console.log("acc",getalgo)

}

useEffect(()=>{dbcallalgobuy()},[])





const captureFile=(event)=>{

  event.stopPropagation()
    event.preventDefault()
    const file = event.target.files[0]
    let reader = new window.FileReader()
    Compress.imageFileResizer(file, 300, 300, 'JPEG', 10, 0,
    uri => {
      console.log("iuri",uri)
      setImg(uri)
    },
    'base64'
    );
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => convertToBuffer(reader);    
    console.log(reader)

}

const getbg=()=>{

  let getalgo=localStorage.getItem("wallet");
    
    if(localStorage.getItem("wallet") === null && Img === "" ){
  
    }else{

      let req=[];
  // firebase.database().ref("bgphoto").child(getalgo).on("value", (data) => {
  //   if (data) {
  //     console.log("datacover",data)
  //     data.forEach((d) => {
  //       req.push(d.val().bgurl)      
  //       //console.log("list",d.val().bgurl)
  //     });        
  //   }
  //   setgetcover(req)
  // });
  
    }
}
  
useEffect(()=>{getbg()},[])


const setprofilephoto=()=>{

  console.log("inside setprofilephoto function")
  let getalgo=localStorage.getItem("wallet");
    
    if(localStorage.getItem("wallet") === null && Img === "" ){
  
    }else{

  let ref=firebase.database().ref(`bgphoto/${getalgo}`);
  let dateset=new Date().toDateString();
  console.log("dateget",dateset)
  const db = ref.push().key;                       
  console.log("dbcheck",db)
  ref.child("bg").set({bgurl:Img,datesets:dateset,dbkey:db,ownaddress:getalgo}).then(()=>{
    setVisible(true)
    window.location.reload(false)

  })
  }
  
}

const convertToBuffer = async(reader) => {
  //file is converted to a buffer for upload to IPFS
    const buffer = await Buffer.from(reader.result);
  //set this buffer -using es6 syntax
    setBuffer(buffer);

    //onSubmitImage();
};

const checkasset=async()=>{
  

}
  return (
    <div className={styles.profile}>
      <div
        className={cn(styles.head, { [styles.active]: visible })}                        
        style={{
  backgroundImage: "url(/images/content/bg-profile.jpg)",
  //url:getcover
}}
      >

        {/* <img src="/images/content/avatar-1.jpg" alt="Avatar" /> */}
        {/* <img src={getcover} alt="Avatar" /> */}
        {/* /images/content/bg-profile.jpg */}
        <div className={cn("container", styles.container)}>
          <div className={styles.btns}>
            <button
              className={cn("button-stroke button-small", styles.button)}
              onClick={() => setVisible(true)}
            >
              {/*  */}
              <span>Edit cover photo</span>
              <Icon name="edit" size="16" />
            </button>
            <Link
              className={cn("button-stroke button-small", styles.button)}
              to="profile-edit"
            >
              <span>Edit profile</span>
              <Icon name="image" size="16" />
            </Link>
          </div>

          <div className={styles.file}>
            {/* <input type="file" /> */}
            <input 
             name="tfile" id="fileid" type = "file" onChange = {captureFile} required />

            <div className={styles.wrap}>
              <Icon name="upload-file" size="48" />
              <div className={styles.info}>Drag and drop your photo here</div>
              <div className={styles.text}>or click to browse</div>
            </div>
            <button
              className={cn("button-small", styles.button)}
              onClick={() => setprofilephoto()}
            >
              Save photo
            </button>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        
        <div className={cn("container", styles.container)}>


          
          
          <User className={styles.user} item={socials} />
          
          <div className={styles.wrapper}>
            <div className={styles.nav}>                          

            {/* <button
              className={cn("button-small", styles.button)}
              onClick={() => checkasset()}
            >
              check
            </button> */}
              
              {navLinks.map((x, index) => (
                <button
                  className={cn(styles.link, {
                    [styles.active]: index === activeIndex,
                  })}
                  key={index}
                  onClick={() => setActiveIndex(index)}
                >
                  {x}
                </button>
              ))}
            </div>
            <div className={styles.group}>
              <div className={styles.item}>
                {activeIndex === 0 && (
                  <Itemss class={styles.items} items={getImgreffalgosale} />

                  // bids.slice(0, 3)
                  
                )}
                {activeIndex === 1 && (
                  <Items class={styles.items} items={getImgreffalgobuy} />
                  // bids.slice(0, 6)
                )}

                {activeIndex === 2 && (                                     
                  <Items class={styles.items} items={getImgreffalgo} />              
                 )} 
                {activeIndex === 3 && (
                  <Itemss class={styles.items} items={getImgreffalgolikes} />
                )}
                {activeIndex === 4 && (
                  <Followers className={styles.followers} items={following} />
                )}
                {activeIndex === 5 && (
                  <Followers className={styles.followers} items={followers} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
