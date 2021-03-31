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
      <div class="text" style={{backgroundImage:"url("+ Background +")",backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'}}>
       <br/><br/>
        <h2 class="head"><b>BSC PAD</b></h2>
        <br/>
        <div class="row justify-content-center">
          <div class="col-8">
          <Card bg="dark" border="warning" style={{ width: '25rem' , padding: "30px", borderRadius: "8%"}}  >

<p>
  Name <br/> {this.state.name}.
</p>
<p>
  Symbol <br/> {this.state.symbol}.
</p>
<p>
   Total Supply <br/> {this.state.totalsupply}. 
</p>



 <p>
  Decimals <br/> {this.state.decimal}.
</p>
</Card>

         </div>
        </div>
        
     
        <br/> 
        <br/>
        <br/>
        <br/>
        <br/>
        
        </div>
    );
  }
}


export default home;
