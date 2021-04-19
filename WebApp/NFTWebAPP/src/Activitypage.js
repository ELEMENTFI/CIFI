import React,{useState,useEffect} from "react";
import history from "./utils/history";

import { Router, Route, Switch } from "react-router-dom";

import Myitem from "./Myitem";
import Nft from "./Nft";
//import firebase from "./firebase";
import fireDb from "./firebase";
import Followingpage from "./Followingpage";
//import Activitypage from "./Activitypage";
import Howitworkpage from "./Howitworkpage";
import Communitypage from "./Communitypage";
import Explore from "./Explore";
import Createandpurchasepage from './Createandpurchasepage'

import web3 from './web3';
import Receivedpage from './Receivedpage';

function Activitypage() {


  let btn;
  var accounts;

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

  return (
    <>

      <div class="display-4 mb-1"></div>

      <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Explore");
                }}>
                Explore
              </button>

              {" "}

<button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Salepagecopy");
                }}>
                My items
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
                }}>
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
                How it work
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


              {/* <button
              
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Mypurchasepage");
                }}>
               Mypurchase
              </button>

              {" "} */}



              {/* <button
              
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
              
              class="btn btn-info btn-block"
              type="button"
              onClick={() => {
                history.push("/Receivedpage");
              }}>
             Received_Token
            </button>
            {" "} */}

              <button
              id="bu"
                class="btn btn-info btn-block"
                type="button"
                onClick= {connectmm}>
               Connect wallet
              </button>

              {" "}





              <br></br>
<br></br>


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
            <Route path="/Howitworkpage">
              <Howitworkpage />
            </Route>
            <Route path="/Communitypage">
              <Communitypage />
            </Route>
            <Route path="/Nft">
              <Nft />
            </Route>

            <Route path="/Createandpurchasepage">
              <Createandpurchasepage />
            </Route>


            <Route path="/Receivedpage">
              <Receivedpage />
            </Route>
            
          </Switch>
        </Router>







    </>

  );
}

export default Activitypage;
