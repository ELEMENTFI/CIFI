import React from "react";
import history from "./utils/history";
import BDO from "./BDO.png"
import {useState} from 'react';
//import { Link } from 'react-router'
import web3 from './web3';
import './App.css';
import lottery from './bdo';

import { Router, Route, Switch,Link } from "react-router-dom";
import Firstpage from "./Firstpage";
import Secondpage from "./Secondpage";
import Thirdpage from "./Thirdpage";
import Fourthpage from "./Fourthpage";
import Fifthpage from "./Fifthpage";

import Treasury from './Treasury';
import { Card } from "react-bootstrap";
import bdo from "./bdo";

function Moa(){
  
  const [balance,setbalance] = useState("");
  const [totalsupply,settotalsupply] = useState("");
  const [tokenname,settokenname] = useState("");
  const [tokensymbol,settokensymbol]= useState("");
  var [price,setprice] = useState("");

  
 

  
  const onSubmitNFT = async (event) => {



    event.preventDefault();
  
    const accounts = await  web3.eth.getAccounts();


   

    setbalance(await lottery.methods.balanceOf(accounts[0]).call());
    settotalsupply(await lottery.methods.totalSupply().call());
    setprice( await Treasury.methods.getDollarPrice().call());
    //setprice( await oracle.methods.getDollarPrice().call());
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


<h1 class="homehead"><span class="cl">bDollar (BDO)</span> is an algorithmic stablecoin running <br/>on Binance Smart-chain.</h1>

<br/>

<div class="card">
<Card className="card" style={{backgroundColor: "#00152e" , borderColor:"yellow"}}>
<form onSubmit={onSubmitNFT} id="create-course-form" >


<br/>
  
    <button
                class="btn btn-outline-warning"
                type="submit">
                
                <img src={BDO} width="30px" height="30px"/>
              </button>



</form>
<br/>

<h4><span class="cl"> bdollar </span>Contract</h4>
        <p>
            {tokenname}({tokensymbol})
        </p>
        <p>
           total supply <br/> {totalsupply}
        </p>
        <p>
          price<br/> {price}
      </p>
        <p>
          balanceOf<br/> {balance}
         </p>

        
        
       
<Link className="cl" to="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x190b589cf9fb8ddeabbfeae36a813ffb2a702454">BuyeBNBmon</Link>

     

</Card >
</div>
              
</center>
<br/>
<br/>




        
      </div>      
  );
}

export default Moa;
