import React, { useState,useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
//import React from "react";
import { Router, Route, Switch, Link } from "react-router-dom";
import history from "./utils/history";

import Nf from "./Nft";
import NewPage from "./Newpage";
import Sendpage from "./Sendpage";
import Tokencreate from "./Tokencreate";
import Printallimage from "./Printallimage";
import Approveaddresspage from "./Approveaddresspage";
import Salepage from "./Salepage";
import Saleimagepage from "./Saleimagepage";
import Test from "./Testing";
import Myitem from "./Myitem";
import Explore from "./Explore";
//import Connectmetamask from "./Connectmetamask";
import web3 from './web3';
import Newdeploy from "./Newdeploy";
import Mycontractdata from "./Mycontractdata";
import Salepagecopy from "./Salepagecopy";
import Printallimagecopy from "./Printallimagecopy";

import { ReactComponent as Logo } from './logo.svg';

import Followingpage from "./Followingpage";
import Activitypage from './Activitypage';
import Howitworkpage from './Howitworkpage';
import Communitypage from './Communitypage';
import Createpage from './Createpage';
import Connectwalletpage from './Connectwalletpage'
import ReactPlayer from "react-player";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Allcontractpage from './Allcontractpage'
import Mypurchasepage from './Mypurchasepage'
//import SearchBar from './SearchBar';

//import {abi} from data;


import Createandpurchasepage from './Createandpurchasepage';



function App() {

  const [myOptions, setMyOptions] = useState([])

  const isBackgroundRed = true;

  var accounts;

  let btn ;

  
  
  const connectmm = async () => {


    //var getaddress=localStorage.getItem('myaddress')

    //if(getaddress !== ""){


      //var btn = document.getElementById("bu");
        //btn.value = accounts[0]; // will just add a hidden value
        //btn.innerHTML = accounts[0];
        //btn.innerHTML = "CONNECTED"



    //}
    //else{


      //window.alert("Do you want to connect with metamask");


      //event.preventDefault();
     //bring in user's metamask account address

     

     //const demo=await getaaa.methods.setTokenPrice([isd],price).send({from:accounts[0]})

      
      //alert("acc"+accounts[0])

      accounts = await web3.eth.getAccounts();//.send({from:accounts[0]})

      if(accounts[0] !== ""){

      

        //accounts[0
        //document.getElementById("bu").
        //document.getElementById("bu").append("CONNECTED")

        btn= document.getElementById("bu");
        //btn.value = accounts[0]; // will just add a hidden value
        //btn.innerHTML = accounts[0];
        btn.innerHTML = "CONNECTED"


        localStorage.setItem('myaddress', accounts[0]);
      
      }
      else{
        //document.getElementById("bu").remove("");
        //document.getElementById("bu").replaceWith("NOT CONNECTED")
        var btns = document.getElementById("bu");
        //btns.value = accounts[0]; // will just add a hidden value
        btns.innerHTML = "NOT CONNECTED";
        localStorage.setItem('myaddress', "");
      }

    
  };    
  useEffect(()=>{connectmm()},[])


  const getDataFromAPI = () => {

      //setMyOptions(myOptions)
    //})
  }

  
  

  return (
    <div class="container h-100 d-flex justify-content-center" className={isBackgroundRed ? 'background-red' : 'background-blue'}>
      <div class="jumbotron my-auto">
      

      
        <Router history={history}>
          <Switch>
            <Route path="/" exact>
              <div class="display-4 mb-1"></div>

              
              
              <Logo  height="55" width="55" />
              {" "}



              {/* <Autocomplete
        style={{ width: 300,height:5 }}
        freeSolo
        autoComplete
        autoHighlight
        options={myOptions}
        renderInput={(params) => (
          <TextField {...params}
            onChange={getDataFromAPI}
            variant="outlined"
            label="Search Box"
          />
        )}
      /> */}

      
      {" "}

      {/* <br></br>
      <br></br>
      <br></br> */}


              {/* <input type="text" placeholder="Search here ?"></input>
              {" "}
              <button type="submit">Search</button> */}

              {" "}
              
              <button
              
              style={{outline: 'none'}}
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Explore");
                }}
              >
                Explore
              </button>

              {" "}
              
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Salepagecopy");
                }}
              >
                Myitem     
              </button>

              {" "}
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Followingpage");
                }}
              >
               Following
              </button>

              {" "}
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Activitypage");
                }}
              >
               Activity
              </button>

              {" "}
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Howitworkpage");
                }}
              >
               How it works
              </button>

              {" "}
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Communitypage");
                }}
              >
               Community
              </button>

              {" "}
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Nft");
                }}
              >
               Create
              </button>

              {" "}

              

              <button
              
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Mypurchasepage");
                }}>
               Mypurchase
              </button>
              {" "}

              <button
            
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Createandpurchasepage");
                }}
                
                >
               Create and Purchase
              </button>

              {" "}

              <button
              id="bu"
                class="btn btn-info btn-block"
                type="button"
                onClick= {connectmm}>
               Connect wallet
              </button>

              {" "}





              <br></br>
              <hr></hr>


              

              
              

              
            </Route>
            <Route path="/Myitem">
              <Myitem />
            </Route>
            <Route path="/Nft">
              <Nf />
            </Route>
            <Route path="/Newpage">
              <NewPage />
            </Route>
            <Route path="/Sendpage">
              <Sendpage />
            </Route>
            <Route path="/Tokencreate">
              <Tokencreate />
            </Route>
            <Route path="/Printallimage">
              <Printallimage />
            </Route>
            <Route path="/Approveaddresspage">
              <Approveaddresspage />
            </Route>
            <Route path="/Salepage">
              <Salepage />
            </Route>
            <Route path="/Saleimagepage">
              <Saleimagepage />
            </Route>
            <Route path="/Testing">
              <Test />
            </Route>

            <Route path="/Newdeploy">
              <Newdeploy />
            </Route>

            <Route path="/Mycontractdata">
              <Mycontractdata />
            </Route>

            <Route path="/Salepagecopy">
              <Salepagecopy />
            </Route>

            <Route path="/Printallimagecopy">
              <Printallimagecopy />
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


            <Route path="/Createpage">
              <Createpage />
            </Route>
            
            <Route path="/Connectwalletpage">
              <Connectwalletpage />
            </Route>

            <Route path="/Explore">
              <Explore />
            </Route>

            <Route path="/Mypurchasepage">
              <Mypurchasepage />
            </Route>

            <Route path="/Createandpurchasepage">
              <Createandpurchasepage />
            </Route>
            

            
          </Switch>
        </Router>
        
      </div>
      
    </div>
  );
}

export default App;
