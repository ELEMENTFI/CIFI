//import React from 'react';
import React, { Component } from 'react';
//import secondpage from './secondpage';
import './App.css';
import web3 from './web3';
import tokencontract from './tokencontract';
import TESTToken from './TESTToken';
import { Card } from 'react-bootstrap';
import Background from '../src/images/aa.gif'
//import TEST from './TEST';
//import {BrowserRouter as Router , Route , Link , Switch , NavLink} from "react-router-dom";
import Background2 from '../src/images/logo1.png'

class home extends Component {
  state = {
    balance: '',
    totalSupply:'',
    circulatingsupply:'',
    name:'',
    symbol:'',
    decimal:'' 


  };

    
  async componentDidMount() {
    
   
    const balance = await web3.eth.getBalance(tokencontract.options.address);
    const totalsupply = await tokencontract.methods.totalSupply().call();
    const decimal = await TESTToken.methods.decimals().call();
    const accounts = await  web3.eth.getAccounts();

  
    const name = await TESTToken.methods.name().call();
    const symbol = await TESTToken.methods.symbol().call();

    //const price=await testtoken.methods.getDollarPrice().call();
  
    this.setState({totalsupply,balance,name,symbol,decimal,accounts});

    
  }
  
  
  render()
   {
    console.log(web3.version);
    web3.givenProvider.enable().then(console.log);
    return (
      <div class=" text App" style={{backgroundColor:'black'}}>
       <br/><br/>
        <h2 class="head"><b>BSC PAD</b></h2>
        <br/>  <br/>
        <div class="container">
       
        <div class="row justify-content-center">

          <div class="col-4  align-self-center">
          <Card class="mt-2  shadow" style={{ width: '25rem' , padding: "30px",backgroundColor:"black",boxShadow:"0px 0px 15px #fa3455"}}  >

<h3>
 <b>Name</b>  <br/> <span class="spantext">{this.state.name}</span>
</h3><br/> 
<h3>
  <b>Symbol </b><br/> <span class="spantext">{this.state.symbol}.</span>
</h3><br/> 
<h3>
   <b>Total Supply</b> <br/><span class="spantext">{this.state.totalsupply}.  </span>
</h3><br/> 



 <h3>
  <b>Decimals </b><br/> <span class="spantext">{this.state.decimal}.
</span>
</h3>
</Card>

         </div>
         
         

        </div>
        
     </div>
        <br/> 
        <br/>
      
       
        
        </div>
    );
  }
}


export default home;
