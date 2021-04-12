//import React from 'react';
import React, { Component, useState } from 'react';
import './App.css';
import web3 from './web3';
import lottery from './bdo';
import oracle from './Oracle';


function MobileApp(){
  
  const [balance,setbalance] = useState("");
  const [totalsupply,settotalsupply] = useState("");
  const [circulatingsupply,setcirculatingsupply] = useState("");
  const [price,setprice] = useState("");



   
    setbalance(web3.eth.getBalance(lottery.options.address));
    settotalsupply(lottery.methods.totalSupply().call());
    setprice( oracle.methods.getDollarPrice().call());
    setprice( oracle.methods.epoch().call());
    
  
    //setState({totalsupply,price,balance});
  

    console.log(web3.version);

    web3.givenProvider.enable().then(console.log);
    return (
      <div>


        <h2>Bdollar Contract</h2>
        <p>
           total supply <br/> {totalsupply}
        </p>
        <p>
          price<br/> {price}
      </p>
        <p>
          balanceOf<br/> {balance}
         </p>

        <hr />

        </div>
    );
  
    }

export default MobileApp;
