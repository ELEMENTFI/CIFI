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

const User = ({ className, item,useraddress }) => {
  const[getprodata,setgetprodata]=useState([]);
  console.log("getprodata",getprodata)
  // const[getusername,setgetusername]=useState("");
  //const [visible, setVisible] = useState(false);
  const [visibleShare, setVisibleShare] = useState(false);
  const [visibleModalReport, setVisibleModalReport] = useState(false);
  //let getac="";
  let getalgo="";
  //let getname="";
  if(useraddress === null || useraddress === "0x" || useraddress === undefined || useraddress === "")
  {
  getalgo=useraddress;
  console.log("getmetamask",getalgo)
  //getalgo=localStorage.getItem("walletalgo");
  //getname=localStorage.getItem("walletname");
  //const[getImgreff,setgetImgreff]=useState([]);
  //console.log("getImHeader",getImgreff)
  //console.log("checking",getprodata[0].profileurl)
  }
  const dbcallprodata=()=>{
    console.log("inside setgetdbcall function")    
    let req = [];     
    if(useraddress === null || useraddress === "0x" || useraddress === undefined || useraddress === "" ){
      req.push(              
        {              
          Bio: "",
          Twitter: "",
          address: "",
          displayname:"test",
          profileurl:"test",
          username: "test"
        })
        setgetprodata(req);     
    }
    else{  
      let getalgo=useraddress;
      let kreq =[];
      fireDb.database().ref("profiledata2").child(getalgo).on("value", (data) => {
        if (data) {

          console.log("start",data.val())

          let value=data.val();
          //console.log("valuess",value)
          //setgetusername(value)
         //localStorage.getItem("walletname",value.username);
        //console.log("valueuser",value.username);
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
        else{

          kreq.push(              
            {              
              Bio: "",
              Twitter: "",
              address: "",
              displayname:"test",
              profileurl:"test",
              username: "test"
            })            
            setgetprodata(kreq)
        }        
      });
      
    }    
    //console.log("accpro",getprodata)    
  }
  useEffect(()=>{dbcallprodata()},[])

  const followcall=(event)=>{

    // console.log("followcall",event.target.innerText)
    // let getalgo=localStorage.getItem("walletalgo");    
    // if(event.target.innerText === 'Follow'){    
    // console.log("addlikedb function follow call");
    // let ref2=fireDb.database().ref(`followdb/${getalgo}`).child(getalgo);
    // //const db = ref2.push().key;                         
    // ref2.set({
    //   username:"",
    //   datesets:new Date().toDateString(),
    //   description:"",whois:'follow',
    //   status:"",      
      

    //   }).then(()=>{
    //     setVisible(!visible)
    //   });    
    // }
    // else if(event.target.innerText === 'Unfollow'){
      
    // console.log("addlikedb function unfollow call");
    // fireDb.database().ref(`followdb/${getalgo}`).child(getalgo).remove().then(()=>{
    //   setVisible(!visible)
    // });    
    
    // }
  }



  const[getaddresslink,setgetaddresslink]=useState(null);
  useEffect(() => {
    const fetchPosts = async () => {
      if(useraddress === null || useraddress === "" || useraddress === undefined || useraddress === "0x")
      {
        setgetaddresslink("https://testnet.algoexplorer.io/address/"+null)        
      }
      else{    
        setgetaddresslink("https://testnet.algoexplorer.io/address/"+useraddress)
        console.log("ls3",getaddresslink)
      }
    };

    fetchPosts();
  }, []);

return (
<>
<div className={cn(styles.user, className)} style={{width:"180px",height:"300px"}}>
{(useraddress === null || useraddress === "0x" || useraddress === undefined || useraddress === "" ) ? 
(
<>
{/* https://cifi-mvp-nest.vercel.app/static/media/cifi.540fecbe.png */}
<div className={styles.avatar} style={{width:"70px",height:"70px"}}>           
<img src="/images/elementnftuilogo-modified.png" alt="Avatar" style={{width:"70px",height:"70px"}}/>
</div>
</>):(
<>
{ getprodata === "" || getprodata === null ? (
<div className={styles.avatar} style={{width:"70px",height:"70px"}}>           
<img src="/images/elementnftuilogo-modified.png" alt="Avatar" style={{width:"70px",height:"70px"}}/>
</div>
):(
<>
{getprodata.profileurl === "" || getprodata.profileurl ==="" || getprodata.profileurl ==="aaa" ? (
<div className={styles.avatar} style={{width:"70px",height:"70px"}}>            
<img src="/images/elementnftuilogo-modified.png" alt="Avatar" />
</div>
) :(
<div className={styles.avatar} style={{width:"70px",height:"70px"}}>            
<img src={getprodata.profileurl} alt="Avatar" />
</div>
)}
</>   
)}
</>
)}                            
{getprodata === null || getprodata === ""  || getprodata === undefined ? (
<div className={styles.name}><h6>{"test"}</h6></div>
):(
<div className={styles.name} ><h6>{getprodata.displayname}</h6></div>
)}        
{(useraddress === null || useraddress === "0x" || useraddress === undefined || useraddress === "") ? (
<div className={styles.code} >  
<div className={styles.number} ><h6>{"0Xasdhaudhu"}....</h6></div>
</div>
):(
<div className={styles.code} >
<div className={styles.number} ><h6 style={{cursor:"pointer"}}>{useraddress.slice(0,10)}....</h6></div>
</div>
)}        
{/* <div className={styles.info}>
A wholesome farm owner in Montana. Upcoming gallery solo show in
Germany
</div> */}
{useraddress === null || useraddress === "0x" || useraddress === undefined || useraddress === " "? (
<div style={{width:"10px",height:"20px"}}>
<a
className={styles.site}
href={getaddresslink}
target="_blank"
rel="noopener noreferrer"
>
<Icon name="globe" size="16" />
<h6><span>https://algoexplorer...</span></h6>
</a>
</div>
):(
<div style={{width:"10px",height:"20px"}}>
<a
className={styles.site}
href={getaddresslink}
target="_blank"
rel="noopener noreferrer"
>
<Icon name="globe" size="16" />
<h6><span>https://algoexplorer...</span></h6>
</a>
</div>
)}

<br></br>
{/* <div className={styles.control}> */}
<div className={styles.btns} >
  <button
              className={cn(
                "button-circle-stroke button-small",
                { [styles.active]: visibleShare },
               styles.button
               )}
              onClick={() => setVisibleShare(!visibleShare)}
              style={{width:"10px",height:"22px"}}>
<Icon name="share" size="15" />
</button>
<button className={cn("button-circle-stroke button-small", styles.button)}
onClick={() => setVisibleModalReport(true)}
style={{width:"10px",height:"22px"}}
>
<Icon name="report" size="15" />
</button>
<div className={cn(styles.box, { [styles.active]: visibleShare })}>
<div className={styles.stage}>Share link to this page</div>
<div className={styles.share}>
<TwitterShareButton
className={styles.direction}
url={shareUrlTwitter}
>
<span>
<Icon name="twitter" size="15" />
</span>
</TwitterShareButton>
{/* <FacebookShareButton
className={styles.direction}
url={shareUrlFacebook}
>
<span>
                  <Icon name="facebook" size="15" />
                </span>
              </FacebookShareButton> */}
            </div>
          </div>
        </div>
        <br></br>
        {/* <div className={styles.socials}>
          {item.map((x, index) => (
            <a
              className={styles.social}
              href={x.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <Icon name={x.title} size="15" />
            </a>
          ))}
        </div>         */}
      </div>
{/* </div> */}

      <Modal
        visible={visibleModalReport}
        onClose={() => setVisibleModalReport(false)}
      >
        <Report addressreport={useraddress}/>
      </Modal>
    </>
  );
};

export default User;
