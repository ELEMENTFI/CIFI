import React ,{useState,useEffect}from "react";
import {useHistory } from "react-router-dom";
//Link,
import cn from "classnames";
import styles from "./ProfileEdit.module.sass";
import Control from "../../components/Control";
import TextInput from "../../components/TextInput";
import TextArea from "../../components/TextArea";
import Icon from "../../components/Icon";
import Compress from "react-image-file-resizer";
import fireDb from '../UploadDetails/firebase';
import web3 from '../ConnectWallet/web3';
import FolowStepsProfileEdit from "./FolowStepsProfileEdit";
import Modald from "../../components/ModalD";


const breadcrumbs = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Edit Profile",
  },
];

const ProfileEdit = () => {
  let history=useHistory();

  //const [photo,setPhoto] = useState(null);
  const [name,setName] = useState(null);
  const [url,setUrl] = useState(null);
  const [bio,setBio] = useState(null);
  const [socialweb,setSocialweb] = useState(null);
  const [twitter,setTwitter] = useState(null);
  const [buffer,setBuffer] = useState(null);
  console.log("buffer",buffer)
  //const [ipfsHash,setIpfsHash] = useState(null);
  const [Img,setImg] = useState(null)
  const [isOpen, setIsOpen] = useState(false);

  const[getprodata,setgetprodata]=useState([]);
  console.log("getprodata",getprodata)


  //console.log("checking",getprodata[0].profileurl)

  const dbcallprodata=()=>{

    console.log("inside setgetdbcall function")
    let getalgo=localStorage.getItem("wallet");
    let req = [];
      
    if(getalgo === ""){
  
      console.log("not algo get")

      // req.push(              
      //   {              
      //     Bio: "",
      //     Twitter: "",
      //     address: "",
      //     displayname:"",
      //     profileurl:"",
      //     username: ""
      //   })
        setgetprodata(req);   


    }
    else{  
      //let kreq =[];
      fireDb.database().ref("profiledata").child(getalgo).on("value", (data) => {
        if (data) {

          console.log("start",data.val())

          
          //   console.log("datacover",data)
          //   data.forEach((d) => {
          //     req.push(d.val().profileurl)      
          //     //console.log("list",d.val().bgurl)
          //   });        
          // }      
          let value=data.val();
          console.log("valuess",value)
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

  const convertToBuffer = async(reader) => {
    //file is converted to a buffer for upload to IPFS
      const buffer = await Buffer.from(reader.result);
    //set this buffer -using es6 syntax
      setBuffer(buffer);      
  };



  const adddbprofile=async()=>{

    console.log("adddbprofile");
    const accounts = await web3.eth.getAccounts();
  let getac="undefined";
  let getalgo="undefined";
  let getname="undefined";
  getalgo=localStorage.getItem("wallet");
  console.log("getmetamask",getac)
  //getalgo=localStorage.getItem("walletalgo");
  getname=localStorage.getItem("walletname");


    console.log("acc",accounts[0]);
  

    if(Img===null){
      alert("please upload profile picture")
    }
    else if(name===null){
      alert("please profile name")
    }
    else if(url===null){

      alert("please url")
    }
    else if(bio===null){
      alert("please Bio profile ")
    }
    else if(socialweb===null){
      alert("please socialwebsite")
    }
    else if(twitter===null){
      alert("please twitter account")
    }
    else{

      localStorage.setItem("wallet",accounts[0]);      
      localStorage.setItem("walletname",name);
    let refprofile=fireDb.database().ref(`profiledata/${getalgo}`);
    let dateset=new Date().toDateString();
    console.log("dateget",dateset)
    const db = refprofile.push().key;
    console.log("dbcheck",db)
    refprofile.set({profileurl:Img,displayname:name,http:url,Bio:bio,social:socialweb,Twitter:twitter,address:getalgo,dbkey:db,username:getname}).then(()=>{
      setIsOpen(true)
    })
  
    }
  }
  const onClose=()=>{

    console.log("hello onClose")
    history.push("/")      

  }

  return (
    
    <div className={styles.page}>
      
      <Control className={styles.control} item={breadcrumbs} />
      <div className={cn("section-pt80", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.top}>
            <h1 className={cn("h2", styles.title)}>Edit profile</h1>
            <div className={styles.info}>
              You can set preferred display name, create{" "}
              <strong>your profile URL</strong> and manage other personal
              settings.
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.user}>
                <div className={styles.avatar}>
                  <img src="/images/content/avatar-1.jpg" alt="Avatar" />

                  {/* <img src={getprodata.profileurl} alt="Avatar" /> */}
                  
                  
                </div>
                <div className={styles.details}>
                  <div className={styles.stage}>Profile photo</div>
                  <div className={styles.text}>
                    We recommend an image of at least 400x400. Gifs work too{" "}
                    <span role="img" aria-label="hooray">
                      🙌
                    </span>
                  </div>
                  <div className={styles.file}>
                    <button
                      className={cn(
                        "button-stroke button-small",
                        styles.button
                      )}
                    >
                      Upload
                    </button>
                    <input className={styles.load} type="file"  onChange = {captureFile} required/>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.list}>
                <div className={styles.item}>
                  <div className={styles.category}>Account info</div>
                  <div className={styles.fieldset}>
                    <TextInput
                      className={styles.field}
                      label="display name"
                      name="Name"
                      type="text"
                      placeholder="Enter your display name"                      
                      required
                      onChange={event => setName(event.target.value)}
                    />
                    <TextInput
                      className={styles.field}
                      label="Custom url"
                      name="Url"
                      type="text"
                      placeholder="ui8.net/Your custom URL"
                      required
                      onChange={event => setUrl(event.target.value)}
                    />
                    <TextArea
                      className={styles.field}
                      label="Bio"
                      name="Bio"
                      placeholder="About yourselt in a few words"
                      required="required"
                      onChange={event => setBio(event.target.value)}
                    />
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.category}>Social</div>
                  <div className={styles.fieldset}>
                    <TextInput
                      className={styles.field}
                      label="portfolio or website"
                      name="Portfolio"
                      type="text"
                      placeholder="Enter URL"
                      required
                      onChange={event => setSocialweb(event.target.value)}
                    />
                    <div className={styles.box}>
                      <TextInput
                        className={styles.field}
                        label="twitter"
                        name="Twitter"
                        type="text"
                        placeholder="@twitter username"
                        required
                        onChange={event => setTwitter(event.target.value)}
                      />
                      <button
                        className={cn(
                          "button-stroke button-small",
                          styles.button
                        )}
                      >
                        Verify account
                      </button>
                    </div>
                  </div>
                  {/* <button
                    className={cn("button-stroke button-small", styles.button)}
                  >
                    <Icon name="plus-circle" size="16" />
                    <span>Add more social account</span>
                  </button> */}
                </div>
              </div>
              <div className={styles.note}>
                To update your settings you should sign message through your
                wallet. Click 'Update profile' then sign the message
              </div>
              <Modald visible={isOpen} onClose={() => setIsOpen(false)}>
        <FolowStepsProfileEdit className={styles.steps} onClose={()=>onClose}/>
      </Modald>

      {/* onClose={()=>onClose} */}
              <div className={styles.btns}>
                <button className={cn("button", styles.button)} onClick={adddbprofile}>
                  Update Profile
                </button>
                <button className={styles.clear}>
                  <Icon name="circle-close" size="24" />
                  Clear all
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ProfileEdit;
