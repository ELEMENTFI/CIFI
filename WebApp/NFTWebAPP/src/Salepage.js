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
import getaaa from "./abinft";
import Saleimagepage from "./Saleimagepage";
import Myitem from "./Myitem";


function Salepage() {


 
  var names=[];
 const [afternames,setAfternames] = useState([]);
 const [name,setnames] = useState([]);
 const [tid,setId] = useState(""); 
 


   useEffect(()=>{onSubmitNFT()},[])
      const onSubmitNFT = async () => {
    
    
      console.log("waiting for pic url");
        
    console.log("completed");    
 
    
    const accounts = await web3.eth.getAccounts();

    console.log(accounts[0])





      var printgeta=await getaaa.methods.tokensOfOwner(accounts[0]).call();


      //var get=printgeta.split(",")[0];

      for(var i=0;i<printgeta.length;i++){

        names.push(printgeta[i]);

      }
      setnames(names);    
      //console.log("split owner address  "+printgeta.length)

      console.log("owner address"+printgeta)


      
      var after =[];      
      for(i=0;i<printgeta.length;i++){

        after.push(await getaaa.methods.tokenURI(names[i]).call());

        console.log(names[i])

      }
      setAfternames(after)
  
  console.log(after.length)

  for(var i=0 ;i<after.length;i++)
  {
      var a=document.createElement("img")
      var t= document.createElement("textbox")
      var  b=document.createElement("button")

      var  c=document.createElement("li")

      var  d=document.createElement("li")

      var  ebr=document.createElement("br")



     // if(pa == 1){
        t="Added for sale";
      //}
     // else{
        b.innerHTML="Enable Sale";
      //}


       
        
    

        a.src=after[i]
        a.id=after[i]
        a.tid = names[i]
        a.width=400
        a.height=400
        
        b.src=after[i]
        b.id=after[i]
        b.tid = names[i]
        c.style.listStyleType="none"
        c.append(a)
        c.append(ebr)
        const pricea = await getaaa.methods.items(names[i]).call(); 
      var pa = pricea.state;
        if(pa == 1){
          c.append(t)
        }
        else{
          c.append(b)
        }
      
        
               

        document.getElementById("prag").append(c)

        document.getElementById("prag").append(ebr)


        document.getElementById("prag").append(d)

        document.getElementById("ram").append(c)


        a.onclick = (event) =>{

          console.log(event.target.id)
        // pp.push(afternames.pop(event.target.tid))
           
          
        }
        
        b.onclick = async(event) =>{
          var isd = event.target.tid;
		  console.log(event.target.tid)
		  const accounts = await  web3.eth.getAccounts();
      await getaaa.methods.setTokenState([isd],"true").send({from:accounts[0]});
         // salepage.settokenstate();
		  console.log("checking")
		  var price = window.prompt("enter the price for your token");
		  await getaaa.methods.setTokenPrice([isd],price).send({from:accounts[0]})
  		const priceamount = await getaaa.methods.items(isd).call();
		  console.log(priceamount.price)
         
          
        }

        
    //console.log(afternames[i])



  


  
 

      } 

}
  

  return (    

    <div className="App">


     
      
<h1>Print Your NFT Image</h1>




<button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/nft");
                }}>
                Go Deploy Page 
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
                  history.push("/sendpage");
                }}
              >
                Go Transfer page
              </button>

              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/tokencreate");
                }}>
                Tokencreate Page 
              </button>
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/newpage");
                }}
              >
                Get Single Image Page
              </button>

              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Printallimage");
                }}
              >
                Print all Image Page
              </button>
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Saleimagepage");
                }}
              >
              Images for Sale
              </button>





              <br></br>
<br></br>


      
<center>
<br></br>


		<form onSubmit={onSubmitNFT} id="create-course-form" >


<button 
             type="submit"> 
             Press Button To Get Your NFT Image Print
             </button>

</form>





      
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








    


<ul id="prag">


</ul>

<ul id="ram" >
  
</ul>

    
	  
      </div>      
  );
}

export default Salepage;