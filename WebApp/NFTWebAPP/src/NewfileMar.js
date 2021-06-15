import logo from './logo.svg';
import './App.css';
//import vabi from "./vault.js";
import React, { useState,useEffect } from "react";
import web3 from './web3';
//import token from './token.js';
//import vault from './vault.js';
import axios from 'axios';

function NewfileMar() {
  const [tid,setId] = useState("");
  const [tid1,setId1] = useState("");
  const [toaddress,setId2] = useState([]);
  const [fromaddress,setId3] = useState([]);
  const [value,setId4] = useState([]);
  const [len,setId5] = useState([]);
const [req2,setId6] = useState([]);
const[datas,setId7] = useState("");
const [bookss, setBookss] = useState(null);



  const bal = async() => {
    //let account = await web3.eth.getAccounts();

//Returns the Balance of account
// const a = await token.methods.balanceOf(account[0]).call();
//   setId(a/1000000000);

//Returns the seconds left for Locking account;
    // const b = await vault.methods.secondsLeft(account[0]).call();
    //   setId1(b);

//timing concept
/*
       var d= new Date(0);
       d.setUTCSeconds(tid1);
       alert(d);//d has the date and time
       
       */ 


//const response = await fetch("https://api-testnet.bscscan.com/api?module=account&action=tokentx&address=0xdfa17787b21a674df054faa9a62d1f4a1b411902&startblock=0&endblock=99999999&sort=asc&apikey=YourApiKeyToken");

const response = await fetch("https://api-testnet.bscscan.com/api?module=account&action=tokentx&contractaddress=0x85986F018314E42A2a0881f54868AB00f7b6f386&address="+"0xdfa17787b21a674df054faa9a62d1f4a1b411902"+"&page=1&offset=100&sort=asc&apikey=YourApiKeyToken");
const data = await response.json();
setId7(data.result);
//console.log("data",data);

//console.log("req2",req2);


var coun  = 0;
console.log("length",data);
let myadd = "0xdfa17787b21a674df054faa9a62d1f4a1b411902";

for(var i = 0;i < data.length;i++){ 
let ad = datas[i].from;
console.log("myadd",myadd);
console.log("fromad",ad);
 if(myadd === ad){
  coun = coun + 1 ;
  console.log("equal",coun);
 }
 
}
 setId5(coun);

}
useEffect(()=>{bal()},[])
console.log("datas",datas);

  return (
    
    <div style={{backgroundColor:"white"}}> 

     <body  >
        

      <div style={{backgroundColor:"white"}}>
        <br />
        <br />
       <h1>BURN VAULT</h1>
       <br /><br />
   
   {datas.length === 0 ? null : (
       <div>
           <div>
           <table>
               <tbody>
                   <tr>
                       <td>ToAddress</td>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       <td>FromAddress</td>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       <td>Value</td>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   </tr>
                   </tbody>
               </table>
               </div>
{datas.map((a)=>{
     
          
        //console.log(`a`, a)
        return (
          <div>
              <table>
      <tbody>
          
        <tr>
            
          <td>
            <h5>{a.to}</h5>
            
          </td>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <td>
            <h5>{a.from}</h5>
            
          </td>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <td>
            <h4>{a.value}</h4>
            
          </td>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </tr>
      </tbody>
    </table>
            </div>
            
           )   
            
        
      })}

      </div>

)}


      
     <br/>
      </div>
      </body>
      </div>
      
  );
}

export default NewfileMar;
