import React, { Component } from 'react';
import './App.css';
import web3 from './web3';
import ReactDOM from "react-dom";
import BEP20Token from "./BEP20Token";
import {Card} from "react-bootstrap"
import tokencontract from './tokencontract';
import TESTToken from './TESTToken';
import TEST from './TEST';
import $, { error, event, get } from 'jquery';
import Web3 from 'web3';
import Background from '../src/images/aa.gif'
import Popup from 'reactjs-popup';
import {Modal,Button} from 'react-bootstrap';






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
  pro:''

  };

    
  async componentDidMount() {
    
    var amount1;
     const accounts = await  web3.eth.getAccounts();
    const balance = await web3.eth.getBalance(tokencontract.options.address);
    const totalsupply = await tokencontract.methods.totalSupply().call();
    const decimal = await TESTToken.methods.decimals().call();
    
    var pro1= await BEP20Token.methods.balanceOf("0x759545eCa708D8e9D6f0D57acc80A9F7DFAD33ca").call();
    const At = await TESTToken.methods.balanceOf("0x03Efaf51AB0F512C0D967f2B951a1A7B18056c9B").call();
    const name = await TESTToken.methods.name().call();
    const symbol = await TESTToken.methods.symbol().call();
    const balance_BUSD = await BEP20Token.methods.balanceOf(accounts[0]).call();
    const balance_TEST= await TESTToken.methods.balanceOf(accounts[0]).call();

    const ooc = await TEST.methods.isTESTOpen().call();
    
var busd=balance_BUSD/1000000000000000000;
pro1=pro1/1000000000000000000;
var  pro=pro1.toFixed(1);   
var baltest=balance_TEST/1000000000;
var availtk=At/1000000000;
     if (ooc==true){
      document.getElementById("dem").innerHTML = "Opened" ;

      
     }
     else{
      document.getElementById("dem").innerHTML = "Closed" ;
      document.getElementById("ap").disabled=true;
      document.getElementById("ap1").disabled=true;


     }
     var a=5000000000000000000-At;
     
     var p=pro/5000;
     
     p=p*100;
  
     
     
     var p1=p.toFixed(4);
    


  
    this.setState({totalsupply,balance,name,symbol,decimal,balance_TEST,balance_BUSD,At,p1,a,busd,baltest,availtk,amount1,pro});

    
  }
  render()
   {
     
     const approve = async (event) =>{
      event.preventDefault();
      const accounts = await  web3.eth.getAccounts();
      await BEP20Token.methods.approve("0x03Efaf51AB0F512C0D967f2B951a1A7B18056c9B","10000000000000000000000000000000").
      send({
        from: accounts[0]       
      });
      await TESTToken.methods.approve("0x03Efaf51AB0F512C0D967f2B951a1A7B18056c9B","10000000000000000000000000000").
      send({
        from: accounts[0]
       
      });
    } 

    
    const buyTest =async (event) => {
      
      event.preventDefault();
      const accounts = await  web3.eth.getAccounts();
      var amount=document.getElementById("amount1").value;
    
     if(amount<=5000000000000000000000){ 
      var v=0;
      document.getElementById("exe").style.visibility = "hidden";

      v=v+amount;
     // alert(amount);
     
      //amount=amount*1000000000000000000;
      

      await TEST.methods.click(amount).send(
      {
      from:accounts[0]
      }
     );
    }
    else{
      document.getElementById("exe").innerHTML = "Amount reaches the maximum limit 5000" ;

     
      

    }
     this.setState({v});
    }

    
    web3.givenProvider.enable().then(console.log);
    return (
      <div class="text" style={{backgroundImage:"url("+ Background +")",backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'}}>
         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
   integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous"/>

        <br/> <br/>
        <h1 class="head"><b>
          Join Pool
          </b>

        </h1>
        <br/>
        <table>
          <div class="row justify-content-center">
            <div class="col-6">
 <Card bg="dark" border="warning" style={{ width: '23rem' , padding: "25px" , borderRadius: "8%" }} >
        <p>

Name <br/> {this.state.name}.
</p>
<p id="dem" class="pp">
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
            <div class="col-2">
            <Card bg="dark" border="warning" style={{ width: '30rem' , padding: "25px",borderRadius: "9%" }} bodyStyle={{}} >

        <p>
          Balance_BUSD <br/> {this.state.busd}.
        </p>
        <p>
          Balance_TEST <br/> {this.state.baltest}.
        </p>
        <p>
          Available_Tokens <br/> {this.state.availtk}.
        </p>
        <p class="p">Progress (Available Tokens)</p>
        <progress id="file" value={this.state.pro} max="5000" class="progress11"></progress>
        <div>
          <div class="container">
            <div class="row">
            <div class="col">
            <p class="perci">
          {this.state.p1}%
        </p>
            </div>
              <div class="col align-self-end maxi">
              <p>
              {this.state.pro}/5000
                 </p>     </div>
            
            </div>
          </div>
        </div>
        <br/>
       

        </Card>

            </div>
          </div>
        </table>
        <br/>   <br/> 
    
          <div class="ma">
            <table>
              <div class="row">
                <div class="col-6 mt-5">
                <button class="btn btn-outline-warning" onClick={approve} id="ap">aprove name</button>

                </div>
               
<div class="col mt-5">
  <div class="container">
  <Popup class="popup" trigger={<button class="btn btn-outline-warning"> Buytest</button>} position="right center">
    <div class="pop mt-5">Enter amount !!</div>
 <input type="number" id="amount1" class="poptext mt-2" /> <br/>
 <p id="exe" class="pp"></p>
 <button class="btn btn-warning ml-3 " id="buy" onClick={buyTest}>buy</button>  
    </Popup>
  </div>

</div>







              </div>
            </table>
        </div>

      
        <br/>
        <br/>
        <br/>
        <br/>

  </div>
    );
  }
}


export default secondpage;
