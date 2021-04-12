import React from "react";
import history from "./utils/history";
import BDO from "./BDO.png"

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


function Fourthpage() {

  
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
    <div className="App">
      
<center>
<br></br>
<br/>
<h2>Pancake <span class="cl">PRABH/BUSD</span></h2>


<br/>
<p>Deposit Cake-LP PRABH/BUSD and earn eBNBshare</p>

		<form onSubmit={onSubmitNFT} id="create-course-form" >
    <button
                class="btn btn-outline-warning"
                type="submit">
                
                <img src={BDO} width="30px" height="30px"/>

              </button>
</form>
<br/><br/>
<b> First we need to approve then only we are able to <span class="cl">call stake and Withdraw</span> </b> <br /><br />
           <button class="btn btn-outline-warning" onClick={accept}>Approve</button>
          <br /><br />
<br/>
          <div class="row">
            <div class="col-5 ml-5">
              <div class="ll1">
              <div>Deposit LpToken !!</div><br />
   
   <input type = "number" name="sid" required onChange={event => setsId( event.target.value)} /><br/>
   <br/>

    <button class="approve" onClick={Staked}>Stake</button><br /><br />
              </div>
            </div>
            <div class="col-5 ml-5">
              <div class="ll1">
              <b>Your Deposit amount<br /> {bal}</b><br />.

              </div>
            </div>
          </div>
<br/>
          <div class="row">
            <div class="col-5 ml-5">
              <div class="ll1">
              <div>withdraw your LpToken !!</div> <br />
   
   <input type = "number" name="tid1" required onChange={event => setId1( event.target.value)} />
   <br />
   <br/>

    <button class="approve" onClick={Withdraw}>Withdraw</button><br /> <br />
              </div>
            </div>
            <div class="col-5 ml-5">
              <div class="ll1">
              <div>Settle and withdraw your LpToken !!</div><br></br>
    <button class="approve" onClick={settle}>Settle & Withdraw</button>
              </div>
            </div>
          </div>
            
           
    
   
    


      
<br></br>
<br></br>


              
</center>

<br></br>
<br></br>
                    
                    

            
	  
      </div>      
  );
}

export default Fourthpage;
