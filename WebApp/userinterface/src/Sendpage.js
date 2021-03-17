import React from "react";
import history from "./utils/history";

import {useState} from 'react';
import web3 from './web3';
import lottery from './nftcontract';//this line import lottery folder
import ipfs from './ipfs';
import storehash from './storehash';

import { Router, Route, Switch } from "react-router-dom";

import First from "./First";
import Second from "./Second";
import Nft from "./Nft";
import Tokencreate from "./Tokencreate";
import PrintallImage from "./Printallimage";
import Newpage from "./Newpage";



function Sendpage() {

  const [toaddress,setToaddress] = useState("");
  const [tid,setId] = useState("");
  const [tids,setIds] = useState("");
  const [turi,setUri] = useState("");
  const [tname,setName] = useState("");
  const [tsymbol,setSymbol] = useState("");
  const [tokenuri,setTokenUri] = useState("");
  var [getimageurl,setgetImage] = useState("");
  const [tfile,setTfile] = useState("");
  const [ipfsHash,setIpfsHash] = useState(null);
  var [buffer,setBuffer] = useState("");
  const [ethAddress,setEthAddress] = useState("");
  const [blockNumber,setBlocknumber] = useState("");
  const [transactionHash,setTransaction] = useState("");
  const [gasUsed,setGasUsed] = useState("");
  const [txReceipt,se] = useState("");

  const [dataset,setdatas] = useState("");

  const [address,setaddress] = useState("");
  const [geta,setgeta] = useState("");

  var [printgeta,setgetaprint] =useState("");
    
      //new write below


      const onSubmitNFT = async (event) => {
    
    
      alert("waiting for pic url");
    
      var ta=tname;
      var tb=tsymbol;
      var tc='https://ipfs.io/ipfs/'+ipfsHash;
      var td=toaddress;
      var te=tid;
      var tf='https://ipfs.io/ipfs/'+ipfsHash;
      
      
    
      alert("im work ta tb tc  td te tf  "+ta+" "+tb+" "+tc+" "+td+" "+te+" "+tf);
    
      event.preventDefault();
    
      const accounts = await  web3.eth.getAccounts();
    
    
        
    alert("completed");    
    
    
    alert(localStorage.getItem('myData'));


    var poda=localStorage.getItem('myData');

    setaddress(localStorage.getItem('myData'));
    
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
    
    alert("im work a +b"+tid+" "+tids+" "+tf);
    
    //event.preventDefault();
    
    //const accounts = await web3.eth.getAccounts();
    


    //var printgeta=await getaaa.methods.safeTransferFrom(accounts[0],tid,tids).call();

    
        await getaaa.methods.transferFrom(accounts[0],tid,tids).send({
     from: accounts[0],
          gas: 4796559,
          gasPrice: '20000000000'
        });
      
    
    
    //await getaaa.methods.safeTransferFrom('0xD264b074c4a772E56536005Ae629518ee1bCc83a','5656','0xEBB8509A162bAf75A48A3e4d33e8dda28D148284').send({
    //from: accounts[0]
    //value: this.setState({c:accounts[0]})
    
    //});

    //alert("prin"+prin);

    //var printgeta=await getaaa.methods.tokenURI(te).call();


    //setgetaprint(await getaaa.methods.tokenURI(te).call());


    //localStorage.setItem('prints',printgeta);


    alert("printgeta"+printgeta);

    alert("data print"+printgeta);
  

    
    
    alert(" and "+tid +" and "+te+"and   data   ");
    
    
    
    
    
    
  };
    

  


  //</div><td><img src={localStorage.getItem('myimageuri')}  alt={'C - language'} /> 			
  return (
    <div className="App">
      
<center>
<br></br>
<h1>Transfer NFT-Owner </h1>

		<form onSubmit={onSubmitNFT} id="create-course-form" >


<input
id="idid"
  type='text'
  name="tid"
  required
  onChange={event => setId( event.target.value)}
  
/>

<br></br>
<br></br>


<input
id="idids"
  type='text'
  name="tids"
  required
  onChange={event => setIds( event.target.value)}
  
/>


<br></br>
<br></br>


<button 
             type="submit"> 
             Transfer NFT Owner
             </button>

</form>



      
<br></br>
<br></br>


<button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/nft");
                }}>
                Deploy Page 
              </button>
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Tokencreate");
                }}
              >
                Token-Create page 
              </button>


              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Printallimage");
                }}>
                printallimage Page 
              </button>
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Newpage");
                }}
              >
                Get Single Image Page
              </button>



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
            <Route path="/tokencreate">
              <Tokencreate />
            </Route>
            <Route path="/printallimage">
              <PrintallImage />
            </Route>
            <Route path="/newpage">
              <Newpage />
            </Route>
          </Switch>
        </Router>

	  
      </div>      
  );
}

export default Sendpage;
