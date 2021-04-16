//import React from 'react';
import React, { Component } from 'react';
import secondpage from './secondpage';
import './App.css';
import web3 from './web3';
import tokencontract from './tokencontract';
import TESTToken from './TESTToken';
import TEST from './TEST';
import {BrowserRouter as Router , Route , Link , Switch , NavLink} from "react-router-dom";
import home from './home';
import { Navbar } from 'react-bootstrap';
import { Button,ButtonGroup } from 'react-bootstrap';
import Background1 from '../src/images/logo.png'




class App extends Component {
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
    const decimal = await TESTToken.methods.name().call();
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
      <div class="bg">
        
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
   integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous"/>

        <div>
        <Router>
          <Navbar className="bg-dark">
          <Navbar.Brand href="#home">
      
        <img src={Background1} width="30px" height="30px"/>
        
      
    </Navbar.Brand>
    <Navbar.Collapse className="justify-content-end">
<Link exact to="/h">
<button class="btn btn-warning ">
  {this.state.accounts}.
</button>
</Link>
<Link exact to="/h">
<button class="btn btn-warning ">
  Home
</button>
</Link>
      
      <Link exact to="/s">
      <Button variant="outline-warning">Join Pool</Button>{' '}
            </Link>
      

      </Navbar.Collapse>
      </Navbar>
          <Switch>
    <Route exact path='/h' component={home}/>
      <Route  exact path='/s' component={secondpage}/>
    </Switch>
    
  </Router>
    
</div>
</div>
    );
  }
}


export default App;
