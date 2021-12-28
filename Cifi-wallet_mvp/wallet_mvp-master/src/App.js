/* global AlgoSigner */
import './App.css';
import {Header} from "semantic-ui-react";
import {useState} from "react";
// import cifi from "../public/cifi.jfif"


let signedTxs = null;

const SignTrans = (recv,amt) => {
    let amt1 = amt.toString();
    AlgoSigner.connect()
  .then((d) => {
    const server = 'https://testnet-algorand.api.purestake.io/ps2'
    const token = {
      'X-API-Key': 'pOD5BAUCxq7InVPjo0sO01B0Vq4d7pD1ask5Ix43'
     }
    const port = '';

    const algosdk = require('algosdk');
    
    let algodClient = new algosdk.Algodv2(token, server, port);
    
    algodClient.healthCheck().do()
    .then(d => { 
      AlgoSigner.accounts({
        ledger: 'TestNet'
      })
      .then((d) => {
        let accounts = d;
        let acc1 = accounts[0].address;
        let acc2 = recv;
        document.getElementById("acc").innerHTML = "Account Address 1 : " + acc1 + "<br>Account Address 2 : " + acc2;
        console.log("Address of 1st Account : ",accounts[0].address);
        console.log("Address of 2nd Account : ",recv);
        algodClient.getTransactionParams().do()
.then((d) => {
  let txParamsJS = d;
  document.getElementById("transParams").innerHTML = "Transaction Params : " + JSON.stringify(txParamsJS);
  console.log("Tx params : ",txParamsJS);
  const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
    from: accounts[0].address,
    to: recv,
    amount: parseFloat(amt1) * 1000000,
    note: undefined,
    suggestedParams: {...txParamsJS}
  });

  
  // Use the AlgoSigner encoding library to make the transactions base64
  let txn_b64 = AlgoSigner.encoding.msgpackToBase64(txn.toByte());
  
  
  AlgoSigner.signTxn([{txn: txn_b64}])

  .then((d) => {
    signedTxs = d;
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
};



const SendTrans = () => {
    AlgoSigner.send({
      ledger: 'TestNet',
      tx: signedTxs[0].blob
    })
    .then((d) => {
      let txID = d;
      document.getElementById("txid").innerHTML = "Transaction ID : " + JSON.stringify(txID);
      console.log(txID);
    })
    .catch((e) => {
      console.error(e);
    });
};

const App = () => {
   const [toaddress,setToaddress] = useState("");
   const [algos,setToalgos] = useState("");
   console.log(toaddress);
   console.log(algos);
  return (
    <div>
      <img src = "cifi.png" height = "70 px" width = "70 px" alt = "logo" />
      <br />
      <br />
      
      <center><Header as="h1" dividing>CIFI Asset Transfer</Header></center> <br/><br />
  <center>  <label>Receiver Address : </label> <input
id="addressid"
  type='text'
  name="toaddress"
  placeholder='Enter the Address'
  required
  onChange={event => setToaddress( event.target.value)}
  
/>
<br />
<br />
<label> Algos : </label> <input
id="addressid"
  type='text'
  placeholder='Enter Algos'
  name="toaddress"
  required
  onChange={event => setToalgos( event.target.value)}
  
/>

      <br /><br />
      <button class="button button2" onClick={() => SignTrans(toaddress, algos)} >sign </button>
      <br /><br />
      <button class="button button2" onClick={() => SendTrans()} >send </button></center><br />

      </div>
  );
};

export default App;
