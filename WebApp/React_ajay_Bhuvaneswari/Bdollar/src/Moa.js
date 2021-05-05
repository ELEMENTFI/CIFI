import React from "react";
import history from "./utils/history";
import BDO from "./BDO.png"
import {useState,useEffect} from 'react';
//import { Link } from 'react-router'
import web3 from './web3';
import './App.css';
import lottery from './bdo';
//import oracle from './oracle.js'; 
import { Router, Route, Switch,Link } from "react-router-dom";
import Firstpage from "./Firstpage";
import Secondpage from "./Secondpage";
import Thirdpage from "./Thirdpage";
import Fourthpage from "./Fourthpage";
import Fifthpage from "./Fifthpage";

import Treasury from './Treasury';
import { Card } from "react-bootstrap";
import bdo from "./bdo";
import share from "./share";

function Moa(){
  
  const [balance,setbalance] = useState("");
  const [balance1,setbalance1] = useState("");

  const [totalsupply,settotalsupply] = useState("");
  const [totalsupply1,settotalsupply1] = useState("");
  const [tokenname,settokenname] = useState("");
  const [tokensymbol,settokensymbol]= useState("");
  var [price,setprice] = useState("");
  const [tokenname1,settokenname1] = useState("");
  const [tokensymbol1,settokensymbol1]= useState("");
  var [price1,setprice1] = useState("");

  
  useEffect(()=>{bal()},[])
 const bal = async () => {

  
  

   // event.preventDefault();
  
    const accounts = await  web3.eth.getAccounts();


   

    setbalance(await lottery.methods.balanceOf(accounts[0]).call());
    settotalsupply(await lottery.methods.totalSupply().call());
    settotalsupply1(await share.methods.totalSupply().call());

    setprice( await Treasury.methods.getDollarPrice().call());
   // setprice1( await oracle.methods.getDollarPrice().call());
    settokenname(await lottery.methods.name().call());
    settokensymbol(await lottery.methods.symbol().call());
    
    
  //alert(balance);
  //alert(totalsupply);
  //alert(circulatingsupply);
  //alert(epochs);
  //alert(nextseigniorage);
   alert("completed");    

  

    
};
   
return (
    <div className="App">
      
<center>
<br></br>
<br/>


<h1 class="homehead">STASIS</h1>

<br/>
<div class="row">
  <div class="col">

  <div class="card">
<Card className="card" style={{backgroundColor: "black",boxShadow:"1px 1px 10px 2px #fa3455" }}>
<form onSubmit={bal} id="create-course-form" >



</form>
<br/>

<h4> <b>TREE</b></h4><br/>
        <p>
            {tokenname}({tokensymbol})
        </p>
        <p>
          <b><h4> Total Supply</h4></b> {totalsupply}
        </p>
        <p>
          <b><h4>Price</h4></b>{price}
      </p>
        <p>
          <b><h4>BalanceOf</h4></b> {balance}
         </p>

        
        
       
<Link className="primary" to="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x190b589cf9fb8ddeabbfeae36a813ffb2a702454">Buy TREE</Link>

     

</Card >
</div>
  </div>
  <div class="col">

  <div class="card">
<Card className="card" style={{backgroundColor: "black",boxShadow:"1px 1px 10px 2px #fa3455" }}>

<br/>

<h4> <b>PAI</b></h4><br/>
        <p>
            {tokenname}({tokensymbol})
        </p>
        <p>
          <b><h4> Total Supply</h4></b> {totalsupply1}
        </p>
        <p>
          <b><h4>Price</h4></b>{price}
      </p>
        <p>
          <b><h4>BalanceOf</h4></b> {balance}
         </p>

        
        
       
<Link className="primary" to="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x190b589cf9fb8ddeabbfeae36a813ffb2a702454">Buy PAI</Link>

     

</Card >
</div>
  </div>
  <div class="col">

  <div class="card">
<Card className="card" style={{backgroundColor: "black",boxShadow:"1px 1px 10px 2px #fa3455" }}>

<br/>

<h4> <b>SAI</b></h4><br/>
        <p>
            {tokenname}({tokensymbol})
        </p>
        <p>
          <b><h4> Total Supply</h4></b> {totalsupply}
        </p>
        <p>
          <b><h4>Price</h4></b>{price}
      </p>
        <p>
          <b><h4>BalanceOf</h4></b> {balance}
         </p>

        
        
       
<Link className="primary" to="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x190b589cf9fb8ddeabbfeae36a813ffb2a702454">Buy SAI</Link>

     

</Card >
</div>
  </div>
</div>

              
</center>
<br/>
<br/>




        
      </div>      
  );
}

export default Moa;