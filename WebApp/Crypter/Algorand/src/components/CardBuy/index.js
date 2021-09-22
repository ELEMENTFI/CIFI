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
//import web3 from '../../screens/./UploadDetails/web3';
//import {abi} from '../Card/data'
//import {tra} from './tra'
import FolowStepsdr from "../../screens/Search01/FolowSteps";

import FolowStepss from "../../screens/Search01/FolowStepss";

import algosdk from 'algosdk';
import MyAlgo from '@randlabs/myalgo-connect';


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

    if(localStorage.getItem("walletalgo") === null || localStorage.getItem("walletalgo") === "0x"){

    }
    else{

      let getalgo=localStorage.getItem("walletalgo");

    //const accounts = await  web3.eth.getAccounts();
    fireDb.database().ref(`imagereflikes/${getalgo}`).child(item.highestBid).set({
      id:item.title,imageUrl:item.image,priceSet:item.price,cAddress:item.categoryText,keyId:item.highestBid,
      userName:item.counter,userSymbol:"Algos",ipfsUrl:item.ipfsurl,
      ownerAddress:item.bid,soldd:item.soldd,extra1:item.extra,
      previousoaddress:item.previousaddress,datesets:item.date,
      description:item.description,whois:'likes',history:item.url,paramsdb:item.image2x,privatekey:item.category  
        }).then(()=>{
        setVisible(!visible)
        window.location.reload(false)   
      });    

    }

    }

    const usernameget=()=>{

    console.log("inside usernameget function")

    if(localStorage.getItem("wallet") === null || localStorage.getItem("wallet") === "0x"){

    }
    else{

    
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
}

useEffect(()=>{usernameget()},[])

  

  const updatepricedb=async()=>{

    console.log("inside buy function")


    if(localStorage.getItem("walletalgo") === null || localStorage.getItem("wallet") === "0x"){

    }

    else{

      let getalgo=localStorage.getItem("walletalgo");
    
  //bnb 0x2cA1655cceB43D27027e6676E880D1Ce4e7d7d18
//   let gettrans=new web3.eth.Contract(tra,'0x2cA1655cceB43D27027e6676E880D1Ce4e7d7d18');
//   let gettest=item.categoryText
//   let getaaa=new web3.eth.Contract(abi,gettest);
//     console.log("insidebutton",item.categoryText)
//     console.log("insidebuttonid",item.price)
//     console.log("insidebuttonids",item.bid)
//     const accounts = await web3.eth.getAccounts();
// //tra start
//   //  await gettrans.methods.sendss(a.addOwnerAddress).send({
//   //    from:accounts[0], 
//   //    value: web3.utils.toWei(a.addPrices, 'ether')
//   //  });

  if(item.bid === getalgo)
  {

    alert("you are owner so you does not purchase this token")

  }
  else{

    setIsOpenss(true)

    let getprize = null;

    getprize = prompt("Please enter mnemonic");

    if(getprize === null){

      getprize = prompt("Please enter mnemonic");

    }
    else
    {
      const algosdk = require('algosdk');

      const server = "https://testnet-algorand.api.purestake.io/ps2";
      const port = "";
      
      const token = {
        'X-API-key' : 'SVsJKi8vBM1RwK1HEuwhU20hYmwFJelk8bagKPin',
      }
      
      
      let algodclient = new algosdk.Algodv2(token, server, port);

      //const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);


      // trans start

      // let amount = parseInt(item.price.replace(/['"]+/g, ''));
      //   console.log("conscheck",amount)

       const myAlgoWallet = new MyAlgo();

      // (async () => {
      //   try {
      
      //     let txn = await algodclient.getTransactionParams().do();
            
      //     txn = {
      //       ...txn,
      //       fee: 1000,
      //       flatFee: true,
      //       type: 'pay',
      //       from: getalgo,
      //       to:  item.bid,
      //       amount: amount,
      //       note: new Uint8Array(Buffer.from('paid'))
      //     };
        
      //     let signedTxn = await myAlgoWallet.signTransaction(txn);
      //     console.log(signedTxn.txID);
        
      //     await algodclient.sendRawTransaction(signedTxn.blob).do();
      
        
      //   } catch(err) {
      //     console.error(err); 
      //   }
      // })();

//wallet asset transfer start


(async () => {
  try {

    let txn = await algodclient.getTransactionParams().do();
      
    txn = {
      ...txn,
      fee: 1000,
      flatFee: true,
      type: 'axfer',
      assetIndex: item.title,
      from: item.bid,
      to:  getalgo,
      amount: 1,
      note: new Uint8Array(Buffer.from('transfer'))
    };
  
    let signedTxn = await myAlgoWallet.signTransaction(txn);
    console.log(signedTxn.txID);
  
    await algodclient.sendRawTransaction(signedTxn.blob).do();

  
  } catch(err) {
    console.error(err); 
  }
})();


//wallet asset transfer end

// trans end

      //console.log("algodclient",algodclient)
      

          //console.log("164")

      //algo transfer

    //   (async() => {

    //     let params = await algodclient.getTransactionParams().do();    
        
    //     var mnemonic = getprize; 
    //     var recoveredAccount = algosdk.mnemonicToSecretKey(mnemonic); 
        
    //     let txn = {
    //         "from": recoveredAccount.addr,
    //         "to": item.bid,
    //         "fee": 1,
    //         "amount": amount,
    //         "firstRound": params.firstRound,
    //         "lastRound": params.lastRound,
    //         "genesisID": params.genesisID,
    //         "genesisHash": params.genesisHash,
    //         "note": new Uint8Array(0),
    //     };
    //     console.log(txn);
    
    //     let signedTxn = algosdk.signTransaction(txn, recoveredAccount.sk);
    //     let sendTx = await algodclient.sendRawTransaction(signedTxn.blob).do();
    
    //     console.log("Transaction",sendTx.txId);
    // })().catch(e => {
    //     console.log(e);
    // }); 
    
      //algo transfer
      //start money transfer here and opt and transfer algos

    // const waitForConfirmation = async function (algodclient, txId) {
    //   let response = await algodclient.status().do();
    //   let lastround = response["last-round"];
    //   while (true) {
    //       const pendingInfo = await algodclient.pendingTransactionInformation(txId).do();
    //       if (pendingInfo["confirmed-round"] !== null && pendingInfo["confirmed-round"] > 0) {
    //           //Got the completed Transaction
    //           console.log("Transaction " + txId + " confirmed in round " + pendingInfo["confirmed-round"]);
    //           break;
    //       }
    //       lastround++;
    //       await algodclient.statusAfterBlock(lastround).do();
    //   }
    // };
    
    
    // Function used to print created asset for account and assetid
    // const printCreatedAsset = async function (algodclient, account, assetid) {
    //   // note: if you have an indexer instance available it is easier to just use this
    //   //     let accountInfo = await indexerClient.searchAccounts()
    //   //    .assetID(assetIndex).do();
    //   // and in the loop below use this to extract the asset for a particular account
    //   // accountInfo['accounts'][idx][account]);
    //   let accountInfo = await algodclient.accountInformation(account).do();
    //   for (let idx = 0; idx < accountInfo['created-assets'].length; idx++) {
    //       let scrutinizedAsset = accountInfo['created-assets'][idx];
    //       if (scrutinizedAsset['index'] === assetid) {
    //           console.log("AssetID = " + scrutinizedAsset['index']);
    //           let myparms = JSON.stringify(scrutinizedAsset['params'], undefined, 2);
    //           console.log("parms = " + myparms);
    //           break;
    //       }
    //   }
    // };
    // Function used to print asset holding for account and assetid
    // const printAssetHolding = async function (algodclient, account, assetid) {
    //   // note: if you have an indexer instance available it is easier to just use this
    //   //     let accountInfo = await indexerClient.searchAccounts()
    //   //    .assetID(assetIndex).do();
    //   // and in the loop below use this to extract the asset for a particular account
    //   // accountInfo['accounts'][idx][account]);
    //   let accountInfo = await algodclient.accountInformation(account).do();
    //   for (let idx = 0; idx < accountInfo['assets'].length; idx++) {
    //       let scrutinizedAsset = accountInfo['assets'][idx];
    //       if (scrutinizedAsset['asset-id'] === assetid) {
    //           let myassetholding = JSON.stringify(scrutinizedAsset, undefined, 2);
    //           console.log("assetholdinginfo = " + myassetholding);
    //           break;
    //       }
    //   }
    // };
    
    
    // var account1_mnemonic = "canal enact luggage spring similar zoo couple stomach shoe laptop middle wonder eager monitor weather number heavy skirt siren purity spell maze warfare ability ten";
    // var account2_mnemonic = "beauty nurse season autumn curve slice cry strategy frozen spy panic hobby strong goose employ review love fee pride enlist friend enroll clip ability runway";

    //cmd now

  //   var account3_mnemonic =  getprize;
    
  //   var recoveredAccount1 = algosdk.mnemonicToSecretKey(item.category);
  //   var recoveredAccount2 = algosdk.mnemonicToSecretKey(item.category);
  //   var recoveredAccount3 = algosdk.mnemonicToSecretKey(account3_mnemonic);
  //   console.log(recoveredAccount1.addr);
  //   console.log(recoveredAccount2.addr);
  //   console.log(recoveredAccount3.addr);
    
  //   // Instantiate the algod wrapper
    
    
    
  //       (async () => {
    
  //       //params = await algodclient.getTransactionParams().do();
  //       //comment out the next two lines to use suggested fee
  //       //params.fee = 1000;
  //       //params.flatFee = true;
    
  //       let sender = recoveredAccount3.addr;
  //       let recipient = sender;
  //       // We set revocationTarget to undefined as 
  //       // This is not a clawback operation
  //       let revocationTarget = undefined;
  //       // CloseReaminerTo is set to undefined as
  //       // we are not closing out an asset
  //       let closeRemainderTo = undefined;
  //       // We are sending 0 assets
  //       let amount = 0;
  //       let note = undefined;
  //       let assetID= item.title
  //       //item.title;
  //       //let params =  item.image2x;

  //       let params = await algodclient.getTransactionParams().do();
    

  //       console.log("check","287")
    
  //       // signing and sending "txn" allows sender to begin accepting asset specified by creator and index
  //       let opttxn = algosdk.makeAssetTransferTxnWithSuggestedParams(sender, recipient, closeRemainderTo, revocationTarget,
  //            amount, note, assetID, params);
    
  //       // Must be signed by the account wishing to opt in to the asset    
  //       let rawSignedTxn = opttxn.signTxn(recoveredAccount3.sk);
  //       let opttx = (await algodclient.sendRawTransaction(rawSignedTxn).do());
  //       console.log("Transaction : " + opttx.txId);
  //       // wait for transaction to be confirmed
  //       //await waitForConfirmation(algodclient, opttx.txId);
    
  //       //You should now see the new asset listed in the account information
  //       console.log("Account 3 = " + recoveredAccount3.addr);
  //       //await printAssetHolding(algodclient, recoveredAccount3.addr, assetID);
    
    
  //       console.log("opt","success")

  //       //trans
    
  //       sender = recoveredAccount1.addr;
  //       recipient = recoveredAccount3.addr;
  //       revocationTarget = undefined;
  //       closeRemainderTo = undefined;
  //           //Amount of the asset to transfer
  //       amount = 1;
  //       note = undefined
  //       assetID= item.title
  //       //params=item.image2x

  //       //let params = await algodclient.getTransactionParams().do();
        
    
  //       // signing and sending "txn" will send "amount" assets from "sender" to "recipient"
  //       let xtxn = algosdk.makeAssetTransferTxnWithSuggestedParams(sender, recipient, closeRemainderTo, revocationTarget,
  //         amount,  note, assetID, params);
  //    // Must be signed by the account sending the asset  
  //    rawSignedTxn = xtxn.signTxn(recoveredAccount1.sk)
  //    let xtx = (await algodclient.sendRawTransaction(rawSignedTxn).do());
  //    console.log("Transaction : " + xtx.txId);
  //    // wait for transaction to be confirmed
  //    //await waitForConfirmation(algodclient, xtx.txId);
    
  //    // You should now see the 10 assets listed in the account information
  //    console.log("Account 3 = " + recoveredAccount3.addr);
  //    //await printAssetHolding(algodclient, recoveredAccount3.addr, assetID);

  //    console.log("trans","success")

  //    fireDb.database().ref(`imagerefexploreoneAlgos/${item.bid}`).child(item.highestBid).remove().then(()=>{

  //     if(getprodata.displayname === null){
  
  //       fireDb.database().ref(`imagerefbuy/${getalgo}`).child(item.highestBid).set({
  
  
  //   id:item.title,imageUrl:item.image,priceSet:item.price,cAddress:item.categoryText,keyId:item.highestBid,
  //   userName:"",userSymbol:"Algos",ipfsUrl:item.ipfsurl,
  //   ownerAddress:getalgo,soldd:item.soldd,extra1:item.extra,
  //   previousoaddress:item.previousaddress,datesets:item.date,
  //   description:item.description,whois:'buyers',history:item.url,paramsdb:item.image2x,privatekey:item.category
  
  
  //         }).then(()=>{
  //           setIsOpenss(false)
  //           setIsOpens(true)
            
  //         }) 
  
  //     }else{
  
  //       console.log("itemid",item.title)
  //       console.log("itemimage",item.image)
  //       console.log("itemprice",item.price)
  //       console.log("itemcAddress",item.categoryText)
  //       console.log("itemkeyid",item.highestBid)
  //       console.log("itemusername",getprodata.username)
  //       console.log("itempreaddress",item.bid)
  //       console.log("itemacc",getalgo)
        
  
  //       fireDb.database().ref(`imagerefbuyAlgos/${getalgo}`).child(item.highestBid).set({
  
  //   id:item.title,imageUrl:item.image,priceSet:item.price,cAddress:item.categoryText,keyId:item.highestBid,
  //   userName:"",userSymbol:"Algos",ipfsUrl:item.ipfsurl,
  //   ownerAddress:getalgo,soldd:item.soldd,extra1:item.extra,
  //   previousoaddress:item.previousaddress,datesets:item.date,
  //   description:item.description,whois:'buyers',history:item.url,paramsdb:item.image2x,privatekey:item.category
          
  
  //         }).then(()=>{
  //           setIsOpenss(false)
  //           setIsOpens(true)
            
  //           //window.location.reload(false)   
  //         }) 
  
  //     }
  
  //    //alert("amount has been sent")
  // //end trans 
  //    //let thing = a.addIds; 
  //    //let s = await getaaa.methods.items(thing).call(); 
  //    //console.log("sget",s) 
  //    //let state = a.addPrices;       
  //   })    
    
    

  //   })().catch(e => {
  //     console.log(e);
  //     console.trace();
  // });


  

    //end money transfer here and opt and transfer algos

    }   
  } 

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
