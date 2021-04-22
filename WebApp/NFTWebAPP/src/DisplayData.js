import {useParams,Link} from "react-router-dom";
import firebase from "firebase";
import React, { useState,useEffect } from "react";
import web3 from './web3';

const DisplayData=()=>{



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




 




    const {oaddress,key}=useParams()

    //const {key}=useParams()


    const[getIm,setgetIm]=useState([]);

    console.log("getIII",getIm)


    const getImgpa = async() =>{

        //setLoader(true)
    
        //setLoading(true)
    
        //window.location.reload(false)
        
        firebase.database().ref("imagerefexplore").child(oaddress).child(key).on("value",(data)=>{

            if (data) {

              setgetIm(data.val())                  
    }
  });             
    };
  
      useEffect(()=>{getImgpa()},[getIm])

      
    



    //console.log("addressget",address.)

    return(

      <div>



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
                // 
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



              <br></br>

              <br></br>
              <br></br>
              <br></br>
              <br></br>





        {/* <div>


        <h1>hellooooooooo</h1>

        <h2>a{getIm.setPrice}</h2>

        <h2>b{getIm.cAddress}</h2>

        <h2>c{key}</h2>

        </div> */}

<div>

{getIm.length === 0 ? null :( 
  <div style={{backgroundColor:'skyblue',display:'flex',flexWrap:'wrap'}}>
    
    
      

        <div style={{backgroundColor:'skyblue',height:'600px',width:'300px'}}>
  
    
        <img   src={getIm.imageUrl}  style={{height:250,width:250}} alt=""    />
  
    
        <h3>Name : {getIm.userName}</h3>
      
        <h3>Symbol : {getIm.userSymbol}</h3>

        <h3>Token_id : {getIm.id}</h3>
      
        <h3>price : {getIm.priceSet}</h3>

        <h3>Contract_Address : {getIm.cAddress}</h3>
      
        <h3>Status : {getIm.extra1}</h3>
      
        <h3>Owner_Address : {getIm.ownerAddress}</h3>

      
      
      {/* { <button onClick={()=>buynow(a)} >BuyNow</button> } */}
    
      {' '}
      </div>
      
  
  </div>
)}

  </div>    
  
  

</div>

    );

}

export default DisplayData;