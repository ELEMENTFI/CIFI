/* global AlgoSigner */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Card.module.sass";
import Icon from "../Icon";
import fireDb from "../../screens/UploadDetails/firebase";
import axios from 'axios';
import FolowStepsd from "./FolowStepsd";
import Modald from "../ModalD";
import web3 from '../../screens/UploadDetails/web3';
import {abi} from './data'
import FolowStep from "../../screens/Profile/FolowStep";
import FolowSteps from "../../screens/Profile/FolowSteps";
import TextInput from "../TextInput";
import MyAlgoConnect from '@randlabs/myalgo-connect';
import data from "../../escrow";
const myAlgoWallet = new MyAlgoConnect();

const CardcopyAll = ({ className, item }) => {
  console.log("resalecopy",item)  
  const [urlprize,setUrlprize] = useState(null);
  let history=useHistory();
  const [isOpens, setIsOpens] = useState(false);
  const [isOpenss, setIsOpenss] = useState(false);
  const [visible, setVisible] = useState(false);
  const [historydb, sethistorydb] = useState([]);
  console.log("hist",historydb)  
  const [isOpen, setIsOpen] = useState(false)

const printAssetHolding = async function (algodclient, account, assetid) {
  // note: if you have an indexer instance available it is easier to just use this
  //     let accountInfo = await indexerClient.searchAccounts()
  //    .assetID(assetIndex).do();
  // and in the loop below use this to extract the asset for a particular account
  // accountInfo['accounts'][idx][account]);
  let accountInfo = await algodclient.accountInformation(account).do();
  for (let idx = 0; idx < accountInfo['assets'].length; idx++) {
      let scrutinizedAsset = accountInfo['assets'][idx];
      if (scrutinizedAsset['asset-id'] === assetid) {
          let myassetholding = JSON.stringify(scrutinizedAsset, undefined, 2);
          console.log("assetholdinginfo = " + myassetholding);
          break;
      }
  }
};


  async function waitForAlgosignerConfirmationtest(tx) {
    console.log(`Transaction ${tx.txId} waiting for confirmation...`);
    let status = await AlgoSigner.algod({
      ledger: 'TestNet',
      path: '/v2/transactions/pending/' + tx.txId
    });  
    while(true) {
      if(status['confirmed-round'] !== null && status['confirmed-round'] > 0) {
        //Got the completed Transaction
        console.log(`Transaction confirmed in round ${status['confirmed-round']}.`);
        break;
      }  
      status = await AlgoSigner.algod({
        ledger: 'TestNet',
        path: '/v2/transactions/pending/' + tx.txId
      });
    }    
    return tx;
  }

  async function waitForAlgosignerConfirmationmain(tx) {
    console.log(`Transaction ${tx.txId} waiting for confirmation...`);
    let status = await AlgoSigner.algod({
      ledger: 'MainNet',
      path: '/v2/transactions/pending/' + tx.txId
    });  
    while(true) {
      if(status['confirmed-round'] !== null && status['confirmed-round'] > 0) {
        //Got the completed Transaction
        console.log(`Transaction confirmed in round ${status['confirmed-round']}.`);
        break;
      }  
      status = await AlgoSigner.algod({
        ledger: 'MainNet',
        path: '/v2/transactions/pending/' + tx.txId
      });
    }    
    return tx;
  }

  
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

  const setpricedb =async()=>{
    console.log("iitem",item)
    console.log("ititem",item.price)
    if(localStorage.getItem("wallet") === null || localStorage.getItem("wallet") === "0x" || localStorage.getItem("wallet") === undefined || localStorage.getItem("wallet") === ''){

      }
    else{      
      setIsOpens(true)
      let getalgo=localStorage.getItem("wallet");
      console.log("1",item.bid)
      console.log("2",item.highestBid)
      console.log("3",item.category)
      console.log("4",item.image2x)
      console.log("5",item.title)
      console.log("6",item.categoryText)
      console.log("7",item.counter)
      console.log("8",item.image2x)
    const algosdk = require('algosdk');
    let idget="";
    const port = "";  
    if(localStorage.getItem("net") === "mainnet"){
    const server = "https://mainnet-algorand.api.purestake.io/ps2";      
    const token = {
      'X-API-key' : 'SVsJKi8vBM1RwK1HEuwhU20hYmwFJelk8bagKPin',
    }
    let indexerClient = new algosdk.Indexer(token, server, port);
    (async()=> {
      //const txnInfo2 =  await indexerClient.searchForTransactions().txid('H6QGCDZGS64ZD6SXYUHQKFEG5CTF4VB3JCCT4WAGWRH2LTY7UV3A').do()
      //console.log(txnInfo2)
      let txnInfo =  await indexerClient.searchForTransactions().txid(item.categoryText).do();      
      console.log(txnInfo)
      idget=txnInfo.transactions[0]["created-asset-index"];
      console.log("assetidget",txnInfo.transactions[0]["created-asset-index"])  
      console.log("end")  
      setIsOpens(true)
      fireDb.database().ref(`imagerefexploreoneAlgos/${getalgo}`).child(item.highestBid).set({
        id:idget,imageUrl:item.image,priceSet:item.price,cAddress:item.categoryText,keyId:item.highestBid,
        userName:item.counter,userSymbol:item.userSymbol,ipfsUrl:item.ipfsurl,
        ownerAddress:item.bid,soldd:item.soldd,extra1:item.extra,
        previousoaddress:item.previousaddress,datesets:item.date,
        description:item.description,whois:'readytosale',history:item.url,Mnemonic:item.Mnemonic
      }).then(()=>{
        fireDb.database().ref(`imagerefAlgo/${getalgo}`).child(item.highestBid).remove();
          console.log("remove db");
          setIsOpens(false)
          window.location.reload(false)   
      })    
    })().catch(e => {
        console.log(e);
    });  
      }
      else{
        if(urlprize === "" || urlprize === null)
        {
          alert("please enter prize...")
        }else{          
          const algosdk = require('algosdk');  
          const algodclient = new algosdk.Algodv2('', 'https://api.testnet.algoexplorer.io', '');
          // const myAlgoConnect = new MyAlgoConnect();
          let appId="50714558";
          //let idget=assetidgetc;
          let assetidgetc=parseInt(item.title)    
        try {            
          let amountmul=(parseInt(urlprize)*1000000);
          console.log("amountmul",amountmul)
        const params = await algodclient.getTransactionParams().do();            
        const myAlgoConnect = new MyAlgoConnect();
        let results = await algodclient.compile(data).do();
            console.log("Resultconsole = " + results);
            console.log("Hash = " + results.hash);
            console.log("Result = " + results.result);
            //await sleep(20000)
            let program = new Uint8Array(Buffer.from(results.result, "base64"));      
            let lsig = algosdk.makeLogicSig(program);
            //let tealSignPrint = tealSign(sk, data, lsig.address());
            console.log("LSIG",lsig.address())
        let appArgs = [];
        appArgs.push(new Uint8Array(Buffer.from("createlisting")));
        appArgs.push(algosdk.encodeUint64(parseInt(amountmul)));
        let transaction1 = algosdk.makeApplicationNoOpTxnFromObject({
          from:localStorage.getItem('wallet'), 
          suggestedParams:params, 
          appIndex:parseInt(appId), 
          appArgs:appArgs
        })

        let transaction2 = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
        from: localStorage.getItem('wallet'),
        to: lsig.address(),
        amount: Number(parseInt(3000)),
        note: undefined,
        suggestedParams: params
        });
                
        const transaction3 = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
        from: lsig.address(),
        to: lsig.address(),
        assetIndex: parseInt(assetidgetc),
        note: undefined,
        amount: 0,
        suggestedParams: params
        });
        
        const transaction4= algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
        from: localStorage.getItem('wallet'),
        to: lsig.address(),
        assetIndex: parseInt(assetidgetc),
        note: undefined,
        amount: 1,
        suggestedParams: params
        });

        const txn5 = algosdk.makeAssetConfigTxnWithSuggestedParamsFromObject({
          reKeyTo: undefined,
          from : localStorage.getItem('wallet'),
          manager: lsig.address(),
          assetIndex:parseInt(assetidgetc),
          suggestedParams:params,
          strictEmptyAddressChecking:false
          
        })
        
        
        const groupID = algosdk.computeGroupID([ transaction1, transaction2, transaction3, transaction4,txn5]);
        const txs = [ transaction1, transaction2, transaction3, transaction4,txn5 ];
        txs[0].group = groupID;
        txs[1].group = groupID;
        txs[2].group = groupID;
        txs[3].group = groupID;
        txs[4].group = groupID;
        
                  
        const signedTx1 = await myAlgoConnect.signTransaction(txs[0].toByte());
        const signedTx2 = await myAlgoConnect.signTransaction(txs[1].toByte());
        const signedTx3 = algosdk.signLogicSigTransaction(txs[2], lsig);
        const signedTx4 = await myAlgoConnect.signTransaction(txs[3].toByte());
        const signedTx5 = await myAlgoConnect.signTransaction(txs[4].toByte());
        const response = await algodclient.sendRawTransaction([ signedTx1.blob, signedTx2.blob, signedTx3.blob, signedTx4.blob,signedTx5.blob]).do();
        console.log("TxID", JSON.stringify(response, null, 1));
        await waitForConfirmation(algodclient, response.txId);
        //db here
        fireDb.database().ref(`imagerefAlgo/${getalgo}`).child(item.highestBid).update({
          id:item.title,imageUrl:item.image,priceSet:parseInt(amountmul),cAddress:lsig.address(),keyId:item.highestBid,
          userName:item.counter,userSymbol:item.userSymbol,ipfsUrl:item.ipfsurl,
          ownerAddress:item.bid,soldd:item.soldd,extra1:item.extra,
          previousoaddress:item.previousaddress,datesets:item.date,
          description:item.description,whois:'readytosale',history:item.url,
          Mnemonic:item.Mnemonic,applicationid:item.applicationid,usdcids:item.usdcids,
          escrowaddress:lsig.address(),
          league:item.league,team:item.team,type:item.type,
        }).then(()=>{  
          //update
          fireDb.database().ref(`imagerefexploreoneAlgos/${getalgo}`).child(item.highestBid).set({
            id:item.title,imageUrl:item.image,priceSet:item.price,cAddress:item.categoryText,keyId:item.highestBid,
            userName:item.counter,userSymbol:item.userSymbol,ipfsUrl:item.ipfsurl,
            ownerAddress:item.bid,soldd:item.soldd,extra1:item.extra,
            previousoaddress:item.previousaddress,datesets:item.date,
            description:item.description,whois:'readytosale',history:item.url,Mnemonic:item.Mnemonic,
            applicationid:item.applicationid,usdcids:item.usdcids,escrowaddress:item.escrowaddress,            
          }).then(()=>{
            fireDb.database().ref(`imagerefAlgo/${getalgo}`).child(item.highestBid).remove();
              console.log("remove db");
              setIsOpens(false)
              //window.location.reload(false)   
          })
        //stop
        //setIsOpens(false);
        //setIsOpenss(true)    
        })
          
        //db end here
          } catch (err) {
            console.error(err);
          }

        }
     
      }                
  }
}

  const saledbset=async()=>{

    if(localStorage.getItem("wallet") === null || localStorage.getItem("wallet") === "0x" || localStorage.getItem("wallet") === undefined || localStorage.getItem("wallet") === ''){

      alert("nothing")
    }
    else{  
    setIsOpens(true)  
    let getalgo=localStorage.getItem("wallet");
    console.log("checkowner",item.title)
    console.log("checkowners",getalgo)
    if(getalgo === item.bid)
    {
    if(localStorage.getItem("net") === "mainnet"){
      fireDb.database().ref(`imagerefexploreoneAlgos/${getalgo}`).child(item.highestBid).set({
        id:item.title,imageUrl:item.image,priceSet:item.price,cAddress:item.categoryText,keyId:item.highestBid,
        userName:item.counter,userSymbol:"Algos",ipfsUrl:item.ipfsurl,
        ownerAddress:item.bid,soldd:item.soldd,extra1:item.extra,
        previousoaddress:item.previousaddress,datesets:item.date,
        description:item.description,whois:'readytosale',history:item.url,Mnemonic:item.Mnemonic,
        applicationid:item.applicationid,usdcids:item.usdcids,escrowaddress:item.escrowaddress
      }).then(()=>{
        fireDb.database().ref(`imagerefAlgo/${getalgo}`).child(item.highestBid).remove();
          console.log("remove db");
          setIsOpens(false)
          window.location.reload(false)   
      })
    }
    else{        
      fireDb.database().ref(`imagerefexploreoneAlgos/${getalgo}`).child(item.highestBid).set({
        id:item.title,imageUrl:item.image,priceSet:item.price,cAddress:item.categoryText,keyId:item.highestBid,
        userName:item.counter,userSymbol:item.userSymbol,ipfsUrl:item.ipfsurl,
        ownerAddress:item.bid,soldd:item.soldd,extra1:item.extra,
        previousoaddress:item.previousaddress,datesets:item.date,
        description:item.description,whois:'readytosale',history:item.url,Mnemonic:item.Mnemonic,
        applicationid:item.applicationid,usdcids:item.usdcids,escrowaddress:item.escrowaddress,
        //league:item.league,team:item.team,type:item.type,
      }).then(()=>{
        fireDb.database().ref(`imagerefAlgo/${getalgo}`).child(item.highestBid).remove();
          console.log("remove db");
          setIsOpens(false)
          window.location.reload(false)   
      })
    }
  }
}
          

  }  

  
  return (
    <>
    <div className={cn(styles.card, className)}>    
      <div className={styles.preview}>        
        <img srcSet={`${item.image} 2x`} src={item.image} alt="Card" />
        <div className={styles.control}>
          <div
            className={cn(
              { "status-green": item.category === "green" },
              styles.category
            )}
          >
          {item.categoryText}
          </div>                  
        </div>        
      </div>
      <br></br>  
      <Link className={styles.link} to={item.url}>
        <div className={styles.body}>
          <div className={styles.line}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.price}>{parseInt(item.price/1000000)}</div>            
          </div>
          <div className={styles.line}>
            <div className={styles.users}>
              {item.users.map((x, index) => (
                <div className={styles.avatar} key={index}>
                  <img src={x.avatar} alt="Avatar" />                  
                </div>
              ))}
            </div>
            <div className={styles.counter}>{item.counter}</div>
          </div>
        </div>


        
        <div className={styles.foot}>
          <div className={styles.status}>                                    
          </div>          
        </div>
      </Link>      
    </div>
    <Modald visible={isOpen} onClose={() => setIsOpen(false)}>
    <FolowStepsd className={styles.steps} viewhistory={historydb}/>
  </Modald>
  <Modald visible={isOpens} >
<FolowStep className={styles.steps} />
</Modald>
<Modald visible={isOpenss} >
</Modald>
</>
  );
};

export default CardcopyAll;
