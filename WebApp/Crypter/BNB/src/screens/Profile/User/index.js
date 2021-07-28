import React, { useState,useEffect } from "react";
import cn from "classnames";
import styles from "./User.module.sass";
import Icon from "../../../components/Icon";
import Report from "../../../components/Report";
import Modal from "../../../components/Modal";
import { FacebookShareButton, TwitterShareButton } from "react-share";
// import { isStepDivisible } from "react-range/lib/utils";
import fireDb from "../../screens/../UploadDetails/firebase";

const shareUrlFacebook = "https://ui8.net";
const shareUrlTwitter = "https://ui8.net";

const User = ({ className, item }) => {
  const[getprodata,setgetprodata]=useState([]);
  console.log("getprodata",getprodata)
  const[getusername,setgetusername]=useState("");
  const [visible, setVisible] = useState(false);
  const [visibleShare, setVisibleShare] = useState(false);
  const [visibleModalReport, setVisibleModalReport] = useState(false);
  let getac="undefined";
  let getalgo="undefined";
  let getname="undefined";
  getalgo=localStorage.getItem("wallet");
  console.log("getmetamask",getalgo)
  //getalgo=localStorage.getItem("walletalgo");
  getname=localStorage.getItem("walletname");
  //const[getImgreff,setgetImgreff]=useState([]);
  //console.log("getImHeader",getImgreff)

  //console.log("checking",getprodata[0].profileurl)

  const dbcallprodata=()=>{


    console.log("inside setgetdbcall function")
    let getalgo=localStorage.getItem("wallet");
    let req = [];
      
    if(localStorage.getItem("wallet") === null){

      req.push(              
        {              
          Bio: "",
          Twitter: "",
          address: "",
          displayname:"",
          profileurl:"",
          username: ""
        })
        setgetprodata(req);   
  
    }
    else{  
      //let kreq =[];
      fireDb.database().ref("profiledata").child(getalgo).on("value", (data) => {
        if (data) {

          console.log("start",data.val())

          let value=data.val();
          console.log("valuess",value)
          setgetusername(value.username)
         localStorage.getItem("walletname",value.username);
        console.log("valueuser",value.username);
          // req.push(              
          //   {              
          //     Bio: value.Bio,
          //     Twitter: value.Twitter,
          //     address: value.address,
          //     displayname:value.displayname,
          //     profileurl:value.profileurl,
          //     username: value.username
          //   })
            setgetprodata(value);   
        }     
        
      });
      
    }    
    //console.log("accpro",getprodata)    
  }
  useEffect(()=>{dbcallprodata()},[])

  const followcall=(event)=>{

    console.log("followcall",event.target.innerText)
    let getalgo=localStorage.getItem("walletalgo");    
    if(event.target.innerText === 'Follow'){    
    console.log("addlikedb function follow call");
    let ref2=fireDb.database().ref(`followdb/${getalgo}`).child(getalgo);
    //const db = ref2.push().key;                         
    ref2.set({
      username:"",
      datesets:new Date().toDateString(),
      description:"",whois:'follow',
      status:"",      
      

      }).then(()=>{
        setVisible(!visible)
      });    
    }
    else if(event.target.innerText === 'Unfollow'){
      
    console.log("addlikedb function unfollow call");
    fireDb.database().ref(`followdb/${getalgo}`).child(getalgo).remove().then(()=>{
      setVisible(!visible)
    });    
    
    }
  }

  const unfollowcall=()=>{

    console.log("unfollowcall")
    
  }

  return (
    <>

      <div className={cn(styles.user, className)}>
        <div className={styles.avatar}>
          {getprodata === null ? (

<img src="/images/content/avatar-big.jpg" alt="Avatar" />
          ):(

            <img src={getprodata.profileurl} alt="Avatar" />
          )}
          
          
        </div>
        {getusername === null ? (
          <div className={styles.name}>{"abcdedd"}</div>

        ):(

          <div className={styles.name}>{getusername}</div>
        )}
        
        {localStorage.getItem("wallet") === null ? (

<div className={styles.code}>
<div className={styles.number}>{"0Xasdhaudhu"}....</div>
{/* <button className={styles.copy}>
  <Icon name="copy" size="16" />
</button> */}
</div>

        ):(

          <div className={styles.code}>
          <div className={styles.number}>{getalgo.slice(0,10)}....</div>
          {/* <button className={styles.copy}>
            <Icon name="copy" size="16" />
          </button> */}
        </div>

        )}
        
        <div className={styles.info}>
          A wholesome farm owner in Montana. Upcoming gallery solo show in
          Germany
        </div>
        <a
          className={styles.site}
          href="https://ui8.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="globe" size="16" />
          <span>https://ui8.net</span>
        </a>
        <div className={styles.control}>
          <div className={styles.btns}>
            {/* <button
              className={cn(
                "button button-small",
                { [styles.active]: visible },
                styles.button
              )}
              onClick={followcall} */}

              {/* // () => setVisible(!visible) */}
            {/* > */}
              {/* <span>Follow</span>
              <span>Unfollow</span> */}
            {/* </button> */}
            <button
              className={cn(
                "button-circle-stroke button-small",
                { [styles.active]: visibleShare },
                styles.button
              )}
              onClick={() => setVisibleShare(!visibleShare)}
            >
              <Icon name="share" size="20" />
            </button>
            <button
              className={cn("button-circle-stroke button-small", styles.button)}
              onClick={() => setVisibleModalReport(true)}
            >
              <Icon name="report" size="20" />
            </button>
          </div>
          <div className={cn(styles.box, { [styles.active]: visibleShare })}>
            <div className={styles.stage}>Share link to this page</div>
            <div className={styles.share}>
              <TwitterShareButton
                className={styles.direction}
                url={shareUrlTwitter}
              >
                <span>
                  <Icon name="twitter" size="20" />
                </span>
              </TwitterShareButton>
              <FacebookShareButton
                className={styles.direction}
                url={shareUrlFacebook}
              >
                <span>
                  <Icon name="facebook" size="20" />
                </span>
              </FacebookShareButton>
            </div>
          </div>
        </div>
        <div className={styles.socials}>
          {item.map((x, index) => (
            <a
              className={styles.social}
              href={x.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <Icon name={x.title} size="20" />
            </a>
          ))}
        </div>
        <div className={styles.note}>Member since Mar 15, 2021</div>
      </div>
      <Modal
        visible={visibleModalReport}
        onClose={() => setVisibleModalReport(false)}
      >
        <Report />
      </Modal>
    </>
  );
};

export default User;
