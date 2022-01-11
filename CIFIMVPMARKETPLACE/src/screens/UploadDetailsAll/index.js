/* global AlgoSigner */
import {ToastContainer,toast,Zoom,Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {ExcelRenderer} from 'react-excel-renderer';
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import cn from "classnames";
import styles from "./UploadDetails.module.sass";
//import Icon from "../../components/Icon";
//import TextInput from "../../components/TextInput";
//import Loader from "../../components/Loader";
import Compress from "react-image-file-resizer";
import ipfs from "./ipfs";
import fireDb2 from '../UploadDetails/firebase';
//import FolowStepsd from "./FolowStepsD";
import Modald from "../../components/ModalD";
import FolowStepsdr from "./FolowStepsdr";
import FolowStep from "../../screens/Profile/FolowStep";

import approvalProgramSourceInitial from "../../approve";
import clearProgramSource from "../../clearstate";
import data from "../../escrow";
//import axios from 'axios';
import MyAlgoConnect from '@randlabs/myalgo-connect';
//const myAlgoWallet = new MyAlgoConnect();

const UploadAll = () => {
  
  const [filess,setfiless]= useState([]);
  const [filess2,setfiless2]= useState([]);
//const [filess3,setfiless3]= useState([]);
  const [getRows,setRows]= useState([]);
  const [getRows2,setRows2]= useState([]);
  const [getRows3,setRows3]= useState([]);
  const [getRows33,setRows33]= useState([]);
  const [selected, setSelected] = React.useState("Minor League");
  const [selectedImg, setSelectedImg] = React.useState("");
  console.log("Selec",selectedImg)
  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
  };
  console.log("Sel1",selected)
  const [selected2, setSelected2] = React.useState("Atlanta Fire");
  const changeSelectOptionHandler2 = (event) => {
    if(event.target.value === "Atlanta Fire")
    {
      setSelected2("Atlanta Fire");
      setSelectedImg("/images/AtlantaFire.png");
    }else if(event.target.value === "Atlanta Param Veers"){
      setSelected2("Atlanta Param Veers");
      setSelectedImg("/images/AtlantaParamVeers.png");
    }else if(event.target.value === "Florida Beamers"){
      setSelected2("Florida Beamers");
      setSelectedImg("/images/FloridaBeamers.png");
    }else if(event.target.value === "Ft. Lauderdale Lions"){
      setSelected2("Ft. Lauderdale Lions");
      setSelectedImg("/images/FT.LauderdaleLions.png");
    }else if(event.target.value === "Morrisville Cardinals"){
      setSelected2("Morrisville Cardinals");
      setSelectedImg("/images/MorrisviCardinals.png");
    }else if(event.target.value === "Orlando Galaxy"){
      setSelected2("Orlando Galaxy");
      setSelectedImg("/images/OrlandoGalaxy.png");
    }else if(event.target.value === "DC Hawks"){
      setSelected2("DC Hawks");
      setSelectedImg("/images/DcHawks.png");
    }else if(event.target.value === "Empire State Titans"){
      setSelected2("Empire State Titans");
      setSelectedImg("/images/EmpireStateTitans.png");
    }else if(event.target.value === "Manhattan Yorkers"){
      setSelected2("Manhattan Yorkers");
      setSelectedImg("/images/ManhattanYorkers.png");
    }else if(event.target.value === "New England Eagles"){
      setSelected2("New England Eagles");
      setSelectedImg("/images/NewEnglandEagles.png");
    }else if(event.target.value === "New Jersey Somerset Cavaliers"){
      setSelected2("New Jersey Somerset Cavaliers");
      setSelectedImg("/images/NewJerseySomersetCavaliers.png");
    }else if(event.target.value === "New Jersey Stallions"){
      setSelected2("New Jersey Stallions");
      setSelectedImg("/images/NewJerseyStallions.png");
    }else if(event.target.value === "The Philadelphians"){
      setSelected2("The Philadelphians");
      setSelectedImg("/images/ThePhiladelphians.png");
    }else if(event.target.value === "Austin Athletics"){
      setSelected2("Austin Athletics");
      setSelectedImg("/images/AustinAthletics.png");
    }else if(event.target.value === "Chicago Blasters"){
      setSelected2("Chicago Blasters");
      setSelectedImg("/images/ChicagoBlasters.png");
    }else if(event.target.value === "Chicago Catchers"){
      setSelected2("Chicago Catchers");
      setSelectedImg("/images/ChicagoCatchers.png");
    }else if(event.target.value === "Houston Hurricanes"){
      setSelected2("Houston Hurricanes");
      setSelectedImg("/images/HoustonHurricanes.png");
    }else if(event.target.value === "Irving Mustangs"){
      setSelected2("Irving Mustangs");
      setSelectedImg("/images/IrvingMustangs.png");
    }else if(event.target.value === "Michigan Cricket Stars"){
      setSelected2("Michigan Cricket Stars");
      setSelectedImg("/images/MichiganCricketStars.png");
    }else if(event.target.value === "St. Louis Americans"){
      setSelected2("St. Louis Americans");
      setSelectedImg("/images/ST.LouisAmericans.png");
    }else if(event.target.value === "East Bay Blazers"){
      setSelected2("East Bay Blazers");
      setSelectedImg("/images/EastBayBlazers.png");
    }else if(event.target.value === "Golden State Grizzlies"){
      setSelected2("Golden State Grizzlies");
      setSelectedImg("/images/GoldenStateGrizzlies.png");
    }else if(event.target.value === "Hollywood Master Blasters"){
      setSelected2("Hollywood Master Blasters");
      setSelectedImg("/images/HollywoodMasterBlasters.png");
    }else if(event.target.value === "San Diego Surf Riders"){
      setSelected2("San Diego Surf Riders");
      setSelectedImg("/images/SanDiegoSurfRiders.png");
    }else if(event.target.value === "Seattle Thunderbolts"){
      setSelected2("Seattle Thunderbolts");
      setSelectedImg("/images/SeattleThunderBolts.png");
    }else if(event.target.value === "Silicon Valley Strikers"){
      setSelected2("Silicon Valley Strikers");
      setSelectedImg("/images/SiliconValleyStrikers.png");
    }else if(event.target.value === "Socal Lashings"){
      setSelected2("Socal Lashings");
      setSelectedImg("/images/SocalLashings.png");
    }
    else{
      setSelected2("Others");
      setSelectedImg("");
    }    
  };
  console.log("Sel2",selected2)
  const [selected3, setSelected3] = React.useState("Award");
  const changeSelectOptionHandler3 = (event) => {
    setSelected3(event.target.value);
  };

  console.log("Sel2",selected2)

  const [selected4, setSelected4] = React.useState("2D");

  const changeSelectOptionHandler4 = (event) => {
    setSelected4(event.target.value);
  };

  console.log("Sel4",selected4)
  let ta;
  let tb;
  let te;
  //
  let history=useHistory();  
  const [Buttonopen, setButtonopen] = useState(false);
  const [lsigget, setlsig] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpens, setIsOpens] = useState(false);
  const [ipfsHash,setIpfsHash] = useState(null);
  //const [ipf,setIpf] = useState(null);
  const [buffer,setBuffer] = useState("");
  const [Img,setImg] = useState("")
  //console.log("Imgpinata",Img)
  console.log("ImgpinataBuffer",buffer)
  const [tname,setName] = useState("");
  const [tdescription,setDescription] = useState("");  
  let ge;
  const [assetidget,setassetid] = useState("");
  console.log("getassetid",assetidget)
  console.log("description",tdescription)
  const [visibleModal, setVisibleModal] = useState(false);//open
  

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

// const onSubmitNFT = async (event) => {
//   event.preventDefault();  
//     //new write below
    
// }

const onSub=()=>{
  console.log("hello close")
  //setIsOpen(false);
  history.push("/")
}

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const callof=()=>{
  if(Img === "" && tname === "" && tdescription === ""){
    alert("please fill all details")
  }
  else if(Img === ""){
    alert("please upload Image details")
  }
  else if(tname === ""){
    alert("please fill name details")
  }
  else if(tdescription === ""){
    alert("please fill description details")
  }
  else{
    //alert("call")
    setVisibleModal(true)
  }
}

const creatapplication=async(idget,txxid)=>{
  
  setIsOpens(true)
  console.log("createapplication",idget)
  const algosdk = require('algosdk');  
  let algodPort = "";
  // declare application state storage (immutable)
  let localInts = 1;
  let localBytes = 0;
  let globalInts = 2;
  let globalBytes = 2;
   
  // helper function to compile program source  
  async function compileProgram(client, programSource) {
      let encoder = new TextEncoder();
      let programBytes = encoder.encode(programSource);
      let compileResponse = await client.compile(programBytes).do();
      let compiledBytes = new Uint8Array(Buffer.from(compileResponse.result, "base64"));
      return compiledBytes;
  }
  
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
  
  // create new application
  async function createApp(client, creatorAccount, approvalProgram, clearProgram, localInts, localBytes, globalInts, globalBytes, appArgs, accounts,idgetapp,assetidgets,usdcid) {
      let sender = creatorAccount;      
      // declare onComplete as NoOp
      let onComplete = algosdk.OnApplicationComplete.NoOpOC;        
    // get node suggested parameters
      let params = await client.getTransactionParams().do();
      // comment out the next two lines to use suggested fee
      params.fee = 1000;
      params.flatFee = true;  
      // create unsigned transaction
      let txn = algosdk.makeApplicationCreateTxn(sender, params, onComplete, 
                                              approvalProgram, clearProgram, 
                                              localInts, localBytes, globalInts, globalBytes, appArgs, accounts);
      let txId = txn.txID().toString();

      //new 

const txn_b64 = AlgoSigner.encoding.msgpackToBase64(txn.toByte());
AlgoSigner.signTxn([{txn: txn_b64}])
.then((d) => {
let signedTxs = d;
//signCodeElem.innerHTML = JSON.stringify(d, null, 2);
AlgoSigner.send({
ledger: 'TestNet',
tx: signedTxs[0].blob
})
.then(async(d) => {
let tx = d;
console.log("trans",tx)
await waitForConfirmation(client, txId);
  
      // display results
      let transactionResponse = await client.pendingTransactionInformation(txId).do();
      let appId = transactionResponse['application-index'];
      console.log("Created new app-id: ",appId);
      //escrow steps       
                    //escrow update application 
                    (async () => {
                      const tokenin = {
                          'X-API-Key': '9oXsQDRlZ97z9mTNNd7JFaVMwhCaBlID2SXUOJWl'
                         };
                      const serverin = "https://testnet-algorand.api.purestake.io/ps2";
                      const portin = "";
                        let algodclient = new algosdk.Algodv2(tokenin, serverin, portin);
                        //var fs = require('fs'),
                        //path = require('path'),
                        //filePath = path.join(__dirname, 'tealfile.teal');
                        // filePath = path.join(__dirname, <'fileName'>);
                        //let data = fs.readFileSync(filePath);
                        
                    let data2 = data.replace("appid",appId);
                    let data3 = data2.replaceAll("usdcid",usdcid);
                    let data4 = data3.replaceAll("nftid",idget);
                    //let results = await algodclient.compile(data4).do();
                    const sleep = (milliseconds) => {
                      return new Promise(resolve => setTimeout(resolve, milliseconds))
                    }
                        let results = await algodclient.compile(data4).do();
                        console.log("Resultconsole = " + results);
                        console.log("Hash = " + results.hash);
                        console.log("Result = " + results.result);
                        await sleep(20000)
                        let program = new Uint8Array(Buffer.from(results.result, "base64"));
                        let args = [];
                        args.push(algosdk.encodeUint64(appId));//appid
                        args.push(algosdk.encodeUint64(usdcid)); //usdc
                        args.push(algosdk.encodeUint64(idget));//assetid
                        //args.push(algosdk.encodeUint64(5));
                        let lsig = algosdk.makeLogicSig(program, args);
                        //let tealSignPrint = tealSign(sk, data, lsig.address());
                        console.log("LSIG",lsig.address())
const algosdkup = require('algosdk');  
const algodServerup = 'https://testnet-algorand.api.purestake.io/ps2'
const tokenup = { 'X-API-Key': '9oXsQDRlZ97z9mTNNd7JFaVMwhCaBlID2SXUOJWl' }
const portup = '';
let algodClientup = new algosdkup.Algodv2(tokenup, algodServerup, portup);

AlgoSigner.connect()
.then((d) => {

algodClientup.healthCheck().do()
.then(d => { 

  AlgoSigner.accounts({
    ledger: 'TestNet'
  })
  .then((d) => {
    let accountsup = d;

    algodClientup.getTransactionParams().do()
    .then((d) => {
      let txParamsJSup = d;
      const txnup = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
        from: localStorage.getItem("wallet"),
        to: lsig.address(),
        amount: Number(parseInt(400000)),
        note: undefined,
        suggestedParams: txParamsJSup
      });
    let txn_b64 = AlgoSigner.encoding.msgpackToBase64(txnup.toByte());
    AlgoSigner.signTxn([{txn: txn_b64}])
    .then((d) => {
      let signedTxsup = d;
      AlgoSigner.send({
        ledger: 'TestNet',
        tx: signedTxsup[0].blob
      })
      .then((d) => {
         let txfund = d;
        //console.log("funded",txfund)
    
        //add escrow address in our application and optin escrow usdc and nft
    
        (async () => {
          const tokenesc = {
              'X-API-Key': '9oXsQDRlZ97z9mTNNd7JFaVMwhCaBlID2SXUOJWl'
             };
          const serveresc = "https://testnet-algorand.api.purestake.io/ps2";
          const portesc = "";
            let algodclientesc = new algosdk.Algodv2(tokenesc, serveresc, portesc);
      
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

              
              let data2 = data.replace("appid",appId);
                    let data3 = data2.replaceAll("usdcid",usdcid);
                    let data4 = data3.replaceAll("nftid",idget);
        const sleep = (milliseconds) => {
          return new Promise(resolve => setTimeout(resolve, milliseconds))
        }
            let results = await algodclient.compile(data4).do();
            console.log("Resultconsole = " + results);
            console.log("Hash = " + results.hash);
            console.log("Result = " + results.result);
            // await sleep(20000)
            let program = new Uint8Array(Buffer.from(results.result, "base64"));
            let args = [];
            args.push(algosdk.encodeUint64(appId));//appid
            args.push(algosdk.encodeUint64(usdcid)); //usdc
            args.push(algosdk.encodeUint64(idget));//assetid
            //args.push(algosdk.encodeUint64(5));
            let lsig = algosdk.makeLogicSig(program,args);            
            console.log("LSIG",lsig.address())            
            console.log("lsig sign", lsig.sign)
            setlsig(lsig.address())
            let params = await algodclient.getTransactionParams().do();
            // comment out the next two lines to use suggested fee
            params.fee = 1000;
            params.flatFee = true;
            let firstAcc;
            //let creatorAccount = algosdk.mnemonicToSecretKey("output rocket fashion claw define win sudden all purpose wall group idea half chalk caught sound inquiry sheriff conduct burst miracle stand wink about grape");
      
      AlgoSigner.connect()
      .then((d) => {
        AlgoSigner.accounts({
          ledger: 'TestNet'
        })
        .then(async(d) => {
          let accounts = d;
          firstAcc = localStorage.getItem("wallet");
          let senderCallapp = firstAcc;
          let index = appId;
          console.log("creator account", senderCallapp)
          console.log(lsig.address())
          let appArgs = [];
          appArgs.push(new Uint8Array (Buffer.from("C"))); //configuration
          let accArgs = [];
          accArgs.push(lsig.address());
          let tx1 = algosdk.makeApplicationNoOpTxn(senderCallapp, params, index, appArgs, accArgs);
      
          let senderTx2 = lsig.address();
          let receiverTx2 = senderTx2;
          let nft_id = idget;//assetid
          let tx2Amount = 0;
          let closeRemainderTo = undefined;
          let  revocationTarget = undefined;
          let note = undefined;
          //let tx2 = algosdk.makeAssetTransferTxnWithSuggestedParams(senderTx2, receiverTx2, tx2Amount, nft_id, params);
          let tx2 = algosdk.makeAssetTransferTxnWithSuggestedParams(senderTx2, receiverTx2, closeRemainderTo, revocationTarget, tx2Amount, note, nft_id, params);
          console.log("after tx2");
          let senderTx3 = lsig.address();
          let receiverTx3 = senderTx3;
          let usdc_id = usdcid;
          let tx3Amount = 0;
          let tx3 = algosdk.makeAssetTransferTxnWithSuggestedParams(senderTx3, receiverTx3, closeRemainderTo, revocationTarget, tx2Amount, note, usdc_id, params);
          console.log("after tx3");
          console.log("lsig full", lsig.logic);
          console.log("lsig tag", lsig.tag);
          //console.log("creator sk", creatorAccount.sk)
          let txns = [tx1, tx2, tx3];
            // Group both transactions
            let txgroup = algosdk.assignGroupID(txns);
            console.log(txgroup)
      //changes
            let txn_b64_1 = tx1.toByte();
            let txn_b64_2 = tx2.toByte();
            let txn_b64_3 = tx3.toByte();       
            let base64Txs1 = AlgoSigner.encoding.msgpackToBase64(txn_b64_1);        
            let signedTxs = await AlgoSigner.signTxn([
              {
                txn: base64Txs1,
              }
            ]);
            console.log("logic",signedTxs)
            let rawSignedTxn2 = algosdk.signLogicSigTransactionObject(tx2, lsig);
            let rawSignedTxn3 = algosdk.signLogicSigTransactionObject(tx3, lsig);
            let binarySignedTxs =  AlgoSigner.encoding.base64ToMsgpack(signedTxs[0].blob);
            //let binarySignedTxs = signedTxs.map((txn) => AlgoSigner.encoding.base64ToMsgpack(txn[0].blob));
            let signArr = [binarySignedTxs,rawSignedTxn2.blob, rawSignedTxn3.blob];
            console.log("signed",rawSignedTxn2.blob)
            let trans = await algodclient.sendRawTransaction(signArr).do();
             console.log("Send complete");
          //   console.log("txID", trans);
             console.log("id", trans.txId);
           await waitForConfirmation(algodclient, trans.txId);
            console.log("signed")

            
        })
        .catch((e) => {
          console.error(e);
        });
      })
      .catch((e) => {
        console.error(e);
      });    
          })().catch(e => {
            console.error(e);
        });
        //end add escrow address in our application and optin escrow usdc and nft
      })
      .catch((e) => {
        console.error(e);
      });
    
    })
    .catch((e) => {
        console.error(e);
    });
    
    })
    .catch((e) => {
      console.error(e);
    });


    

  })
  .catch((e) => {
    console.error(e);
  });  
})
.catch(e => { 
  console.error(e); 
});
  
})
.catch((e) => {
  console.error(e);
});


                    
                    
                      })().catch(e => {
                        console.error(e);
                    });


                    //end escrow update application 
                    
                    //pinata

//const axios = require('axios');
// let pinataApiKey='88348e7ce84879e143e1';
// let pinataSecretApiKey='e4e8071ff66386726f9fe1aebf2d3235a9f88ceb4468d4be069591eb78d4bf6f';
// const pinataSDK = require('@pinata/sdk');
// const pinata = pinataSDK(pinataApiKey, pinataSecretApiKey);


//             pinata.testAuthentication().then((result) => {
//             //handle successful authentication here
//             console.log(result);
  
//             let ge=ipfsHash;
//             console.log("ipfsHash",ipfsHash);
//                     const body = {
//                         message: ge
//                     };
//                     const options = {
//                         pinataMetadata: {
//                             name: tname,
//                             keyvalues: {
//                                 customKey: 'customValue',
//                                 customKey2: 'customValue2'
//                             }
//                         },
//                         pinataOptions: {
//                             cidVersion: 0
//                         }
//                     };
//                     pinata.pinJSONToIPFS(body, options).then((result) => {
//                         //handle results here
//                         console.log(result);
//                         console.log("jsonresult")
//                         //setVisibleModal(false)
//                         //setIsOpen(true);
//                         setIsOpens(false)
//                         setIsOpen(true);
  
                      
//                       }).catch((err) => {
//                           //handle error here
//                           console.log(err);
//                       });
  
  
//                     }).catch((err) => {
//                         //handle error here
//                         console.log(err);
//                     });
        
                    //end pinata

    
      
//end here escrow steps

      
})
.catch((e) => {
console.error(e);
});

})
.catch((e) => {
console.error(e);
});
//end new
  }
  
  async function main() {
    try {
    //asset get
 const algosdkapp = require('algosdk');
 const portapp = "";  
const tokenapp = {
   'X-API-key' : 'SVsJKi8vBM1RwK1HEuwhU20hYmwFJelk8bagKPin',
 }
// const baseServerapp = "https://testnet-algorand.api.purestake.io/idx2";    
 const server = "https://testnet-algorand.api.purestake.io/ps2";
// let indexerClientapp = new algosdk.Indexer(tokenapp, baseServerapp, portapp);
// let txnInfo =  await indexerClientapp.searchForTransactions().txid(assetidget).do();    
// await sleep(10000)  
// console.log("idp",txnInfo)
// await sleep(1000)  
// let idgetapp=txnInfo.transactions[0]["created-asset-index"];
// await sleep(2000)  
// console.log("printassetid",idgetapp)
    // initialize an algodClient
    let algodClient = new algosdk.Algodv2(tokenapp, server, algodPort);
    // get accounts from mnemonic
    //let creatorAccount = algosdk.mnemonicToSecretKey("output rocket fashion claw define win sudden all purpose wall group idea half chalk caught sound inquiry sheriff conduct burst miracle stand wink about grape");
    //let userAccount = algosdk.mnemonicToSecretKey("leisure pigeon pottery save camera nephew drift unhappy fine town leave nasty mixed soup frog warrior flush save flame bottom senior muffin ship above excite");
    // compile programs 
    let approvalProgram = await compileProgram(algodClient, approvalProgramSourceInitial);
    let clearProgram = await compileProgram(algodClient, clearProgramSource);
    let accountsarray = [];
    //let decAddr = algosdk.decodeAddress('ZAAHQ7DV7745I5WXAQPXL4GI4ASAV3KWSWM2IJF3UBWJLEDBDISXY2MCT4');        
    //let args = ["ZAAHQ7DV7745I5WXAQPXL4GI4ASAV3KWSWM2IJF3UBWJLEDBDISXY2MCT4"];
    //let program = new Uint8Array(Buffer.from("ZAAHQ7DV7745I5WXAQPXL4GI4ASAV3KWSWM2IJF3UBWJLEDBDISXY2MCT4","base64"));
    //accountsarray.push(program)        
    //let appArgs = [];
    let appArgs = [];
    let accounts = [];
    let usdcid = 41069913;
    console.log("(line:516) appArgs = ",appArgs)
    appArgs.push(algosdk.encodeUint64(usdcid)); //usdc//10458941
    appArgs.push(algosdk.encodeUint64(Number(parseInt(idget)))); //nft40789121
    accounts.push((localStorage.getItem("wallet"))); // account        
    // create new application
    let appId = await createApp(algodClient, localStorage.getItem("wallet"), approvalProgram, clearProgram, localInts, localBytes, globalInts, globalBytes, appArgs, accounts,idget,txxid,usdcid);
    console.log("appid",appId)      
    //let ts = new Date(new Date().toUTCString());
    //console.log(ts)               
    }
    catch (err){
        console.log("err", err);  
    }
  }
  
  //setIsOpens(true)
  main();

  //end new code added

}

const nocallof=()=>{

  alert("please wait .....")
}

const appoptin=async(assetID,responsetxId,addresseswall)=>{
  
}

const storedb=async(assetID,responsetxId,addresseswall)=>{

  console.log("addresswall",addresseswall)
  console.log("assetId",assetID)
  console.log("Img",Img)
  console.log("tname",tname)  
              //db added here 
              //let appId="50714558";
                            
  
}


const fileHandler = (event) => {
  let fileObj = event.target.files[0];    
  ExcelRenderer(fileObj, (err, resp) => {
    if(err){
      console.log(err);            
    }
    else{
      setRows(resp.rows)
      console.log("Cols",resp)
      console.log("Cols",resp.cols)
      console.log("Rows",resp.rows)      
    }
  });                 
  }


  const fileHandler3 = (event) => {
    let fileObj3 = event.target.files[0];    
    ExcelRenderer(fileObj3, (err, resp3) => {
      if(err){
        console.log(err);            
      }
      else{
        setRows3(resp3.rows)
        console.log("Cols3",resp3)
        console.log("Cols3",resp3.cols)
        console.log("Rows3",resp3.rows)      
      }
    });                 
    }
  


const fileSelectedHandler = (e) => {  
  setfiless([e.target.files])  
}

const upload2=async()=>{
  let e=0;
        console.log("ExcelRows",getRows)
        let arr=[];
        getRows.map(async(d)=>{                                    
          for(let j=0;j<=d.length;j++){
            console.log("excellength",d[j])
          if(d[j] === null || d[j] === undefined)
          console.log(d[j])          
          else
          {
            console.log(d[j])          
            e++;   
            arr.push(d[j])                   
          }          
          }          
          setRows2(arr);
        })
        console.log("countc",e)
        console.log("laststate",getRows2)
}

const upload=async()=>{    
  let c=0
  let arr=[];
  filess.map((get)=>{                
    for(let j=0;j<=get.length;j++){    
    if(get[j] === null || get[j] === undefined)
    console.log(get[j])          
    else
    {
      console.log(get[j])          
      c++;   
      arr.push(get[j])                   
    }          
    }          
    setfiless2(arr);
  })        
  console.log("counte",c)
  console.log("countfiles",filess2)          
}

const upload3=async()=>{    
  let c3=0
  let arr3=[];
  getRows3.map((get3)=>{                
    for(let j=0;j<=get3.length;j++){      
    if(get3[j] === null || get3[j] === undefined)
    console.log(get3[j])          
    else
    {
      console.log(get3[j])          
      c3++;   
      arr3.push(get3[j])                   
    }          
    }          
    setRows33(arr3);
  })        
  console.log("counte3",c3)
  console.log("countfiles3",getRows33)          
}



const filesprintdynamic=async()=>{    
  let count=0;
  for(let i=0;i<filess2.length;i++)
  {
  for(let j=i;j===i;j++)
  {

   for(let k=i;k===i;k++)
     {

    console.log("dynamicname2",getRows33[i])          
    console.log("dynamicname1",getRows2[i])          
    console.log("dynamicfile",filess2[i])               
      let ipfsHashes=null; 
      let uriset= null ;
      const file = filess2[i]
      let reader = new window.FileReader()
      Compress.imageFileResizer(file, 300, 300, 'JPEG', 10, 0,
      uri => {
        console.log("iuri",uri)
        uriset = uri ;
        setImg(uri)
      },
      'base64'
      );
    reader.readAsArrayBuffer(file)
    reader.onloadend = async() => {
    //convertToBuffer(reader);    
    const buffer = await Buffer.from(reader.result);
    //set this buffer -using es6 syntax
    setBuffer(buffer);
    await ipfs.add(buffer,async(err, ipfsHash) => {
    //console.log(err,ipfsHash);
    console.log("buff",buffer);
    ipfsHashes=ipfsHash[0].hash;
    setIpfsHash(ipfsHash[0].hash);
    console.log("Hash",ipfsHash[0].hash)
    const CID = await require('cids')
    var cid = new CID(ipfsHash[0].hash)
    //let ccp=cid.toV1().toBaseEncodedString('base32');
    console.log("cid",cid.toV1().toBaseEncodedString('base32'));
    //setButtonopen(true)         
        })        
    }

    if(localStorage.getItem("wallet") === null || localStorage.getItem("wallet") === "0x" || localStorage.getItem("wallet") === undefined || localStorage.getItem("wallet") === ''){
      console.log("Empty",localStorage.getItem("wallet"))
    }
    else{
    await sleep(2000)
    ta=getRows2[i];
    tb='CIFI';
    te=1000;
    let idget="";
    console.log("uploadonecheck",ta);
    console.log("uploadtwocheck",tb);
    console.log("uploadtwocheck",te);
setVisibleModal(false)                        
const algosdk = require('algosdk');            
setIsOpens(true)
const server = "https://testnet-algorand.api.purestake.io/ps2";
const port = "";  
const token = {
      'X-API-key' : 'SVsJKi8vBM1RwK1HEuwhU20hYmwFJelk8bagKPin',
}
let algodclient = new algosdk.Algodv2(token, server, port);
const params = await algodclient.getTransactionParams().do();
params.fee = 1000;
params.flatFee = true;
//await sleep(4000)
const myAlgoConnect =await new MyAlgoConnect();
const txn = await algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({    
  from:localStorage.getItem('wallet'),
  assetName: getRows2[i],
  unitName: tb,
  total: 1,
  decimals: 0,
  note: AlgoSigner.encoding.stringToByteArray("nothing"),
  //manager:lsig.address(),
  manager:localStorage.getItem('wallet'),
  reserve:localStorage.getItem('wallet'),
  freeze:localStorage.getItem('wallet'),
  clawback:localStorage.getItem('wallet'),
  suggestedParams: params
});

const signedTxn = await myAlgoConnect.signTransaction(txn.toByte());
const response = await algodclient.sendRawTransaction(signedTxn.blob).do();
console.log("optresponse",response)
await waitForConfirmation(algodclient,response.txId);
let ptx = await algodclient.pendingTransactionInformation(response.txId).do();
let assetID = ptx["asset-index"];
console.log("pendingass",assetID);        
  let appId="50714558";
  

  //await storedb(assetID,response.txId,localStorage.getItem('wallet'));
      let ref2=fireDb2.database().ref(`imagerefAlgo/${localStorage.getItem('wallet')}`);
      let ref22=fireDb2.database().ref(`imagerefAlgolt`);   
                            let dateset=new Date().toDateString();
                            console.log("dateget",dateset)
                            const db = ref2.push().key;                         
                            //const db2 = ref22.push().key;                         
                            console.log("dbcheck",db)
                            await ref2.child(db).set({
                              id:assetID,imageUrl:uriset,priceSet:"",cAddress:"",keyId:db,userName:getRows2[i],userSymbol:"CIFI",
                            ipfsUrl:uriset,ownerAddress:localStorage.getItem('wallet'),soldd:"",extra1:"",previousoaddress:"",datesets:dateset,
                            whois:'',
                            league:selected,team:selected2,type:selected3,
                            teamlogo:selectedImg,dimen:selected4,description:getRows33[i],history:"",Mnemonic:"",applicationid:appId,usdcids:assetID,escrowaddress:""})
                            .then(async()=>{
                            await ref22.child(db).set({id:assetID,imageUrl:uriset,priceSet:"",cAddress:"",keyId:db,
                            userName:getRows2[i],userSymbol:"CIFI",
                            ipfsUrl:uriset,ownerAddress:localStorage.getItem('wallet'),soldd:"",extra1:"",
                            previousoaddress:"",datesets:dateset,whois:'',
                            league:selected,team:selected2,type:selected3,teamlogo:selectedImg,dimen:selected4,
                            description:getRows33[i],history:"",Mnemonic:"",applicationid:appId,usdcids:assetID,escrowaddress:""})
                            .then(async()=>{     
                      //add pinata here          
                      //pinata          
          //const axios = require('axios');
          // let pinataApiKey='88348e7ce84879e143e1';
          // let pinataSecretApiKey='e4e8071ff66386726f9fe1aebf2d3235a9f88ceb4468d4be069591eb78d4bf6f';
          const pinataApiKey = "221cfff25de18e88d3d0";
          const pinataSecretApiKey = "ddffffed103d82a6296a378c80ddd2b4280b0d8a51e6922122fd3817accb45ba";
          const pinataSDK = require('@pinata/sdk');
          const pinata = await pinataSDK(pinataApiKey, pinataSecretApiKey);
                      await pinata.testAuthentication().then(async(result) => {
                      //handle successful authentication here
                      console.log(result);  
                      let ge=ipfsHashes;                      
                      console.log("ipfsHash",ipfsHash);
                      console.log("ipfsHashs",ipfsHashes);
                              const body = {
                                  message: ge
                              };
                              const options = {
                                  pinataMetadata: {
                                      name: getRows2[i],
                                      keyvalues: {
                                          customKey: 'customValue',
                                          customKey2: 'customValue2'
                                      }
                                  },
                                  pinataOptions: {
                                      cidVersion: 0
                                  }
                              };
                              await pinata.pinJSONToIPFS(body, options).then(async(result) => {
                                  //handle results here
                                  console.log(result);
                                  console.log("jsonresult")                                            

                                  //new
                                  
                                  //end
                      setIsOpens(false)
                      //setIsOpen(true);
                      //return appId;                                            
                                }).catch((err) => {
                                    //handle error here
                                    console.log(err);
                                });                        
                              }).catch((err) => {
                                  //handle error here
                                  console.log(err);
                              });                  
                              //end pinata          
                      //end pinata here                      
                              
                            })              
                            })                    
      console.log("ReaderGet",reader)        
      count++;
    }
  }
  }     
  }
  console.log("count",count)
  window.location.reload(false)
}

const Toast=()=>{
  toast.error("ERROR")
  toast.success("SUCCESS")
  toast.info("INFO")
  toast.warn("WARNING")  

}

const stoast=()=>{
  toast("Success",{
  className :"custom-toast",
  draggable :true,
  position:toast.POSITION.BOTTOM_CENTER
  });
}


// setName(event.target.value)
// setDescription( event.target.value)

const onetimeopt=async()=>{
setIsOpens(true)
const algosdk = require('algosdk');    
const server = "https://testnet-algorand.api.purestake.io/ps2";
const port = "";  
const token = {
      'X-API-key' : 'SVsJKi8vBM1RwK1HEuwhU20hYmwFJelk8bagKPin',
}
let algodclient = new algosdk.Algodv2(token, server, port);
let appId="50714558";
const myAlgoConnect =await new MyAlgoConnect();
  try {    
    const params = await algodclient.getTransactionParams().do();
    let transoptin = await algosdk.makeApplicationOptInTxnFromObject({
    from: localStorage.getItem('wallet'),      
    appIndex:parseInt(appId),
    note: undefined,
    suggestedParams: params
    });

  const signedTxn = await myAlgoConnect.signTransaction(transoptin.toByte());
  const response = await algodclient.sendRawTransaction(signedTxn.blob).do();
  console.log("optresponse",response)  
  setIsOpens(false)
}
catch (err) {
  console.error(err);      
  setIsOpens(false)
  toast("YOU ARE ALREADY OPTTED",{
    className :"error-toast",
    draggable :true,
    position:toast.POSITION.TOP_CENTER
    });
}

  
}
  return (
    <>
      <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.wrapper}>
          {/* <button
                  className={cn("button", styles.button)}
                  onClick={() => Toast()}                  
                  type="button">                  
                  <span>Toast</span>                  
                </button>                  */}
            <div className={styles.head}>
              <div className={cn("h2", styles.title)}>
                MULTIPLE NFT UPLOAD
                <br/>
                <h6 className={styles.category}>APP OPT-IN &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button
                  className={cn("button", styles.button)}
                  onClick={() => onetimeopt()}    
                  type="button">                  
                  <span>ONE TIME OPT</span>                  
                </button>                 
                </h6>
                <br/>
                <h6 className={styles.category}>images &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="file" multiple onChange={fileSelectedHandler} />
                <button
                  className={cn("button", styles.button)}
                  onClick={() => upload()}                  
                  type="button">                  
                  <span>Run1</span>                  
                </button>                 
                </h6>
                &nbsp;
                
                <h6 className={styles.category}>Name File &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="file" onChange={fileHandler} />
                <button
                  className={cn("button", styles.button)}
                  onClick={() => upload2()}  
                  type="button">                  
                  <span>Run2</span>                  
                </button>                 
                </h6>
                <br/>
                <h6 className={styles.category}>Description File&nbsp;&nbsp;
                <input type="file" onChange={fileHandler3} />
                <button
                  className={cn("button", styles.button)}
                  onClick={() => upload3()}        
                  type="button">                  
                  <span>Run3</span>                  
                </button>                 
                </h6>                
                <div className={styles.fieldset} >
<select onChange={changeSelectOptionHandler} style={{width:"100%"}}>
            <option value='Minor League'>Minor League</option>
            <option value='Major League'>Major League</option>
            <option value='Triangle League'>Triangle League</option>
            <option value='Aryan Shah'>Aryan Shah</option>
            <option value='Others'>Others</option>
          </select>
</div>

<div className={styles.fieldset} >
<select onChange={changeSelectOptionHandler2} style={{width:"100%"}}>
            <option value='Atlanta Fire'>Atlanta Fire</option>
            <option value='Atlanta Param Veers'>Atlanta Param Veers</option>
            <option value='Florida Beamers'>Florida Beamers</option>
            <option value='Ft. Lauderdale Lions'>Ft. Lauderdale Lions</option>
            <option value='Morrisville Cardinals'>Morrisville Cardinals</option>
            <option value='Orlando Galaxy'>Orlando Galaxy</option>
            <option value='DC Hawks'>DC Hawks</option>
            <option value='Empire State Titans'>Empire State Titans</option>
            <option value='Manhattan Yorkers'>Manhattan Yorkers</option>
            <option value='New England Eagles'>New England Eagles</option>
            <option value='New Jersey Somerset Cavaliers'>New Jersey Somerset Cavaliers</option>
            <option value='New Jersey Stallions'>New Jersey Stallions</option>
            <option value='The Philadelphians'>The Philadelphians</option>
            <option value='Austin Athletics'>Austin Athletics</option>
            <option value='Chicago Blasters'>Chicago Blasters</option>
            <option value='Chicago Catchers'>Chicago Catchers</option>
            <option value='Houston Hurricanes'>Houston Hurricanes</option>
            <option value='Irving Mustangs'>Irving Mustangs</option>
            <option value='Michigan Cricket Stars'>Michigan Cricket Stars</option>
            <option value='St. Louis Americans'>St. Louis Americans</option>
            <option value='East Bay Blazers'>East Bay Blazers</option>
            <option value='Golden State Grizzlies'>Golden State Grizzlies</option>
            <option value='Hollywood Master Blasters'>Hollywood Master Blasters</option>
            <option value='San Diego Surf Riders'>San Diego Surf Riders</option>
            <option value='Seattle Thunderbolts'>Seattle Thunderbolts</option>
            <option value='Silicon Valley Strikers'>Silicon Valley Strikers</option>
            <option value='Socal Lashings'>Socal Lashings</option>            
            <option value='Others'>Others</option>
          </select>
</div>

<div className={styles.fieldset} >
<select onChange={changeSelectOptionHandler3} style={{width:"100%"}}>
            <option value='Award'>Award</option>
            <option value='Trophy'>Trophy</option>
            <option value='Player'>Player</option>
            <option value='Others'>Others</option>
          </select>
</div>

<div className={styles.fieldset} >
<select onChange={changeSelectOptionHandler4} style={{width:"100%"}}>
            <option value='2D'>2D</option>
            <option value='3D'>3D</option>
          </select>
          
</div>
<br/>
                <h6 className={styles.category}>
                <button
                  className={cn("button", styles.button)}
                  onClick={() => filesprintdynamic()}                  
                  type="button">                  
                  <span>Upload</span>                  
                </button>                 
                </h6>
              </div>              
            </div>
            <br></br>            
          </div>          
        </div>        
      </div>      
<Modald visible={visibleModal} onClose={() => setVisibleModal(false)}>
        {/* <FolowStepsd className={styles.steps} onSubmitNFT={()=>onSubmitNFT}/> */}
      </Modald>
      <Modald visible={isOpen} onClose={() => setIsOpen(false)}>
        <FolowStepsdr className={styles.steps} onSub={()=>onSub}/>
      </Modald>
      <Modald visible={isOpens} >
        <FolowStep className={styles.steps} />
      </Modald>          
      <ToastContainer draggable={false} transition={Zoom} autoClose={8000} closeOnClick = {false}/>      
      <><ToastContainer position='top-center' draggable = {false} transition={Zoom} autoClose={8000} closeOnClick = {false}/></>
    </>
  );
};

export default UploadAll;