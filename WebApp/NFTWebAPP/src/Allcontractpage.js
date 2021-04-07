import React, { useState,useEffect } from "react";
import history from "./utils/history";

//import {useState} from 'react';
import web3 from './web3';

import { Router, Route, Switch } from "react-router-dom";


import Sendpage from "./Sendpage";
import Newpage from "./Newpage";
import Tokencreate from "./Tokencreate";
import Printallimage from "./Printallimage";
//import getaaa from "./abinft";
import Saleimagepage from "./Saleimagepage";
import Myitem from "./Myitem";
import Nft from "./Nft";
//import firebase from "./firebase";

import Followingpage from "./Followingpage";
import Activitypage from "./Activitypage";
import Howitworkpage from "./Howitworkpage";
import Communitypage from "./Communitypage";
import firebase from "firebase";
import fireDb from "./firebase";

function Allcontractpage() {


  var abcd;

    //fb 
  var studentlist = [];

  var stuset=[];


  const [currentid, setCurrentid] = useState("");

 
  var names=[];
 const [afternames,setAfternames] = useState([]);
 const [name,setnames] = useState([]);
 const [tid,setId] = useState(""); 

 var [getAddressDb,setGetAddressDb]=useState([]);
 
 console.log("initialgetaddress",getAddressDb)


 //useEffect(()=>{onGetdb()},[])


 const onget = async() =>{
 }

      const onSubmitNFT = async (event) => {


        var ref=firebase.database().ref("contractaddress/");

        ref.on('value',function(data){

            var register=data.val();

            var key=Object.keys(register)

            var length=key.length;

            //console.log("getdataprag",length)

            for(var p=0;p<length;p++){

                var k2=key[p];

                var ref2=firebase.database().ref("contractaddress/").child(k2);

                ref2.on('value',function(data2){

                  let addressset =[];

                    var register2=data2.val();

                    var key2=Object.keys(register2)

                    var length2=key2.length;

                    console.log("loglength",length2)

                    for(var k=0;k<length2;k++){

                      

                      var keyss=key2[k]

                      var leftside=register2[keyss];//getting

                      console.log("lenfirst",leftside)                  

                      addressset.push(leftside)
                      
                    }            
                    setGetAddressDb(addressset)
                    
                })
            }
        })
    
        
        //event.preventDefault();
    const accounts = await web3.eth.getAccounts();

    
   //setGetAddressDb(address)

   //alert("newgetadddb",getAddressDb.length)
	
	for(var i=0;i<getAddressDb.length;i++){

        //alert("stu "+getAddressDb[i])  
    


      
      var poda = getAddressDb[i]//'0x5e0c8fe9af42c6e486e6cdf00891b6b003b59e1a'//stuset[i]
    
    const abi = [
      {
        "constant": false,
        "inputs": [
          {
            "name": "account",
            "type": "address"
          }
        ],
        "name": "addMinter",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "to",
            "type": "address"
          },
          {
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "tokenIds",
            "type": "uint256[]"
          }
        ],
        "name": "batchBurn",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "to",
            "type": "address"
          },
          {
            "name": "amountToMint",
            "type": "uint256"
          },
          {
            "name": "metaId",
            "type": "string"
          },
          {
            "name": "setPrice",
            "type": "uint256"
          },
          {
            "name": "isForSale",
            "type": "bool"
          }
        ],
        "name": "batchMint",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "giver",
            "type": "address"
          },
          {
            "name": "recipients",
            "type": "address[]"
          },
          {
            "name": "values",
            "type": "uint256[]"
          }
        ],
        "name": "batchTransfer",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "burn",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_tokenId",
            "type": "uint256"
          }
        ],
        "name": "buyThing",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "destroyAndSend",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "to",
            "type": "address"
          },
          {
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "name": "tokenURI",
            "type": "string"
          }
        ],
        "name": "mintWithTokenURI",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "printitems",
        "outputs": [
          {
            "name": "",
            "type": "uint256[]"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "renounceMinter",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "from",
            "type": "address"
          },
          {
            "name": "to",
            "type": "address"
          },
          {
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "from",
            "type": "address"
          },
          {
            "name": "to",
            "type": "address"
          },
          {
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "name": "_data",
            "type": "bytes"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "to",
            "type": "address"
          },
          {
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "ids",
            "type": "uint256[]"
          },
          {
            "name": "setPrice",
            "type": "uint256"
          }
        ],
        "name": "setTokenPrice",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "ids",
            "type": "uint256[]"
          },
          {
            "name": "isEnabled",
            "type": "bool"
          }
        ],
        "name": "setTokenState",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "from",
            "type": "address"
          },
          {
            "name": "to",
            "type": "address"
          },
          {
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "uri",
            "type": "string"
          },
          {
            "name": "fee",
            "type": "address"
          },
          {
            "name": "creator",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "error",
            "type": "string"
          },
          {
            "indexed": false,
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "ErrorOut",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "metaId",
            "type": "string"
          },
          {
            "indexed": false,
            "name": "recipients",
            "type": "address[]"
          },
          {
            "indexed": false,
            "name": "ids",
            "type": "uint256[]"
          }
        ],
        "name": "BatchTransfered",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "id",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "metaId",
            "type": "string"
          }
        ],
        "name": "Minted",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "metaId",
            "type": "string"
          },
          {
            "indexed": false,
            "name": "ids",
            "type": "uint256[]"
          }
        ],
        "name": "BatchBurned",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "ids",
            "type": "uint256[]"
          },
          {
            "indexed": false,
            "name": "metaId",
            "type": "string"
          }
        ],
        "name": "BatchForSale",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "name": "metaId",
            "type": "string"
          },
          {
            "indexed": false,
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Bought",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [],
        "name": "Destroy",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "account",
            "type": "address"
          }
        ],
        "name": "MinterAdded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "account",
            "type": "address"
          }
        ],
        "name": "MinterRemoved",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "to",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "approved",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "operator",
            "type": "address"
          },
          {
            "indexed": false,
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "ApprovalForAll",
        "type": "event"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "_tokenURIs",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "address"
          },
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "auri",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "baseUri",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getAllURI",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "getApproved",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "id",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "owner",
            "type": "address"
          },
          {
            "name": "operator",
            "type": "address"
          }
        ],
        "name": "isApprovedForAll",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "account",
            "type": "address"
          }
        ],
        "name": "isMinter",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "isOwner",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "ispushed",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "items",
        "outputs": [
          {
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "name": "price",
            "type": "uint256"
          },
          {
            "name": "metaId",
            "type": "string"
          },
          {
            "name": "state",
            "type": "uint8"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "maker",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "Owner",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "ownerOf",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "printitem",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "interfaceId",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
        "outputs": [
          {
            "name": "",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "tokenByIndex",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "owner",
            "type": "address"
          },
          {
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "tokenOfOwnerByIndex",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "tokensOfOwner",
        "outputs": [
          {
            "name": "",
            "type": "uint256[]"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "_tokenId",
            "type": "uint256"
          }
        ],
        "name": "tokenURI",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ];


    //alert("after abi"+poda);
	
    var getaaaa=new web3.eth.Contract(abi,poda);


    var textprint=document.createElement("textbox")

    abcd=await getaaaa.methods.name().call();

    //alert("getname"+abcd)

    var bcd=await getaaaa.methods.symbol().call();

    //alert("getname"+bcd)

    var cde=await getaaaa.methods.totalSupply().call();

    
    textprint.id=abcd

    //document.getElementById("prabha").append(textprint)



      const printgeta=await getaaaa.methods.tokensOfOwner(accounts[0]).call();

      //alert("printgeta"+printgeta.length)


      //var get=printgeta.split(",")[0];

      for(var k=0;k<printgeta.length;k++){

        names.push(printgeta[k]);

      }
      setnames(names);    
      //console.log("split owner address  "+printgeta.length)

      console.log("owner address"+printgeta)


      
      var after =[];      
      for(var li=0;li<printgeta.length;li++){

        //event.preventDefault();

        after.push(await getaaaa.methods.tokenURI(names[li]).call());

        console.log(names[li])

      }
      setAfternames(after)
  
  console.log(after.length)

  for(var lk=0 ;lk<after.length;lk++)
  {
      var a=document.createElement("img")

      var t= document.createElement("textbox")

      var  b=document.createElement("button")

      var  c=document.createElement("li")

      var  d=document.createElement("li")

      var  ebr=document.createElement("br")

      


     // if(pa == 1){
        t="Added for sale";
      //}
     // else{
        b.innerHTML="Buynow";
      //}


        a.src=after[lk]
        a.id=after[lk]
        a.tid = names[lk]
        a.width=400
        a.height=400
        
        b.src=after[lk]
        b.id=after[lk]
        b.tid = names[lk]
        c.style.listStyleType="none"
        c.append(a)
        c.append(ebr)
        const pricea = await getaaaa.methods.items(names[lk]).call(); 
      var pa = pricea.state;
        if(pa == 1){
          c.append(t)
        }
        else{
          c.append(b)
        }
      
        
               

        
        

        document.getElementById("prag").append(c)

        document.getElementById("prag").append(ebr)


        document.getElementById("prag").append(d)

        document.getElementById("ram").append(c)


        a.onclick = (event) =>{

          console.log(event.target.id)
        // pp.push(afternames.pop(event.target.tid))
           
          
        }


        b.onclick = async(event) =>{

            var isd = event.target.tid;
            console.log(event.target.tid)
            const accounts = await  web3.eth.getAccounts();
        await getaaaa.methods.setTokenState([isd],"true").send({from:accounts[0]});
           // salepage.settokenstate();
            console.log("checking")
            var price = window.prompt("enter the price for your token");
            await getaaaa.methods.setTokenPrice([isd],price).send({from:accounts[0]})
          const priceamount = await getaaaa.methods.items(isd).call();
            console.log(priceamount.price)
           
            
          }
  
  
        
        

        
    //console.log(afternames[i])

      
        }
}
}
useEffect(()=>{onSubmitNFT()},[])
  

  return (    

    <div className="App">

<button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Allcontractpage");
                }}>
                Explore
              </button>


<button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Salepagecopy");
                }}>
                My items
              </button>
              
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Followingpage");
                }}
              >
                Following
              </button>

              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Activitypage");
                }}>
                Activity
              </button>
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Howitworkpage");
                }}
              >
                How it work
              </button>

              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Communitypage");
                }}
              >
                Community
              </button>
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                     history.push("/Nft");
                }}
              >
              Create
              </button>





              <br></br>
<br></br>

<button
                class="btn btn-info btn-block"
                type="button"
                onClick={onget}
              >
              Get db 
              </button>

              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={onSubmitNFT}
              >
              Get all img url
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
            
            <Route path="/Myitem">
              <Myitem />
            </Route>
            <Route path="/Followingpage">
              <Followingpage />
            </Route>
            <Route path="/Activitypage">
              <Activitypage />
            </Route>
            <Route path="/Howitworkpage">
              <Howitworkpage />
            </Route>
            <Route path="/Communitypage">
              <Communitypage />
            </Route>
            <Route path="/Nft">
              <Nft />
            </Route>
            
          </Switch>
        </Router>




        
        <div>
            
        </div>



<ul id="prabha">

</ul>


<ul id="prag">


</ul>

<ul id="ram" >
  
</ul>

    
	  
      </div>      
  );
}

export default Allcontractpage;