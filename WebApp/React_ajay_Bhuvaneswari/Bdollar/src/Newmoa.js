import React from "react";
import history from "./utils/history";

import {useState} from 'react';
import web3 from './web3';
import lottery from './storeabicon';//this line import lottery folder

import { Router, Route, Switch } from "react-router-dom";

import Secondpage from "./Secondpage";
import Thirdpage from "./Thirdpage";
import Fourthpage from "./Fourthpage";

function Newmoa() {

    
  return (
    <div className="App">
      
<center>
<br></br>
<h1>New Moa Page</h1>


</center>	  
      </div>      
  );
}

export default Newmoa;
