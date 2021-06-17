/* global AlgoSigner */
import firebase from "firebase";
import fireDb from "./firebase";
import Popup from './Popup';
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

console.log(`agets`, a); 

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

const checss=async()=>{

  // to: 'ZSQ6JQFOR3VTJSEM45RYOTN32NH2RAGZB4RVWP2LB375F3FK7GNDAT27QA',
//       from: 'BAZXPXEGPFQ7JVOZ7BZUYK36EXLRAWC7MAG3O2SPDWMVCYDMRLCHC6JC2U',

  const algosdk = require('algosdk');
    const baseServer = "https://testnet-algorand.api.purestake.io/ps2";
          const port = "";
          //B3SU4KcVKi94Jap2VXkK83xx38bsv95K5UZm2lab
          const token = {
          
              'X-API-key' : 'SVsJKi8vBM1RwK1HEuwhU20hYmwFJelk8bagKPin',
          }
          let client = new algosdk.Algodv2(token, baseServer, port);  

          console.log("log1",client);

  await AlgoSigner.connect();

// Create an Algod client to get suggested transaction params
//let client = new algosdk.Algodv2(token, server, port, headers);
let suggestedParams = await client.getTransactionParams().do();

// Use the JS SDK to build a Transaction
let sdkTx = new algosdk.Transaction({
  to: 'ZSQ6JQFOR3VTJSEM45RYOTN32NH2RAGZB4RVWP2LB375F3FK7GNDAT27QA',
  from: 'BAZXPXEGPFQ7JVOZ7BZUYK36EXLRAWC7MAG3O2SPDWMVCYDMRLCHC6JC2U',
  amount: 1000,
  suggestedParams,
});



// Get the binary and base64 encode it
let binaryTx = sdkTx.toByte();
let base64Tx = AlgoSigner.encoding.msgpackToBase64(binaryTx);

let signedTxs = await AlgoSigner.signTxn([
  {
    txn: base64Tx,
  },
]);

console.log("sign",signedTxs);
//let tx = {};
let tx;
console.log("working");
AlgoSigner.send({
  ledger: 'TestNet',
  tx: signedTxs.blob
})
.then((d) => {
  tx = d;
  console.log("tx",tx);
})
.catch((e) => {
  console.error(e);
});

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
      AlgoSigner.sign({
        from: 'BAZXPXEGPFQ7JVOZ7BZUYK36EXLRAWC7MAG3O2SPDWMVCYDMRLCHC6JC2U',
        assetName: 'demoass2',
        assetUnitName: "Algos",
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

const name = 'demoass2';
const limit = '1';

AlgoSigner.indexer({
  ledger: 'TestNet',
  path: `/v2/assets?name=${name}&limit=${limit}`,
})
.then((d) => {
  let dis=JSON.stringify(d);
  console.log("dis",dis);


  AlgoSigner.sign({
    from: 'BAZXPXEGPFQ7JVOZ7BZUYK36EXLRAWC7MAG3O2SPDWMVCYDMRLCHC6JC2U',
    to: 'ZSQ6JQFOR3VTJSEM45RYOTN32NH2RAGZB4RVWP2LB375F3FK7GNDAT27QA',
    assetIndex: +0,
    note: undefined,
    amount: 10,
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
  document.getElementById('assets-code').innerHTML = JSON.stringify(e);
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


const priceset=async()=>{

  setIsOpensetFirst(false)
  console.log(a.addalgocreator)
  console.log(a.addkeyId)
  let price=tprice;

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
}).then(()=> {
  setTprice("");
  //setIsOpensetFirst(false);
  setIsOpen(true);
 });

}
const priceupdate=async(a)=>{

  console.log(a.addmnemonic)
  console.log(a.addkeyId)

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
    price:"1000",
    keyId:a.addkeyId,
    imageurl:a.addImgs
});

}


  return (

    <div >
      {/* style={{backgroundColor:"white"}} */}

<button onClick={getalgo}>GetAsset</button>

<br></br><br></br>

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

{/* <button onClick={checb1}>button</button> */}
<br></br><br></br>

<button onClick={checass}>buttonass</button>
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