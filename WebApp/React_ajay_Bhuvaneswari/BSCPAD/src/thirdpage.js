//import React from 'react';
import React, { Component } from 'react';
//import secondpage from './secondpage';
import './App.css';
import fireDB from './firebase.js';
import card from './card1';
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
    var accounts = await  web3.eth.getAccounts();
    const At = await TESTToken.methods.balanceOf("0x664F6Bf102eF9510F4114dd5321117599eFb2336").call();

  var name1;
    const name = await TESTToken.methods.name().call();
    const symbol = await TESTToken.methods.symbol().call();
    var ss="3"
   fireDB.database().ref(ss).child("Balance").set({"Balance":balance});
fireDB.database().ref(ss).child("Name").set({"Name":name});
fireDB.database().ref(ss).child("ggg").set({"Total Supply":totalsupply});
fireDB.database().ref(ss).child("Decimal").set({"Decimal":decimal});
fireDB.database().ref(ss).child("Symbol").set({"Symbol":symbol});
fireDB.database().ref(ss).child("Symbol").set({"Symbol":symbol});
fireDB.database().ref(ss).child("At").set({"At":At});

if(At==0){
  var availtk=At/1000000000;
     

  var a=5-availtk;
  
  var a1=a/1000000000;
  var p=a/5;
  
}

var i;
for(i=1;i<=5;i++){

  alert(i)
  var v=String(i);
  var firebase= fireDB.database().ref(v);
  firebase.child("Balance").once("value",  function(snapshot){
    snapshot.forEach(function(element){
    var  balance1=element.val();
    balance1=Object.values(balance1);
      //document.getElementById("balance").innerHTML=balance1;
      //alert(balance1);
  
  })
  });
  firebase.child("At").once("value",function(snapshot){
    var n=snapshot.val();
    if(n){n=Object.values(n);}
    if(n==0){
      //document.getElementById("demo").innerHTML=""
     var h=
      "<h1>hiiiiii</h1> \
      <h2> hhhhhhh</h2>\
     "
//document.write(i)
     //document.getElementById("name").innerHTML=h;
   //  alert("hiii")
    }
    else{
      //document.write("<table width=50 border=1><tr>" +i+ "</tr></table>");
    }
    
  });

   firebase.child("Name").once("value",function(snapshot){
    var n=snapshot.val();
    if(n){n=Object.values(n);}
    
   // document.getElementById("name").innerHTML=n;
  });
  firebase.child("ggg").once("value",function(snapshot){
    var n=snapshot.val();
    if(n){n=Object.values(n);}    //document.getElementById("ts").innerHTML=n;
  });
  firebase.child("Symbol").once("value",function(snapshot){
    var n=snapshot.val();
    if(n){n=Object.values(n);}    //document.getElementById("symbol").innerHTML=n;
  });
  


}




    //const price=await testtoken.methods.getDollarPrice().call();

    this.setState({totalsupply,balance,name,symbol,decimal,accounts,name1, });

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
       <div class="container"><br/>
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
           Symbol:
         </h4>
         <p id ="symbol">

         </p>
         <h4>
           Total Supply:
         </h4>
         <p id ="ts">

         </p>
         <h4>
           Balance
         </h4>
         <p id ="balance">

         </p>
       </div>

   </Card>
   </div>
   </div>

</div>

<card />
</div>
    );
  }
}




export default home;