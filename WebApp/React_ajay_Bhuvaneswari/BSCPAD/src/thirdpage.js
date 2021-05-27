//import React from 'react';
import React, { Component } from 'react';
//import secondpage from './secondpage';
import './App.css';
import fireDB from './firebase.js';

import web3 from './web3';
import tokencontract from './tokencontract';
import TESTToken from './TESTToken';
import { Card } from 'react-bootstrap';
import Background from '../src/images/aa.gif'
//import TEST from './TEST';
//import {BrowserRouter as Router , Route , Link , Switch , NavLink} from "react-router-dom";
import Background2 from '../src/images/logo1.png'
import { data } from 'jquery';

class home extends Component {
  state = {
    balance: '',
    totalSupply:'',
    circulatingsupply:'',
    name:'',
    symbol:'',
    decimal:'' ,
    name1:''


  };
  
    
  async componentDidMount() {
 

    

   
    const balance = await web3.eth.getBalance(tokencontract.options.address);
    const totalsupply = await tokencontract.methods.totalSupply().call();
    const decimal = await TESTToken.methods.decimals().call();
    const accounts = await  web3.eth.getAccounts();

  var name1;
    const name = await TESTToken.methods.name().call();
    const symbol = await TESTToken.methods.symbol().call();
   //fireDB.database().ref("acc1").child("balance").push(balance);
//fireDB.database().ref("acc1").child("name").push(name);

//var d=fireDB.database().ref().child("acc1").fetch(name);
var firebase= fireDB.database().ref("acc1/name");
firebase.once("value",  function(snapshot){
  snapshot.forEach(function(element){
    name1=element.val();
    document.getElementById("name").innerHTML=name1;
return(name1);
})
});
var firebase= fireDB.database().ref("acc1/balance");
firebase.once("value",  function(snapshot){
  snapshot.forEach(function(element){
  var  balance1=element.val();
    document.getElementById("balance").innerHTML=balance1;
return(name1);
})
});



    //const price=await testtoken.methods.getDollarPrice().call();
  
    this.setState({totalsupply,balance,name,symbol,decimal,accounts,name1 });

    var database = fireDB.database();
var a= 1;
     
//fireDB.database().ref().child(accounts).push(name);

  }
    
  
  
  
  render()
   {
    console.log(web3.version);
    web3.givenProvider.enable().then(console.log);
    function save(){
      var db1=document.getElementById("save1").value;

      var db=document.getElementById("save").value;
      
      var database = fireDB.database();

     // fireDB.database().ref().child(db).push(db);
      //fireDB.database().ref().child(db).push(db1);
      db="";
      db1="";
     

//fireDB.database().ref().child("acc1").push(this.balance);
//fireDB.database().ref().child("acc1").push(this.name);


    }
    function ret(){
    var database=fireDB.database();
    var ref= database.ref("acc1");
    ref.on('value',gotdata,errdata); 



      var ref = fireDB.database().ref();

ref.on("value", function(snapshot) {
  var d =(snapshot.child("acc1").val());
  
}, function (error) {
   console.log("Error: " + error.code);
});
    }


    function gotdata(data){
//console.log(data);
var name = data.val();
//console.log(name);
var acc1_object = {
  prop_1: 'val_11',
  prop_2: 'val_12', 
  
};

//alert( JSON.stringify(name));

    }
    function errdata(err){
      console.log("error");
      console.log(err);
    }

    function get(){
      var firebase= fireDB.database().ref("acc1/name");
      firebase.once("value",  function(snapshot){
        snapshot.forEach(function(element){
          var key=element.key;
          var name=element.val();
      alert(name);
         //var bal=Object.values(a[i]);
         // var name=Object.values(a);
          //alert(name);
      
        
        })
      })
    }
    return (
     <div class=" text App" style={{backgroundColor:"white"}}>
       <div class="container">
       <h3 style={{color:"black"}}>Current sale</h3>

       <div class="row justify-content-center">
         <div class="col-4  align-self-center">
         <Card class="mt-2  shadow" style={{ width: '25rem' , padding: "30px",backgroundColor:"gray",color:"black"}}  >

       <div class="">
         <h4>
           Name:
         </h4>
         <p id ="name">

         </p>
         <h4>
           Balance
         </h4>
         <p id ="balance">

         </p>
         <h4>
           Account
         </h4>
         <p>
         {this.state.accounts}
         </p>
       </div>

   </Card>
   </div>
   </div>
      
</div>
</div>
    );
  }
}




export default home;