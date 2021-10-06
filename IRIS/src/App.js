/* global AlgoSigner */
import './App.css';
import {useState} from "react";
// import sha256 from 'crypto-js/sha256';
// import hmacSHA512 from 'crypto-js/hmac-sha512';
// import base64 from 'crypto-js/enc-base64';




function App() {
  const [assetName,setToname] = useState("");
  const [assetAge,setToAge] = useState("");
  const [assetDob,setToDob] = useState("");
  const [assetAddress,setToAddress] = useState("");
  const [assetEmail,setToEmail] = useState("");
  const [assetPhno,setToPhno] = useState("");
  const [unitName,setTounit] = useState("");
  const [note,setTonote] = useState("");
  const [password,setToPass] = useState("");
  const [result, setResult] = useState([]);
  const [result2, setResult2] = useState([]);
  const [accList,setAccList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenbutton, setIsOpenbutton] = useState(true);
  const [isList, setisList] = useState([]);
  const [isClick, setClick] = useState();
  const [isOpenlist, setIsOpenlist] = useState(false);

  console.log("isClicking",isClick)
  console.log("islistfirst",isList)
  console.log("List account", accList);
  console.log("Result = ",result);
  console.log("Result2 = ",result2);
  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  const onChangeOption=async(e)=>{
    let a=await setClick(e)
    //setIsOpenbutton(true)
}
  const connect = () => {
    setIsOpenbutton(false)
    AlgoSigner.connect()
.then((d) => {
  AlgoSigner.accounts({
    ledger: 'TestNet'
  })
  .then((d) => {
    let accounts = d;
    //document.getElementById("listacc").innerHTML=isClick;
    console.log("listaccount",d)
    setisList(d)
    setIsOpenlist(true)
  })
  .catch((e) => {
    console.error(e);
  }); 
  
  
})
.catch((e) => {
  console.error(e);
});
  }
  
  
  const createNFT = async (tname, age1, dob1, addr, email1, phno1, tb, note, password) => {
      if(tname != "")
      {
        await name(tname, tb, note, password);
        await sleep(20000)
      }
      if(age1 != "")
      {
        await age(age1, tb, note, password);
        await sleep(20000)
      }
      if(dob1 != "")
      {
        await dob(dob1, tb, note, password);
        await sleep(20000)
      }
      if(addr != "")
      {
        await addressCall(addr, tb, note, password);
        await sleep(20000)
      }
      if(email1 != "")
      {
        await email(email1, tb, note, password);
        await sleep(20000)
      }
      if(phno1 != "")
      {
        await phno(phno1, tb, note, password);
      }
  }

 let address = null;
  
  const listNFT = () => {
  
    const algosdk = require('algosdk');
    let accounts;
    const server = "https://testnet-algorand.api.purestake.io/ps2";
    const port = "";  
    const token = {
          'X-API-key' : 'SVsJKi8vBM1RwK1HEuwhU20hYmwFJelk8bagKPin',
    }
  
  
    let algodClient = new algosdk.Algodv2(token, server, port);
  
    
    AlgoSigner.connect()
    .then((d) => {
    console.log("tested1")
    algodClient.healthCheck().do()
    .then(d => { 
      
      AlgoSigner.accounts({
        ledger: 'TestNet'
      })
      .then((d) => {
        console.log("tested2",d)
        accounts = d;
        address = isClick;
        const r = AlgoSigner.algod({
          ledger: 'TestNet',
          path: `/v2/accounts/${address}`
        }).then(function(r) {
          console.log(".then =",r['created-assets']); // "normalReturn"
          setResult(r['created-assets'])
          let req = [] 
          result.map((a)=>{

            console.log("abb", a.index)   
            console.log("name =", a.params.name)   
            req.push({
              index: a.index,
              creator: a.params.creator,
              name: a.params.name,
              total: a.params.total,
              unitname:a.params['unit-name'],
              url:("https://testnet.algoexplorer.io/asset/"+a.index)
            })
          })
          setResult2(req); 
        });
        console.log(r);
        let out =JSON.stringify(r);
        console.log(out);
        console.log("algoacc",isClick);
        algodClient.getTransactionParams().do();
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
  
  
  }

const age = (name, uname, note, password) =>{
  const algosdk = require('algosdk');  
    const CryptoJS = require("crypto-js");
  
    let accounts;
    let tx;
    const server = "https://testnet-algorand.api.purestake.io/ps2";
    const port = "";  
    const token = {
          'X-API-key' : 'SVsJKi8vBM1RwK1HEuwhU20hYmwFJelk8bagKPin',
    }
    //const indexerserver = 'https://testnet-algorand.api.purestake.io/idx2';
    //const indexport='';
    //let algoindexer = new algosdk.Indexer(token,indexerserver,indexport);
    
    let algodClient = new algosdk.Algodv2(token, server, port);
    var encrypted = CryptoJS.AES.encrypt(note.toString(), password);
    //U2FsdGVkX18ZUVvShFSES21qHsQEqZXMxQ9zgHy+bu0=
  
  
    AlgoSigner.connect()
  .then((d) => {
  console.log("tested1")
  algodClient.healthCheck().do()
  .then(d => { 
    
    AlgoSigner.accounts({
      ledger: 'TestNet'
    })
    .then((d) => {
      console.log("tested2",d)
      accounts = d;
      console.log("algoacc",isClick)
      algodClient.getTransactionParams().do()
  .then((d) => {
    let txParamsJS = d;
    console.log("txparamsJS",txParamsJS)
    const txn = algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({    
      from: isClick,
      assetName: name,
      unitName: uname,
      total: 1,
      decimals: 0,
      note: AlgoSigner.encoding.stringToByteArray(encrypted.toString()),
      manager:isClick,
      reserve:isClick,
      freeze: isClick,
      clawback:isClick,
      //AlgoSigner.encoding.stringToByteArray(document.getElementById('note').value),
      suggestedParams: txParamsJS
    });
  
    console.log("txnprint",txn)
    // Use the AlgoSigner encoding library to make the transactions base64
    const txn_b64 = AlgoSigner.encoding.msgpackToBase64(txn.toByte());
    
    AlgoSigner.signTxn([{txn: txn_b64}])
    .then((d) => {
      console.log("signTx",d)
      let signedTxs = d;
      let signCodeElem = JSON.stringify(d, null, 2);
      console.log("signcoderElem",signCodeElem)
  
      AlgoSigner.send({
        ledger: 'TestNet',
        tx: signedTxs[0].blob
      })
      .then((d) => {
        tx = d;
        console.log("txidprint",tx.txId)
        AlgoSigner.algod({
          ledger: 'TestNet',
          path: '/v2/transactions/pending/' + tx.txId
        })
        .then((d) => {
          console.log(d);        
          //console.log("before",tx.txId)        
  
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
  .catch(e => { 
    console.error(e); 
  });
  
  
  })
  .catch((e) => {
    console.error(e);
  });

}

  const name = (name, uname, note, password) =>{
    const algosdk = require('algosdk');  
      const CryptoJS = require("crypto-js");
    
      let accounts;
      let tx;
      const server = "https://testnet-algorand.api.purestake.io/ps2";
      const port = "";  
      const token = {
            'X-API-key' : 'SVsJKi8vBM1RwK1HEuwhU20hYmwFJelk8bagKPin',
      }
      //const indexerserver = 'https://testnet-algorand.api.purestake.io/idx2';
      //const indexport='';
      //let algoindexer = new algosdk.Indexer(token,indexerserver,indexport);
      
      let algodClient = new algosdk.Algodv2(token, server, port);
      var encrypted = CryptoJS.AES.encrypt(note.toString(), password);
      //U2FsdGVkX18ZUVvShFSES21qHsQEqZXMxQ9zgHy+bu0=
    
    
      AlgoSigner.connect()
    .then((d) => {
    console.log("tested1")
    algodClient.healthCheck().do()
    .then(d => { 
      
      AlgoSigner.accounts({
        ledger: 'TestNet'
      })
      .then((d) => {
        console.log("tested2",d)
        accounts = d;
        console.log("algoacc",isClick)
        algodClient.getTransactionParams().do()
    .then((d) => {
      let txParamsJS = d;
      console.log("txparamsJS",txParamsJS)
      const txn = algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({    
        from: isClick,
        assetName: name,
        unitName: uname,
        total: 1,
        decimals: 0,
        note: AlgoSigner.encoding.stringToByteArray(encrypted.toString()),
        manager:isClick,
        reserve:isClick,
        freeze: isClick,
        clawback:isClick,
        //AlgoSigner.encoding.stringToByteArray(document.getElementById('note').value),
        suggestedParams: txParamsJS
      });
    
      console.log("txnprint",txn)
      // Use the AlgoSigner encoding library to make the transactions base64
      const txn_b64 = AlgoSigner.encoding.msgpackToBase64(txn.toByte());
      
      AlgoSigner.signTxn([{txn: txn_b64}])
      .then((d) => {
        console.log("signTx",d)
        let signedTxs = d;
        let signCodeElem = JSON.stringify(d, null, 2);
        console.log("signcoderElem",signCodeElem)
    
        AlgoSigner.send({
          ledger: 'TestNet',
          tx: signedTxs[0].blob
        })
        .then((d) => {
          tx = d;
          console.log("txidprint",tx.txId)
          AlgoSigner.algod({
            ledger: 'TestNet',
            path: '/v2/transactions/pending/' + tx.txId
          })
          .then((d) => {
            console.log(d);        
            //console.log("before",tx.txId)        
    
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
    .catch(e => { 
      console.error(e); 
    });
    
    
    })
    .catch((e) => {
      console.error(e);
    });
} 

const dob = (name, uname, note, password) =>{
  const algosdk = require('algosdk');  
    const CryptoJS = require("crypto-js");
  
    let accounts;
    let tx;
    const server = "https://testnet-algorand.api.purestake.io/ps2";
    const port = "";  
    const token = {
          'X-API-key' : 'SVsJKi8vBM1RwK1HEuwhU20hYmwFJelk8bagKPin',
    }
    //const indexerserver = 'https://testnet-algorand.api.purestake.io/idx2';
    //const indexport='';
    //let algoindexer = new algosdk.Indexer(token,indexerserver,indexport);
    
    let algodClient = new algosdk.Algodv2(token, server, port);
    var encrypted = CryptoJS.AES.encrypt(note.toString(), password);
    //U2FsdGVkX18ZUVvShFSES21qHsQEqZXMxQ9zgHy+bu0=
  
  
    AlgoSigner.connect()
  .then((d) => {
  console.log("tested1")
  algodClient.healthCheck().do()
  .then(d => { 
    
    AlgoSigner.accounts({
      ledger: 'TestNet'
    })
    .then((d) => {
      console.log("tested2",d)
      accounts = d;
      console.log("algoacc",isClick)
      algodClient.getTransactionParams().do()
  .then((d) => {
    let txParamsJS = d;
    console.log("txparamsJS",txParamsJS)
    const txn = algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({    
      from: isClick,
      assetName: name,
      unitName: uname,
      total: 1,
      decimals: 0,
      note: AlgoSigner.encoding.stringToByteArray(encrypted.toString()),
      manager:isClick,
      reserve:isClick,
      freeze: isClick,
      clawback:isClick,
      //AlgoSigner.encoding.stringToByteArray(document.getElementById('note').value),
      suggestedParams: txParamsJS
    });
  
    console.log("txnprint",txn)
    // Use the AlgoSigner encoding library to make the transactions base64
    const txn_b64 = AlgoSigner.encoding.msgpackToBase64(txn.toByte());
    
    AlgoSigner.signTxn([{txn: txn_b64}])
    .then((d) => {
      console.log("signTx",d)
      let signedTxs = d;
      let signCodeElem = JSON.stringify(d, null, 2);
      console.log("signcoderElem",signCodeElem)
  
      AlgoSigner.send({
        ledger: 'TestNet',
        tx: signedTxs[0].blob
      })
      .then((d) => {
        tx = d;
        console.log("txidprint",tx.txId)
        AlgoSigner.algod({
          ledger: 'TestNet',
          path: '/v2/transactions/pending/' + tx.txId
        })
        .then((d) => {
          console.log(d);        
          //console.log("before",tx.txId)        
  
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
  .catch(e => { 
    console.error(e); 
  });
  
  
  })
  .catch((e) => {
    console.error(e);
  });

} 

const addressCall = (name, uname, note, password) =>{
  const algosdk = require('algosdk');  
    const CryptoJS = require("crypto-js");
  
    let accounts;
    let tx;
    const server = "https://testnet-algorand.api.purestake.io/ps2";
    const port = "";  
    const token = {
          'X-API-key' : 'SVsJKi8vBM1RwK1HEuwhU20hYmwFJelk8bagKPin',
    }
    //const indexerserver = 'https://testnet-algorand.api.purestake.io/idx2';
    //const indexport='';
    //let algoindexer = new algosdk.Indexer(token,indexerserver,indexport);
    
    let algodClient = new algosdk.Algodv2(token, server, port);
    var encrypted = CryptoJS.AES.encrypt(note.toString(), password);
    //U2FsdGVkX18ZUVvShFSES21qHsQEqZXMxQ9zgHy+bu0=
  
  
    AlgoSigner.connect()
  .then((d) => {
  console.log("tested1")
  algodClient.healthCheck().do()
  .then(d => { 
    
    AlgoSigner.accounts({
      ledger: 'TestNet'
    })
    .then((d) => {
      console.log("tested2",d)
      accounts = d;
      console.log("algoacc",isClick)
      algodClient.getTransactionParams().do()
  .then((d) => {
    let txParamsJS = d;
    console.log("txparamsJS",txParamsJS)
    const txn = algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({    
      from: isClick,
      assetName: name,
      unitName: uname,
      total: 1,
      decimals: 0,
      note: AlgoSigner.encoding.stringToByteArray(encrypted.toString()),
      manager:isClick,
      reserve:isClick,
      freeze: isClick,
      clawback:isClick,
      //AlgoSigner.encoding.stringToByteArray(document.getElementById('note').value),
      suggestedParams: txParamsJS
    });
  
    console.log("txnprint",txn)
    // Use the AlgoSigner encoding library to make the transactions base64
    const txn_b64 = AlgoSigner.encoding.msgpackToBase64(txn.toByte());
    
    AlgoSigner.signTxn([{txn: txn_b64}])
    .then((d) => {
      console.log("signTx",d)
      let signedTxs = d;
      let signCodeElem = JSON.stringify(d, null, 2);
      console.log("signcoderElem",signCodeElem)
  
      AlgoSigner.send({
        ledger: 'TestNet',
        tx: signedTxs[0].blob
      })
      .then((d) => {
        tx = d;
        console.log("txidprint",tx.txId)
        AlgoSigner.algod({
          ledger: 'TestNet',
          path: '/v2/transactions/pending/' + tx.txId
        })
        .then((d) => {
          console.log(d);        
          //console.log("before",tx.txId)        
  
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
  .catch(e => { 
    console.error(e); 
  });
  
  
  })
  .catch((e) => {
    console.error(e);
  });

} 

const email = (name, uname, note, password) =>{
  const algosdk = require('algosdk');  
    const CryptoJS = require("crypto-js");
  
    let accounts;
    let tx;
    const server = "https://testnet-algorand.api.purestake.io/ps2";
    const port = "";  
    const token = {
          'X-API-key' : 'SVsJKi8vBM1RwK1HEuwhU20hYmwFJelk8bagKPin',
    }
    //const indexerserver = 'https://testnet-algorand.api.purestake.io/idx2';
    //const indexport='';
    //let algoindexer = new algosdk.Indexer(token,indexerserver,indexport);
    
    let algodClient = new algosdk.Algodv2(token, server, port);
    var encrypted = CryptoJS.AES.encrypt(note.toString(), password);
    //U2FsdGVkX18ZUVvShFSES21qHsQEqZXMxQ9zgHy+bu0=
  
  
    AlgoSigner.connect()
  .then((d) => {
  console.log("tested1")
  algodClient.healthCheck().do()
  .then(d => { 
    
    AlgoSigner.accounts({
      ledger: 'TestNet'
    })
    .then((d) => {
      console.log("tested2",d)
      accounts = d;
      console.log("algoacc",isClick)
      algodClient.getTransactionParams().do()
  .then((d) => {
    let txParamsJS = d;
    console.log("txparamsJS",txParamsJS)
    const txn = algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({    
      from: isClick,
      assetName: name,
      unitName: uname,
      total: 1,
      decimals: 0,
      note: AlgoSigner.encoding.stringToByteArray(encrypted.toString()),
      manager:isClick,
      reserve:isClick,
      freeze: isClick,
      clawback:isClick,
      //AlgoSigner.encoding.stringToByteArray(document.getElementById('note').value),
      suggestedParams: txParamsJS
    });
  
    console.log("txnprint",txn)
    // Use the AlgoSigner encoding library to make the transactions base64
    const txn_b64 = AlgoSigner.encoding.msgpackToBase64(txn.toByte());
    
    AlgoSigner.signTxn([{txn: txn_b64}])
    .then((d) => {
      console.log("signTx",d)
      let signedTxs = d;
      let signCodeElem = JSON.stringify(d, null, 2);
      console.log("signcoderElem",signCodeElem)
  
      AlgoSigner.send({
        ledger: 'TestNet',
        tx: signedTxs[0].blob
      })
      .then((d) => {
        tx = d;
        console.log("txidprint",tx.txId)
        AlgoSigner.algod({
          ledger: 'TestNet',
          path: '/v2/transactions/pending/' + tx.txId
        })
        .then((d) => {
          console.log(d);        
          //console.log("before",tx.txId)        
  
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
  .catch(e => { 
    console.error(e); 
  });
  
  
  })
  .catch((e) => {
    console.error(e);
  });

} 


const phno = (name, uname, note, password) =>{
  const algosdk = require('algosdk');  
    const CryptoJS = require("crypto-js");
  
    let accounts;
    let tx;
    const server = "https://testnet-algorand.api.purestake.io/ps2";
    const port = "";  
    const token = {
          'X-API-key' : 'SVsJKi8vBM1RwK1HEuwhU20hYmwFJelk8bagKPin',
    }
    //const indexerserver = 'https://testnet-algorand.api.purestake.io/idx2';
    //const indexport='';
    //let algoindexer = new algosdk.Indexer(token,indexerserver,indexport);
    
    let algodClient = new algosdk.Algodv2(token, server, port);
    var encrypted = CryptoJS.AES.encrypt(note.toString(), password);
    //U2FsdGVkX18ZUVvShFSES21qHsQEqZXMxQ9zgHy+bu0=
  
  
    AlgoSigner.connect()
  .then((d) => {
  console.log("tested1")
  algodClient.healthCheck().do()
  .then(d => { 
    
    AlgoSigner.accounts({
      ledger: 'TestNet'
    })
    .then((d) => {
      console.log("tested2",d)
      accounts = d;
      console.log("algoacc",isClick)
      algodClient.getTransactionParams().do()
  .then((d) => {
    let txParamsJS = d;
    console.log("txparamsJS",txParamsJS)
    const txn = algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({    
      from: isClick,
      assetName: name,
      unitName: uname,
      total: 1,
      decimals: 0,
      note: AlgoSigner.encoding.stringToByteArray(encrypted.toString()),
      manager:isClick,
      reserve:isClick,
      freeze: isClick,
      clawback:isClick,
      //AlgoSigner.encoding.stringToByteArray(document.getElementById('note').value),
      suggestedParams: txParamsJS
    });
  
    console.log("txnprint",txn)
    // Use the AlgoSigner encoding library to make the transactions base64
    const txn_b64 = AlgoSigner.encoding.msgpackToBase64(txn.toByte());
    
    AlgoSigner.signTxn([{txn: txn_b64}])
    .then((d) => {
      console.log("signTx",d)
      let signedTxs = d;
      let signCodeElem = JSON.stringify(d, null, 2);
      console.log("signcoderElem",signCodeElem)
  
      AlgoSigner.send({
        ledger: 'TestNet',
        tx: signedTxs[0].blob
      })
      .then((d) => {
        tx = d;
        console.log("txidprint",tx.txId)
        AlgoSigner.algod({
          ledger: 'TestNet',
          path: '/v2/transactions/pending/' + tx.txId
        })
        .then((d) => {
          console.log(d);        
          //console.log("before",tx.txId)        
  
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
  .catch(e => { 
    console.error(e); 
  });
  
  
  })
  .catch((e) => {
    console.error(e);
  });

} 

const togglePopup = () => {
  setIsOpen(!isOpen);
}

  return (
    <>  
        <div>
          <div id = "leftbox2">
        <img src = "/iris1_top.png" height = "150 px" width = "150 px"  alt = "logo" />
        </div>
        <div>
        <h1>NFT Creation and Listing Assets</h1>
        </div><br /><br /><br />
        {/* <input
      type="button"
      value="Click to Open Popup"
      onClick={togglePopup}
    /> */}
      {isOpenbutton ? 
<>
  <button className = "button button2" onClick={()=>connect()} id="listacc">
                  Connect Wallet 
                </button>
                </> : <> 
                <select className = "drop" name="select1" onClick={(e)=> onChangeOption(e.target.value)}>
    {isList.map(fbb =>    
      <option key={fbb.address} value={fbb.address} >{fbb.address}</option>
    )};
  </select>

                </>}
    </div>
          <div>
            {/* <button id = "connection" className = 'button button2' onClick={() => connect()}>
                Connect with AlgoSigner
            </button> */}
          </div>
          <div id = "leftbox">  
            <center>
  

            <label> Name : </label><br /> <input
            id="assetName"
            type='text'
            placeholder='Enter name'
            name="assetName"
            required
            onChange={event => setToname( event.target.value)}  
            /><br />

            <label> Age : </label><br /> <input
            id="assetName"
            type='text'
            placeholder='Enter Age'
            name="assetName"
            required
            onChange={event => setToAge( event.target.value)}  
            /><br />

            <label> Date Of Birth : </label><br /> <input
            id="assetName"
            type='text'
            placeholder='Enter DOB'
            name="assetName"
            required
            onChange={event => setToDob( event.target.value)}  
            /><br />

            <label> Address : </label><br /> <input
            id="assetName"
            type='text'
            placeholder='Enter Address'
            name="assetName"
            required
            onChange={event => setToAddress( event.target.value)}  
            /><br />

            <label> E-mail : </label><br /> <input
            id="assetName"
            type='text'
            placeholder='Enter E-mail'
            name="assetName"
            required
            onChange={event => setToEmail( event.target.value)}  
            /><br />

            <label> Phone number : </label><br /> <input
            id="assetName"
            type='text'
            placeholder='Enter Phone Number'
            name="assetName"
            required
            onChange={event => setToPhno( event.target.value)}  
            /><br />

            <label> Unit name : </label><br /> <input
            id="addressid"
            type='text'
            placeholder='Enter unit name'
            name="unitName"
            required
            onChange={event => setTounit( event.target.value)}
            /><br />

            <label> Note : </label><br /> <input
            id="addressid"
            type='text'
            placeholder='Enter Note'
            name="note"
            required
            onChange={event => setTonote( event.target.value)}
            /><br />

            <label> Password for note : </label><br /> <input
            id="addressid"
            type='password'
            placeholder='Enter Password'
            name="Password"
            required
            onChange={event => setToPass( event.target.value)}
  
            /><br /><br />
             </center>
             </div>
            <div id = "middlebox">
            <center>
            <button className = 'button button3' onClick={() => createNFT(assetName, assetAge, assetDob, assetAddress, assetEmail, assetPhno, unitName, note, password)}>
                Create Credentials
            </button><br /><br />
            <button className = 'button button3' onClick={() => listNFT()}>
                List all Credentials
            </button><br /><br />
            </center>
            </div>
          <div id = "rightbox">
           <center> 
                <h2> Asset list</h2>
          
            <table>
                 <th>Asset ID</th>&nbsp;
                 <th>Name</th>&nbsp;
                 <th>Creator</th>&nbsp;&nbsp;
                 <th>Total</th>&nbsp;
                 <th>Unit name</th>&nbsp;
                 <th>Click</th>
              {result2.map((x, index) => (                              
              <>
              <tr><td>{x.index}</td> &nbsp;
              <td>{x.name}</td>&nbsp;
              <td>{x.creator}</td>&nbsp;&nbsp;
              <td>{x.total}</td>&nbsp;
              <td>{x.unitname}</td>&nbsp;
              <td ><a
              href={x.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              >{x.url}</a></td>
              </tr>
              </>
              ))}
            </table>
</center>
            </div>
    </>
  );
}

export default App;


