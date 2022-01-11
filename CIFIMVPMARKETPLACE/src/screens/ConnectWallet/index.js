/* global AlgoSigner */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import cn from "classnames";
import styles from "./ConnectWallet.module.sass";
import Icon from "../../components/Icon";
import Checkbox from "../../components/Checkbox";
import 'reactjs-popup/dist/index.css';
//import Popup from 'reactjs-popup';
import FolowStepsd from "./FolowStepsd";
import Modald from "../../components/ModalD";
//import fireDb from '../UploadDetails/firebase';
//import MyAlgo from '@randlabs/myalgo-connect';
import ModalList from "../../components/ModalList";
import FolowStepsList from "./FolowStepList";
import ModalListmain from "../../components/ModalListmain";
import FolowStepsListmain from "./FolowStepsListmain";
import MyAlgoConnect from '@randlabs/myalgo-connect';
const myAlgoWallet = new MyAlgoConnect();



const Connect = () => {
  
  let history=useHistory();
  
  const [age, setAge] = useState(true);
  const [conditions, setConditions] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  //const [isOpenlist, setIsOpenlist] = useState(false);
  //const [isOpenbutton, setIsOpenbutton] = useState(true);
  //const [isList, setisList] = useState([]);
  //const [isClick, setClick] = useState();
  //const [isClicktry, setClicktry] = useState();
  const [isOpenlisttry, setIsOpenlisttry] = useState(false);
  const [isListtry, setisListtry] = useState([]);
  const [isListtrys, setisListtrys] = useState();
  const [isOpenlisttrymain, setIsOpenlisttrymain] = useState(false);
  const [isListtrymain, setisListtrymain] = useState([]);
  const [isListtrysmain, setisListtrysmain] = useState();
  const [isOpenmain, setIsOpenmain] = useState(false);
  console.log("isClickingstate",isListtrys)
  console.log("isClickingstatemain",isListtrysmain)  

  console.log(isOpen)

  const menu = [

  ];

  const onClo=()=>{
    console.log("hello onclo")  
    //setIsOpen(false);
    history.push("/")
    window.location.reload();
    window.location.reload();
  }  
const algosignertry=()=>{
  AlgoSigner.connect()
.then((d) => {
AlgoSigner.accounts({
  ledger: 'TestNet'
})
.then((d) => {
  //let accounts = d; 
  console.log("listaccount",d)
  setisListtry(d)
  setIsOpenlisttry(true)  
})
.catch((e) => {
  console.error(e);
}); 


})
.catch((e) => {
console.error(e);
});

}

const algosignertrymain=()=>{
  AlgoSigner.connect()
.then((d) => {
AlgoSigner.accounts({
  ledger: 'MainNet'
})
.then((d) => {
  let accounts = d;
  //document.getElementById("listacc").innerHTML=accounts[0].address;
  console.log("listaccount",d)
  setisListtrymain(d)
  setIsOpenlisttrymain(true)  
})
.catch((e) => {
  console.error(e);
}); 


})
.catch((e) => {
console.error(e);
});

}


const algowallet=async()=>{
  const myAlgoConnect = new MyAlgoConnect();
  const accountswall = await myAlgoWallet.connect();
  const addresseswall = accountswall.map(accountswall => accountswall.address);
  console.log("one",myAlgoConnect)
  console.log("oneacc",accountswall)
  console.log("oneadd",addresseswall)
  setisListtry(accountswall)
  setIsOpenlisttry(true)  
}
  return (    
  <>  
    <div className={cn("section-pt80", styles.section)}>
      <div className={cn("container", styles.container)}>        
<br/><br/>
        {isListtrys === null || isListtrys === "" || isListtrys === undefined ? <>                        
              <button className={cn("button", styles.button)} onClick={()=>algowallet()} id="listacc">
                Algo-Wallet TestNet 
              </button>             
              <br/><br/>
              <button className={cn("button", styles.button)} onClick={()=>algosignertry()} id="listacc">
                Algosigner-TestNet Wallet
              </button>                                 
              </> :<>
              <button className={cn("button", styles.button)} onClick={()=>algowallet()} id="listacc">
                Algo-Wallet TestNet 
              </button>               
              <br/><br/>                                
              <button className={cn("button", styles.button)} onClick={()=>algosignertry()} id="listacc">
              Algosigner-TestNet Wallet
              </button>                             
              </>}
<br></br>
<br></br>
              {isListtrysmain === null || isListtrysmain === "" || isListtrysmain === undefined ? <>                
              <button className={cn("button", styles.button)} onClick={()=>algosignertrymain()} id="listacc">
                Algosigner-MainNet Wallet
              </button>                
              </> :<>
              <button className={cn("button", styles.button)} onClick={()=>algosignertrymain()} id="listacc">
              Algosigner-MainNet Wallet
              </button>                                
              </>}
        <div className={styles.body}>
          <div className={styles.menu}>                
            {menu.map((x, index) => (
              //connect wallet write below                            
              <div
                className={cn({ [styles.active]: index === 1 }, styles.link)}
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
      <Modald visible={isOpenmain} onClose={() => setIsOpen(false)}>
        <FolowStepsd className={styles.steps} onClo={()=>onClo}/>
      </Modald>      
    <ModalList visible={isOpenlisttry} >
        <FolowStepsList className={styles.steps} data={isListtry} datas={(a)=>
        {
          setisListtrys(a)
          setIsOpenlisttry(false)          
          setIsOpen(true)
          localStorage.setItem("net","testnet")
        }
        }/>          
    </ModalList>  
    <ModalListmain visible={isOpenlisttrymain} >
        <FolowStepsListmain className={styles.steps} data={isListtrymain} datas={(a)=>
        {
          setisListtrysmain(a)
          setIsOpenlisttrymain(false)          
          setIsOpenmain(true)
          localStorage.setItem("net","mainnet")
        }
        }/>          
    </ModalListmain>  
  </>
  );
};
export default Connect;
