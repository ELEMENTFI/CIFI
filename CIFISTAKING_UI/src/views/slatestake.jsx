/* global AlgoSigner */
import MyAlgoConnect from '@randlabs/myalgo-connect';
import React, { Component, useState, useEffect, useRef } from 'react';
import { Link, useHistory } from "react-router-dom";
import { Button, Dropdown, Card, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Input, InputGroup, InputGroupAddon, InputGroupButtonDropdown, InputGroupText, Row, Table } from "reactstrap";
import web3 from "../web3";
import configfile from "../config.json";
import Popup from "../Popup";
import Modald from "../ModalD";
import FolowStepsd from "../FolowStepsd";
import BigNumber from "bignumber.js";
import FolowStepsdcopy from "../FolowStepsdcopy";
import ModalDCopy from '../ModalDCopy';
import FolowStepPro from '../FolowStepPro';
const algosdk = require('algosdk');
const algodClient = new algosdk.Algodv2('', 'https://api.testnet.algoexplorer.io', '');
const myAlgoConnect = new MyAlgoConnect();
const Slatestake = () => {
  console.log("configfile",configfile);
  let [activeTab, setActiveTab] = useState("Deposit");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen1, setDropdownOpen1] = useState(false);
  const [multiple, setMultiple] = useState(false);
  const[stakeenddate,setStakeendDate]=useState('');
  var[datestake,setDatestake]=useState([]);
  var [time2, settime2]=useState("");
  var [date1, setdate1]=useState("");
  var [time1, settime1]=useState("");
  const[ap1,setAP] = useState("");
  const [discal ,setdistance]=useState("");
  const [lock1 ,setlock1]=useState("");
  const[stakelock,setStakeLock]=useState("");
  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);
  const toggle1 = () => setDropdownOpen1(!dropdownOpen1);
  let history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpens, setIsOpens] = useState(false);
  var[dis,setDis] = useState("");
  const [isOpennew, setIsOpennew] = useState(false);
  const [isOpennewpro, setIsOpennewpro] = useState(false);
  const[datasendhere,datasethere] = useState("");
  
  
  useEffect(() => {
    const fetchPosts = async () => {
        var  currentdate=(new Date().getTime())/1000;
        var enddatediff =  1671692309-currentdate;
        if(enddatediff>0){
            setStakeendDate(1);
    
        }
        else{
            setStakeendDate(0);
            console.log("enddate",stakeenddate);
        }
    
    };
    

    fetchPosts();
  }, []); 
  










  const[balance,setBalance] = useState([]);
  const[stakedbalance,setStakedBalance] = useState([]);
  const[rewardamountbalance,setrewardBalance] = useState([]);
  const[globaltime,setGlobalTime] = useState('');
  const[globalstake,setGlobalStake] = useState('');
  const[totalsul,settotalsul] = useState('');
  const[totalslatelock,settotalslatelock] = useState('');
  const[usertime,setusertime] = useState('');
  const[rewardcalc,setrewardcalculation]=useState('');
  
  //let assetid = 53453651;
  //let applicationid = 53433787;

  let address=localStorage.getItem("wallet");

 //localglobal
  
 useEffect(() => {
  const fetchPosts = async () => {
       // read local state of application from user account
 //async function readLocalState(client, address, index){
let accountInfoResponse = await client.accountInformation(localStorage.getItem("wallet")).do();
// let val = await client.ApplicationInformation(appId);
// console.log("val",val)

let appById = await algodClient.getApplicationByID(parseInt(configfile.applicationid)).do();
console.log("globalappid",appById);

  console.log("Application's global state:");
 
     console.log("Application's global state:1",appById['params']['global-state']);
     console.log("Application's :1",appById['params']['global-state'][0]['key']);
     console.log("globaltime",appById['params']['global-state'][0]['value']['uint']);
    
     let globaltimenew;
     let gloablstakenew;
     let totalsulnew;
     let totalslatelocknew;
     let stakedbalancenew;
     let rewardbalancenew;
     let usertimenew;
     for(let i=0;i<11;i++){
        
          if(appById['params']['global-state'][i]['key']==="R1Q="){
          globaltimenew = appById['params']['global-state'][i]['value']['uint'];
          setGlobalTime(appById['params']['global-state'][i]['value']['uint']);
          console.log("globaltime",globaltime);
          }

          if(appById['params']['global-state'][i]['key']==="R1NT"){
            gloablstakenew=appById['params']['global-state'][i]['value']['uint'];
            setGlobalStake(appById['params']['global-state'][i]['value']['uint']);
            }
          if(appById['params']['global-state'][i]['key']==="VFNVTA=="){
              totalsulnew =appById['params']['global-state'][i]['value']['uint'];
              
              settotalsul(appById['params']['global-state'][i]['value']['uint']);
              }
          if(appById['params']['global-state'][i]['key']==="VFNM"){
                totalslatelocknew=appById['params']['global-state'][i]['value']['uint'];
                settotalslatelock(appById['params']['global-state'][i]['value']['uint']);
                }   
         }
        
         //if(enc['key'] === "R0E="){
           //setTotalStake( appById['created-apps'][i]['params']['global-state'][n]['value']['uint']);
           //console.log("checktvl", appById['created-apps'][i]['params']['global-state'][n]['value']['uint'])
       //  }
         //if(enc['key'] === "VFNVTA=="){
          // setTotalreward( appById['created-apps'][i]['params']['global-state'][n]['value']['uint']);
           //console.log("checktvl", appById['created-apps'][i]['params']['global-state'][n]['value']['uint'])
        // }
        // if(enc['key'] === "VFNM"){
          // setTotalrewardallocated( appById['created-apps'][i]['params']['global-state'][n]['value']['uint']);
           //console.log("checktvl", appById['created-apps'][i]['params']['global-state'][n]['value']['uint'])
         //}
     
     
 

 


console.log("accinfolocal",accountInfoResponse);
if( accountInfoResponse['apps-local-state'].length === null|| accountInfoResponse['apps-local-state'].length ===undefined||accountInfoResponse['apps-local-state'].length===""){
  alert("check");
}
else{


console.log("User",accountInfoResponse['apps-local-state'].length);
for (let i = 0; i < accountInfoResponse['apps-local-state'].length; i++) { 
    if (accountInfoResponse['apps-local-state'][i].id == parseInt(configfile.applicationid)) {
        console.log("User's local state:",accountInfoResponse['apps-local-state'][i].id);
        let acccheck= accountInfoResponse['apps-local-state'][i][`key-value`]; 
        console.log("Usercheck",acccheck);
        console.log("User",accountInfoResponse['apps-local-state'][i][`key-value`]);
      
        if(accountInfoResponse['apps-local-state'][i][`key-value`]=== null|| accountInfoResponse['apps-local-state'][i][`key-value`] === undefined||accountInfoResponse['apps-local-state'][i][`key-value`]===""){
          alert("check");
       }
      else{
for (let n = 0; n < accountInfoResponse['apps-local-state'][i][`key-value`].length; n++) {
            console.log(accountInfoResponse['apps-local-state'][i][`key-value`][n]);
            //setStakedBalance(accountInfoResponse['apps-local-state'][i][`key-value`][n]);
            
            let rewardkey =accountInfoResponse['apps-local-state'][i]['key-value'][n];
           if(rewardkey['key'] === "VUE="){
             stakedbalancenew=accountInfoResponse['apps-local-state'][i]['key-value'][n]['value']['uint'];
             setStakedBalance(accountInfoResponse['apps-local-state'][i]['key-value'][n]['value']['uint']);
           }
          if(rewardkey['key'] === "VVNT"){
            rewardbalancenew=accountInfoResponse['apps-local-state'][i]['key-value'][n]['value']['uint'];
            console.log("rewardcheck",accountInfoResponse['apps-local-state'][i]['key-value'][n]['value']['uint']);
            setrewardBalance(accountInfoResponse['apps-local-state'][i]['key-value'][n]['value']['uint']);
            console.log("rewardcheck",accountInfoResponse['apps-local-state'][i]['key-value'][n]['value']['uint']);
          }
          if(rewardkey['key'] === "VVQ="){
            usertimenew = accountInfoResponse['apps-local-state'][i]['key-value'][n]['value']['uint'];
            console.log("rewardcheck",accountInfoResponse['apps-local-state'][i]['key-value'][n]['value']['uint']);
            setusertime(accountInfoResponse['apps-local-state'][i]['key-value'][n]['value']['uint']);
            console.log("rewardcheck",accountInfoResponse['apps-local-state'][i]['key-value'][n]['value']['uint']);
          }
            
        }

      }

        
    }
}
}
for(let i = 0; i < accountInfoResponse['assets'].length; i++){
  console.log("accountsasset", accountInfoResponse['assets']);
   if (accountInfoResponse['assets'][i]['asset-id'] == parseInt(configfile.assetid)) {
    setBalance(accountInfoResponse['assets'][i]['amount']);
    console.log("accountsassetnew", accountInfoResponse['assets'][i]['amount']);

   }
}
// let rewardcalculation1=parseFloat(parseFloat((globaltime)-parseFloat(usertime))/60);
// let rewardcalculation2=parseFloat(parseFloat(rewardamountbalance) +rewardcalculation1);
// let rewardcalculation3=(rewardcalculation2 * parseFloat(stakedbalance));
// let rewardcalculation4=(rewardcalculation3/parseFloat(globalstake));


console.log("sub",globaltimenew);
 console.log("sub_div",usertimenew);
console.log("mul1",stakedbalancenew);
console.log("add_div",rewardbalancenew);
console.log("mul2",gloablstakenew);
// console.log("rewardCal",rewardCal);
let sub = parseInt(globaltimenew) - parseInt(usertimenew);
  console.log("checksub",sub);
let sub_div = parseFloat(sub) / 60;

let mul1 = parseFloat(sub_div) * parseFloat(stakedbalancenew);

let add = parseFloat(rewardbalancenew) + parseFloat(mul1);

let add_div =  parseFloat(add) / parseFloat(gloablstakenew);

let mul2 = parseFloat(add_div) * parseFloat(totalsulnew);

let rewardCal1 = parseFloat(mul2) / 1000000;
let rewardCal = rewardCal1.toFixed(6);
console.log("rewardamountcalculation",rewardCal);
//let rewardcalculation =parseFloat((parseFloat(rewardamountbalance)+(parseFloat((globaltime)-parseFloat(usertime))/60)*parseFloat(stakedbalance)/parseFloat(globalstake))*parseFloat(totalsul)/parseFloat(1000000));
setrewardcalculation(rewardCal);



  
  };
  

  fetchPosts();
}, []);



  // useEffect(() => {
  
  //     const fetchPosts = async () => {
  //       if(localStorage.getItem("wallet")=== null||localStorage.getItem("wallet")=== ""||localStorage.getItem("wallet")===undefined){

  //       }
  //       else{
         
         
            
  //               // const accounts = await myAlgoConnect.connect();
  //               // if(accounts !== null)
  //               // console.log("Connected");
  //               // else
  //               // console.log("Not Connected");
            
            
        

       
  //         const accts = await AlgoSigner.accounts({
  //             ledger: 'TestNet'
  //           });
  //           const r = await AlgoSigner.indexer({
  //             ledger: 'TestNet',
  //             //path: `/v2​/assets​/${assetid}​/balances​`
  //             path: `/v2/accounts/${localStorage.getItem("wallet")}`
  //           });
  //             console.log("algoUA",r.account['apps-local-state']);
  //           const tx = await client.accountInformation(localStorage.getItem("wallet"));
  //           console.log("accountinfo",tx);
  //           //console.log("value",r);
  //           let assetcheck= r.account['assets'];
  //           if(assetcheck=== null||assetcheck===undefined){
  //           alert("assetcheckalert");
  //           }else{

            
  //           //console.log("newasset",assetcheck.length);
  //          for(let i=0;i<assetcheck.length;i++){
  //            let assetidget = r.account['assets'][i]['asset-id'];
  //            if(assetidget === assetid ){
  //               setBalance(r.account['assets'][i]['amount']);
  //               console.log("stakedbalancecheck",r['account']['apps-local-state']);
  //            }
  //            }
  //             let rewardcheck=r.account['apps-local-state'];
  //             if(rewardcheck=== null||rewardcheck===undefined){
  //               alert("rewardcheckalert");
  //             }else{
  //               console.log("check",rewardcheck.length);
  //               for(let i=0;i<rewardcheck.length;i++){
  //                 let rewardidget = r.account['apps-local-state'][i]['id'];
  //                 console.log("rewardidget",rewardidget);
  //                if(rewardidget === applicationid ){
  //                     console.log("checked",rewardidget);
  //                     let checkrewardkey = r.account['apps-local-state'][i]['key-value'];
  //                      if(checkrewardkey=== null||checkrewardkey===undefined||checkrewardkey===""){
  //                        alert("checkrewardkey");
  //                      }
  //                      else{

                      
  //                    //console.log("checkrewardj",checkrewardkey.length)
  //                     for(let j=0;j<checkrewardkey.length;j++){
  //                      let rewardkey = r.account['apps-local-state'][i]['key-value'][j];
  //                      //console.log("rewardkey",rewardkey.key);
  //                      if(rewardkey['key'] === "MjI="){
  //                          console.log("checked1");
  //                          console.log("rewardbalancecheck",r['account']['apps-local-state'][i]['key-value'][j]['value']['uint']);
  //                          setrewardBalance(r['account']['apps-local-state'][i]['key-value'][j]['value']['uint']);
  //                          console.log("checked2");
  //                          }
  //                          else if(rewardkey['key'] === "MjA="){
  //                            console.log("checked3");
  //                            console.log("stakedbalancecheck",r['account']['apps-local-state'][i]['key-value'][j]['value']['uint']);
  //                            setStakedBalance(r['account']['apps-local-state'][i]['key-value'][j]['value']['uint']);
  //                            console.log("checked4");
  //                          }
  //                     }
                       
                     
                   
  //              }
              
  //         }
  //       }
  //             }
          

  //       }
  //     }    
  //     };
  
  //     fetchPosts();
  //   },[]);




  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const[stakeamount,setstakedamount] = useState("");
  const[unstakeamount,setunstakedamount] = useState("");
  const [accounts, setaccount] = useState("");
  


// user declared algod connection parameters
//purestake api used
let algodServer = "https://testnet-algorand.api.purestake.io/ps2";
let algodToken = {
  'X-API-Key': '9oXsQDRlZ97z9mTNNd7JFaVMwhCaBlID2SXUOJWl'
 };

let algodPort = "";
let client = new algosdk.Algodv2(algodToken, algodServer, algodPort);

const optin=async(assetID,responsetxId,addresseswall)=>{
try{    
  setIsOpennewpro(true)
const algosdk = require('algosdk');
const algodclient = new algosdk.Algodv2('', 'https://api.testnet.algoexplorer.io/', '');
const myAlgoConnect = new MyAlgoConnect();
//let appId1 = 46315308;
//let applicationid = 53433787;
try {
  //const accounts = await myAlgoWallet.connect();
  //const addresses = accounts.map(account => account.address);
  //console.log("addressget",addresses)
  //localStorage.getItem('wallet',addresses[0])
const params = await algodclient.getTransactionParams().do();
// let transoptin1 = algosdk.makeApplicationOptInTxnFromObject({
//   from: localStorage.getItem('wallet'),
//   appIndex:parseInt(appId1),
//   note: undefined,
//   suggestedParams: params
//   });


let transoptin2 = algosdk.makeApplicationOptInTxnFromObject({
    from: localStorage.getItem('wallet'),
    appIndex:parseInt(configfile.applicationid),
    note: undefined,
    suggestedParams: params
    });

// const signedTxn1 = await myAlgoConnect.signTransaction(transoptin1.toByte());
const signedTxn2 = await myAlgoConnect.signTransaction(transoptin2.toByte());
//const response1 = await algodclient.sendRawTransaction(signedTxn1.blob).do();
const response2 = await algodclient.sendRawTransaction(signedTxn2.blob).do();
// console.log("optresponse",response1)
console.log("optresponse",response2);
//alert("App Optin Successfully");
//storedb(assetID,responsetxId,addresseswall);
datasethere("App Optin Successfully")
setIsOpennewpro(false)
setIsOpennew(true)
}
catch (err) {
  console.error(err);
  //storedb(assetID,responsetxId,addresseswall);
}
}
catch (err) {
  console.error(err);
  setIsOpennewpro(false)
}
}




//optinpart
// const optin = () => {
//     global.TextEncoder = require("util").TextEncoder; 
//   const algosdk = require('algosdk');


//   // user declared algod connection parameters
//   //purestake api used
//   let algodServer = "https://testnet-algorand.api.purestake.io/ps2";
//   let algodToken = {
//       'X-API-Key': '9oXsQDRlZ97z9mTNNd7JFaVMwhCaBlID2SXUOJWl'
//      };

//   let algodPort = "";



//   // helper function to await transaction confirmation
//   // Function used to wait for a tx confirmation
//   const waitForConfirmation = async function (algodclient, txId) {
//       let status = (await algodclient.status().do());
//       let lastRound = status["last-round"];
//         while (true) {
//           const pendingInfo = await algodclient.pendingTransactionInformation(txId).do();
//           if (pendingInfo["confirmed-round"] !== null && pendingInfo["confirmed-round"] > 0) {
//             //Got the completed Transaction
//             console.log("Transaction " + txId + " confirmed in round " + pendingInfo["confirmed-round"]);
//             break;
//           }
//           lastRound++;
//           await algodclient.statusAfterBlock(lastRound).do();
//         }
//       };

//   // optIn
//   async function optInApp(client, account, index1,index2) {
//       // define sender
//       let sender = localStorage.getItem("wallet");
//       console.log("sender complete", sender);
//       let txID;
//       // get node suggested parameters
//       let params = await client.getTransactionParams().do();
//       // comment out the next two lines to use suggested fee
//       params.fee = 1000;
//       params.flatFee = true;

//       // create unsigned transaction
//       let transaction1 = algosdk.makeApplicationOptInTxn(sender, params, index1);

//      //Atomic Optin
//      let transaction2 = algosdk.makeApplicationOptInTxn(sender, params, index2);
  
//     let txns = [transaction1, transaction2];
//     let txgroup = algosdk.assignGroupID(txns);
//     console.log("group = ", txgroup);

//       let txn_b64_1 = transaction1.toByte();
//       let txn_b64_2 = transaction2.toByte();

//       //let signTx = [];

//       // let signArr = AlgoSigner.signTxn([{txn: txn_b64_1}, {txn: txn_b64_2}]);
//       let signArr = [txn_b64_1, txn_b64_2];
//       let base64Txs = signArr.map((binary) => AlgoSigner.encoding.msgpackToBase64(binary));
//   console.log("line 1318");
//       let signedTxs = await AlgoSigner.signTxn([
//         {
//           txn: base64Txs[0],
//         },
//         {
//           txn: base64Txs[1],
//         },
//       ]);
//     console.log("sign complete");
//       let binarySignedTxs = signedTxs.map((tx) => AlgoSigner.encoding.base64ToMsgpack(tx.blob));
//       let trans = await client.sendRawTransaction(binarySignedTxs).do();
//       console.log("Send complete");
//       console.log("txID", trans);
//       console.log("id", trans.txId);
//      await waitForConfirmation(client, trans.txId);
  
//   }  
//   async function main() {
//       try {
//       // initialize an algodClient
//       let algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);
//       let account=localStorage.getItem("wallet");
    
//       // create new application
//       //let appId = await createApp(algodClient, creatorAccount, approvalProgram, clearProgram, localInts, localBytes, globalInts, globalBytes);
//       let appId1 = 46315308;
//       let configfile.applicationid = 53433787               ;
//       // opt-in to application
//       await optInApp(algodClient, account, appId1,configfile.applicationid);
   
//       }
//       catch (err){
//           console.log("err", err);  
//       }
//   }

//   main();
//   }
const assetoptin = async() => {
setIsOpennewpro(true)
try{
const algosdk = require('algosdk');
const algodclient = new algosdk.Algodv2('', 'https://api.testnet.algoexplorer.io/', '');
const myAlgoConnect = new MyAlgoConnect();
const params = await algodclient.getTransactionParams().do();
const assetoptin1 = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
from: localStorage.getItem('wallet'),
to: localStorage.getItem('wallet'),
assetIndex: parseInt(configfile.assetid),
note: undefined,
amount: 0,
suggestedParams: params
});

const signedTxnass = await myAlgoConnect.signTransaction(assetoptin1.toByte());
const responseass = await algodClient.sendRawTransaction(signedTxnass.blob).do();
console.log("optresponse",responseass)
datasethere("Asset Optin Successfully")
setIsOpennewpro(false)
setIsOpennew(true)
}
catch (err) {
  console.error(err);
  setIsOpennewpro(false)
}
}



//assetoptinpart
// const assetoptin = async () => {
//     let opt_sender = localStorage.getItem("wallet");
//     client.getTransactionParams().do()
// .then((d) => {
//   let txParamsJS = d;
//   const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
//     from: opt_sender,
//     to: opt_sender,
//     assetIndex: 53453651,
//     note: undefined,
//     amount: 0,
//     suggestedParams: {...txParamsJS}
//   });

//   // Use the AlgoSigner encoding library to make the transactions base64
//   const txn_b64 = AlgoSigner.encoding.msgpackToBase64(txn.toByte());

//   AlgoSigner.signTxn([{txn: txn_b64}]) 
//   .then((d) => {
//     let signedTxs = d;
//     AlgoSigner.send({
//         ledger: 'TestNet',
//         tx: signedTxs[0].blob
//       })
//       .then((d) => {
//         let tx = d;
//         console.log("Optin Success with txID = ",tx);
//         AlgoSigner.algod({
//             ledger: 'TestNet',
//             path: '/v2/transactions/pending/' + tx.txId
//           })
//           .then((d) => {
//             console.log(d);
//           })
//           .catch((e) => {
//             console.error(e);
//           });
//       })
//       .catch((e) => {
//         console.error(e);
//       });
//   })
//   .catch((e) => {
//     console.error(e);
//   });
// })
// .catch((e) => {
//   console.error(e);
// });
// }


//stakingpartstart
//stakingpartstart
const stake = async() => {
try{
  setIsOpennewpro(true)
const algosdk = require('algosdk');
const algodClient = new algosdk.Algodv2('', 'https://api.testnet.algoexplorer.io', '');

 var amt = document.getElementById("tid1").value; 
 let stakeamount = parseInt(amt) * 1000000;






 




 global.TextEncoder = require("util").TextEncoder; 

 setaccount(localStorage.getItem("wallet"));
 let sender = localStorage.getItem("wallet");
 //let assetid = 53453651;
 //let appId1 = 46315308;
 //let applicationid = 53433787;               ;
 
 // helper function to await transaction confirmation
 // Function used to wait for a tx confirmation
 const waitForConfirmation = async function (algodclient, txId) {
     let status = (await algodclient.status().do());
     let lastRound = status["last-round"];
       while (true) {
         const pendingInfo = await algodclient.pendingTransactionInformation(txId).do();
         if (pendingInfo["confirmed-round"] !== null && pendingInfo["confirmed-round"] > 0) {
           //Got the completed Transaction
           console.log("Transaction " + txId + " confirmed in round " + pendingInfo["confirmed-round"]);
           break;
         }
         lastRound++;
         await algodclient.statusAfterBlock(lastRound).do();
       }
     };
 

 try {
  const addresses = await myAlgoConnect.connect();
 
 
 
   // define sender
   
   let sender = addresses[0].address;
   //let client = new algosdk.Algodv2(algodToken, algodServer, algodPort);
 // get node suggested parameters
   let params = await algodClient.getTransactionParams().do();
   // comment out the next two lines to use suggested fee
   params.fee = 1000;
   params.flatFee = true;
 
   let appArgs1= [];
   
   appArgs1.push(new Uint8Array(Buffer.from("CHECK")));
   console.log("(line:516) appArgs = ",appArgs1)
 
   // create unsigned transaction
   let transaction1 = algosdk.makeApplicationNoOpTxnFromObject({
    from: sender, 
   suggestedParams: params, 
   appIndex: parseInt(configfile.applicationid), 
    appArgs: appArgs1});
   //  let txId1 = transaction1.txID().toString();
 
   let appArgs2= [];
   
   appArgs2.push(new Uint8Array(Buffer.from("S")));
   console.log("(line:516) appArgs = ",appArgs2)
 
   // create unsigned transaction
   let transaction2 = algosdk.makeApplicationNoOpTxnFromObject({
    from: sender, 
   suggestedParams: params, 
   appIndex: parseInt(configfile.applicationid), 
    appArgs: appArgs2});
   // // Sign the transaction
   // let signedTxn = txn.signTxn(account.sk);
   // console.log("Signed transaction with txID: %s", txId);
 
 let transaction3 =algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
   from: sender,
   to: configfile.escrowaddress,
   amount:stakeamount,
   note: undefined,
   assetIndex: parseInt(configfile.assetid),
   suggestedParams: params});
 
  //  let transaction3 =algosdk.makePaymentTxnWithSuggestedParamsFromObject({
  //   from: sender,
  //   to: "QGJQVEY5DFKXSHSEKOTRUXMRNNJTGEBDSNDKEKBGHRFBD6EEBNCZVT37TY",
  //   amount: stakeamount,
  //   note: undefined,
  //   suggestedParams: params}); 

   const groupID = algosdk.computeGroupID([ transaction1, transaction2, transaction3]);
   const txs = [ transaction1, transaction2, transaction3];
   txs[0].group = groupID;
   txs[1].group = groupID;
   txs[2].group = groupID;
 
 
 
  const signedTx1 = await myAlgoConnect.signTransaction(txs[0].toByte());
  const signedTx2 = await myAlgoConnect.signTransaction(txs[1].toByte());
 const signedTx3 = await myAlgoConnect.signTransaction(txs[2].toByte());
const response = await algodClient.sendRawTransaction([ signedTx1.blob, signedTx2.blob, signedTx3.blob]).do();
console.log("TxID", JSON.stringify(response, null, 1));
await waitForConfirmation(algodClient, response.txId);
//alert("Staked Successfully");
datasethere("Staked Successfully")
setIsOpennewpro(false)
setIsOpennew(true)
 }
 catch (err) {
     console.error(err);
 }
}
catch (err) {
    console.error(err);
    setIsOpennewpro(false)
}

}       


//unstake

const unstake = async() => {
setIsOpennewpro(true)
try{
const algodClient = new algosdk.Algodv2('', 'https://api.testnet.algoexplorer.io', '');


let appId1 = 46315308;
//let applicationid = 53433787;
var amt = document.getElementById("tid2").value; 
let unstakeamount = parseInt(amt) * 1000000;
global.TextEncoder = require("util").TextEncoder; 
// const algosdk = require('algosdk');

const waitForConfirmation = async function (algodclient, txId) {
  let status = (await algodclient.status().do());
  let lastRound = status["last-round"];
    while (true) {
      const pendingInfo = await algodclient.pendingTransactionInformation(txId).do();
      if (pendingInfo["confirmed-round"] !== null && pendingInfo["confirmed-round"] > 0) {
        //Got the completed Transaction
        console.log("Transaction " + txId + " confirmed in round " + pendingInfo["confirmed-round"]);
        break;
      }
      lastRound++;
      await algodclient.statusAfterBlock(lastRound).do();
    }
  };

try {
  const addresses = await myAlgoConnect.connect();
  console.log("Address =", addresses);
    var escrowdata1 = `#pragma version 4

    global GroupSize // size=6
    int 2
    >=
    global GroupSize // size=6
    int 6
    <=
    &&
    bz label1
    gtxn 0 ApplicationID
    int appid
    ==
    bnz label2
    b label1
    label2:
    gtxn 0 TypeEnum
    int 6 // ApplicationCall
    ==
    gtxn 0 OnCompletion
    int 0 // NoOp
    ==
    int 0
    gtxn 0 OnCompletion
    ==
    ||
    &&
    gtxn 1 RekeyTo // AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ
    global ZeroAddress
    ==
    &&
    gtxn 0 RekeyTo // AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ
    global ZeroAddress
    ==
    &&
    bnz label3
    label1:
    int 0
    return
    label3:
    int 1
    return      
`;
  var escrowdata=escrowdata1.replaceAll("appid",parseInt(configfile.applicationid));
// define sender
let sender = addresses[0].address;
let client = new algosdk.Algodv2(algodToken, algodServer, algodPort);

// get node suggested parameters
let params = await client.getTransactionParams().do();
// comment out the next two lines to use suggested fee
params.fee = 1000;
params.flatFee = true;
let appArgs1= [];

appArgs1.push(new Uint8Array(Buffer.from("CHECK")));
console.log("(line:516) appArgs = ",appArgs1)

// create unsigned transaction
let transaction1 = algosdk.makeApplicationNoOpTxnFromObject({
  from: sender, 
  suggestedParams: params, 
  appIndex: parseInt(configfile.applicationid), 
  appArgs: appArgs1});
//  let txId1 = transaction1.txID().toString();

let appArgs2= [];

appArgs2.push(new Uint8Array(Buffer.from("W")));
console.log("(line:516) appArgs = ",appArgs2)

// create unsigned transaction
let transaction2 = algosdk.makeApplicationNoOpTxnFromObject({
  from: sender, 
  suggestedParams: params, 
  appIndex: parseInt(configfile.applicationid), 
  appArgs: appArgs2})

//  let txId1 = transaction1.txID().toString();

let results = await client.compile(escrowdata).do();
console.log("Hash = " + results.hash);
console.log("Result = " + results.result);
let program = new Uint8Array(Buffer.from(results.result, "base64"));


let lsig = algosdk.makeLogicSig(program);
  

let sender1 = lsig.address();
console.log("logic",sender1)
  let receiver = sender;
  // let receiver = "<receiver-address>"";
  
 // let closeToRemaninder = sender;
  let note = undefined;
  let transaction3 =algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
    from: sender1,
    to: receiver,
    amount: unstakeamount,
    note: undefined,
    assetIndex: parseInt(configfile.assetid),
    suggestedParams: params});

    // let transaction3 =algosdk.makePaymentTxnWithSuggestedParamsFromObject({
    //   from: sender1,
    //   to: receiver,
    //   amount:unstakeamount,
    //   note: undefined,
    //   suggestedParams: params});




  // let transaction4 =algosdk.makePaymentTxnWithSuggestedParamsFromObject({
  //   from: sender,
  //   to: sender1,
  //   amount: 1000,
  //   note: undefined,
  //   suggestedParams: params});
  //let txns = [transaction1, transaction2,transaction3,transaction4];

//myAlgo start

const groupID = algosdk.computeGroupID([ transaction1, transaction2, transaction3]);
    const txs = [ transaction1, transaction2, transaction3];
    txs[0].group = groupID;
    txs[1].group = groupID;
    txs[2].group = groupID;
   // txs[3].group = groupID;
    
    const signedTx1 = await myAlgoConnect.signTransaction(txs[0].toByte());
    const signedTx2 = await myAlgoConnect.signTransaction(txs[1].toByte());
    const signedTx3 = algosdk.signLogicSigTransaction(txs[2], lsig);
    //const signedTx4 = await myAlgoConnect.signTransaction(txs[3].toByte());
const response = await algodClient.sendRawTransaction([ signedTx1.blob, signedTx2.blob, signedTx3.blob]).do();
console.log("TxID", JSON.stringify(response, null, 1));
await waitForConfirmation(algodClient, response.txId);
// alert("Unstaked Successfully");
datasethere("Unstaked Successfully")
setIsOpennewpro(false)
setIsOpennew(true)
}
catch (err) {
  console.error(err);
}
}
catch (err) {
  console.error(err);
  setIsOpennewpro(false)
}

}
const Claimreward = async() => {
setIsOpennewpro(true)
try{
const algodClient = new algosdk.Algodv2('', 'https://api.testnet.algoexplorer.io', '');


// let appId1 = 46315308;
//let applicationid = 53433787;

global.TextEncoder = require("util").TextEncoder; 
// const algosdk = require('algosdk');

const waitForConfirmation = async function (algodclient, txId) {
  let status = (await algodclient.status().do());
  let lastRound = status["last-round"];
    while (true) {
      const pendingInfo = await algodclient.pendingTransactionInformation(txId).do();
      if (pendingInfo["confirmed-round"] !== null && pendingInfo["confirmed-round"] > 0) {
        //Got the completed Transaction
        console.log("Transaction " + txId + " confirmed in round " + pendingInfo["confirmed-round"]);
        break;
      }
      lastRound++;
      await algodclient.statusAfterBlock(lastRound).do();
    }
  };

try {
  const addresses = await myAlgoConnect.connect();
  console.log("Address =", addresses);
    var escrowdata1 = `#pragma version 4

    global GroupSize // size=6
    int 2
    >=
    global GroupSize // size=6
    int 6
    <=
    &&
    bz label1
    gtxn 0 ApplicationID
    int appid
    ==
    bnz label2
    b label1
    label2:
    gtxn 0 TypeEnum
    int 6 // ApplicationCall
    ==
    gtxn 0 OnCompletion
    int 0 // NoOp
    ==
    int 0
    gtxn 0 OnCompletion
    ==
    ||
    &&
    gtxn 1 RekeyTo // AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ
    global ZeroAddress
    ==
    &&
    gtxn 0 RekeyTo // AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY5HFKQ
    global ZeroAddress
    ==
    &&
    bnz label3
    label1:
    int 0
    return
    label3:
    int 1
    return    
`;
var escrowdata=escrowdata1.replaceAll("appid",parseInt(configfile.applicationid));
// define sender
let sender = addresses[0].address;
let client = new algosdk.Algodv2(algodToken, algodServer, algodPort);

// get node suggested parameters
let params = await client.getTransactionParams().do();
// comment out the next two lines to use suggested fee
params.fee = 1000;
params.flatFee = true;
let appArgs1= [];

appArgs1.push(new Uint8Array(Buffer.from("CHECK")));
console.log("(line:516) appArgs = ",appArgs1)

// create unsigned transaction
let transaction1 = algosdk.makeApplicationNoOpTxnFromObject({
  from: sender, 
  suggestedParams: params, 
  appIndex: parseInt(configfile.applicationid), 
  appArgs: appArgs1});
//  let txId1 = transaction1.txID().toString();

let appArgs2= [];

appArgs2.push(new Uint8Array(Buffer.from("CA")));
console.log("(line:516) appArgs = ",appArgs2)

// create unsigned transaction
let transaction2 = algosdk.makeApplicationNoOpTxnFromObject({
  from: sender, 
  suggestedParams: params, 
  appIndex: parseInt(configfile.applicationid), 
  appArgs: appArgs2})




//  let appArgs3= [];

//   appArgs2.push(new Uint8Array(Buffer.from("12")));
//   console.log("(line:516) appArgs = ",appArgs3)

//   // create unsigned transaction
//   let transaction3 = algosdk.makeApplicationNoOpTxnFromObject({
//     from: sender, 
//     suggestedParams: params, 
//     appIndex: configfile.applicationid, 
//     appArgs: appArgs3})
//  let txId1 = transaction1.txID().toString();

let results = await client.compile(escrowdata).do();
console.log("Hash = " + results.hash);
console.log("Result = " + results.result);
let program = new Uint8Array(Buffer.from(results.result, "base64"));


let lsig = algosdk.makeLogicSig(program);
  

let sender1 = lsig.address();
console.log("logic",sender1)
  let receiver = sender;
  // let receiver = "<receiver-address>"";
  
 // let closeToRemaninder = sender;
  let note = undefined;
  let transaction4 =algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
    from: sender1,
    to: receiver,
    amount: parseFloat(rewardcalc)*1000000,
    note: undefined,
    assetIndex: parseInt(configfile.assetid),
    suggestedParams: params});
  // let transaction5 =algosdk.makePaymentTxnWithSuggestedParamsFromObject({
  //   from: sender,
  //   to: sender1,
  //   amount: 2000,
  //   note: undefined,
  //   suggestedParams: params});
  //let txns = [transaction1, transaction2,transaction3,transaction4];

//myAlgo start

const groupID = algosdk.computeGroupID([ transaction1, transaction2, transaction4]);
    const txs = [ transaction1, transaction2, transaction4];
    txs[0].group = groupID;
    txs[1].group = groupID;
    txs[2].group = groupID;
    //txs[2].group = groupID;
    //txs[4].group = groupID;
    
    const signedTx1 = await myAlgoConnect.signTransaction(txs[0].toByte());
    const signedTx2 = await myAlgoConnect.signTransaction(txs[1].toByte());
  //const signedTx3 = await myAlgoConnect.signTransaction(txs[2].toByte());
    const signedTx4 = algosdk.signLogicSigTransaction(txs[2], lsig);
    //const signedTx5 = await myAlgoConnect.signTransaction(txs[4].toByte());
const response = await algodClient.sendRawTransaction([ signedTx1.blob, signedTx2.blob,signedTx4.blob]).do();
console.log("TxID", JSON.stringify(response, null, 1));
await waitForConfirmation(algodClient, response.txId);
// alert(" Reward Claimed Successfully");
datasethere("Reward Claimed Successfully")
setIsOpennewpro(false)
setIsOpennew(true)
}
catch (err) {
  console.error(err);
}
}
catch (err) {
  console.error(err);
  setIsOpennewpro(false)
}

} 

    return (
        <section className="p-0 my-5">
            {/* <div>
    {isOpen && <Popup
      content={<>
       <center> <b >{dis}</b><br/>
        <button onClick={togglePopup}>OK</button></center>
      </>}
      handleClose={togglePopup}
    />}
  </div>   */}
  <Modald visible={isOpen} onClose={() => setIsOpen(false)}>
        <FolowStepsd viewhistory={dis}  />
      </Modald>

      <Modald visible={isOpens} onClose={() => setIsOpens(false)}>
        <FolowStepsdcopy viewhistory={dis}  />
      </Modald>
             {
            localStorage.getItem("wallet") === null || localStorage.getItem("wallet") === "" || localStorage.getItem("wallet") === undefined?(<>
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xl="8" lg="8" md="10" sm="12">
                        <Card className="custom-card">
                            <div className="p-3">
                            <h4>Stake  Cifi </h4>
                                <h6>The Stake Cifi And Get Slate Token As Reward</h6>
                                <Table bordered responsive className="mt-3">
                                    <thead>
                                        <tr>
                                        <th>Your Cifi</th>
                                            <th>Staked Cifi</th>
                                            <th>Cifi Reward</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        <tr>
                                            <td>0.00</td>
                                            <td>0.00</td>
                                            <td>0.00</td>
                                          
                                        </tr>
                                    </tbody>
                                </Table>
                               
<div>
                                <Container fluid>
                                    <Row>
                                        <Col xl="6" md="12">
                                        {stakeenddate===1 ? (<> 
                                            <InputGroup className="mt-3">
                                                
                                            <Input placeholder={0} style={{ height: "auto" }}type = "number"  />
                                                <InputGroupAddon addonType="append"><Button color="site-primary" style={{ height: "auto" }}>stake</Button></InputGroupAddon>
                                            </InputGroup>
                                            <div className="percentage smaller">
                                                {/* <div className="percentage-item" >25%</div>
                                                <div className="percentage-item" >50%</div>
                                                <div className="percentage-item">75%</div>
                                                <div className="percentage-item" >100%</div> */}
                                            </div>
                                        </>):(<> 
                                            <InputGroup className="mt-3">
                                                
                                                
                                                <InputGroupAddon addonType="append"><Button color="site-primary" >STAKING POOL IS ENDED</Button></InputGroupAddon>
                                            </InputGroup>

                                        </>)}
                                           
                                        </Col>
                                        <Col xl="6" md="12">
                                   
                                            <InputGroup className="mt-3">
                                                <Input placeholder={0} style={{ height: "auto" }}type = "number"   />
                                                <InputGroupAddon addonType="append"><Button color="site-primary" >unstake</Button></InputGroupAddon>
                                            </InputGroup>
                                            {/* <div className="percentage smaller">
                                                <div className="percentage-item">25%</div>
                                                <div className="percentage-item">50%</div>
                                                <div className="percentage-item">75%</div>
                                                <div className="percentage-item">100%</div>
                                            </div> */}
                                           
    
                                        </Col>
                                    </Row>
                                </Container>
                                <Container>
                                    <Row className="justify-content-center">
                                        <Col xl="9">
                                            <Row className="mt-4">
                                                <Col xl="6" md="12">
                                                    <Button color="outline-site-primary" block >claim reward</Button>
                                                </Col>
                                                <Col xl="6" md="12" className='mt-3 mt-xl-0'>
                                                    <Button color="outline-site-primary" block   >Exit</Button>
                                                </Col>
                                            </Row>

                                        </Col>
                                    </Row>
                                </Container>
                                </div>

                            </div>
                        </Card>
                    </Col>
                </Row>
 </Container>
        </>):
        <>
              <Container fluid>
                <Row className="justify-content-center">
                    <Col xl="8" lg="8" md="10" sm="12">
                        <Card className="custom-card">
                            <div className="p-3">
                                <h4>Stake  Cifi </h4>
                                <h6>The Stake Cifi And Get Cifi Token As Reward</h6>
                                <Table bordered responsive className="mt-3">
                                    <thead>
                                        <tr>
                                            <th>Your CifI</th>
                                            <th>Staked Cifi</th>
                                           
                                            <th>Cifi Reward</th>
                                           
                                                
                                                
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        <tr>
                                            <td>{balance/1000000}</td>
                                            <td>{stakedbalance/1000000}</td>
                                            
                                            <td>{rewardcalc}</td>
                                            
                                        </tr>
                                    </tbody>
                                </Table>
                                <div>         



<div>
                                <Container fluid>
                                    <Row>
                                        <Col xl="6" md="12">
                                       
                                             <div>

                                      <> 

                                        <InputGroup className="mt-3">
                                                <Input placeholder={stakeamount} style={{ height: "auto" }}type = "number" id="tid1"  />
                                                <InputGroupAddon addonType="append"><Button color="site-primary" onClick={stake}>Stake</Button></InputGroupAddon>
                                            </InputGroup>
                                            <div className="percentage smaller">
                                                {/* <div className="percentage-item" onClick={0}>25%</div>
                                                <div className="percentage-item" onClick={0}>50%</div>
                                                <div className="percentage-item" onClick={0}>75%</div>
                                                <div className="percentage-item" onClick={0}>100%</div> */}
                                            </div>
                                      </>
                                      
                                            
                                            </div>                                             
                                        </Col>
                                        <Col xl="6" md="12">
                                        <div>
           
              <div>
                                            <InputGroup className="mt-3">
                                                <Input placeholder={unstakeamount} style={{ height: "auto" }}type = "number"  id="tid2"  />
                                                <InputGroupAddon addonType="append"><Button color="site-primary" onClick={unstake}>Unstake</Button></InputGroupAddon>
                                            </InputGroup>
                                            <div className="percentage smaller">
                                                {/* <div className="percentage-item"onClick={0}>25%</div>
                                                <div className="percentage-item"onClick={0}>50%</div>
                                                <div className="percentage-item"onClick={0}>75%</div>
                                                <div className="percentage-item"onClick={0}>100%</div> */}
                                            </div>
                                            </div>  
            

           
            
        </div>
    
                                        </Col>
                                    </Row>
                                </Container>
                                <Container>
                                    <Row className="justify-content-center">
                                        <Col xl="9">
                                            <Row className="mt-6">
                                            <Col xl="4" md="12" className='mt-3 mt-xl-0'>
                                                    
                                                    <Button color="outline-site-primary" block  onClick={assetoptin} >Asset Optin</Button>
                                                   
                                                </Col>
                                                <Col xl="4" md="12" className='mt-3 mt-xl-0'>
                                                    <Button color="outline-site-primary" block   onClick={optin} >App Optin</Button>
                                          
                                                </Col>
                                               
                                                <Col xl="4" md="12" className='mt-3 mt-xl-0'>
                                                    <Button color="outline-site-primary" block onClick={Claimreward} >Claim Reward</Button>
                                                </Col>
                                               
                                                
                                            </Row>

                                        </Col>
                                    </Row>
                                </Container>
                                </div>



  </div> 
                            </div>
                        </Card>
                    </Col>
                </Row>
 </Container>
 <Modald visible={isOpennew} onClose={() => setIsOpennew(false)}>
 <FolowStepsd viewhistory={dis} data={datasendhere} />  </Modald>
 <ModalDCopy visible={isOpennewpro} >
        <FolowStepPro />
  </ModalDCopy>
          </>
        }
       </section>
    );
}

export default Slatestake;