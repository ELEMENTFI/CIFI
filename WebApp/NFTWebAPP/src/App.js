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
import Receivedpage from './Receivedpage';
//import SearchBar from './SearchBar';

//import {abi} from data;


import Createandpurchasepage from './Createandpurchasepage';

//import 'bootstrap/dist/css/bootstrap.min.css';

//import {Modal} from 'react-bootstrap';
//import {Button} from 'react-bootstrap'



function App() {

//   const loader = document.querySelector('.loader');

// // if you want to show the loader when React loads data again
// const showLoader = () => loader.classList.remove('loader--hide');

// const hideLoader = () => loader.classList.add('loader--hide');

  //const spinner = document.getElementById('spinner');


  // if (spinner && !spinner.hasAttribute('hidden')) {
  //   spinner.setAttribute('hidden', 'false');
  // }

  const [myOptions, setMyOptions] = useState([])

  const isBackgroundRed = true;

  var accounts;

  let btn ;


  const [isLoading, setLoading] = useState(false)

  
  // const fetchdata =() =>{

  //   setLoading(true);
  //   setTimeout(()=>{
  //     setLoading(false);
  //   },3500)
  // }
  
  
  
  const connectmm = async () => {

     


      //hideLoader={hideLoader}
      //showLoader={showLoader} 


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
      {/* <div class="jumbotron my-auto"> */}
      

      

      
      
        {/* <Router history={history}>
          <Switch>
            <Route path="/" exact>
              <div class="display-4 mb-1"></div>

              
              
              <Logo  height="55" width="55" />
              {" "} */}



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



<Link
              to="/">

              
              <button
              
              style={{outline: 'none'}}
                class="btn btn-info btn-block"
                type="button"
                
              >
                Home
              </button>
</Link>

              {" "}


            <Link
              to="/explore">

              
              <button
              
              style={{outline: 'none'}}
                class="btn btn-info btn-block"
                type="button"
                
              >
                Explore
              </button>


              </Link>

              {" "}

              <Link
              to="/salepagecopy">

              
              <button
                class="btn btn-info btn-block"
                type="button"
                // onClick={() => {
                //   history.push("/Salepagecopy");
                // }}
              >
                Myitem     
              </button>
              </Link>

              {" "}

              <Link
              to="/followingpage">

              <button
                class="btn btn-info btn-block"
                type="button"
                // onClick={() => {
                //   history.push("/Followingpage");
                // }}
              >
               Following
              </button>
              </Link>

              {" "}
              <Link
              to="/activitypage">
              <button
                class="btn btn-info btn-block"
                type="button"
                // onClick={() => {
                //   history.push("/Activitypage");
                // }}
              >
               Activity
              </button>
              </Link>

              {" "}

              <Link
              to="/howitworkpage">

              <button
                class="btn btn-info btn-block"
                type="button"
                
              >
               How it works
              </button>

</Link>
              {" "}
              <Link
              to="/communitypage">
              <button
                class="btn btn-info btn-block"
                type="button"
                
              >
               Community
              </button>
              </Link>

              {" "}
              <Link
              to="/nft">
              <button
                class="btn btn-info btn-block"
                type="button"
                // onClick={() => {
                //   history.push("/Nft");
                // }}
              >
               Create
              </button>
              </Link>

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
              <hr></hr>


{/* <header className="APP-header">
  <br/>

{isLoading ? "":
              (<button

                className="button"
                
                onClick= {fetchdata}>
Demo
              </button>)}
              {isLoading ? <div><h4>Fetching........</h4>}
              <img style={{width:"200px",height:"200px"}} src="" alt=""/></div>:' '}

              </header> */}
              
   
    
    
   
        


              

              
              

              
            {/* </Route>
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
            
            <Route path="/Receivedpage">
              <Receivedpage />
            </Route>

            
          </Switch>
        </Router>
        
      </div> */}
      
    </div>
  );
}

export default App;