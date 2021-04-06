import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React from "react";
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
import Explore from "./Myitem";
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


function App() {

  const isBackgroundRed = true;

  var accounts;
  
  const connectmm = async (event) => {



      event.preventDefault();
     //bring in user's metamask account address

     accounts = await web3.eth.getAccounts();//.send({from:accounts[0]})

     //const demo=await getaaa.methods.setTokenPrice([isd],price).send({from:accounts[0]})

      
      alert("acc"+accounts[0])

      if(accounts[0] !== ""){

        //accounts[0
        //document.getElementById("bu").
        //document.getElementById("bu").append("CONNECTED")

        var btn = document.getElementById("bu");
btn.value = accounts[0]; // will just add a hidden value
btn.innerHTML = accounts[0];



        localStorage.setItem('myaddress', accounts[0]);
      
      }
      else{
        //document.getElementById("bu").remove("");
        document.getElementById("bu").replaceWith("NOT CONNECTED")
        localStorage.setItem('myaddress', "");
      }
  };    


  
  

  return (
    <div class="container h-100 d-flex justify-content-center" className={isBackgroundRed ? 'background-red' : 'background-blue'}>
      <div class="jumbotron my-auto">
      

     
        
          
        <Router history={history}>
          <Switch>
            <Route path="/" exact>
              <div class="display-4 mb-1"></div>
              
              <Logo  height="105" width="105" />
              
              
              <button
              
              style={{outline: 'none'}}
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Allcontractpage");
                }}
              >
                Explore
              </button>


              
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Salepagecopy");
                }}
              >
                Myitem     
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
                }}
              >
               Activity
              </button>

              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Howitworkpage");
                }}
              >
               How it works
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


              <button
              id="bu"
                class="btn btn-info btn-block"
                type="button"
                onClick= {connectmm}>
               Connect wallet
              </button>


              <br></br>
              <hr></hr>


              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Newpage");
                }}
              >
                Get Single Image Page
              </button>

              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Sendpage");
                }}
>
  Transfer NFT-Owner
              </button>

              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Tokencreate");
                }}
              >
                Mint-Token
              </button>


              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Printallimage");
                }}
              >
                PrintallImage Page
              </button>


              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Approveaddresspage");
                }}
              >
                Approve-Address Page
              </button>

              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Salepage");
                }}
              >
                Sale-My Token Page
              </button>


              <button
              id="bu"
                class="btn btn-info btn-block"
                type="button"
                onClick={connectmm}
                //onClick={() => {
                  //history.push("/Connectmetamask");
                //}}
                >
  Connectwithmetamask
              </button>


              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Newdeploy");
                }}
              >
                New Deploy Page
              </button>

              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Nft");
                }}
              >
                Nft Deploy Contract     
              </button>

              <br
              ></br>
              <br></br>
              <br></br>

              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Mycontractdata");
                }}
              >
                My Contract data
              </button>

              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Salepagecopy");
                }}
              >
                My Salepagecopy
              </button>


              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Printallimagecopy");
                }}
              >
                My Printallimagecopy
              </button>


              
              

              
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

            <Route path="/Allcontractpage">
              <Allcontractpage />
            </Route>
            

            
          </Switch>
        </Router>
        
      </div>
      
    </div>
  );
}

export default App;
