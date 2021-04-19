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
  isOpen: false
  };
  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

    
  async componentDidMount() {
  //  var x = document.getElementById('myDIV').style.visibility = "hidden";

    var amount1;
     const accounts = await  web3.eth.getAccounts();
    const balance = await web3.eth.getBalance(tokencontract.options.address);
    const totalsupply = await tokencontract.methods.totalSupply().call();
    const decimal = await TESTToken.methods.decimals().call();
    
    var pro1= await BEP20Token.methods.balanceOf("0x0Ef04FFA95f2eC2D07a5a196b4cEFB9d1076D43c").call();
    const At = await TESTToken.methods.balanceOf("0xDaEb3eD3D0b37fa074d4ffc04344e2Df27497d71").call();
    const name = await TESTToken.methods.name().call();
    const symbol = await TESTToken.methods.symbol().call();
    const balance_BUSD = await BEP20Token.methods.balanceOf(accounts[0]).call();
    const balance_TEST= await TESTToken.methods.balanceOf(accounts[0]).call();

    const ooc = await TEST.methods.isSLATEOpen().call();
    
var busd=balance_BUSD/1000000000;
pro1=pro1/1000000000000000000000;
var  pro=pro1.toFixed(2);   
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
     var a=5000000000-At;
     
     var p=pro/5000;
     
     p=p*100;
  
     
     
     var p1=p.toFixed(4);
    


  
    this.setState({totalsupply,balance,name,symbol,decimal,balance_TEST,balance_BUSD,At,p1,a,baltest,availtk,amount1,pro,busd});

    
  }
  render()
   {
     
     const approve = async (event) =>{
      event.preventDefault();
      const accounts = await  web3.eth.getAccounts();
      await BEP20Token.methods.approve("0xDaEb3eD3D0b37fa074d4ffc04344e2Df27497d71","10000000000000000000000000000000").
      send({
        from: accounts[0]       
      });
      await TESTToken.methods.approve("0xDaEb3eD3D0b37fa074d4ffc04344e2Df27497d71","10000000000000000000000000000").
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
      this.closeModal();
      const accounts = await  web3.eth.getAccounts();
      var amount=document.getElementById("amount1").value;
    
     if(amount<=5000000000000000000000){ 
      var v=0;
     // document.getElementById("exe").style.visibility = "hidden";

      v=v+amount;
     // alert(amount);
     
    amount=amount*1000000000;
     alert(amount);

//alert(s)
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
      <div class="text App" style={{backgroundColor:'white'}}>
         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
   integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous"/>

        <br/> <br/>
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
        <p>

<span class="tt">Name</span> <br/> {this.state.name}.
</p>
<p id="dem" class="pp">
</p>
<p><span class="tt">
Symbol</span> <br/> {this.state.symbol}.
</p>
<p>
<span class="tt">Total Supply</span> <br/> {this.state.totalsupply}. 
</p>

<p>
<span class="tt">     Decimals</span> <br/> {this.state.decimal}.
        </p>
      
        </Card>

            </div>
            <div class="col">
            < Card style={{backgroundColor:"#fa3455", width: '100%' , padding: "25px"}} class="card11" bodyStyle={{}} >

        <p>
        <span class="tt"> Balance_BUSD </span><br/> {this.state.busd}.
        </p>
        <p>
        <span class="tt">    Balance_TEST </span><br/> {this.state.baltest}.
        </p>
        <p>
        <span class="tt">   Available_Tokens</span> <br/> {this.state.availtk}.
        </p>
        <br/>
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
              {this.state.pro}/5
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
          <Button variant="primary" onClick={this.openModal}>
BuyTest          </Button>
        
        <Modal class="pop4" show={this.state.isOpen} onHide={this.closeModal} centered>
          <Modal.Header className="myModal" closeButton>
            <Modal.Title>Enter amount....</Modal.Title>
          </Modal.Header>
          <Modal.Body className="myModal">
          <InputGroup className="mb-3">
    <InputGroup.Prepend>
    </InputGroup.Prepend>
    <FormControl className="myInput" aria-label="Amount (to the nearest dollar)"id="amount1" />
    <InputGroup.Append>
      
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
