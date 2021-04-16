import React, { useState,useEffect } from "react";
import history from "./utils/history";
import web3 from './web3';
import { Router, Route, Switch } from "react-router-dom";

import Myitem from "./Myitem";
import Nft from "./Nft";
//import firebase from "./firebase";
import fireDb from "./firebase";
//import Followingpage from "./Followingpage";
import Activitypage from "./Activitypage";
import Howitworkpage from "./Howitworkpage";
import Communitypage from "./Communitypage";
import firebase from "firebase";
import {abi} from './datas'
import Explore from './Explore'
//import Mypurchasepage from './Mypurchasepage'
import Createandpurchasepage from './Createandpurchasepage'




function Mypurchasepage() {


  const [pa,setPa]=useState();

const[getImgreff,setgetImgreff]=useState([]);

const[getIm,setgetIm]=useState([]);




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





  //temp start




  const getImgpa = async() =>{
    const accounts = await web3.eth.getAccounts();
    let req = [];
    let req2 = [];
    //let kreq =[];
    firebase.database().ref("imagerefbuy").child(accounts[0]).on("value", (data) => {
      if (data) {
        data.forEach((d) => {
          console.log("keycheck",d.key)
          req.push(d.val())
          //req.push(d.key)
          
        });
        
      }

    });

    setgetImgreff(req)

    getImgreff.map((a)=>{
      console.log(`a`, a)
    
      //Object.keys(a).map((b)=>{
    
        console.log(`bba`, a)
        console.log(`bbnexta`, a.imageUrl)
        console.log(`bbaddessa`,a.cAddress)
        console.log(`bbpricea`,a.priceSet)
        console.log(`bbkeyid`,a.keyIds)
        //console.log(`bbowner`,)
//change here
        req2.push({
          //addAcc:
          addPrices:a.priceSet,
          addcAdd:a.cAddress,
          addIds:a.id,
          addImgs:a.imageUrl,
          addKeyI:a.keyId,
        addName:a.userName,
      addSymbol:a.userSymbol,
    addIpfs:a.ipfsUrl})
              
      //})
    })


    
    setgetIm(req2)
    
    console.log("cfba",req)

    setPa(0)
  }


  useEffect(()=>{getImgpa()},[getIm])

  

// const buynow= async(a) =>{


//     let getaaa=new web3.eth.Contract(abi,a.addcAdd);

//     console.log("insidebutton",a.addcAdd)
//     console.log("insidebuttonid",a.addPrices)

//     const accounts = await web3.eth.getAccounts();
  
//     let thing = a.addIds;

//     console.log("thingget",a.addIds)

//     console.log("ownerget",a.addOwnerAddress)

//     let s = await getaaa.methods.items(thing).call();

//     console.log("sget",s)

//     let state = s.price;

//     console.log("stateget",a.addPrices)
    
//     //alert(state)
//     await getaaa.methods.buyThing(thing).send({from:accounts[0], value: web3.utils.toWei(a.addPrices, 'ether')});
//     console.log("Token Purchased Id" + thing)

  

//     fireDb.database().ref(`imagerefbuy/${accounts[0]}`).child(a.addKeyI).update({
//       id:a.addIds,imageUrl:a.addImgs,priceSet:a.addPrices,cAddress:a.addcAdd,keyId:a.addKeyI
    
//     });

//     fireDb.database().ref(`imageref/${a.addOwnerAddress}`).child(a.addKeyI).remove();
        
   
//   }  






  //temp end



  const setprice =async (a,event)=>{

    let t= document.createElement("textbox")
  
    t="Added for sale";
    //b.innerHTML="Enable Sale";
  
               var isd = a.addIds;//a
               console.log("targetid",isd)
  
              console.log(`a`, a)
              let getaaaa=new web3.eth.Contract(abi,a.addcAdd);
              const accounts = await  web3.eth.getAccounts();
              await getaaaa.methods.setTokenState([isd],"true").send({from:accounts[0]});
             // salepage.settokenstate();
              console.log("checking")
              let price = window.prompt("enter the price for your token");
  
  
              fireDb.database().ref(`imageref/${accounts[0]}`).child(a.addKeyI).update({
                id:a.addIds,imageUrl:a.addImgs,priceSet:price,cAddress:a.addcAdd,keyId:a.addKeyI
              
              });
  
  
              await getaaaa.methods.setTokenPrice([isd],price).send({from:accounts[0]})
              const priceamount = await getaaaa.methods.items(isd).call();
              console.log(priceamount.price)
  
  
             //let pa = priceamount.state;
             setPa(priceamount.state)
           if(pa === 1){
             //c.append(t)
             console.log("checkcon","Added for sale console")
  
  
  
           }
           else{
             //c.append(b)
             console.log("checkcons","not for sale console")
           }
  
            
           window.location.reload(false)
  
  }
  
  const send=async(a)=>{
  
    //let getaaaa=new web3.eth.Contract(abi,a.addcAdd);
    //const accounts = await  web3.eth.getAccounts();
    //console.log("logd1",accounts[0])
    //console.log("logd2",a.addKeyI)
  
  
    //console.log("logdele",ab)
  
    let getaaaa=new web3.eth.Contract(abi,a.addcAdd);
    const accounts = await  web3.eth.getAccounts();
  
    let toaddressget = window.prompt("enter for your sender address");
  
    if(toaddressget === null){
  
      alert("please enter address")
  
    }
    else{
  
  
      await getaaaa.methods.safeTransferFrom(accounts[0],toaddressget,a.addIds).send({
        from:accounts[0]
      });
    
      console.log("checkinga",a.addOwnerAddress)
    
      fireDb.database().ref(`imagerefbuy/${toaddressget}`).child(a.addKeyI).set({
        id:a.addIds,imageUrl:a.addImgs,priceSet:a.addPrices,cAddress:a.addcAdd,keyId:a.addKeyI,userName:a.addName,
        userSymbol:a.addSymbol,ipfsUrl:a.addIpfs,ownerAddress:toaddressget
      })
    
      fireDb.database().ref(`imageref/${toaddressget}`).child(a.addKeyI).set({
        id:a.addIds,imageUrl:a.addImgs,priceSet:a.addPrices,cAddress:a.addcAdd,keyId:a.addKeyI,userName:a.addName,
        userSymbol:a.addSymbol,ipfsUrl:a.addIpfs,ownerAddress:toaddressget
      })
  
  
    fireDb.database().ref('imageref').child(accounts[0]).child(a.addKeyI).remove();

    try{

      fireDb.database().ref('imagerefbuy').child(accounts[0]).child(a.addKeyI).remove();
  
    }catch(error)
    {
      
    }
  
    }  

    window.location.reload(false)
  
  }
  
  
  


  

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

              <button
                class="btn btn-info btn-block"
                type="button"

                onClick={() => {
                  history.push("/Createandpurchasepage");
                }}
                
              >
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
<br></br>


<br></br>
<br></br>


              {/* <button
                class="btn btn-info btn-block"
                type="button"
                onClick={getImgpa}
              >

                Refresh
              
              </button> */}



              




{getIm.length === 0 ? null :( 
  <div style={{backgroundColor:'skyblue',display:'flex',flexWrap:'wrap'}}>
{getIm.map((a)=>{
  console.log(`a`, a)

  // Object.keys(a).map((b)=>{

  //   console.log(`b`, b)
  //   console.log(`bnext`, a[b].imageUrl)

        
  // })
//   if((a.addId !== ' ') && (a.addsrc !== ' ')){

// }
//   else{

//     return(
//     <div style={{backgroundColor:'skyblue',height:'500px',width:'500px'}}>

//   <img   src={a.addImgs}  style={{height:300,width:300}}     />
  
  
//   {/* <h5>hello{a[b].imageUrl}</h5> */}

//   <h3>Name : {a.addUname}</h3>
  
//   <h3>Symbol : {a.addUsymbol}</h3>
  
//   <h3>price : {a.addPrices}</h3>
  
  
//   <h3>Already Solded</h3>

//   {' '}
  
//   </div>
//     )

//   }

  return (
    <div style={{backgroundColor:'skyblue',height:'600px',width:'600px'}}>

<br></br>

  <img   src={a.addImgs}  style={{height:300,width:300}}  alt={""}   />
  
  
  <br></br>
  <br></br>

  {/* <h5>hello{a[b].imageUrl}</h5> */}

  <h3>Name : {a.addName}</h3>
  
  <h3>Symbol : {a.addSymbol}</h3>
  
  <h3>price : {a.addPrices}</h3>

  {/* <button onClick={()=>setprice(a)} >setPrice</button> 
  
  {' '}
  
  <button onClick={()=>send(a)} >send</button>  */}
  
  </div>
  )

})



}
</div>
)
}

            <Router history={history}>
          <Switch>
            <Route path="/" exact>
              <div class="display-4 mb-1">Choose a route to go to</div>
              
            </Route>
            
            <Route path="/Myitem">
              <Myitem />
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
            <Route path="/Explore">
              <Explore />
            </Route>

            <Route path="/Createandpurchasepage">
              <Createandpurchasepage />
            </Route>


            
            
            
          </Switch>
        </Router>


<div>


<ul id="prabha">

</ul>


<ul id="prag">


</ul>

<ul id="ram" >
  
</ul>


  </div>





    </>

  );
}

export default Mypurchasepage;
