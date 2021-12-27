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
import FolowStepPro from '../FolowStepPro';
import BigNumber from "bignumber.js";
import FolowStepsdcopy from "../FolowStepsdcopy";
import ModalDCopy from '../ModalDCopy';
const algosdk = require('algosdk');
const algodClient = new algosdk.Algodv2('', 'https://api.testnet.algoexplorer.io', '');
const myAlgoConnect = new MyAlgoConnect();
const Buyslate = () => {
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
  
  
  










  const[balance,setBalance] = useState([]);
  const[stakedbalance,setStakedBalance] = useState([]);
  const[rewardamountbalance,setrewardBalance] = useState([]);
  //let assetid = 53453651;
  let applicationid = 46315128;

  let address=localStorage.getItem("wallet");

 //localglobal
  
 useEffect(() => {
  const fetchPosts = async () => {
       // read local state of application from user account
 //async function readLocalState(client, address, index){
let accountInfoResponse = await client.accountInformation(localStorage.getItem("wallet")).do();
// let val = await client.ApplicationInformation(appId);
// console.log("val",val)
console.log("accinfolocal",accountInfoResponse);
if( accountInfoResponse['apps-local-state'].length === null|| accountInfoResponse['apps-local-state'].length ===undefined||accountInfoResponse['apps-local-state'].length===""){
  alert("checknew");
}
else{


console.log("Userres",accountInfoResponse['apps-local-state'].length);
for (let i = 0; i < accountInfoResponse['apps-local-state'].length; i++) { 
    if (accountInfoResponse['apps-local-state'][i].id == parseInt(configfile.applicationid)) {
        console.log("User's local state:",accountInfoResponse['apps-local-state'][i].id);
        let acccheck= accountInfoResponse['apps-local-state'][i][`key-value`]; 
        console.log("Usercheck",acccheck);
        console.log("Usernewres",accountInfoResponse['apps-local-state'][i][`key-value`]);
      
        if(accountInfoResponse['apps-local-state'][i][`key-value`]=== null|| accountInfoResponse['apps-local-state'][i][`key-value`] === undefined||accountInfoResponse['apps-local-state'][i][`key-value`]===""){
          alert("new");
       }
      else{
for (let n = 0; n < accountInfoResponse['apps-local-state'][i][`key-value`].length; n++) {
            console.log(accountInfoResponse['apps-local-state'][i][`key-value`][n]);
            //setStakedBalance(accountInfoResponse['apps-local-state'][i][`key-value`][n]);
            
            let rewardkey =accountInfoResponse['apps-local-state'][i]['key-value'][n];
           if(rewardkey['key'] === "MjA="){
             setStakedBalance(accountInfoResponse['apps-local-state'][i]['key-value'][n]['value']['uint']);
           }
          if(rewardkey['key'] === "MjI="){
            console.log("rewardcheck",accountInfoResponse['apps-local-state'][i]['key-value'][n]['value']['uint']);
            setrewardBalance(accountInfoResponse['apps-local-state'][i]['key-value'][n]['value']['uint']);
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

let accountInfoResponse1 = await client.accountInformation("J2BO4CWHCK4LVUZWUQH7BFNK7TMWQLPNN5TW4LIXSECJ6IY3MKDRBE7QLA").do();

for (let i = 0; i < accountInfoResponse1['created-apps'].length; i++) { 
   console.log("Application's global state:");
  if (accountInfoResponse1['created-apps'][i].id == applicationid) {
      console.log("Application's global state:");
      for (let n = 0; n < accountInfoResponse1['created-apps'][i]['params']['global-state'].length; n++) {
          console.log(accountInfoResponse1['created-apps'][i]['params']['global-state'][n]);
          let enc = accountInfoResponse1['created-apps'][i]['params']['global-state'][n];
          var decodedString = window.atob(enc.key);
    
      }
      
  }
}

  
  };
  

  fetchPosts();
}, []);



  
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







const assetoptin = async() => {

try{
  setIsOpennewpro(true)
const algosdk = require('algosdk');
const algodclient = new algosdk.Algodv2('', 'https://api.testnet.algoexplorer.io/', '');
const myAlgoConnect = new MyAlgoConnect();
const params = await algodclient.getTransactionParams().do();
const assetoptin1 = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
from: localStorage.getItem('wallet'),
to: localStorage.getItem('wallet'),
assetIndex: 53453651,
note: undefined,
amount: 0,
suggestedParams: params
});

const signedTxnass = await myAlgoConnect.signTransaction(assetoptin1.toByte());
const responseass = await algodClient.sendRawTransaction(signedTxnass.blob).do();
console.log("optresponse",responseass)
datasethere("Asset Opt-in successfull")
setIsOpennewpro(false)
setIsOpennew(true)
}
catch (err) {
console.error(err);
setIsOpennewpro(false)
}
}





//stakingpartstart
//stakingpartstart
    


//unstake

const Buy = async() => {
try{
  setIsOpennewpro(true)
const algodClient = new algosdk.Algodv2('', 'https://api.testnet.algoexplorer.io', '');


let appId1 = 46315308;
let appId2 = 46315128;
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
    var escrowdata = `
    #pragma version 5
    
    txn OnCompletion
    int OptIn
    ==
    int 1
    return
    global GroupSize
    int 2
    ==
    gtxn 0 TypeEnum
    int pay
    ==
    &&
    gtxn 1 TypeEnum
    int axfer
    ==
    bz failed
    int 1
    return
    failed:
    int 0
    return

`;
  
// define sender
let sender = addresses[0].address;
let client = new algosdk.Algodv2(algodToken, algodServer, algodPort);

// get node suggested parameters
let params = await client.getTransactionParams().do();
// comment out the next two lines to use suggested fee
params.fee = 1000;
params.flatFee = true;
let appArgs1= [];

appArgs1.push(new Uint8Array(Buffer.from("always")));
console.log("(line:516) appArgs = ",appArgs1)




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

  let transaction1 =algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      from: sender,
      to: sender1,
      amount: 1000,
      note: undefined,
      suggestedParams: params});

  let transaction2 =algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
    from: sender1,
    to: receiver,
    amount: unstakeamount,
    note: undefined,
    assetIndex: parseInt(configfile.assetid),
    suggestedParams: params});

   




  
//myAlgo start

const groupID = algosdk.computeGroupID([transaction1, transaction2]);
    const txs = [ transaction1, transaction2];
    txs[0].group = groupID;
    txs[1].group = groupID;
    
    
   
  
const signedTx1 = await myAlgoConnect.signTransaction(txs[0].toByte());
const signedTx2 = algosdk.signLogicSigTransaction(txs[1], lsig);
const response = await algodClient.sendRawTransaction([ signedTx1.blob, signedTx2.blob]).do();
console.log("TxID", JSON.stringify(response, null, 1));
await waitForConfirmation(algodClient, response.txId);
//alert("Buy Successfully");
datasethere("Buy Successfully")
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
                            <h4>Buy CIFI </h4>
                                
                                <Table bordered responsive className="mt-3">
                                    <thead>
                                        <tr>
                                        <th><center>Your CIFI</center></th>

                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        <tr>
                                            <td>0.00</td>
                                            
                                          
                                        </tr>
                                    </tbody>
                                </Table>
                               
<div>
                                <Container fluid>
                                    <Row>
                                       
                                        <Col xl="12" md="12">
                                      
                                            <InputGroup className="mt-3">
                                            <label>
                                           Enter amount &nbsp;&nbsp;&nbsp;
                                          </label>
                                            <Input placeholder={0} style={{ height: "auto" }}type = "number"  />
                                               
                                            </InputGroup>
                                           
                                      
                                            

                                    
                                           
                                        </Col>

                                    </Row>
                                </Container>
                                <Container>
                                    <Row className="justify-content-center">
                                        <Col xl="9">
                                            <Row className="mt-4">
                                                
                                                <Col xl="12" md="12">
                                                    <Button color="outline-site-primary" block >Connect Your wallet</Button>
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
                                <h4>Buy  CIFI </h4>
                                <h6>NOTE : This CIFI Token Is Only for Testing Purpose</h6>
                                <Table bordered responsive className="mt-3">
                                    <thead>
                                        <tr>
                                        <th><center>Your CIFI</center></th>
                                         
                                                
                                                
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        <tr>
                                            <td>{balance/1000000}</td>
                                          
                                        </tr>
                                    </tbody>
                                </Table>
                                <div>         



<div>
                                <Container fluid>
                                    <Row>
                                        <Col xl="12" md="12">
                                       
                                             <div>

                                      <> 

                                        <InputGroup className="mt-3">
                                        <label>
                                           Enter amount &nbsp;&nbsp;&nbsp;
                                          </label>
                                                <Input placeholder={unstakeamount} style={{ height: "auto" }}type = "number" id="tid2"  />
                                                {/* <InputGroupAddon addonType="append"><Button color="site-primary" onClick={Buy}>Buy</Button></InputGroupAddon> */}
                                            </InputGroup>
                                           
                                      </>
                                      
                                            
                                            </div>
                                             <br></br>
                                        </Col>
                                       
                                    </Row>
                                </Container>
                                <Container>
                                    <Row className="justify-content-center">
                                        <Col xl="9">
                                            <Row className="mt-6">
                                            <Col xl="6" md="12" className='mt-3 mt-xl-0'>
                                                    
                                                    <Button color="outline-site-primary" block  onClick={assetoptin} >Asset Optin</Button>
                                                   
                                                </Col>
                                                <Col xl="6" md="12" className='mt-3 mt-xl-0'>
                                                    <Button color="outline-site-primary" block   onClick={Buy} >BUY</Button>
                                          
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
        <FolowStepsd viewhistory={dis} data={datasendhere} />
  </Modald>

  <ModalDCopy visible={isOpennewpro} >
        <FolowStepPro />
  </ModalDCopy>
       
          </>
        }
       </section>
    );
}

export default Buyslate;