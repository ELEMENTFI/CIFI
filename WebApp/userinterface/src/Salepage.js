import React, { useState } from "react";
import history from "./utils/history";

//import {useState} from 'react';
import web3 from './web3';

import { Router, Route, Switch } from "react-router-dom";

import Nft from "./Nft";
import Sendpage from "./Sendpage";
import Newpage from "./Newpage";
import Tokencreate from "./Tokencreate";
import Printallimage from "./Printallimage";


function Salepage() {

  //const [toaddress] = useState("");
  //const [tid,setId] = useState("");
  //const [turi,setUri] = useState("");
  //const [tname,setName] = useState("");
  //const [tsymbol,setSymbol] = useState("");
  //const [tokenuri,setTokenUri] = useState("");
  //var [getimageurl,setgetImage] = useState("");
  //const [tfile,setTfile] = useState("");
  //const [ipfsHash,setIpfsHash] = useState(null);
  //var [buffer,setBuffer] = useState("");
  //const [ethAddress,setEthAddress] = useState("");
  //const [blockNumber,setBlocknumber] = useState("");
  //const [transactionHash,setTransaction] = useState("");
  //const [gasUsed,setGasUsed] = useState("");
  //const [txReceipt,se] = useState("");

  //const [dataset,setdatas] = useState("");

  //const [address,setaddress] = useState("");
  //const [geta,setgeta] = useState("");

  //var [printgeta,setgetaprint] =useState("");
  //var [printgeta2,setgetaprint2] =useState("");

  //var [printgeta3,setgetaprint3] =useState("");
  //var [printgeta4,setgetaprint4] =useState("");

  //var [selectedImages,setSelectedImages] = useState([]);


  //const [imgurl,setimgurl] = useState([]);


  

  
  //var [p,setp] =useState("");

  const names = [];
  var afternames=[];

  var salesave = [];

  var k=useState("");
  //const namesc = [];

  //const edho = (source) =>{
    //  return  selectedImages.map((photo) => {
      //    return <img src={photo} key={photo}/>

      //})
    //};
        
      
  
    
      //new write below

      //const componentDidMount = () =>(event){
        
        // your source code to load initial data

        
   // }


      const onSubmitNFT = async (event) => {
    
    
      alert("waiting for pic url");
    
      //var ta=tname;
      //var tb=tsymbol;
      //var tc='https://ipfs.io/ipfs/'+ipfsHash;
      //var td=toaddress;
      //var te=tid;
      //var tf='https://ipfs.io/ipfs/'+ipfsHash;
      
      
    
      //alert("im work ta tb tc  td te tf  "+ta+" "+tb+" "+tc+" "+td+" "+te+" "+tf);
    
      event.preventDefault();
    
      //const accounts = await  web3.eth.getAccounts();
    
    
        
    alert("completed");    
    
    
    alert("check"+localStorage.getItem('myData'));


    //var poda=localStorage.getItem('myData');

    var poda ='0x6b35819e9bf32dce6408cc062673d4b11d356bd9';



    //add con add below

    //setaddress(localStorage.getItem('myData'));
    
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


    alert("after abi"+poda);

    var getaaa=new web3.eth.Contract(abi,poda);

    alert("geta"+getaaa);
    
    event.preventDefault();
    
    const accounts = await web3.eth.getAccounts();

    alert(accounts[0])


        //await geta.methods.tokenURI(te).send({
    //from: accounts[0]
    //value: this.setState({c:accounts[0]})
    
    //});



      var printgeta=await getaaa.methods.tokensOfOwner(accounts[0]).call();


      //var get=printgeta.split(",")[0];

      for(var i=0;i<printgeta.length;i++){

        names.push(printgeta[i]);

      }

      //alert("split owner address  "+printgeta.length)

      alert("owner address"+printgeta)


      

      for(i=0;i<printgeta.length;i++){

        //var nameget=names[i];


        afternames.push(await getaaa.methods.tokenURI(names[i]).call());

        event.preventDefault();

        //alert("alert kulla "+afternames.push(await getaaa.methods.tokenURI(names[i]).call()))

        alert(names[i])

      }


      for(i=0;i<afternames.length;i++){

        alert("urllll      "+afternames[i])
      }


      //var j=0;

      //var b;

//      for(k=0;k<afternames.length;k++){

        //var a=document.createElement("img")

        //b=document.createElement("button")

        //a.id=afternames[k]

        
        //alert(b.id)

        //b.widt=500
        //b.height=500

        //a.src=afternames[k]
        //a.width=400
        //a.height=400

        //document.getElementById("prag").append(a)

        //document.getElementById("ram").append(b)


        //b.onclick = () =>{

        
          //alert(this.event.id)
        //}

        //a.onclick = () =>{
            //alert("image click"+afternames[j])
            //alert(afternames[j])


        //}
      
        //b.onclick = () => {

          //  alert("onclick work"+afternames[j]);
//            salesave.push()


        //}
      //setgetaprint(names[i]);

      //alert(names[i]);
      //alert(selectedImages[i]);

    //}  


   

    
   
}

function hello(event){

  alert(afternames.length)

  for(var i=0 ;i<afternames.length;i++)
  {


      var a=document.createElement("img")

      var  b=document.createElement("button")

      var  c=document.createElement("li")

      var  d=document.createElement("li")

      var  ebr=document.createElement("br")



        //a.id=afternames[k]

        
        //alert(b.id)

        //b.widt=500
        //b.height=500
        //b.setAttribute("value",)


        b.innerHTML="button"+i+1;
    

        a.src=afternames[i]
        a.id=afternames[i]
        a.width=400
        a.height=400


        b.id=afternames[i]

        c.style.listStyleType="none"
        c.append(a)
        c.append(ebr)
        c.append(b)        

        document.getElementById("prag").append(c)

        document.getElementById("prag").append(ebr)


        document.getElementById("prag").append(d)

        document.getElementById("ram").append(c)


        a.onclick = (event) =>{

        
          hello1(event.target.id)

          alert(event.target.id)
        }

        b.onclick = (event) =>{

        
          alert(event.target.id)
        }

        
    //alert(afternames[i])



  }


  function hello1(getvalue){

    alert(getvalue)

  }

  //var a=document.createElement("img")

  //var b=document.createElement("button")




  //b.widt=500
    //    b.height=500

      //  a.src=afternames[i]
//        a.width=400
  //      a.height=400

    ///    document.getElementById("prag").append(a)

       // document.getElementById("ram").append(b)



  //const id=event.target.id;
  //alert(id)

//}
}
  

  return (    

    <div className="App">


<h1>Print Your NFT Image</h1>



<button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/nft");
                }}>
                Go Deploy Page 
              </button>
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
                  history.push("/tokencreate");
                }}>
                Tokencreate Page 
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





              <br></br>
<br></br>


      
<center>
<br></br>


		<form onSubmit={onSubmitNFT} id="create-course-form" >


<button 
             type="submit"> 
             Press Button To Get Your NFT Image Print
             </button>

</form>





      
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
            <Route path="/nft">
              <Nft />
            </Route>
            <Route path="/sendpage">
              <Sendpage />
            </Route>
            <Route path="/tokencreate">
              <Tokencreate />
            </Route>
            <Route path="/newpage">
              <Newpage />
            </Route>
            <Route path="/printallimage">
              <Printallimage />
            </Route>
          </Switch>
        </Router>

        
        <div>
            
        </div>






<button id="ramm" onClick={hello}>click button</button>


    


<ul id="prag">


</ul>

<ul id="ram" >
  
</ul>

    
	  
      </div>      
  );
}

export default Salepage;
