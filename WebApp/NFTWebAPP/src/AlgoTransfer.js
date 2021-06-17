/* global AlgoSigner */
import firebase from "firebase";
import fireDb from "./firebase";
import React, { useState,useEffect,useCallback } from "react";
const AlgoTransfer=()=>{

const[getAlgos,setgetAlgos]=useState([]);
const[getAlgoss,setgetAlgoss]=useState([]);


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
    addsold:a[b].status,
    addImgs:a[b].imageurl
  })              
      })
    })    
    setgetAlgoss(req2)    
    //console.log("cfbsalgo",req) 
    // setLoader(false)
    // setLoading(false)
  }

  //start transfer

  const TransferAsset=async(a)=>{
    alert("transferasset");
    console.log("buytx",a.addtxid);
    console.log("buytx",a.addalgocreator);
    console.log("buytx",a.addprice);
    let merge=a.addprice+'000000'
      const algosdk = require('algosdk');
      var account1_mnemonic=a.addmnemonic;

      //const checb1=()=>{
        let signedTx;
        let tx;
        let txParams;
      
        AlgoSigner.connect()
      .then((d) => {
        console.log("conn",d);
        let accounts;
        AlgoSigner.accounts({
          ledger: 'TestNet'
        })
        .then((d) => {
          accounts = d;
          console.log("accounts",accounts[0]);
          AlgoSigner.algod({
            ledger: 'TestNet',
            path: '/v2/transactions/params'
          })
          .then((d) => {
            txParams = d;
            console.log("txparms",d);
            let getac=accounts[0].address;
            
            console.log("stringcon",getac);
            console.log("check",a.addalgocreator);
            AlgoSigner.sign({
              from:getac,
              to: a.addalgocreator,
              amount: +merge,
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
              console.log("signedtx",d);
              AlgoSigner.send({
                ledger: 'TestNet',
                tx: signedTx.blob
              })
              .then((d) => {
                tx = d;
                console.log("tx",d);


                //cut start

        var account1_mnemonic=a.addmnemonic;
        //var account1_mnemonic = "tackle dove endorse style mind boring hidden fiction power wrap diesel more cruel ecology few field they chase oil deliver useless paddle nation abandon domain";
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
        
          console.log("working return 133",txId)
        console.log("workingalgo"+algodclien);
          let response = await algodclien.status().do();
          console.log("response",response);
          let lastround = response["last-round"];
          console.log("lastround",lastround);
          while (true) {
              const pendingInfo = await algodclien.pendingTransactionInformation(txId).do();
              console.log("insidewhileloop",pendingInfo);
              if (pendingInfo["confirmed-round"] !== null && pendingInfo["confirmed-round"] > 0) {
                  //Got the completed Transaction
                  console.log("Transaction " + txId + " confirmed in round " + pendingInfo["confirmed-round"]);
                  break;
              }
              lastround++;
              await algodclien.statusAfterBlock(lastround).do();
          }
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
      
      
        let params = await algodclient.getTransactionParams().do();
          //comment out the next two lines to use suggested fee
          params.fee = 1000;
          params.flatFee = true;
          console.log(params);
          
      
          let note = undefined;
          
          let assetID = null;
          console.log("working198");
          console.log("beforealgoclient",algodclient);
          console.log(a.addtxid);
          await waitForConfirmation(algodclient,a.addtxid);
          console.log("working return 209")
          // Get the new asset's information from the creator account
          let ptx = await algodclient.pendingTransactionInformation(a.addtxid).do();
          console.log("working return 212",ptx["asset-index"]);
          assetID = ptx["asset-index"];
        
        await printCreatedAsset(algodclient, recoveredAccount1.addr, assetID);
        await printAssetHolding(algodclient, recoveredAccount1.addr, assetID);
      
        console.log("working178")
        
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
      
      console.log("working211")
      
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
      
          console.log("working 227")
        
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
          rawSignedTxn = xtxn.signTxn(recoveredAccount1.sk)
          let xtx = (await algodclient.sendRawTransaction(rawSignedTxn).do());
          console.log("Transaction : " + xtx.txId);
          // wait for transaction to be confirmed
          await waitForConfirmation(algodclient, xtx.txId);
      
          // You should now see the 10 assets listed in the account information
          console.log("Account 3 = " + recoveredAccount3.addr);
          await printAssetHolding(algodclient, recoveredAccount3.addr, assetID);
      
        })().then(d=>{

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
            status:"sold",
            price:"10",
            keyId:a.addkeyId,
            imageurl:a.addImgs
        });
        }).catch(e => {
          console.log(e);
          console.trace();
      });


                //cut stop
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
  
    //end transfer
//end buyers print in algo

const chec=async()=>{

  const algosdk = require('algosdk');
  const baseServer = "https://testnet-algorand.api.purestake.io/ps2";
        const port = "";
        //B3SU4KcVKi94Jap2VXkK83xx38bsv95K5UZm2lab
        const token = {
        
            'X-API-key' : 'SVsJKi8vBM1RwK1HEuwhU20hYmwFJelk8bagKPin',
        }
        //let algodclient = new algosdk.Algodv2(token, baseServer, port);  

  await AlgoSigner.connect();

  // Create an Algod client to get suggested transaction params
  let client = new algosdk.Algodv2(token, baseServer, port);
  let suggestedParams = await client.getTransactionParams().do();
  console.log("try1",suggestedParams);
  
  // Use the JS SDK to build a Transaction
  let sdkTx = new algosdk.Transaction({
    to: 'ZSQ6JQFOR3VTJSEM45RYOTN32NH2RAGZB4RVWP2LB375F3FK7GNDAT27QA',
    from: 'BAZXPXEGPFQ7JVOZ7BZUYK36EXLRAWC7MAG3O2SPDWMVCYDMRLCHC6JC2U',
    amount: 10000,
    suggestedParams,
  });
  
 console.log("try2",sdkTx);
  // Get the binary and base64 encode it
  let binaryTx = sdkTx.toByte();
  let base64Tx = AlgoSigner.encoding.msgpackToBase64(binaryTx);
  console.log("try3",base64Tx);
  console.log("try4",binaryTx);
  

  //open algo signer below
  let txn;

  let signedTxs = await AlgoSigner.signTxn([
    {
      txn: base64Tx
    },
  ]); 

  console.log("txn",txn);

  // The AlgoSigner.signTxn() response would look like '[{ txID, blob }, null]'
// Convert first transaction to binary from the response
//let signedTx1Binary = AlgoSigner.encoding.base64ToMsgpack(signedTxs[0].blob);
// Sign leftover transaction with the SDK
//let externalAccount = algosdk.mnemonicToSecretKey('EXTERNAL_ACCOUNT_MNEMONIC');
//let signedTx2Binary = txn.signTxn(externalAccount.sk);

//await client.sendRawTransaction([signedTx1Binary, signedTx2Binary]).do();

// Merge transaction binaries into a single Uint8Array
// let combinedBinaryTxns = new Uint8Array(signedTx1Binary.byteLength + signedTx2Binary.byteLength);
// combinedBinaryTxns.set(signedTx1Binary, 0);
// combinedBinaryTxns.set(signedTx2Binary, signedTx1Binary.byteLength);

// // Convert the combined array values back to base64
// let combinedBase64Txns = AlgoSigner.encoding.msgpackToBase64(combinedBinaryTxns);

// await AlgoSigner.send({
//   ledger: 'TestNet',
//   tx: combinedBase64Txns,
// });

}

return(

    <div>

<button onClick={getalgo}>GetAsset</button>

<br></br><br></br>



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
    <img   src={a.addImgs}  style={{height:120,width:120,marginTop:'10px'}} alt=""    />
  
    <h6 style={{color:'white'}}>Name : {a.addalgoname}</h6>
    
    <h6 style={{color:'white'}}>Symbol : {a.addalgosymbol}</h6>
    
    <h6 style={{color:'white'}}>price : {a.addprice}</h6>

    { a.addsold === '' ? (
<> 
 <button onClick={()=>TransferAsset(a)} >BuyNow</button>     
</>
    ):(
      <>
      <button >Already Sold</button> 
      </>

    )}
</center>
</div>

</div>
 )})}
  </div>


  

  </div>

);

}
export default AlgoTransfer;