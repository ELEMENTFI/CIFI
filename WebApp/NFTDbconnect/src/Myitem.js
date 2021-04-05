import React, { useState,useEffect } from "react";
import history from "./utils/history";

//import {useState} from 'react';
import web3 from './web3';

import { Router, Route, Switch } from "react-router-dom";

import Nft from "./Nft";
import Sendpage from "./Sendpage";
import Newpage from "./Newpage";
import Tokencreate from "./Tokencreate";
import Printallimage from "./Printallimage";
import getaaa from "./abinft";
import Saleimagepage from "./Saleimagepage";
import Salepage from "./Salepage";

function Myitem() {


 
 

  return (    

    <div className="App">


     
      
<h1>My Item</h1>





              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/sendpage");
                }}
              >
                Go Transfer page
              </button>

              
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/newpage");
                }}
              >
                Get Single Image Page
              </button>

              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Printallimage");
                }}
              >
                Print all Image Page
              </button>
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Salepage");
                }}
              >
             Sale Page
              </button>
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Saleimagepage");
                }}
              >
              Images for Sale
              </button>





              <br></br>
<br></br>


      
<center>
<br></br>








      
<br></br>
<br></br>


</center>

<br></br>
<br></br>



                    
                    

            <Router history={history}>
          <Switch>
            <Route path="/" exact>
              <div class="display-4 mb-1">Choose a route to go to</div>
              
            </Route>
           
            <Route path="/sendpage">
              <Sendpage />
            </Route>
           
            <Route path="/newpage">
              <Newpage />
            </Route>
            <Route path="/printallimage">
              <Printallimage />
            </Route>
            <Route path="/Saleimagepage">
              <Saleimagepage />
            </Route>
            <Route path="/Salepage">
              <Salepage />
            </Route>
          </Switch>
        </Router>

        
        <div>
            
        </div>








    


<ul id="prag">


</ul>

<ul id="ram" >
  
</ul>

    
	  
      </div>      
  );
}

export default Myitem;