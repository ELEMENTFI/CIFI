///* global AlgoSigner */
import React, { useState,useEffect} from "react";
import {ExcelRenderer} from 'react-excel-renderer';
import cn from "classnames";
import styles from "./Profile.module.sass";
import ItemsCopy from "./ItemsCopy";
import Itemss from "./Itemss";
import firebase from "../UploadDetails/firebase";
import MyAlgoConnect from '@randlabs/myalgo-connect';
import data from "../../escrow";
import fireDb from "../../screens/UploadDetails/firebase";
import FolowStep from "../../screens/Profile/FolowStep";
import Modald from "../../components/ModalD";

// const navLinks = [
//   "On Sale",
//   "Created",  
// ];

const ProfilecopyAll = () => {
const [getRows,setRows]= useState([]);
const [getRows2,setRows2]= useState([]);
const[getImgreffalgocopy,setgetImgreffalgocopy]=useState([]);
console.log("getImgalgocopy",getImgreffalgocopy)
const[getImgreffalgosale,setgetImgreffalgosale]=useState([]);
console.log("getImgalgosale",getImgreffalgosale)
const [isOpens, setIsOpens] = useState(false);


const dbcallsalealgo=async()=>{
  console.log("inside dbcallsalealgo function")
  
  let req = [];

  if(localStorage.getItem("wallet")  === null || localStorage.getItem("wallet")  === "" || localStorage.getItem("wallet")  === " " || localStorage.getItem("wallet") === 'undefined' || localStorage.getItem("wallet") === '' || localStorage.getItem("wallet") === "0x"){

  }else{

    let getalgo=localStorage.getItem("wallet");
    
    //let kreq =[];
    firebase.database().ref("imagerefexploreoneAlgos").child(getalgo).on("value", (data) => {
      if (data) {
        data.forEach((d) => {
          //console.log("keycheck",d.key)
          let value=d.val();
          req.push(            
            {
              userSymbol:value.userSymbol,
              title: value.id,
              price: value.priceSet,
              highestBid: value.keyId,
              counter:value.userName ,
              //bid: 'New bid <span role="img" aria-label="fire">🔥</span>',
              bid:value.ownerAddress,
              image: value.imageUrl,
              image2x: value.paramsdb,
              category: value.privatekey,
              categoryText: value.cAddress,
              //purchasing !
              url: value.history,
              league:value.league,
              team:value.team,
              type:value.type,
              dimen:value.dimen,
              teamlogo:value.teamlogo,      
              ipfsurl:value.ipfsUrl,
              extra:value.extra1,
              previousaddress:value.previousoaddress,
              date:value.datesets,
              description:value.description,
              soldd:"",
              Mnemonic:value.Mnemonic,
              usdcids:value.usdcids,
              applicationid:value.applicationid,
              escrowaddress:value.escrowaddress,
              users: [                
                {
                  //avatar: "/images/content/avatar-4.jpg",
                  avatar :value.imageUrl,
                },
              ],
            },
          
          )
        });        
      }
    });
    setgetImgreffalgosale(req);  
  }
  console.log("acc",getImgreffalgosale)

}

useEffect(()=>{dbcallsalealgo()},[])


const dbcallalgo=async()=>{
  console.log("inside dbcallalgo function")  
  let req = [];
  if(localStorage.getItem("wallet")  === null || localStorage.getItem("wallet")  === "" || localStorage.getItem("wallet")  === " " || localStorage.getItem("wallet") === 'undefined' || localStorage.getItem("wallet") === ''){
  }
  else{
    let getalgo=localStorage.getItem("wallet");    
    //let kreq =[];
    firebase.database().ref("imagerefAlgo").child(getalgo).on("value", (data) => {
      if (data) {
        data.forEach((d) => {
          //console.log("keycheck",d.key)
          let value=d.val();
          req.push(            
            {
              userSymbol:value.userSymbol,
              title: value.id,
              price: value.priceSet,
              highestBid: value.keyId,
              counter:value.userName ,
              //bid: 'New bid <span role="img" aria-label="fire">🔥</span>',
              bid:value.ownerAddress,
              image: value.imageUrl,
              image2x:value.paramsdb,
              category: value.privatekey,
              categoryText: value.cAddress,
              //purchasing !
              url: value.history,
              league:value.league,
              team:value.team,
              type:value.type,
              dimen:value.dimen,
              teamlogo:value.teamlogo,      
              ipfsurl:value.ipfsUrl,
              extra:value.extra1,
              previousaddress:value.previousoaddress,
              date:value.datesets,
              description:value.description,
              soldd:"",
              history:"",
              Mnemonic:value.Mnemonic,
              usdcids:value.usdcids,
              applicationid:value.applicationid,
              escrowaddress:value.escrowaddress,
              users: [                
                {
                  //avatar: "/images/content/avatar-4.jpg",
                  avatar :value.imageUrl,
                },
              ],
            },          
          )      
        });        
      }
    });
    setgetImgreffalgocopy(req);
  
  } 
}
useEffect(()=>{dbcallalgo()},[])


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

  const filesprintdynamic=async()=>{    
    let count=0;
    for(let i=0;i<getRows2.length;i++)
    {      
      console.log("dynamicname1",getRows2[i])                         
      if(localStorage.getItem("wallet") === null || localStorage.getItem("wallet") === "0x" || localStorage.getItem("wallet") === undefined || localStorage.getItem("wallet") === ''){
        console.log("Empty",localStorage.getItem("wallet"))
      }
      else{      
        let getalgo=localStorage.getItem("wallet");
        setIsOpens(true)
        console.log("consolestate",getImgreffalgocopy[i])
        const algosdk = require('algosdk');  
          const algodclient = new algosdk.Algodv2('', 'https://api.testnet.algoexplorer.io', '');
          // const myAlgoConnect = new MyAlgoConnect();
          let appId="50714558";
          //let idget=assetidgetc;
          let assetidgetc=parseInt(getImgreffalgocopy[i].title)    
        try {            
          let amountmul=(parseInt(getRows2[i])*1000000);
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

        console.log("c1",getImgreffalgocopy[i].title)
        console.log("c2",getImgreffalgocopy[i].image)
        console.log("c3",getImgreffalgocopy[i].highestBid)
        console.log("c4",getImgreffalgocopy[i].counter)
        console.log("c5",getImgreffalgocopy[i].userSymbol)
        console.log("c6",getImgreffalgocopy[i].ipfsurl)
        console.log("c7",getImgreffalgocopy[i].bid)
        console.log("c8",getImgreffalgocopy[i].soldd)
        console.log("c9",getImgreffalgocopy[i].extra)
        console.log("c10",getImgreffalgocopy[i].previousaddress)
        console.log("c11",getImgreffalgocopy[i].date)
        console.log("c12",getImgreffalgocopy[i].description)
        console.log("c13",getImgreffalgocopy[i].url)
        console.log("c14",getImgreffalgocopy[i].Mnemonic)
        console.log("c15",getImgreffalgocopy[i].applicationid)
        console.log("c16",getImgreffalgocopy[i].usdcids)
        console.log("c17",getImgreffalgocopy[i].league)
        console.log("c18",getImgreffalgocopy[i].team)
        console.log("c19",getImgreffalgocopy[i].type)

        fireDb.database().ref(`imagerefexploreoneAlgos/${getalgo}`).child(getImgreffalgocopy[i].highestBid).update({
          id:getImgreffalgocopy[i].title,imageUrl:getImgreffalgocopy[i].image,priceSet:parseInt(amountmul),cAddress:lsig.address(),
          keyId:getImgreffalgocopy[i].highestBid,
          userName:getImgreffalgocopy[i].counter,userSymbol:getImgreffalgocopy[i].userSymbol,ipfsUrl:getImgreffalgocopy[i].ipfsurl,
          ownerAddress:getImgreffalgocopy[i].bid,soldd:getImgreffalgocopy[i].soldd,extra1:getImgreffalgocopy[i].extra,
          previousoaddress:getImgreffalgocopy[i].previousaddress,datesets:getImgreffalgocopy[i].date,
          description:getImgreffalgocopy[i].description,whois:'readytosale',history:getImgreffalgocopy[i].url,
          Mnemonic:getImgreffalgocopy[i].Mnemonic,applicationid:getImgreffalgocopy[i].applicationid,usdcids:getImgreffalgocopy[i].usdcids,
          escrowaddress:lsig.address(),league:getImgreffalgocopy[i].league,team:getImgreffalgocopy[i].team,
          type:getImgreffalgocopy[i].type,
        }).then(()=>{     
          fireDb.database().ref(`imagerefAlgo/${getalgo}`).child(getImgreffalgocopy[i].highestBid).remove().then(()=>{
            console.log("remove db");
            console.log("icount",i)   
          })          
        })          
        //db end here
          } catch (err) {
            console.error(err);
          }      
    }        
      count++;
      } 
    setIsOpens(false);        
    console.log("count",count)
    window.location.reload(false)
  }

  return (
    <div className={styles.profile}>           
      <div className={styles.body}>        
        <div className={cn("container", styles.container)}>                              
          <div className={styles.wrapper}>
            <div className={styles.nav}>                                        
            <h6 className={styles.category}>Name File &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="file" onChange={fileHandler} />
                <button
                  className={cn("button", styles.button)}
                  onClick={() => upload2()}  
                  type="button">                  
                  <span>SALE</span>                  
                </button>                 
                </h6>
<br/><br/><br/><br/>
                <h6 className={styles.category}>
                <button
                  className={cn("button", styles.button)}
                  onClick={() => filesprintdynamic()}                  
                  type="button">                  
                  <span>Upload</span>                  
                </button>                 
                </h6>
            
              {/* {navLinks.map((x, index) => (
                <button
                  className={cn(styles.link, {
                    [styles.active]: index === activeIndex,
                  })}
                  key={index}
                  onClick={() => setActiveIndex(index)}
                >
                  {x}
                </button>
              ))} */}
            </div>
            <div className={styles.group}>
              <div className={styles.item}>
                {/* {activeIndex === 0 && (
                  <Itemss class={styles.items} items={getImgreffalgosale} />                                    
                )}                
                {activeIndex === 1 && (                                     
                  <ItemsCopy class={styles.items} items={getImgreffalgocopy} />              
                 )}                  */}
              </div>
            </div>
          </div>
        </div>
      </div>    
<Modald visible={isOpens} >
<FolowStep className={styles.steps} />
</Modald>  
    </div>
  );
};
export default ProfilecopyAll;