import React from "react";
import { Router, Route, Switch } from "react-router-dom";
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

function App() {
  
  const connectmm = async (event) => {



      event.preventDefault();
     //bring in user's metamask account address

     const accounts = await web3.eth.getAccounts();//.send({from:accounts[0]})

     //const demo=await getaaa.methods.setTokenPrice([isd],price).send({from:accounts[0]})

      
      alert("acc"+accounts[0])

      if(accounts[0] !== ""){

        //accounts[0
        //document.getElementById("bu").
        document.getElementById("bu").append("CONNECTED")

        localStorage.setItem('myaddress', accounts[0]);
      
      }
      else{
        //document.getElementById("bu").remove("");
        document.getElementById("bu").replaceWith("NOT CONNECTED")
        localStorage.setItem('myaddress', "");
      }
  };    


  
  

  return (
    <div class="container h-100 d-flex justify-content-center">
      <div class="jumbotron my-auto">

        <center>

          <br></br>
          <br></br>
          <br></br>
        <Router history={history}>
          <Switch>
            <Route path="/" exact>
              <div class="display-4 mb-1">Choose a route to go to page</div>
              <br></br><br></br><br></br>
              
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Nft");
                }}
              >
                Nft Deploy Contract     
              </button>

              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Myitem");
                }}
              >
                Myitem     
              </button>

              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Explore");
                }}
              >
                Explore
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
            
          </Switch>
        </Router>
        </center>
      </div>
      
    </div>
  );
}

export default App;
