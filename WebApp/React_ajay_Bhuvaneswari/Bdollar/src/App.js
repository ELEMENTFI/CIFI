import logo from './s.svg';
import './App.css';
import web3 from './web3';
import React from "react";
import {BrowserRouter as Router , Route , Link , Switch , NavLink} from "react-router-dom";
import history from "./utils/history";
import { Button } from 'react-bootstrap';
import { Navbar ,Nav,Form} from 'react-bootstrap';


import Firstpage from "./Firstpage";
import Secondpage from "./Secondpage";
import Thirdpage from "./Thirdpage";
import Fourthpage from "./Fourthpage";
import Fifthpage from "./Fifthpage";

import Home from "./Moa";

function App() {

  
  const accounts =  web3.eth.getAccounts();


  return (
    <div>
             <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
   integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous"/>

        <div>
          <Router>
        <Navbar className="bgnav">
          <Navbar.Brand href="">
      
        <img src={logo} width="100px" height="30px"/>
        <Link exact to="/Moa" class="navlink"> Home</Link>
        <Link exact to="/Secondpage" class="navlink"> BoardRoom</Link>
        <Link exact to="/Thirdpage" class="navlink">Share</Link>
        <Link exact to="/FourthPage" class="navlink"> Deposit</Link>

      
    </Navbar.Brand>
    <Navbar.Collapse className="justify-content-end">


      <button class="btn btn1"> Metamask Connected</button>
         


      </Navbar.Collapse>
      </Navbar>
        
    
  
          <Switch>
    <Route exact path='/Moa' component={Home}/>
      <Route  exact path='/Firstpage' component={Firstpage}/>
      <Route  exact path='/Secondpage' component={Secondpage}/>
      <Route  exact path='/Thirdpage' component={Thirdpage}/>
      <Route  exact path='/Fourthpage' component={Fourthpage}/>
      <Route  exact path='/Fifthpage' component={Fifthpage}/>

    </Switch>
    
  </Router>
    
</div>

    
    </div>
  );
}

export default App;
