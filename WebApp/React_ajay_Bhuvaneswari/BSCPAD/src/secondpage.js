import React, { Component } from 'react';
import './App.css';
import web3 from './web3';
//import ReactDOM from "react-dom";
import BEP20Token from "./BEP20Token";
import {Card} from "react-bootstrap"
import tokencontract from './tokencontract';
import TESTToken from './TESTToken';
import TEST from './TEST';
//import $, { error, event, get } from 'jquery';
//import Web3 from 'web3';
//import Background from '../src/images/aa.gif'
//import Popup from 'reactjs-popup';

import { Modal, Button,InputGroup,FormControl } from "react-bootstrap";






class secondpage extends Component{
  state = {
    balance: '',
    totalSupply:'',
    circulatingsupply:'',
    name:'',
    symbol:'',
    decimal:'',
    balance_BUSD:'',
  balance_TEST:'',
  setapprove:'',
  ooc:'',
  At:'',
  value:'',
  amount1:'',
  pro:'',
  isOpen: false,
  bigInt:''
  };
  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

    
  async componentDidMount() {
    //const ooc = await TEST.methods.isSLATEOpen().call();


//time function
var countDownDate = new Date("jun 04, 2021 20:15:00").getTime();
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if(distance<0){
    clearInterval(x);
    document.getElementById("dem").innerHTML = "Yet to start" ;
    
    document.getElementById("demo").style.visibility="hidden";
    document.getElementById("demo1").style.visibility="hidden";
    document.getElementById("ap").disabled = false;
     document.getElementById("ap1").disabled=false;

    
  }
 
 
 
 else {
    
   //  document.getElementById("dem").innerHTML = "closed";
     document.getElementById("ap").disabled = true;
     document.getElementById("ap1").disabled=true;
     
     document.getElementById("demo").style.visibility="visible";


  }

  
}, 1000);




  //  var x = document.getElementById('myDIV').style.visibility = "hidden";
  var bigInt = require("big-integer");
    var amount1;
     const accounts = await  web3.eth.getAccounts();
    const balance = await web3.eth.getBalance(tokencontract.options.address);
    const totalsupply = await tokencontract.methods.totalSupply().call();
    const decimal = await TESTToken.methods.decimals().call();
    const name = await TESTToken.methods.name().call();

    var pro1= await BEP20Token.methods.balanceOf("0xA05726e61D59594444E54E390E1Dd7aF2f4d4Eb6").call();
    const At = await TESTToken.methods.balanceOf("0x664F6Bf102eF9510F4114dd5321117599eFb2336").call();
    const symbol = await TESTToken.methods.symbol().call();
    const balance_BUSD = await BEP20Token.methods.balanceOf(accounts[0]).call();
    const balance_TEST= await TESTToken.methods.balanceOf(accounts[0]).call();





    
var busd=balance_BUSD/1000000000000000000;
pro1=pro1/1000000000000000000;
var  pro=pro1.toFixed(2);   
var baltest=balance_TEST/1000000000;
var availtk=At/1000000000;
     

     var a = 5-availtk;
     
     var a1=a/1000000000;
     var p=a/5;
     
     p=p*100;
    var p1=p.toFixed(6);

    if(a === 5){
      document.getElementById("dem").innerHTML="Closed";
      document.getElementById("demo").style.visibility="hidden";
      document.getElementById("demo1").style.visibility="hidden";

      document.getElementById("ap").disabled=true;
      document.getElementById("ap1").disabled=true;
      


    }
  
  
    this.setState({totalsupply,balance,name,bigInt,symbol,decimal,balance_TEST,balance_BUSD,At,p1,a,a1,baltest,availtk,amount1,pro,busd});

    
  }
  render()
   {
     
     const approve = async (event) =>{
      event.preventDefault();
      const accounts = await  web3.eth.getAccounts();
      await BEP20Token.methods.approve("0x664F6Bf102eF9510F4114dd5321117599eFb2336","10000000000000000000000000000000").
      send({
        from: accounts[0]       
      });
      await TESTToken.methods.approve("0x664F6Bf102eF9510F4114dd5321117599eFb2336","10000000000000000000000000000").
      send({
        from: accounts[0]
       
      });
    } 
const popup1 = async()=>{
  var x = document.getElementById('myDIV');
  if (x.style.visibility === 'hidden') {
    x.style.visibility = 'visible';
  } else {
    x.style.visibility = 'hidden';
  }

}
    
    const buyTest =async (event) => {
      
      event.preventDefault();
      
      const accounts = await  web3.eth.getAccounts();
      var amount=document.getElementById("amount1").value;
      amount=amount*1000000;
      amount=amount+"000000000000";
      
     if(amount<=2000000000000000000 && amount>=1){ 
      this.closeModal();
      var v=0;
     // document.getElementById("exe").style.visibility = "hidden";

      v=v+amount;
     // alert(amount);
     
    // alert("Entered amount is "+amount/1000000000000000000);

//alert(s)
      await TEST.methods.click(amount).send(
      {
      from:accounts[0]
      }
     );
     window.location.reload();
    }
    else if (amount>2000000000000000000){
      document.getElementById("form").innerHTML="amount reaches maximum limit";

    }
    else{
    document.getElementById("form").innerHTML="amount doesn't reaches minimum limit";
   

    }
   
    this.setState({v});
    }

    
    web3.givenProvider.enable().then(console.log);
    return (
      <div class="text App"  style={{backgroundColor:'white'}}>
         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
   integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous"/>
 <br/>
 <p id="demo1" class="time">Starts in</p>
 <h3 id="demo" class="time" style={{textAlign:"center"}}>
</h3>
        <h1 class="head1"><b>
          Join Pool
          </b>

        </h1>
        <br/>
        <br/>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col">
              
 <Card  style={{ width: '100%' , padding: "25px" ,backgroundColor:"#f2f2f2", color:'black'}} >
        <p >

<span class="tt">Name</span> <br/> 
</p><p id="main">{this.state.name}</p>
<p id="dem" class="tiny">

</p>

<p><span class="tt">
Symbol</span> <br/> </p>
<p id="main1">{this.state.symbol}</p>
<p>
<span class="tt">Total Supply</span> <br/> </p><p id="main2"> {this.state.totalsupply}
</p>

<p>
<span class="tt">     Decimals</span> <br/>  </p><p id="main3">{this.state.decimal}
        </p>
      
        </Card>

            </div>
            <div class="col">
           
            < Card style={{backgroundColor:"#fa3455", width: '100%' , padding: "25px"}} class="card11" bodyStyle={{}} >

        <p>
        <span class="tt"> Balance_BUSD </span><br/> </p><p id="main4"> {this.state.busd}
        </p>
        <p>
        <span class="tt">    Balance_TEST </span><br/>  </p><p id="main5">{this.state.baltest}
        </p>
        <p>
        <span class="tt">   Available_Tokens</span> <br/>  </p><p id="main6">{this.state.availtk}
        </p>
        <br/>
        <p class="p">Progress</p>
        <progress id="main7" value={this.state.a} max="5" class="progress11"></progress>
        <div>
          <div class="container" id="main8">
            <div class="row">
            <div class="col">
            <p class="perci">
          {this.state.p1}%
        </p>
            </div>
              <div class="col align-self-end maxi">
              <p>
              {this.state.availtk}/5
                 </p>     </div>
            
            </div>
          </div>
        </div>
        <br/>
       

        </Card>

            </div>
          </div>
        </div>
        <br/>   <br/> 
    
          <div class="ma">
            <table>
              <div class="row">
                <div class="col-6 mt-3">
                <button class="btn btn-primary" onClick={approve} id="ap">Approve name</button>

                </div>
               

  
  <div class="col-2 mt-3" >
          <Button variant="primary" id="ap1" onClick={this.openModal}>
BuyTest          </Button>
        
        <Modal class="pop4" show={this.state.isOpen} onHide={this.closeModal} centered>
          <Modal.Header className="myModal" closeButton>
            <Modal.Title><b>Enter amount...</b>.</Modal.Title>
          </Modal.Header>
          <Modal.Body className="myModal">
          <InputGroup className="mb-3">
    <InputGroup.Prepend>
    </InputGroup.Prepend>
    <div clas="row">
      <div class="col-sm">
      
      <FormControl className="myInput" aria-label="Amount (to the nearest dollar)"id="amount1"  />

      </div>
      <div class="col-sm">
        <p style={{color:"red"}} id="form"></p>
      </div>
    </div>
    <InputGroup.Append>
    <div class="row App">
      <div class="col">
        minimum amount is  1 <br/>
        maximum amount is 2
      </div>
    </div>
    </InputGroup.Append>
  </InputGroup>
          </Modal.Body>
          <Modal.Footer className="myModal">
           
           
             <Button variant="primary" onClick={buyTest}>
              Buy
            </Button>
           
            
          </Modal.Footer>
        </Modal>
  </div>

              </div>
            </table>
        </div>

      
<br/><br/>
     
       
      

  </div>
    );
  }
}


export default secondpage;
