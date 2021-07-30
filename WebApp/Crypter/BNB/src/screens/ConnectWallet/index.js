/* global AlgoSigner */
import React, { useState } from "react";
import { Link,useHistory } from "react-router-dom";
import cn from "classnames";
import styles from "./ConnectWallet.module.sass";
import Icon from "../../components/Icon";
import Checkbox from "../../components/Checkbox";
import web3 from './web3';
//import Popup from './Popup';
import 'reactjs-popup/dist/index.css';
//import Popup from 'reactjs-popup';
import FolowStepsd from "./FolowStepsd";
import Modald from "../../components/ModalD";
import fireDb from '../UploadDetails/firebase';



const Connect = () => {
  let history=useHistory();
  
  const [age, setAge] = useState(true);
  const [conditions, setConditions] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // const togglePopup = () => {
  //   setIsOpen(false);
  //   history.push("/")
    
  // }

  console.log(isOpen)

  const menu = [
    {
      title: "Connect Metamask",
      color: "#9757D7",
      onclick:async()=>{        
        console.log("Metamask")
        window.ethereum.enable();
        //const currProvider = window.web3.currentProvider;
        let accounts=await web3.eth.getAccounts();
        await web3.eth.getAccounts().then(()=>{          
          console.log("acc Algo",accounts[0])
          localStorage.setItem("wallet",accounts[0])
          //let refprofile=fireDb.database().ref(`profiledata/${accounts[0]}`);
    //let dateset=new Date().toDateString();
    //console.log("dateget",dateset)
    //const db = refprofile.push().key;
    //console.log("dbcheck",db)
        //   refprofile.set({profileurl:"",displayname:"",http:"",Bio:"",social:"",Twitter:"",address:"",dbkey:"",username:""}).then(()=>{                      
        //   })                
         }).then(()=>{
           setIsOpen(true)        
         })        
        
        //onClick={() => setVisibleModal(true)}
        
        //if(accounts[0]!== ''){
          //var btns = document.getElementById("me");
          //btns.innerHTML = "CONNECTED";          
        //}
        //console.log(accounts[0]);  
        //alert("connected....")
      }
    },
    {
      title: "Algosigner Wallet",
      color: "#3772FF",
      onclick:()=>{
        console.log("Coinbase")
  
        AlgoSigner.connect()
  .then((d) => {
    
    AlgoSigner.accounts({
      ledger: 'TestNet'
    })
    .then((d) => {
      let accounts = d;
      console.log("acc Algo",accounts[1].address)
      localStorage.setItem("walletalgo",accounts[1].address)
      setIsOpen(true)
  
    })
    .catch((e) => {
      console.error(e);
    });
  
  })
  .catch((e) => {
    console.error(e);
  });
  
  
      }
  
    },
    {
      title: "MyEtherWallet",
      color: "#45B26B",
      onclick:()=>{console.log("Etherwallet")}
    },
    {
      title: "Wallet Connect",
      color: "#EF466F",
      onclick:()=>{console.log("Wallet Connect")}
    },
  ];

  const onClo=()=>{

    console.log("hello onclo")
    
    //setIsOpen(false);
    history.push("/")
    window.location.reload();
    window.location.reload();

  }
  
  
  

  return (
    
  <>  
    <div className={cn("section-pt80", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <Link className={styles.back} to="/">
            <Icon name="arrow-prev" size="24" />
            <div className={cn("h2", styles.stage)}>Connect your wallet</div>            
          </Link>
        </div>
        <div className={styles.body}>
          <div className={styles.menu}>
                
            {menu.map((x, index) => (
              //connect wallet write below
                            
              <div
                className={cn({ [styles.active]: index === 0 }, styles.link)}
                key={index}                                
                onClick={x.onclick}
              >            
                <div
                  className={styles.icon}
                  style={{ backgroundColor: x.color }}
                >
                  <Icon name="wallet" size="24" />
                  <Icon name="check" size="18" fill={x.color} />
                </div>
                <span>{x.title}</span>
                <div className={styles.arrow}>
                  <Icon name="arrow-next" size="14" />
                </div>
                
              </div>
            ))}
          </div>
          
          <div className={styles.wrapper}>
            <div className={styles.bg}>
              
              <img
                srcSet="/images/content/connect-bg@2x.jpg 2x"
                src="/images/content/connect-bg.jpg"
                alt="Connect wallet"
              />
            </div>
            <div className={styles.item}>
              <div className={cn("h3", styles.title)}>Scan to connect</div>
              <div className={styles.text}>Powered by UI8.Wallet</div>
              <div className={styles.box}>
                <div className={styles.code}>
                  <img src="/images/content/qr-code.png" alt="Qr-code" />
                </div>
              </div>
              <button className={cn("button-stroke", styles.button)}>
                Don’t have a wallet app?
              </button>
            </div>
            <div className={styles.item}>
              <div className={cn("h3", styles.title)}>Terms of service</div>
              <div className={styles.text}>
                Please take a few minutes to read and understand{" "}
                <span>Stacks Terms of Service</span>. To continue, you’ll need
                to accept the terms of services by checking the boxes.
              </div>
              <div className={styles.preview}>
                <img
                  srcSet="/images/content/connect-pic@2x.jpg 2x"
                  src="/images/content/connect-pic.jpg"
                  alt="Connect wallet"
                />
              </div>
              <div className={styles.variants}>
                <Checkbox
                  className={styles.checkbox}
                  value={age}
                  onChange={() => setAge(!age)}
                  content="I am at least 13 year old"
                />
                <Checkbox
                  className={styles.checkbox}
                  value={conditions}
                  onChange={() => setConditions(!conditions)}
                  content="I agree Stack terms of service"
                />
              </div>
              <div className={styles.btns}>
                <button className={cn("button-stroke", styles.button)}>
                  Cancel
                </button>
                <button className={cn("button", styles.button)}>
                  Get started now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>

    <Modald visible={isOpen} onClose={() => setIsOpen(false)}>
        <FolowStepsd className={styles.steps} onClo={()=>onClo}/>
      </Modald>


    

    
    {/* {isOpen && <Popup  content={<>
      <b>Notification</b>
      <p>Your are connected successfully......</p>
      <button type="button" onClick={togglePopup}>close</button>
    </>}    
    // handleClose={togglePopup}    
  />} */}

  
  </>
  );
};

export default Connect;
