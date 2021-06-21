/* global AlgoSigner */
import firebase from "firebase";
import fireDb from "./firebase";
import Popup from './Popup';
import axios from 'axios';
import React, { useState,useEffect,useCallback } from "react";
const AlgoTest=()=>{
const [tprice,setTprice] = useState("");
const [isOpenset, setIsOpenset] = useState(false);
const [isOpensetFirst, setIsOpensetFirst] = useState(false);
const togglePopupset = () => {
  setIsOpenset(false);    
}
const [isOpen, setIsOpen] = useState(false);//update prize 
  const togglePopup = () => {
    setIsOpen(false);
    //window.location.reload(false)    
  }

const [a, setSelectImage] = useState({});
//console.log(`agets`, a); 
// to: 'ZSQ6JQFOR3VTJSEM45RYOTN32NH2RAGZB4RVWP2LB375F3FK7GNDAT27QA',
//       from: 'BAZXPXEGPFQ7JVOZ7BZUYK36EXLRAWC7MAG3O2SPDWMVCYDMRLCHC6JC2U',
  // const tes=()=>{
  //   alert("hello world");
  // }
    //algo
const[getAlgos,setgetAlgos]=useState([]);
const[getAlgoss,setgetAlgoss]=useState([]);//
//console.log("firs1",getAlgos)
//console.log("firs2",getAlgoss)
//algo
//start buyers print in algo
const getalgo = async() =>{
    // setLoader(true)
    // setLoading(true)
    //window.location.reload(false)
    let req = [];
    let req2 = [];//imagerefexplore
    firebase.database().ref("algorandData").on("value", (data) => {
      if (data) {
        data.forEach((d) => {
          //console.log("print",d.val());
          req.push(d.val())          
        });        
      }
    });
    setgetAlgos(req)  
    getAlgos.map((a)=>{
      //console.log(`absalgos`, a)    
      Object.keys(a).map((b)=>{
      //console.log(`bbb`, a[b].txnId)
        req2.push({
          //addAcc:
    addtxid:a[b].txnId,
    addassetid:a[b].algoid,
    addalgoname:a[b].algoname,
    addalgosymbol:a[b].algosymbol,
    addalgocreator:a[b].algocreator,
    addmnemonic:a[b].createmnemonic,
    addprice:a[b].price,
    addkeyId:a[b].keyId,
    addImgs:a[b].imageurl
  })              
      })
    })    
    setgetAlgoss(req2)    
    //console.log("cfbsalgo",req) 
    // setLoader(false)
    // setLoading(false)
  }
  //useEffect(()=>{getalgo()},[])
//getAlgoss
    
const checs=async()=>{  
  let txParams = {};
  let tnAccounts = [];
  let signedTx;
  let tx = {};

const algosdk = require('algosdk');
AlgoSigner.connect()
.then((d) => {
  console.log("connected",d)
})
.catch((e) => {
  console.error(e);
});

AlgoSigner.accounts({
  ledger: 'TestNet'
})
.then((d) => {
  tnAccounts = d;
  console.log("acc",tnAccounts[0])
})
.catch((e) => {
  console.error(e);
});

AlgoSigner.algod({
  ledger: 'TestNet',
  path: '/v2/transactions/params'
})
.then((d) => {
  txParams = d;
  console.log("parms",txParams);
})
.catch((e) => {
  console.error(e);
});


AlgoSigner.sign({
  from:tnAccounts[0],
  to: 'receiver address',
  amount: 1000,
  note: undefined,
  type: 'pay',
  fee: txParams['min-fee'],
  firstRound: txParams['last-round'],
  lastRound: txParams['last-round'] + 1000,
  genesisID: txParams['genesis-id'],
  genesisHash: txParams['genesis-hash'],
  flatFee: true
})
.then((d) => {
  signedTx = d;
  console.log("signedTx",d);
})
.catch((e) => {
    console.error(e);
});

AlgoSigner.send({
  ledger: 'TestNet',
  tx: signedTx.blob
})
.then((d) => {
  tx = d;
  console.log("tx",tx);
})
.catch((e) => {
  console.error(e);
});

AlgoSigner.algod({
  ledger: 'TestNet',
  path: '/v2/transactions/pending/' + tx.txId
})
.then((d) => {
  console.log(d);
})
.catch((e) => {
  console.error(e);
});

}

const checasss=async()=>{

  const algosdk = require('algosdk');
    const baseServer = "https://testnet-algorand.api.purestake.io/ps2";
          const port = "";
          //B3SU4KcVKi94Jap2VXkK83xx38bsv95K5UZm2lab
          const token = {
          
              'X-API-key' : 'SVsJKi8vBM1RwK1HEuwhU20hYmwFJelk8bagKPin',
          }
          let client = new algosdk.Algodv2(token, baseServer, port);  

          console.log("log1",client);


          //GET /v2/assets/{asset-id}

          //https://testnet.algoexplorerapi.io/v2/transactions/pending/R43YX34AUSQP4KEENCIUT6WDFZ7GMEM4PUEIOJ4ANYZWVKA2Y56Q?format=json
         //let response= await fetch("https://testnet.algoexplorerapi.io/v2/transactions/pending/3WCBZSAODWX74E5SHH2M63VRWBVJCYJEDOW4HCN6CQQRL5E6YDAA");


         let res="https://testnet.algoexplorerapi.io/v2/transactions/pending/53YN3MTE437TSZZ7XJM2PP7OPGLFFILTGZ6TMOJUKT3NPDL6R7VA?format=json";

         axios.get(`${res}`)
         .then((res)=>{
           const allnote=res;
           const allNotes=res.data["asset-index"];
           console.log("all",allNotes)
           console.log("allnote",allnote)
         }).catch(error => console.error(`Error: ${error}`));       
         

         //let res="https://testnet.algoexplorerapi.io/v2/blocks/14870849";

  //let ptx = await client.pendingTransactionInformation('R43YX34AUSQP4KEENCIUT6WDFZ7GMEM4PUEIOJ4ANYZWVKA2Y56Q').do();
  //let assetID = ptx["asset-index"];
  
  console.log("asd",res)


  let assname=prompt("Please enter your asset name");
  let asssymbol=prompt("Please enter your asset symbol");
  if(assname === "" && asssymbol===""){

    alert("enter asset name and symbol")
  }
  else{

  

  let accounts;
  let txParams;
  let signedTx;
  let tx;

  await AlgoSigner.connect();

  AlgoSigner.connect()
.then((d) => {
  
  AlgoSigner.accounts({
    ledger: 'TestNet'
  })
  .then((d) => {
    accounts = d;

    AlgoSigner.algod({
      ledger: 'TestNet',
      path: '/v2/transactions/params'
    })
    .then((d) => {
      txParams = d;

      console.log("txparms",d)

      AlgoSigner.sign({
        from: accounts[4].address,
        assetName: assname,
        assetUnitName: asssymbol,
        assetTotal: +1000,
        assetDecimals: +1,
        note: undefined,
        type: 'acfg',
        fee: txParams['min-fee'],
        firstRound: txParams['last-round'],
        lastRound: txParams['last-round'] + 1000,
        genesisID: txParams['genesis-id'],
        genesisHash: txParams['genesis-hash'],
        flatFee: true
      })
      .then((d) => {
        signedTx = d;

        console.log("singed",d)

        AlgoSigner.send({
          ledger: 'TestNet',
          tx: signedTx.blob
        })
        .then(async (d) => {
          tx = d;
          console.log("tx",d.txId)

          let se=d.txId

          console.log("seprint",se);
          localStorage.setItem("txids",se);

          //db          
          //db

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
.catch((e) => {
  console.error(e);
});
}



  // to: 'ZSQ6JQFOR3VTJSEM45RYOTN32NH2RAGZB4RVWP2LB375F3FK7GNDAT27QA',
//       from: 'BAZXPXEGPFQ7JVOZ7BZUYK36EXLRAWC7MAG3O2SPDWMVCYDMRLCHC6JC2U',

  // const algosdk = require('algosdk');
  //   const baseServer = "https://testnet-algorand.api.purestake.io/ps2";
  //         const port = "";
  //         //B3SU4KcVKi94Jap2VXkK83xx38bsv95K5UZm2lab
  //         const token = {
          
  //             'X-API-key' : 'SVsJKi8vBM1RwK1HEuwhU20hYmwFJelk8bagKPin',
  //         }
  //         let client = new algosdk.Algodv2(token, baseServer, port);  

  //         console.log("log1",client);

  

// Create an Algod client to get suggested transaction params
//let client = new algosdk.Algodv2(token, server, port, headers);
//let suggestedParams = await client.getTransactionParams().do();

// Use the JS SDK to build a Transaction
// let sdkTx = new algosdk.Transaction({
//   to: 'ZSQ6JQFOR3VTJSEM45RYOTN32NH2RAGZB4RVWP2LB375F3FK7GNDAT27QA',
//   from: 'BAZXPXEGPFQ7JVOZ7BZUYK36EXLRAWC7MAG3O2SPDWMVCYDMRLCHC6JC2U',
//   amount: 1000,
//   suggestedParams,
// });



// Get the binary and base64 encode it
// let binaryTx = sdkTx.toByte();
// let base64Tx = AlgoSigner.encoding.msgpackToBase64(binaryTx);

// let signedTxs = await AlgoSigner.signTxn([
//   {
//     txn: base64Tx,
//   },
// ]);

// console.log("sign",signedTxs);
// //let tx = {};
// let tx;
// console.log("working");
// AlgoSigner.send({
//   ledger: 'TestNet',
//   tx: signedTxs.blob
// })
// .then((d) => {
//   tx = d;
//   console.log("tx",tx);
// })
// .catch((e) => {
//   console.error(e);
// });

// AlgoSigner.algod({
//   ledger: 'TestNet',
//   path: '/v2/transactions/pending/' + tx.txId
// })
// .then((d) => {
//   console.log(d);
// })
// .catch((e) => {
//   console.error(e);
// });



}

const checass=()=>{
  let accounts;
  let txParams;
  let signedTx;
  let tx;

  let assname=prompt("Please enter your asset name");
let asssymbol=prompt("Please enter your asset symbol");

  AlgoSigner.connect()
.then((d) => {
  AlgoSigner.accounts({
    ledger: 'TestNet'
  })
  .then((d) => {
    accounts = d;
    AlgoSigner.algod({
      ledger: 'TestNet',
      path: '/v2/transactions/params'
    })
    .then((d) => {
      txParams = d;
      let getchange=accounts[0].address;
      AlgoSigner.sign({
        from: getchange,
        assetName: assname,
        assetUnitName: asssymbol,
        assetTotal: +1000,
        assetDecimals: +1,
        note: undefined,
        type: 'acfg',
        fee: txParams['min-fee'],
        firstRound: txParams['last-round'],
        lastRound: txParams['last-round'] + 1000,
        genesisID: txParams['genesis-id'],
        genesisHash: txParams['genesis-hash'],
        flatFee: true
      })
      .then((d) => {
        signedTx = d;
        AlgoSigner.send({
          ledger: 'TestNet',
          tx: signedTx.blob
        })
        .then((d) => {
          tx = d;

          
  

          AlgoSigner.algod({
            ledger: 'TestNet',
            path: '/v2/transactions/pending/' + tx.txId
          })
          .then((d) => {
            console.log(d);
            
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
  .catch((e) => {
    console.error(e);
  });
  
})
.catch((e) => {
  console.error(e);
});

}

const priceset=()=>{
  setIsOpensetFirst(false)
  console.log(a.addalgocreator)
  console.log(a.addkeyId)
  let price=tprice;
  fireDb.database().ref(`algorandDataprice/${a.addalgocreator}`).child(a.addkeyId).set({
    createmnemonic:a.addmnemonic,
    algocreator:a.addalgocreator,
    algotrasnfer:"",
    algoid:a.addassetid,
    algoname:a.addalgoname,
    algosymbol:a.addalgosymbol,
    txnId:a.addtxid,
    AssetIdset:a.addassetid,
    transfer:"",
    status:"",
    price:price,
    keyId:a.addkeyId,
    imageurl:a.addImgs
});
fireDb.database().ref(`algorandData/${a.addalgocreator}`).child(a.addkeyId).update({
  createmnemonic:a.addmnemonic,
  algocreator:a.addalgocreator,
  algotrasnfer:"",
  algoid:a.addassetid,
  algoname:a.addalgoname,
  algosymbol:a.addalgosymbol,
  txnId:a.addtxid,
  AssetIdset:a.addassetid,
  transfer:"",
  status:"",
  price:price,
  keyId:a.addkeyId,
  imageurl:a.addImgs
})
.then(()=> {
  setTprice("");
  //setIsOpensetFirst(false);
  setIsOpen(true);
 });
}
const priceupdate=async(a)=>{

  //console.log(a.addmnemonic)
  //console.log(a.addkeyId)
  setIsOpensetFirst(false)
  console.log(a.addalgocreator)
  console.log(a.addkeyId)
  let price=tprice;
  fireDb.database().ref(`algorandDataprice/${a.addalgocreator}`).child(a.addkeyId).set({
    createmnemonic:a.addmnemonic,
    algocreator:a.addalgocreator,
    algotrasnfer:"",
    algoid:a.addassetid,
    algoname:a.addalgoname,
    algosymbol:a.addalgosymbol,
    txnId:a.addtxid,
    AssetIdset:a.addassetid,
    transfer:"",
    status:"",
    price:price,
    keyId:a.addkeyId,
    imageurl:a.addImgs
});

fireDb.database().ref(`algorandData/${a.addalgocreator}`).child(a.addkeyId).update({
  createmnemonic:a.addmnemonic,
  algocreator:a.addalgocreator,
  algotrasnfer:"",
  algoid:a.addassetid,
  algoname:a.addalgoname,
  algosymbol:a.addalgosymbol,
  txnId:a.addtxid,
  AssetIdset:a.addassetid,
  transfer:"",
  status:"",
  price:price,
  keyId:a.addkeyId,
  imageurl:a.addImgs
})
.then(()=> {
  setTprice("");
  //setIsOpensetFirst(false);
  setIsOpen(true);
 });
}


const opt=async()=>{

  // let ptx = await algodclient.pendingTransactionInformation(tx.txId).do();
  // let assetID = ptx["asset-index"];

  
  let accounts;
  let txParams;
  let signedTx;
  let tx;
  let allNotess;
  let allNotes;

  let txidget=localStorage.getItem("txids");

  let res="https://testnet.algoexplorerapi.io/v2/transactions/pending/"+txidget+"?format=json";
          console.log("ress",res);
          axios.get(`${res}`)
         .then((res)=>{
           const allnote=res;
           allNotes=res.data["asset-index"];
           allNotess=res.data.txn.txn.apar.an;
           console.log("all",allNotes)
           console.log("allnote",allnote)
           console.log("name",allNotess)
           localStorage.setItem("assid",allNotes);
           
         }).catch(error => console.error(`Error: ${error}`));       




  //cut there opt

  //opt start

  AlgoSigner.connect()
  .then((d) => {
  
    AlgoSigner.accounts({
      ledger: 'TestNet'
    })
    .then((d) => {
      accounts = d;
  
      AlgoSigner.algod({
        ledger: 'TestNet',
        path: '/v2/transactions/params'
      })
      .then((d) => {
        txParams = d;
  
  const name = allNotess;
  const limit = '1';
  
  AlgoSigner.indexer({
    ledger: 'TestNet',
    path: `/v2/assets?name=${name}&limit=${limit}`,
  })
  .then((d) => {
    let pe = JSON.stringify(d);
    console.log("pe",pe)
  
    AlgoSigner.sign({
      from: accounts[6].address,
      to: accounts[6].address,
      assetIndex: +allNotes,
      note: undefined,
      amount: 0,
      type: 'axfer',
      fee: txParams['min-fee'],
      firstRound: txParams['last-round'],
      lastRound: txParams['last-round'] + 1000,
      genesisID: txParams['genesis-id'],
      genesisHash: txParams['genesis-hash'],
      flatFee: true
    })
    .then((d) => {
      signedTx = d;
      AlgoSigner.send({
        ledger: 'TestNet',
        tx: signedTx.blob
      })
      .then((d) => {
        tx = d;

    let refalgo=fireDb.database().ref(`algorandData/${accounts[0].address}`);
    let dateset=new Date().toDateString();
    console.log("dateget",dateset)
    const db = refalgo.push().key;
    console.log("dbcheck",db)
    refalgo.child(db).set({imageurl:"",createmnemonic:accounts[0].address,algocreator:accounts[0].address,algotrasnfer:"",algoid:"",algoname:allNotess,algosymbol:"Algos",txnId:d.txId,AssetIdset:allNotes,transfer:"",status:"",price:"",keyId:db,algodclients:"",responses:"",lastrounds:"",accountInfos:""});
  
  
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
    let pe2 = JSON.stringify(e);
    console.log("pe2",pe2)
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
  
  
            //end opt
  
  
}

const trans=async()=>{

  const algosdk = require('algosdk');

  //var account1_mnemonic=a.addmnemonic;
        var account1_mnemonic = "tackle dove endorse style mind boring hidden fiction power wrap diesel more cruel ecology few field they chase oil deliver useless paddle nation abandon domain";
        //var account2_mnemonic = "tackle dove endorse style mind boring hidden fiction power wrap diesel more cruel ecology few field they chase oil deliver useless paddle nation abandon domain";
        //var account3_mnemonic = "tackle dove endorse style mind boring hidden fiction power wrap diesel more cruel ecology few field they chase oil deliver useless paddle nation abandon domain";
        var account3_mnemonic = "runway genuine lazy assist ticket junior pilot flush rocket swallow ripple risk alien mobile chat recall run quiz cause weekend range april vicious about spoon";
        var recoveredAccount1 = algosdk.mnemonicToSecretKey(account1_mnemonic);
        //var recoveredAccount2 = algosdk.mnemonicToSecretKey(account2_mnemonic);
        var recoveredAccount3 = algosdk.mnemonicToSecretKey(account3_mnemonic);
        //alert(arr[0]);
        // var recoveredAccount1 = arr[0];
        // var recoveredAccount2 = arr[0];
        // var recoveredAccount3 = arr[0];
        console.log(recoveredAccount3.addr);
        console.log(recoveredAccount1.addr);
        const baseServer = "https://testnet-algorand.api.purestake.io/ps2";
        const port = "";
        //B3SU4KcVKi94Jap2VXkK83xx38bsv95K5UZm2lab
        const token = {
        
            'X-API-key' : 'SVsJKi8vBM1RwK1HEuwhU20hYmwFJelk8bagKPin',
        }
        let algodclient = new algosdk.Algodv2(token, baseServer, port);  
        console.log("algodclient",algodclient)
      // Function used to wait for a tx confirmation
      const waitForConfirmation = async function (algodclien, txId) {        
          //console.log("working return 133",txId)
        //console.log("workingalgo"+algodclien);
          let response = await algodclien.status().do();
          //console.log("response",response);
          let lastround = response["last-round"];
          //console.log("lastround",lastround);
          //while (true) {
            //console.log("inside while loop");
              //const pendingInfo = await algodclient.pendingTransactionInformation(txId).do();
              //console.log("insidewhileloop",pendingInfo);
              // if (pendingInfo["confirmed-round"] !== null && pendingInfo["confirmed-round"] > 0) {
              //     //Got the completed Transaction
              //     console.log("Transaction " + txId + " confirmed in round " + pendingInfo["confirmed-round"]);
              //     break;
              // }
              //lastround++;
              // await algodclien.statusAfterBlock(lastround).do();
              //console.log("finish while loop");
          //}

          //console.log("outside while loop");
      };
      
      // Function used to print created asset for account and assetid
      const printCreatedAsset = async function (algodclient, account, assetid) {
          // note: if you have an indexer instance available it is easier to just use this
          //     let accountInfo = await indexerClient.searchAccounts()
          //    .assetID(assetIndex).do();
          // and in the loop below use this to extract the asset for a particular account
          // accountInfo['accounts'][idx][account]);
          let accountInfo = await algodclient.accountInformation(account).do();
          for (let idx = 0; idx < accountInfo['created-assets'].length; idx++) {
              let scrutinizedAsset = accountInfo['created-assets'][idx];
              if (scrutinizedAsset['index'] === assetid) {
                  console.log("AssetID = " + scrutinizedAsset['index']);
                  let myparms = JSON.stringify(scrutinizedAsset['params'], undefined, 2);
                  console.log("parms = " + myparms);
                  break;
              }
          }
      };
      // Function used to print asset holding for account and assetid
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
      
      (async () => {      
        let gettxid=localStorage.getItem("txids");
        let assetidget=localStorage.getItem("assid");
        
        let params = await algodclient.getTransactionParams().do();
          //comment out the next two lines to use suggested fee
          params.fee = 1000;
          params.flatFee = true;
          //console.log(params);              
          let note = undefined;          
          let assetID = null;
          //console.log("working198");
          //console.log("beforealgoclient",algodclient);
          //console.log(a.addtxid);
          await waitForConfirmation(algodclient,gettxid);
          //console.log("working return 209")
          // Get the new asset's information from the creator account
          let ptx = await algodclient.pendingTransactionInformation(gettxid).do();
          console.log("working return 212",ptx["asset-index"]);
          assetID = ptx["asset-index"];
          //assetID=assetidget;        
        await printCreatedAsset(algodclient,recoveredAccount1.addr, assetID);
        await printAssetHolding(algodclient, recoveredAccount1.addr, assetID);      
        //console.log("working178")        
        //this below is transfer usefull function      
        // Opting in to an Asset:
        // Opting in to transact with the new asset
        // Allow accounts that want recieve the new asset
        // Have to opt in. To do this they send an asset transfer
        // of the new asset to themseleves 
        // In this example we are setting up the 3rd recovered account to 
        // receive the new asset      
        // First update changing transaction parameters
        // We will account for changing transaction parameters
        // before every transaction in this example
        //cmd now
      
          params = await algodclient.getTransactionParams().do();
          //comment out the next two lines to use suggested fee
          params.fee = 1000;
          params.flatFee = true;      
          let sender = recoveredAccount3.addr;
          let recipient = sender;
          // We set revocationTarget to undefined as 
          // This is not a clawback operation
          let revocationTarget = undefined;
          // CloseReaminerTo is set to undefined as
          // we are not closing out an asset
          let closeRemainderTo = undefined;
          // We are sending 0 assets
          let amount = 0;
      //let note=undefined;
      //assetID='15940921';      
      console.log("working826")      
          // signing and sending "txn" allows sender to begin accepting asset specified by creator and index
          let opttxn = algosdk.makeAssetTransferTxnWithSuggestedParams(sender, recipient, closeRemainderTo, revocationTarget,
               amount, note, assetID, params);
      
          // Must be signed by the account wishing to opt in to the asset    
          let rawSignedTxn = opttxn.signTxn(recoveredAccount3.sk);
          let opttx = (await algodclient.sendRawTransaction(rawSignedTxn).do());
          console.log("Transaction : " + opttx.txId);
          // wait for transaction to be confirmed
          await waitForConfirmation(algodclient, opttx.txId);
      
          //You should now see the new asset listed in the account information
          console.log("Account3" + recoveredAccount3.addr);
          await printAssetHolding(algodclient, recoveredAccount3.addr, assetID);
      
      //console.log("working 227")        
      //     // Transfer New Asset:
      //     // Now that account3 can recieve the new tokens 
      //     // we can tranfer tokens in from the creator
      //     // to account3
      //     // First update changing transaction parameters
      //     // We will account for changing transaction parameters
      //     // before every transaction in this example
      
      //cmd now
      
          params = await algodclient.getTransactionParams().do();
          //comment out the next two lines to use suggested fee
          params.fee = 1000;
          params.flatFee = true;
      
          sender = recoveredAccount1.addr;
          recipient = recoveredAccount3.addr;
          revocationTarget = undefined;
          closeRemainderTo = undefined;
          //Amount of the asset to transfer
          amount = 1000;
      
          // signing and sending "txn" will send "amount" assets from "sender" to "recipient"
          let xtxn = algosdk.makeAssetTransferTxnWithSuggestedParams(sender, recipient, closeRemainderTo, revocationTarget,
               amount, note, assetID, params);
          // Must be signed by the account sending the asset  
          console.log("869")
          rawSignedTxn = xtxn.signTxn(recoveredAccount1.sk)
          let xtx = (await algodclient.sendRawTransaction(rawSignedTxn).do());
          console.log("Transaction : " + xtx.txId);
          // wait for transaction to be confirmed
          await waitForConfirmation(algodclient, xtx.txId);
      
          // You should now see the 10 assets listed in the account information
          console.log("Account 3 = " + recoveredAccount3.addr);
          await printAssetHolding(algodclient, recoveredAccount3.addr, assetID);
      
        })().then(d=>{

        //   fireDb.database().ref(`algorandData/${recoveredAccount3.addr}`).child(a.addkeyId).set({
        //     createmnemonic:a.addmnemonic,
        //     algocreator:a.addalgocreator,
        //     algotrasnfer:"",
        //     algoid:a.addassetid,
        //     algoname:a.addalgoname,
        //     algosymbol:a.addalgosymbol,
        //     txnId:a.addtxid,
        //     AssetIdset:a.addassetid,
        //     transfer:recoveredAccount3.addr,
        //     status:"sold",
        //     price:a.addprice,
        //     keyId:a.addkeyId,
        //     imageurl:a.addImgs
        // });

        // fireDb.database().ref(`algorandDataprice/${a.addalgocreator}`).child(a.addkeyId).remove();
        // fireDb.database().ref(`algorandData/${a.addalgocreator}`).child(a.addkeyId).remove();

      //   fireDb.database().ref(`algorandData/${a.addalgocreator}`).child(a.addkeyId).update({
      //     createmnemonic:a.addmnemonic,
      //     algocreator:a.addalgocreator,
      //     algotrasnfer:"",
      //     algoid:a.addassetid,
      //     algoname:a.addalgoname,
      //     algosymbol:a.addalgosymbol,
      //     txnId:a.addtxid,
      //     AssetIdset:a.addassetid,
      //     transfer:recoveredAccount3.addr,
      //     status:"sold",
      //     price:a.addprice,
      //     keyId:a.addkeyId,
      //     imageurl:a.addImgs
      // })
        
        }).catch(e => {
          console.log(e);
          console.trace();
      });


                //cut stop
}

const getalgoold=()=>{



}

//prompt("Please enter your name", "Harry Potter");

  return (
    <div >
      {/* style={{backgroundColor:"white"}} */}

      <button onClick={getalgoold}>GetAssetOld</button>
<br></br><br></br><br></br>
<button onClick={getalgo}>GetAsset</button>
<br></br><br></br>
<button onClick={opt}>GetOpt</button>
{/* <button onClick={chec}>alert</button>
<br></br><br></br>
<button onClick={checs}>alert2</button>
<br></br><br></br>
<button onClick={checss}>alert2</button> */}
<br></br><br></br>
{/* <button onClick={checb1}>button1</button>
<br></br><br></br>
<button onClick={checb2}>button2</button>
<br></br><br></br>
<button onClick={checb3}>button3</button>
<br></br><br></br> */}
<button onClick={trans}>trans</button>
<br></br><br></br>
<button onClick={checasss}>buttonass</button>
<br></br><br></br>
{/* <button onClick={checb5}>button5</button> */}
{/* {getAlgoss.length === 0 ? null :(  */}
  <div style={{backgroundColor:'black',display:'flex',flexWrap:'wrap'}}>
{getAlgoss.map((a)=>{  
    return (
      <div style={{backgroundColor:'black',height:'300px',width:'300px'}}>
<div style={{border: '2px solid white',borderRadius:'5px'}}>
<center>
    {/* <Link to={{pathname: `/explore/${a.addKeyI}/${a.addOwnerAddress}`,
//pathname: `/explore/${combine}`,
                  }}
                >
    </Link> */}
    {/* <h5>hello{a[b].imageUrl}</h5> */}
    <img   src={a.addImgs}  style={{height:120,width:120,marginTop:'10px'}} alt="" />
    <h6 style={{color:'white'}}>Name : {a.addalgoname}</h6>
    <h6 style={{color:'white'}}>Symbol : {a.addalgosymbol}</h6>
    <h6 style={{color:'white'}}>price : {a.addprice}</h6>
    { a.addprice === '' ? (
<> 
{/* onClick={()=>buynow(a)} */}
{/* TransferAsset(a) */}
 {/* <button onClick={()=>priceset(a)} >Setprice</button>  */}
 <button onClick={()=>{
    setSelectImage(a)
    setIsOpensetFirst(true)
  }} style={{width:'80px',height:'43px'}} >SetPrice</button>    
    {' '}
</>
    ):(
      <>
      <button onClick={()=>{
    setSelectImage(a)
    setIsOpensetFirst(true)
  }} style={{width:'80px',height:'43px'}} >UpdatePrice</button>  
      </>
    )}
</center>
</div>
</div>
 )})}
  </div>
  <div>    
    {isOpensetFirst && <Popup content={<>
        <b>Notification</b>
        <p>Enter prize </p>
        <center>
      <input
        type="text"
        value={tprice}
        placeholder="Enter Prize"
        onChange={e => {
          setTprice(e.target.value);
        }}
      />
      <br></br>
      <br></br>
        <button type="button" onClick={()=>{priceset()}}>submit</button>
        </center>
      </>}
       handleClose={togglePopupset}
    />}
</div>
{isOpen && <Popup content={<>
        <b>Notification</b>
        <p>Your token prize has been updated successfully......</p>
        <center>
        <button type="button" onClick={togglePopup}>close</button>
        </center>
      </>}
       handleClose={togglePopup}
    />}
  </div>
  );
}
export default AlgoTest;