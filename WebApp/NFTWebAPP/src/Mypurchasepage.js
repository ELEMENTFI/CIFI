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




function Mypurchasepage() {

  

const[getImgreff,setgetImgreff]=useState([]);

const[getIm,setgetIm]=useState([]);

  //temp start


  const getImgpa = async() =>{
    let req = [];
    let req2 = [];
    firebase.database().ref("imageref").on("value", (data) => {
      if (data) {
        data.forEach((d) => {
          req.push(d.val())
          
        });
        
      }

    });

    setgetImgreff(req)

      getImgreff.map((a)=>{
      console.log(`a`, a)
    
      Object.keys(a).map((b)=>{
    
        console.log(`bb`, b)
        console.log(`bbnext`, a[b].imageUrl)
        console.log(`bbaddess`,a[b].cAddress)
        console.log(`bbprice`,a[b].priceSet)
        console.log(`bbname`,a[b].userName)
        console.log(`bbsymbol`,a[b].userSymbol)
        console.log(`bbipfs`,a[b].ipfsUrl)
        console.log(`bboaddress`,a[b].owneraddress)
        
//change here
        req2.push({
          //addAcc:
          addPrices:a[b].priceSet,
          addcAdd:a[b].cAddress,
          addIds:a[b].id,
          addImgs:a[b].imageUrl,
        addUname:a[b].userName,
      addUsymbol:a[b].userSymbol,
    addIpfs:a[b].ipfsUrl,
    addOwnerAddress:a[b].owneraddress})
              
      })
    })
    
    setgetIm(req2)
    
    console.log("cfb",req) 

  }


  useEffect(()=>{getImgpa()},[])

  

const buynow= async(a) =>{


    let getaaa=new web3.eth.Contract(abi,a.addcAdd);

    console.log("insidebutton",a.addcAdd)
    console.log("insidebuttonid",a.addPrices)

    const accounts = await web3.eth.getAccounts();
  
    let thing = a.addIds;

    console.log("thingget",a.addIds)

    console.log("ownerget",a.addOwnerAddress)

    let s = await getaaa.methods.items(thing).call();

    console.log("sget",s)

    let state = s.price;

    console.log("stateget",a.addPrices)
    
    //alert(state)
    await getaaa.methods.buyThing(thing).send({from:accounts[0], value: web3.utils.toWei(a.addPrices, 'ether')});
    console.log("Token Purchased Id" + thing)

  

    fireDb.database().ref(`imagerefbuy/${accounts[0]}`).child(a.addKeyI).update({
      id:a.addIds,imageUrl:a.addImgs,priceSet:a.addPrices,cAddress:a.addcAdd,keyId:a.addKeyI
    
    });

    fireDb.database().ref(`imageref/${a.addOwnerAddress}`).child(a.addKeyI).remove();
        
   
  }  






  //temp end


  

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


<button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Salepagecopy");
                }}>
                My items
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
                }}>
                Activity
              </button>
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Howitworkpage");
                }}
              >
                How it work
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
                class="btn btn-info btn-block"
                type="button"
                
              >
              Mypurchase
              </button>
              



              <br></br>
<br></br>


<br></br>
<br></br>


              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={getImgpa}
              >

                Refresh
              
              </button>



              




{getIm.length === 0 ? null :( 
<div style={{width:'800px',height:'70vh',backgroundColor:'skyblue',display:'flex',flexDirection:'column',flexWrap:'wrap'}}>
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
    <div style={{backgroundColor:'skyblue',height:'500px',width:'500px'}}>

  <img   src={a.addImgs}  style={{height:300,width:300}}     />
  
  
  {/* <h5>hello{a[b].imageUrl}</h5> */}

  <h3>Name : {a.addUname}</h3>
  
  <h3>Symbol : {a.addUsymbol}</h3>
  
  <h3>price : {a.addPrices}</h3>
  
  
  { <button onClick={()=>buynow(a)} >BuyNow</button> }

  {' '}
  
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
