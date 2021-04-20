import React from "react";
import history from "./utils/history";
import BDO from "./BDO.png"

import {useState} from 'react';
import web3 from './web3';
import lottery from './storeabicon';//this line import lottery folder

import { Router, Route, Switch } from "react-router-dom";
import Popup from 'reactjs-popup';

import Treasury from './Treasury';
import Firstpage from "./Firstpage";
import Thirdpage from "./Thirdpage";
import Fourthpage from "./Fourthpage";
import Fifthpage from "./Fifthpage";
import bdooracle from "./bdooracle";
import boardroom from "./Boardroom";
import Homepage from "./Moa";
import bdo from "./bdo";
import share from "./share";
import { Modal, Button,InputGroup,FormControl } from "react-bootstrap";

function MyVerticallyCenteredModal1(props) {
  var [staked,setstaked] = useState("");
  const [geta,setgeta] = useState("");
  var [rate,setrate] = useState("");
  var [twap,settwap] = useState("");
  var [staked,setstaked] = useState("");
  var [locked,setlock] = useState("");
  var [app,setapprove] = useState("");
  var [stake,setstake] = useState("");
  var [amount,setamount]= useState("");
  const [tid,setId] = useState("");
  const [tid1,setId1] = useState("");
  const [Seigniorage,setSeigniorage] = useState("");
  var [withdraw,setwithdraw] = useState("");
  var [bal,setbal] = useState("");
  var [claim,setclaim] = useState("");
  var[ear,setear] = useState("");
  

  const Staked = async (event) =>{
    event.preventDefault();
  var x=document.getElementById("mymodal").style.visibility="hidden";

    const accounts = await  web3.eth.getAccounts();
    var te=document.getElementById("tid").value;
    alert(te)
    setstake(await boardroom.methods.stake(te).
    send({
      from: accounts[0]
     
    }));
    setSeigniorage(await boardroom.methods.allocateSeigniorage(te).send({ from:accounts[0]}));
    
  } 



  return (


    
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      id="mymodal"
      centered
    >
      <Modal.Header className="myModal" closeButton>
        <Modal.Title id="contained-modal-title-vcenter" >
          Stake your amount...
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="myModal">
        <h4 style={{textAlign: "center"}}></h4>
        <InputGroup>
  <InputGroup.Prepend>
   
  </InputGroup.Prepend>
  <FormControl className="myInput" id="tid" aria-label="Amount (to the nearest dollar)" />
  <InputGroup.Append>
   
  </InputGroup.Append>
</InputGroup>
      </Modal.Body>
      <Modal.Footer className="myModal">
        <Button variant="primary" onClick={Staked}>Stake</Button>
      </Modal.Footer>
    </Modal>
  );
}
    
function MyVerticallyCenteredModal2(props) {
  
  var [withdraw,setwithdraw] = useState("");
  
  const Withdraw = async (event) =>{
    event.preventDefault();
    var x1=document.getElementById("mymodal1").style.visibility="hidden";

    const accounts = await  web3.eth.getAccounts();
    var te1=document.getElementById("tid1").value;
    alert(te1);
    setwithdraw(await boardroom.methods.withdraw(te1).
    send({
      from: accounts[0]
     
    }));
  }



  return (


    
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      id="mymodal1"
      centered
    >
      <Modal.Header className="myModal" closeButton>
        <Modal.Title id="contained-modal-title-vcenter" >
        withdraw your staked coin !!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="myModal">
        <h4 style={{textAlign: "center"}}></h4>
        <InputGroup>
  <InputGroup.Prepend>
   
  </InputGroup.Prepend>
  <FormControl className="myInput" id="tid1" aria-label="Amount (to the nearest dollar)" />
  <InputGroup.Append>
   
  </InputGroup.Append>
</InputGroup>
      </Modal.Body>
      <Modal.Footer className="myModal">
        <Button variant="primary" onClick={Withdraw}>Withdraw</Button>
      </Modal.Footer>
    </Modal>
  );
}
    


function Secondpage() {
  const [modalShow1, setModalShow1] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);

  var [getCurrentEpoch,setepoch] = useState("");

  var [nextseigniorage,setnextseigniorage] = useState("");

  
  const [geta,setgeta] = useState("");
  var [rate,setrate] = useState("");
  var [twap,settwap] = useState("");
  var [staked,setstaked] = useState("");
  var [locked,setlock] = useState("");
  var [app,setapprove] = useState("");
  var [stake,setstake] = useState("");
  var [amount,setamount]= useState("");
  const [tid,setId] = useState("");
  const [tid1,setId1] = useState("");
  const [Seigniorage,setSeigniorage] = useState("");
  var [withdraw,setwithdraw] = useState("");
  var [bal,setbal] = useState("");
  var [claim,setclaim] = useState("");
  var[ear,setear] = useState("");
  


      const approve = async (event) =>{
        event.preventDefault();
        const accounts = await  web3.eth.getAccounts();
        setapprove(await share.methods.approve("0x409e9135Ab9005abaAEcC6C03E300809848a41E4","999999999900000000000000000000000000000").
        send({
          from: accounts[0]
         
        }));
      }
      const Staked = async (event) =>{
        event.preventDefault();
        const accounts = await  web3.eth.getAccounts();
        var te=document.getElementById("tid").value;
        alert(te)
        setstake(await boardroom.methods.stake(te).
        send({
          from: accounts[0]
         
        }));
        setSeigniorage(await boardroom.methods.allocateSeigniorage(te).send({ from:accounts[0]}));
        
      }
      const Withdraw = async (event) =>{
        event.preventDefault();
        const accounts = await  web3.eth.getAccounts();
        var te1=tid1;
        alert(te1)
        setwithdraw(await boardroom.methods.withdraw(te1).
        send({
          from: accounts[0]
         
        }));
      }
      const Claim = async (event) =>{
        event.preventDefault();
        const accounts = await web3.eth.getAccounts();
        setclaim(await boardroom.methods.claimReward().send({
          from: accounts[0]
         
        }));
        alert("Rewards claimed");
      }
      
      const onSubmitNFT = async (event) => {
    
    
      //var te=tid;
  
      event.preventDefault();
    
      const accounts = await  web3.eth.getAccounts();
      settwap(await bdooracle.methods.twap("0x8352A0a849cD181Cc7Ef61F972b7B8E5d677b66D","1000000000000000000").call());   
      //setrate(await Treasury.events.maxSupplyExpansionPercent);
      setepoch(await bdooracle.methods.getCurrentEpoch().call());
      setstaked(await boardroom.methods.totalSupply().call());
    setnextseigniorage(await Treasury.methods.nextEpochPoint().call()); 
    setlock(await bdo.methods.balanceOf("0xF277De5B326C3538c81e73cE9a6f7232eAEE4439").call()); 
    setbal(await boardroom.methods.balanceOf(accounts[0]).call());  
    setear(await boardroom.methods.earned(accounts[0]).call()); 
     alert("completed");    

   

      
  };
    
  return (
    <div className="light">
      
<center>
<br></br>
<h2 class="dark1"><b>Stake your Seigniorage Share</b>
</h2>

  <br></br>

		<form onSubmit={onSubmitNFT} id="create-course-form" >

    <button
                class="btn btn-primary"
                type="submit">
                
                <img src={BDO} width="30px" height="30px"/>

              </button>


</form>
<br/>

<div class="container">
  <div class="row">
  <div class="col align-self-start">
    <label class="epoch">Epoch :<span>{getCurrentEpoch}</span></label>
  </div>
  </div>
  <br/>

  <div class="row">
    <div class="col">
      <label class="ll" width="100%">nextEpochPoint<span><br/>{nextseigniorage}</span></label>
    </div>
    <div class="col">
      <label class="ll">eBNBmom Price(TWAP)<span><br/>{twap}</span></label>
    </div>
  </div><br/>
  <br/>
  <div class="row">
    <div class="col">
      <label class="ll"> SeBNBmom Staked<span><br/>{staked}</span></label>
    </div>
    <div class="col">
      <label class="ll">Locked value<span><br/>{locked}</span></label>
    </div>
  </div>
</div>
<br/>
<br/>
         <p>
         <b> First we need to approve then only we are able to call stake and Withdraw</b> <br /><br/>
           <button onClick={approve} class="btn btn-primary">Approve</button>
         </p> <br />
        <div class="container row">
          <div class="col">
            <div class="ll1">
              <br/><br/>
            <Button variant="primary" onClick={() => setModalShow1(true)}>
          Stake
        </Button>
  
        <MyVerticallyCenteredModal1
          show={modalShow1}
          onHide={() => setModalShow1(false)}
        /><br/>
        <br/>
          <b>Your staked amount<br /> {bal}</b>
          <br/>
          <Button variant="primary" onClick={() => setModalShow2(true)}>
          Withdraw
        </Button>
  
        <MyVerticallyCenteredModal2
          show={modalShow2}
          onHide={() => setModalShow2(false)}
        />
        <br/>
            </div>
          </div>
          <div class="col ll2">
            <br/>
            <br/>
          <b>Your Earned amount=>{ear}</b><br /><br/>
  <button  class="btn btn-primary" onClick={Claim}>ClaimRewards</button>
     <br/>
     <br/>
          </div>
        
         
         
         
        </div>
<br></br>
<br/>
     
      
<br></br>
<br></br>
</center>

<br></br>
<br></br>
 </div>      
  );
}

export default Secondpage;
