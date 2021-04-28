import React,{useState,useEffect} from "react";
//import history from "./utils/history";
import ReactPlayer from "react-player";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Router, Route, Switch,Link } from "react-router-dom";

// import Myitem from "./Myitem";
// import Nft from "./Nft";
//import firebase from "./firebase";
// import fireDb from "./firebase";
// import Followingpage from "./Followingpage";
// import Activitypage from "./Activitypage";
// //import Howitworkpage from "./Howitworkpage";
// import Communitypage from "./Communitypage";
// import Mypurchasepage from './Mypurchasepage'
// import Explore from "./Explore";
// import Createandpurchasepage from './Createandpurchasepage'
import web3 from './web3';
//import Receivedpage from './Receivedpage';
import { Offline, Online } from "react-detect-offline";

import Popup from './Popup';


function Howitworkpage() {

    const handle = useFullScreenHandle();
  const [name,setName] = useState("ramachandran");

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



  const callBtn = () =>{

    setName("Pragadesh");

    alert(name);

    
    }


  return (
    <div>

<div style={{backgroundColor:'white',height:'70px',width:'1500px',marginBlock:'5px',display:'flex'}}>

<div style={{backgroundColor:'white',height:'43px',width:'1050px',marginLeft:'150px',marginBlock:'15px'}}>


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




              <button
              id="bu"
                class="btn btn-info btn-block"
                type="button"
                onClick= {connectmm}>
               Connect wallet
              </button>

              {" "}


</div>

</div>
              <br></br>
<br></br>


<br></br>
<br></br>



<div>

<div>
    <Online>
    

</Online>

    </div>

    <div>

    <Offline>


    {<Popup content={<>
        <b>Notification</b>
        <p>Your are offline please check your internet connection......</p>
        <center>
        {/* <button type="button" onClick={togglePopup}>close</button> */}
        </center>
      </>}
    //  handleClose={togglePopup}
    />}


    </Offline>

    </div>

</div>

<center>

      <ReactPlayer style={{backgroundColor:'white',height:'500px',width:'1000px',marginBlock:'5px',border: '2px solid red',borderRadius:'5px',display:'flex'}}
        url="https://www.youtube.com/watch?v=dA1lXZhWPoQ"
        
/>

<FullScreen handle={handle}>
        Any fullscreen content here
      </FullScreen>

</center>

<center>
<div style={{backgroundColor:'white',height:'500px',width:'640px',marginBlock:'5px',border: '2px solid red',borderRadius:'5px',display:'flex'}}>
<h1>document here...</h1>
  </div>
  <br></br>
  <div style={{backgroundColor:'white',height:'500px',width:'640px',marginBlock:'5px',border: '2px solid red',borderRadius:'5px',display:'flex'}}>
<h1>document here....</h1>
  </div>
  </center>


      </div>
  )
}

export default Howitworkpage;
