import React, { useState,useEffect } from "react";
import web3 from './web3';

import { Router, Route, Switch } from "react-router-dom";

import Nft from "./Nft";
import Sendpage from "./Sendpage";
import Newpage from "./Newpage";
import Tokencreate from "./Tokencreate";
import Printallimage from "./Printallimage";
import getaaa from "./abinft";

function Test(){
     
  var names = [];
 
  const [afternames,setAfternames] = useState([]);
  const [tid,setId] = useState(""); 
    const testSample =async()=>{

       
    
    
            console.log("waiting for pic url");
          
           
          
          
              
          console.log("completed");    
          
          
          console.log("check"+localStorage.getItem('myData'));
      
      
          console.log("geta"+getaaa);
         
          const accounts = await web3.eth.getAccounts();
      
          console.log(accounts[0])
      
      
      
      
      
            var printgeta=await getaaa.methods.tokensOfOwner(accounts[0]).call();
      
      
            //var get=printgeta.split(",")[0];
      
            for(var i=0;i<printgeta.length;i++){
      
              names.push(printgeta[i]);
      
            }
      
            //console.log("split owner address  "+printgeta.length)
      
            console.log("owner address"+printgeta)
      
      
            
            var after =[];      
            for(i=0;i<printgeta.length;i++){
      
              //var nameget=names[i];
              after.push(await getaaa.methods.tokenURI(names[i]).call());
      
              //afternames.push(await getaaa.methods.tokenURI(names[i]).call());
      
             // event.preventDefault();
      
              //console.log("console.log kulla "+afternames.push(await getaaa.methods.tokenURI(names[i]).call()))
      
              console.log(names[i])
      
            }
            setAfternames(after)
      




    }
    
    {testSample()}
    return(
        <div>
            <ul id="prag">


</ul>

<ul id="ram" >
  
</ul>
            testSample
        </div>
    )
}
export default Test;