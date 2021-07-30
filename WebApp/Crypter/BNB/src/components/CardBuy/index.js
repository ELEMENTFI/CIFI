/* global AlgoSigner */
import React, { useState,useEffect} from "react";
//import { useHistory } from "react-router-dom";
import cn from "classnames";
import { Link,useHistory } from "react-router-dom";
import styles from "./Card.module.sass";
import Icon from "../Icon";
import fireDb from "../../screens/UploadDetails/firebase";
//import axios from 'axios';
import FolowStepsd from "../Card/FolowStepsd";
import Modald from "../../components/ModalD";
import web3 from '../../screens/./UploadDetails/web3';
import {abi} from '../Card/data'
import {tra} from './tra'
import FolowStepsdr from "../../screens/Search01/FolowSteps";

import FolowStepss from "../../screens/Search01/FolowStepss";


const CardBuy = ({ className, item }) => {

  let history=useHistory();
  const [isOpens, setIsOpens] = useState(false);
  const [isOpenss, setIsOpenss] = useState(false);

  const onSub=()=>{
    console.log("hello close")
    //setIsOpen(false);
    setIsOpens(false)
    history.push("/")
    window.location.reload(false)   
    
  }

  const[getprodata,setgetprodata]=useState([]);
  console.log("getprodata",getprodata)
  const [visible, setVisible] = useState(false);

  //const [Mnemo, setMnemo] = useState("");
  const [historydb, sethistorydb] = useState([]);
  console.log("hist",historydb)

  // const [historydb, sethistorydb] = useState([]);
  // console.log("hist",historydb)
  const [isOpen, setIsOpen] = useState(false);


  const addlikedb=async()=>{
    //let getalgo=localStorage.getItem("walletalgo");
    //console.log("addlikedb function call");
    console.log("addlikedb function call");

    const accounts = await  web3.eth.getAccounts();
    fireDb.database().ref(`imagereflikes/${accounts[0]}`).child(item.highestBid).set({
      id:item.title,imageUrl:item.image,priceSet:item.price,cAddress:item.categoryText,keyId:item.highestBid,
      userName:item.counter,userSymbol:"BNB",ipfsUrl:item.image,
      ownerAddress:accounts[0],soldd:"",extra1:"ready to sold",
      previousoaddress:"",datesets:new Date().toDateString(),
      description:"",whois:'likes'      
      }).then(()=>{
        setVisible(!visible)
        window.location.reload(false)   
      });    


    }

    const usernameget=()=>{

    console.log("inside usernameget function")
    let getalgo=localStorage.getItem("wallet");

    fireDb.database().ref("profiledata").child(getalgo).on("value", (data) => {
      if (data) {
        console.log("startcon",data.val())        
        let value=data.val();
        console.log("valuess",value)
        setgetprodata(value);   
      }                 
   });

}

useEffect(()=>{usernameget()},[])

  

  const updatepricedb=async()=>{

    console.log("inside buy function")
    let getalgo=localStorage.getItem("wallet");
  
    

    setIsOpenss(true)
  //bnb 0x2cA1655cceB43D27027e6676E880D1Ce4e7d7d18
  let gettrans=new web3.eth.Contract(tra,'0x2cA1655cceB43D27027e6676E880D1Ce4e7d7d18');

  let gettest=item.categoryText
  let getaaa=new web3.eth.Contract(abi,gettest);

    console.log("insidebutton",item.categoryText)
    console.log("insidebuttonid",item.price)
    console.log("insidebuttonids",item.bid)

    const accounts = await web3.eth.getAccounts();

//tra start

  //  await gettrans.methods.sendss(a.addOwnerAddress).send({
  //    from:accounts[0], 
  //    value: web3.utils.toWei(a.addPrices, 'ether')
  //  });

  if(item.bid === accounts[0])
  {

    alert("you are owner so you does not purchase this token")

  }
  else{


    await gettrans.methods.sendss(item.bid).send({
      from: accounts[0],
      //value:web3.utils.toWei(a.addPrices,'BNB')
      value: web3.utils.toWei(item.price, 'ether')//ether
     });
  
     await getaaa.methods.transferFrom(item.bid,accounts[0],item.title).send({
       from:accounts[0]
     });

      fireDb.database().ref(`imagerefexploreone/${item.bid}`).child(item.highestBid).remove().then(()=>{

        if(getprodata.username === null){
  
          fireDb.database().ref(`imagerefbuy/${accounts[0]}`).child(item.highestBid).set({
            id:item.title,imageUrl:item.image,priceSet:item.price,cAddress:item.categoryText,
            keyId:item.highestBid,userName:"",
            userSymbol:"BNB",previousoaddress:item.bid,
            ipfsUrl:item.image,ownerAddress:accounts[0],soldd:"solded",extra1:"buyed",
            datesets:new Date().toDateString(),whois:'Buyers'}).then(()=>{
              setIsOpenss(false)
              setIsOpens(true)
              
            }) 
  
        }else{
  
          console.log("itemid",item.title)
          console.log("itemimage",item.image)
          console.log("itemprice",item.price)
          console.log("itemcAddress",item.categoryText)
          console.log("itemkeyid",item.highestBid)
          console.log("itemusername",getprodata.username)
          console.log("itempreaddress",item.bid)
          console.log("itemacc",accounts[0])
          
  
          fireDb.database().ref(`imagerefbuy/${accounts[0]}`).child(item.highestBid).set({
            id:item.title,imageUrl:item.image,priceSet:item.price,cAddress:item.categoryText,
            keyId:item.highestBid,userName:getprodata.username,
            userSymbol:"BNB",previousoaddress:item.bid,
            ipfsUrl:item.image,ownerAddress:accounts[0],soldd:"solded",extra1:"buyed",
            datesets:new Date().toDateString(),whois:'Buyers'}).then(()=>{
              setIsOpenss(false)
              setIsOpens(true)
              
              //window.location.reload(false)   
            }) 
  
        }
  
       //alert("amount has been sent")
   //end trans 
       //let thing = a.addIds; 
       //let s = await getaaa.methods.items(thing).call(); 
       //console.log("sget",s) 
       //let state = a.addPrices;       
      })    
     
    
  } 

  }


  //history function
  const viewhistory=()=>{

    console.log("viewhistory inside");
    setIsOpen(true)
    let get=[];
    // get=item.url;

    get.push({
      address:item.url,
      asset:item.title
    })

    sethistorydb(get)
    
    console.log("gettt",get)

    // setIsOpen(true)
    
    
  }

  return (
    <>
    <div className={cn(styles.card, className)}>
      <div className={styles.preview}>
        
        <img srcSet={`${item.image2x} 2x`} src={item.image} alt="Card" />
        <div className={styles.control}>
          <div
            className={cn(
              { "status-green": item.category === "green" },
              styles.category
            )}
          >
            {item.categoryText}
          </div>
          <button
            className={cn(styles.favorite, { [styles.active]: visible })}
            onClick={addlikedb}
            // ()=>setVisible(!visible)
          >
            <Icon name="heart" size="20" />
          </button>
          {/* <button className={cn("button-small", styles.button)} onClick={saledbset}>
            <span>Place a sale</span>
            <Icon name="scatter-up" size="16" />
          </button> */}
        </div>
        
      </div>
      <br></br>
      {item.price ? 
      <button className={cn("button-small")} onClick={updatepricedb}>
      <span>Buy</span>
      {/* <Icon name="scatter-up" size="16" /> */}
    </button>:
    <></>
    //   <button className={cn("button-small")} onClick={setpricedb}>
    //         <span>Price set</span>
    //         {/* <Icon name="scatter-up" size="16" /> */}
    //       </button>        
}
      <Link className={styles.link} to={item.url}>
        <div className={styles.body}>
          <div className={styles.line}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.price}>{item.price}</div>
            
          </div>
          <div className={styles.line}>
            <div className={styles.users}>
              {item.users.map((x, index) => (
                <div className={styles.avatar} key={index}>
                  <img src={x.avatar} alt="Avatar" onClick={viewhistory}/>
                  
                </div>
              ))}
            </div>
            <div className={styles.counter}>{item.counter}</div>
          </div>
        </div>
        <div className={styles.foot}>
          <div className={styles.status}>
            
            
            {/* <Icon name="candlesticks-up" size="20" ></Icon> */}
            {/* <button type="button">set price</button> */}
            
            
            {/* Highest bid <span>{item.highestBid}</span> */}
          </div>
          {/* <div
            className={styles.bid}
            dangerouslySetInnerHTML={{ __html: item.bid }}
          /> */}
        </div>
      </Link>
    </div>
    <Modald visible={isOpen} onClose={() => setIsOpen(false)}>
    <FolowStepsd className={styles.steps} viewhistory={historydb}/>
  </Modald>

  <Modald visible={isOpens} onClose={() => setIsOpens(false)}>
<FolowStepsdr className={styles.steps} onSub={()=>onSub}/>
</Modald>

<Modald visible={isOpenss} >
<FolowStepss className={styles.steps} onSub={()=>onSub}/>
</Modald>

    </>
  );
};

export default CardBuy;
