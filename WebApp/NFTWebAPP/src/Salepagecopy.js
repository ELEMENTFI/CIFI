import React, { useState,useEffect } from "react";
import history from "./utils/history";

//import {useState} from 'react';
import web3 from './web3';

import { Router, Route, Switch } from "react-router-dom";

import Nft from "./Nft";
import Sendpage from "./Sendpage";
import Newpage from "./Newpage";
import Tokencreate from "./Tokencreate";
import Printallimage from "./Printallimage";
//import getaaa from "./abinft";
import Saleimagepage from "./Saleimagepage";
import Myitem from "./Myitem";
//import firebase from "./firebase";
import fireDb from "./firebase";
import Allcontractpage from "./Allcontractpage";
import {abi} from './data'


// console.log(`abi`, abi)


function Salepagecopy() {


  var abcd;

  
  //var names=[];
  const [afternames,setAfternames] = useState([]);
  
  console.log("afternamescheck",afternames)
  const [names,setnames] = useState([]);

  // console.log("initialnames",names)
  
  // const accounts = [];

  
  const [getAddressDb,setGetAddressDb]=useState([]);
  // console.log("initialgetaddress",getAddressDb)
  

  
 const getAdressbyAccount = async  ()=>{
  const accounts = await web3.eth.getAccounts();


    // console.log("getaddress0",accounts[0])
  
    // console.log("function called");
   let address =[];
   let add=fireDb.database().ref(`contractaddress/${accounts[0]}`);
   console.log("addget",add)
   fireDb.database().ref(`contractaddress/${accounts[0]}`).on("value",(snapshot) =>{
     snapshot.forEach((s)=>{
       address.push(s.val());
     });
     
   });

   setGetAddressDb(address)  
   //console.log("mani",address)

   

   
 }

  
  useEffect(()=>{
getAdressbyAccount()
setTimeout(()=>{

  newget()

},5000)
setTimeout(()=>{

  s()

},10000)
  },[])



 const newget = async()=>{
  const accounts = await web3.eth.getAccounts();
  let n =[]
  getAddressDb.forEach(async(add)=>{
    let poda = add
        let getaaaa=new web3.eth.Contract(abi,poda);
        
        
        let printgeta=await getaaaa.methods.tokensOfOwner(accounts[0]).call();

        printgeta.forEach((p=>{
n.push(p)
}))
      setnames(n);    
      
    })
 }

 const s =  async ()=>{
  const accounts = await web3.eth.getAccounts();

  let after = []
   getAddressDb.forEach(async(a)=>{
       let poda = a
        let getaaaa=new web3.eth.Contract(abi,poda);
        names.forEach(async (n)=>{
          console.log(`n`, n)
          // console.log(`object`,n, await getaaaa.methods.tokenURI(n).call())     }) 
          after.push({
            add:poda,
            addId:n,
            addImgSrc:await getaaaa.methods.tokenURI(n).call()})
   })
  })

   console.log(`after`, after)
setAfternames(after)
 }


   
const setprice =async (a,event)=>{

  let t= document.createElement("textbox")

  t="Added for sale";
  //b.innerHTML="Enable Sale";

             var isd = a.addId;//a
             console.log("targetid",isd)

  console.log(`a`, a)
  let getaaaa=new web3.eth.Contract(abi,a.add);
            const accounts = await  web3.eth.getAccounts();
        await getaaaa.methods.setTokenState([isd],"true").send({from:accounts[0]});
           // salepage.settokenstate();
            console.log("checking")
            var price = window.prompt("enter the price for your token");
            await getaaaa.methods.setTokenPrice([isd],price).send({from:accounts[0]})
            const priceamount = await getaaaa.methods.items(isd).call();
            console.log(priceamount.price)


           let pa = priceamount.state;
         if(pa == 1){
           //c.append(t)
           console.log("checkcon","Added for sale console")
         }
         else{
           //c.append(b)
           console.log("checkcons","not for sale console")
         }

           
            


}


  

  return (    

    <div className="App">


<button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Allcontractpage");
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





              <br></br>
<br></br>










<button
                class="btn btn-info btn-block"
                type="button"
               onClick={s}
              >
              
              </button>

              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={newget}
              >
              
              </button>
{afternames.length === 0 ? null : 
<div style={{width:'800px',height:'70vh',backgroundColor:'red',display:'flex',flexDirection:'column',flexWrap:'wrap'}}>
{afternames.map((a)=>{
  console.log(`a`, a)

  if(a.addImgSrc !=='')
  return (
    <div>

  <img   src={a.addImgSrc}  style={{height:300,width:300}}     />
  <br></br>
  <button onClick={()=>setprice(a)} >SetPrice</button>
  
  </div>
  )

})}
</div>
}


      
<center>
<br></br>




	      
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
            
            <Route path="/Myitem">
              <Myitem />
            </Route>
            <Route path="/nft">
              <Nft />
            </Route>
            <Route path="/sendpage">
              <Sendpage />
            </Route>
            <Route path="/tokencreate">
              <Tokencreate />
            </Route>
            <Route path="/newpage">
              <Newpage />
            </Route>
            <Route path="/printallimage">
              <Printallimage />
            </Route>
            <Route path="/Saleimagepage">
              <Saleimagepage />
            </Route>
          </Switch>
        </Router>




        
        <div>
            
        </div>


<div style={{flexDirection:'column',width:'500px',flexWrap:'wrap'}}>

<ul id="prabha">

</ul>


<ul id="prag">


</ul>

<ul id="ram" >
  
</ul>

    </div>
	  
      </div>      
  );
}

export default Salepagecopy;