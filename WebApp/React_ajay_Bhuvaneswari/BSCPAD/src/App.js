//import React from 'react';
import React, { Component } from 'react';
import secondpage from './secondpage';
import './App.css';
import thirdpage from './thirdpage';

import web3 from './web3';
import tokencontract from './tokencontract';
import TESTToken from './TESTToken';
//import TEST from './TEST';
import {BrowserRouter as Router , Route , Link , Switch} from "react-router-dom";
import home from './home';
import { Navbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
//import Background1 from '../src/images/logo.png'
import fourthpage from './fourthpage';




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
    if(accounts!=null){
      document.getElementById("cc").style.visibility="hidden";   

    }

    //const price=await testtoken.methods.getDollarPrice().call();
  
    this.setState({totalsupply,balance,name,symbol,decimal,accounts});

    
  }
  
  
  render()
   {
    const connect = async()=>{
     
     

      console.log(web3.version);
      
      web3.givenProvider.enable().then(console.log);
window.ethereum.enable();
      
      //window.location.reload();
       }
    return (
      <div class="bg-dark">
        
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
   integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous"/>

        <div>
        <Router>
          <Navbar className="bg">
          <Navbar.Brand href="#home">
      
        
        <Link class="navlink"  exact to="/pages/h">

  Home

</Link>
      
      <Link class="navlink"  exact to="/pages/s">
Join Pool{' '}
            </Link>
            {/*<Link class="navlink"  exact to="/t">
History{' '}
            </Link>*/}
            <Link class="navlink"  exact to="/pages/t1">
      History{' '}
            </Link>
    </Navbar.Brand>
    <Navbar.Collapse className="justify-content-end">
    <Button  onClick={connect} id="cc" variant="flat" style={{ backgroundColor: "#fa3455", color: "white"}}> Connect Wallet</Button>

<Link exact to="/pages/h">
<Button variant="flat" style={{ backgroundColor: "#fa3455", color: "white"}}> {this.state.accounts}</Button>
<label class="mr-3 mt-2" style={{color:"white"}}>

</label>
 
</Link>


      </Navbar.Collapse>
      </Navbar>
          <Switch>
    <Route exact path='/pages/h' component={home}/>
    <Route exact path='/pages/t' component={thirdpage}/> 
    <Route exact path='/pages/t1' component={fourthpage}/>
      <Route  exact path='/pages/s' component={secondpage}/>
    </Switch>
    
  </Router>
    
</div>
</div>
    );
  }
}


export default App;
