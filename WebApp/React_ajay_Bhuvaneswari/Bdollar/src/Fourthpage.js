import React from "react";
import history from "./utils/history";
import BDO from "./BDO.png"
import { Modal, Button,InputGroup,FormControl } from "react-bootstrap";

import {useState} from 'react';
import web3 from './web3';
import lottery from './storeabicon';//this line import lottery folder

import { Router, Route, Switch } from "react-router-dom";
import Homepage from "./Moa";
import Secondpage from "./Secondpage";
import Thirdpage from "./Thirdpage";

import Firstpage from "./Firstpage";
import Fifthpage from "./Fifthpage";
import share from "./sharerewardpool";
import lp from "./pancakeLP";


function MyVerticallyCenteredModal1(props) {
  const [geta,setgeta] = useState("");
  var[sid,setsId] = useState("");
  var[bal,setbal] = useState("");
  var [app,setapprove] = useState("");
  var [tid1,setId1] = useState("");
  var[withd,setwithdraw] = useState("");
  var [withd1,setwithdraw1] = useState("");


  const Staked = async (event) =>{
    event.preventDefault();
    var x=document.getElementById("mymodal").style.visibility="hidden";

    const accounts = await  web3.eth.getAccounts();
    var te=document.getElementById("tid").value;
    alert(te);
    
    setsId(await share.methods.deposit("0",te).
    send({
      from: accounts[0]
     
    }));
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
Deposit LP token!!        </Modal.Title>
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
  
  const [geta,setgeta] = useState("");
  var[sid,setsId] = useState("");
  var[bal,setbal] = useState("");
  var [app,setapprove] = useState("");
  var [tid1,setId1] = useState("");
  var[withd,setwithdraw] = useState("");
  var [withd1,setwithdraw1] = useState("");
  
  const Withdraw = async (event) =>{
    var x=document.getElementById("mymodal1").style.visibility="hidden";

    event.preventDefault();
    const accounts = await  web3.eth.getAccounts();
    var te1=document.getElementById("tid1").value;
    alert(te1);
    setwithdraw(await share.methods.withdraw("0",te1).
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
        withdraw your LP token !!
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
    


function Fourthpage() {
  const [modalShow1, setModalShow1] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);

  
  const [geta,setgeta] = useState("");
  var[sid,setsId] = useState("");
  var[bal,setbal] = useState("");
  var [app,setapprove] = useState("");
  var [tid1,setId1] = useState("");
  var[withd,setwithdraw] = useState("");
  var [withd1,setwithdraw1] = useState("");

  
      const onSubmitNFT = async (event) => {
    
  
      event.preventDefault();
      const accounts = await  web3.eth.getAccounts();
      setbal(await lp.methods.balanceOf(accounts[0]).call());            
     alert("completed");    
   
  };
  const Staked = async (event) =>{
    event.preventDefault();
    const accounts = await  web3.eth.getAccounts();
    var te=sid;
    alert(te)
    
    setsId(await share.methods.deposit("0",te).
    send({
      from: accounts[0]
     
    }));
  }
  const Withdraw = async (event) =>{
    event.preventDefault();
    const accounts = await  web3.eth.getAccounts();
    var te1=tid1;
    alert(te1)
    setwithdraw(await share.methods.withdraw("0",te1).
    send({
      from: accounts[0]
     
    }));
  }
  const settle = async (event) =>{
    event.preventDefault();
    const accounts = await  web3.eth.getAccounts();

    setwithdraw1(await share.methods.emergencyWithdraw("0").
    send({
      from: accounts[0]
     
    }));
  }
const accept = async (event) =>{
      event.preventDefault();
      const accounts = await  web3.eth.getAccounts();
      setapprove(await lp.methods.approve("0xEB50a80F7DE37AF8669b0C4973B2A33E8502c5a7","999999999900000000000000000000000000000").
      send({
        from: accounts[0]
       
      }));
      alert("approved");
    
    
    
  }
    
  return (
    <div className="light">
      
<center>
<br></br>
<br/>
<h2 class="dark1">Pancake PRABH/BUSD</h2>


<br/>
<p ><b>Deposit Cake-LP PRABH/BUSD and earn eBNBshare</b></p>

		<form onSubmit={onSubmitNFT} id="create-course-form" >
    <button
                class="btn "
                type="submit">
                
                <img src={BDO} width="30px" height="30px"/>

              </button>
</form>
<br/><br/>
<b> First we need to approve then only we are able to call stake and Withdraw </b> <br /><br />
           <button class="btn btn-primary" onClick={accept}>Approve</button>
          <br /><br />
<br/>
          <div class="row container">

<div class="col ll1">
  <br/><br/>
  <b>Deposit your LP Token!!</b><br/><br/>
<Button variant="primary" onClick={() => setModalShow1(true)}>
          Stake
        </Button>
  
        <MyVerticallyCenteredModal1
          show={modalShow1}
          onHide={() => setModalShow1(false)}
        /><br/>
        <br/>
         
          <br/>
          <b>Withdraw your LP Token!!</b><br/><br/>
          <Button variant="primary" onClick={() => setModalShow2(true)}>
          Withdraw
        </Button>
  
        <MyVerticallyCenteredModal2
          show={modalShow2}
          onHide={() => setModalShow2(false)}
        />
</div>


           
            <div class="col">
              <div class="ll2">
                <br/><br/>
              <b>Your Deposit amount<br /> {bal}</b>.

<br/><br/><br/>
              <b>Settle and withdraw your LpToken !!</b><br></br><br/>
    <button class="btn btn-primary" onClick={settle}>Settle & Withdraw</button>
<br/>
<br/><br/>
              </div>
            </div>
          </div>
<br/>
         
   
    


      
<br></br>
<br></br>


              
</center>

<br></br>
<br></br>
                    
                    

            
	  
      </div>      
  );
}

export default Fourthpage;
