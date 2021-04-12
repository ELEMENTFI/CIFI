import React from "react";
import history from "./utils/history";
import download from "./download.png";
import BDO from "./BDO.png";
import {useState} from 'react';
import web3 from './web3';
import lottery from './storeabicon';//this line import lottery folder

import { Router, Route, Switch, Link } from "react-router-dom";
import Homepage from "./Moa";
import Secondpage from "./Secondpage";
import Firstpage from "./Firstpage";
import Fourthpage from "./Fourthpage";
import Fifthpage from "./Fifthpage";
import { Card } from "react-bootstrap";



function Thirdpage() {

  
  const [geta,setgeta] = useState("");

  
      const onSubmitNFT = async (event) => {
    
    
      //var te=tid;
  
      event.preventDefault();
    
      const accounts = await  web3.eth.getAccounts();
            
     alert("completed");    

    //var getaaa=new web3.eth.Contract(abi,poda);
    
    //await geta.methods.tokenURI(te).send({
    //from: accounts[0]
    //value: this.setState({c:accounts[0]})
    
    //});


      //var printgeta=await getaaa.methods.tokenURI(te).call();

      
  };
    
  return (
    <div className="App">
      
<center>
<br></br>
<br/><br/>
<h2>Earn <span class="cl">bDollar</span> Shares by providing liquidity
</h2>
<br/>
<div class="card2" style={{borderColor:"yellow"}}>
<form onSubmit={onSubmitNFT} id="create-course-form" >

</form><br />
<div class="row ml-5">
<div class="col-1 ml-5">
<img src={BDO} width="60px" height="60px" margin-right="-20px"/>

</div>
<div class="col-1 ml-n5">
<img src={download} width="60px" height="60px"/>

  </div>

  </div><br/>
<p><b><h4>Pancake PRABH/BUSD</h4></b></p> 
<p>Deposit CAKE-LP PRABH/BUSD<br />
Earn eBNBshare</p>
<br />
<Link exact to="/Fourthpage">
<button class="btn btn-outline-warning">
                Deposit
              </button>
</Link>

</div>


<br></br>
<br></br>

              
</center>

<br/>
<br/>
<br/>
<br/>
	  
      </div>      
  );
}

export default Thirdpage;
