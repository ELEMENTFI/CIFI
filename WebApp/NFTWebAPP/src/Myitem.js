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
import firebase from "./firebase";

function Myitem() {

  const [contactObjects, setContactObjects] = useState([]);
  const [currentid, setCurrentid] = useState("");
  var studentlist = [];

  var stuset=[];

  //const accounts = await web3.eth.getAccounts();

  

  const publicAddress = web3.eth.coinbase;//.toLowerCase();


  var getaddress=localStorage.getItem('myaddress')

  const addOrEdit = (obj) => {

    var getaddress=localStorage.getItem('myaddress')

    alert("getadd"+getaddress)
  

    alert("cid"+currentid)


    alert(firebase.child("demonft"))

    if (currentid == "")
    firebase.child("demonft").child(getaddress).push(1, (err) => {
      //   console.log(obj, "obj");
      if (err)
          console.log(err);
      else 
    setCurrentid("");
    });
  else
    firebase.child('demonft').child(getaddress).set(currentid, (err) => {
      if (err) 
  console.log(err);
      else 
  setCurrentid("");
    });

  }


  //useEffect(() => {
    //firebase.child("demonft").child(getaddress).on("value", (snapshot) => {
      //if (snapshot.val() != null)
        //setContactObjects({
          //...snapshot.val(),
        //});
      //else setContactObjects({});
    //});
  //}, []);


  

 const getdatafb = ()=>{

  var getaddress=localStorage.getItem('myaddress')

  alert("getdata from firebase"+getaddress)
    
    firebase.child("demonft").on("value",snapshot => {
      
      snapshot.forEach(snap => {        
          studentlist.push(snap.val())                
          
      })
    })

    stuset = studentlist.filter(function(item, pos, self) {
      return self.indexOf(item) == pos;
  })
   var items = stuset.map((item) =>
    item+','
  );
    
  alert("stud"+stuset)
  alert("stud items"+items)
    
    alert("length"+stuset.length)
    for(var i=0;i<stuset.length;i++){

      if(getaddress == stuset[i]) {

        alert("print equal one "+stuset[i])
      }
      
    }

 }



  

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

<br>
</br>


<br></br>
<br></br>


<form onSubmit={addOrEdit}>

  <label>enter your name</label>

<input
  id="idids"
  type='text'
  name="tids"
  required
  onChange={event => setCurrentid( event.target.value)}
  
/>


<br></br>
<br></br>


  <button type="submit" value="Submit" >submit</button>

</form>



              <br></br>
<br></br>


<button
                class="btn btn-info btn-block"
                type="button"
                onClick={getdatafb}
              >
              Get Firebase Data
              </button>


      
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