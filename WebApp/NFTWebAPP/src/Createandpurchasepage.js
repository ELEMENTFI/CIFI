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
import Mypurchasepage from './Mypurchasepage'
import Explore from './Explore'
import {tra} from './trans'
import Receivedpage from './Receivedpage';






function Createandpurchasepage() {


  const [isLoading, setLoading] = useState(false)

  
    //fb 
  
  //const [currentid, setCurrentid] = useState("");

 
  
 //const [afternames,setAfternames] = useState([]);
 //const [name,setnames] = useState([]);
 //const [tid,setId] = useState(""); 

 //const [getAddressDb,setGetAddressDb]=useState([]);

 //const [getAddressDbs,setGetAddressDbs]=useState([]);

 
 //console.log("initialgetaddresss",getAddressDbs)
 
 //console.log("initialgetaddress",getAddressDb)
 //console.log("ipname",name)


const[getImgreff,setgetImgreff]=useState([]);

const[getIm,setgetIm]=useState([]);


console.log("fir1",getImgreff)
console.log("fir2",getIm)

  //temp start



const[Loader,setLoader]=useState(false);



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

  


  const getImgpa = async() =>{

    setLoading(true);

    const accounts = await web3.eth.getAccounts();
    let req = [];
    let req2 = [];
    //let kreq =[];
    firebase.database().ref("imagepurcre").child(accounts[0]).on("value", (data) => {
      if (data) {
        data.forEach((d) => {
          console.log("keycheck",d.key)
          req.push(d.val())
          //req.push(d.key)
          
        });


        setgetImgreff(req)
        
      }

      

    });

    

      // eslint-disable-next-line array-callback-return
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
    addIpfs:a.ipfsUrl,
    addsold:a.soldd,
    addextra1:a.extra1
  });
              
      //})
    });


    
    setgetIm(req2)
    
    console.log("cfba",req)

    
    //alert("thissss")

    //setPa(0)
    setLoading(false);

  
  }



  useEffect(()=>{getImgpa()},[getIm])

  
// const onSubmitNFTTs = async (event) => {

//   var ref=firebase.database().ref("contractaddress/");

//         ref.on('value',function(data){

//             var register=data.val();

//             var key=Object.keys(register)

//             var length=key.length;

//             //console.log("getdataprag",length)

//             for(var p=0;p<length;p++){

//                 var k2=key[p];

//                 var ref2=firebase.database().ref("contractaddress/").child(k2);

//                 ref2.on('value',function(data2){

//                   let addressset =[];

//                     var register2=data2.val();

//                     var key2=Object.keys(register2)

//                     var length2=key2.length;

//                     console.log("loglength",length2)

//                     for(var k=0;k<length2;k++){

                      

//                       var keyss=key2[k]

//                       var leftside=register2[keyss];//getting

//                       console.log("lenfirst",leftside)                  

//                       addressset.push(leftside)
                      
//                     }            
//                     setGetAddressDb(addressset)
                    
//                 })
//             }
//         });
  
//         var names =[];
//   var ima =[];
//   var p =[];
//   var ps =[];

	
// 	for(var ill=0;ill<getAddressDb.length;ill++){

//         //alert("stu "+getAddressDb[ill])  
    
//       var poda = getAddressDb[ill]//'0x5e0c8fe9af42c6e486e6cdf00891b6b003b59e1a'//stuset[i]

//       console.log("getadbss",getAddressDb[ill]);
	
//     var getaaa=new web3.eth.Contract(abi,poda);

  
// const accounts = await web3.eth.getAccounts();

// console.log(accounts[0])

//   var items = await getaaa.methods.totalSupply().call();
//   console.log("totalsup",items)
//   for(var ikk=0;ikk<items;ikk++){
//   var v = await getaaa.methods.tokenByIndex(ikk).call();
//   console.log("id" + v)
//   var s = await getaaa.methods.items(v).call();
//   console.log("ids" + v)
//   var state = s.state;
//   console.log("idss" + v)
//   if(state == 1){
//     names.push(v)
//     console.log("For Sale" + v)
//     p.push(s.price)
//     ps.push(v)
//   }
//   console.log("idpush" + p)
// }

// console.log("getlen",names.length)

// for(var ijj=0;ijj<names.length;ijj++){

//   let cler=await getaaa.methods.tokenURI(names[ijj]).call();

//   if(cler !== ''){

//     ima.push({
//       add:poda,
//       addId: p[ijj],
//       addv:ps[ijj],
//       addsrc: await getaaa.methods.tokenURI(names[ijj]).call()
//     })
    

//   }


// console.log("getnamea",names[ijj])
// //var a=document.createElement("img");
// //var  b=document.createElement("button")
// var t = document.createElement("textbox")

// //console.log("getima",ima)

// //t.innerText= "Price" + "     " +p[ijj]

// //console.log("parea",t.innerText)

// }
// //array store
// console.log("getima",ima)

//   }

//   setAfternames(ima)

//   setnames(p)

// }

//useEffect(()=>{onSubmitNFTTs()},[])

//console.log("afterget",afternames)
//button 

const send= async(a) =>{

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
  
    

      fireDb.database().ref(`imagerefsended/${toaddressget}`).child(a.addKeyI).set({
        id:a.addIds,imageUrl:a.addImgs,priceSet:a.addPrices,cAddress:a.addcAdd,keyId:a.addKeyI,userName:a.addName,
        userSymbol:a.addSymbol,ipfsUrl:a.addIpfs,ownerAddress:toaddressget,soldd:"sended",extra1:"buyed"
      })


      fireDb.database().ref(`imagerefexplore/${toaddressget}`).child(a.addKeyI).set({
        id:a.addIds,imageUrl:a.addImgs,priceSet:a.addPrices,cAddress:a.addcAdd,keyId:a.addKeyI,userName:a.addName,
        userSymbol:a.addSymbol,ipfsUrl:a.addIpfs,ownerAddress:toaddressget,soldd:"sended",extra1:"buyed"
      })


    fireDb.database().ref('imageref').child(accounts[0]).child(a.addKeyI).remove();

  try{

    fireDb.database().ref('imagerefbuy').child(accounts[0]).child(a.addKeyI).remove();

    fireDb.database().ref('imagepurcre').child(accounts[0]).child(a.addKeyI).remove();

    


  }catch(error)
  {
    
  }

  

  }  


  alert("Your token has been sent successfully......")
  
window.location.reload(false)
   
  }  



  const setprice =async (a)=>{

    //let t= document.createElement("textbox")
  
    //t="Added for sale";
    //b.innerHTML="Enable Sale";
  
    var isd = a.addIds;//a
    console.log("targetid",isd)

   console.log(`a`, a)
   // let getaaaa=new web3.eth.Contract(abi,a.addcAdd);
   const accounts = await  web3.eth.getAccounts();
   // await getaaaa.methods.setTokenState([isd],"true").send({from:accounts[0]});
  // salepage.settokenstate();
   console.log("checking")
   let price = window.prompt("enter the price for your token");

   if(price !== '')
   {

     fireDb.database().ref(`imageref/${accounts[0]}`).child(a.addKeyI).update({
       id:a.addIds,imageUrl:a.addImgs,priceSet:price,cAddress:a.addcAdd,keyId:a.addKeyI,userName:a.addName,userSymbol:a.addSymbol,ipfsUrl:a.addIpfs,ownerAddress:accounts[0],
       soldd:"",extra1:"readytosold"

     
     });


     fireDb.database().ref(`imagerefexplore/${accounts[0]}`).child(a.addKeyI).set({
       id:a.addIds,imageUrl:a.addImgs,priceSet:price,cAddress:a.addcAdd,keyId:a.addKeyI,userName:a.addName,userSymbol:a.addSymbol,ipfsUrl:a.addIpfs,ownerAddress:accounts[0],
       soldd:"",extra1:"readytosold"
     
     });


     fireDb.database().ref(`imagepurcre/${accounts[0]}`).child(a.addKeyI).update({
       id:a.addIds,imageUrl:a.addImgs,priceSet:price,cAddress:a.addcAdd,keyId:a.addKeyI,userName:a.addName,userSymbol:a.addSymbol,ipfsUrl:a.addIpfs,ownerAddress:accounts[0],
       soldd:"",extra1:"readytosold"

     
     });

     fireDb.database().ref(`imagerefsended/${accounts[0]}`).child(a.addKeyI).update({
      id:a.addIds,imageUrl:a.addImgs,priceSet:price,cAddress:a.addcAdd,keyId:a.addKeyI,userName:a.addName,userSymbol:a.addSymbol,ipfsUrl:a.addIpfs,ownerAddress:accounts[0],
      soldd:"",extra1:"readytosold"

    
    });

    fireDb.database().ref(`imagerefbuy/${accounts[0]}`).child(a.addKeyI).update({
      id:a.addIds,imageUrl:a.addImgs,priceSet:price,cAddress:a.addcAdd,keyId:a.addKeyI,userName:a.addName,userSymbol:a.addSymbol,ipfsUrl:a.addIpfs,ownerAddress:accounts[0],
      soldd:"",extra1:"readytosold"

    
    });


     //await getaaaa.methods.setTokenPrice([isd],price).send({from:accounts[0]})
     //const priceamount = await getaaaa.methods.items(isd).call();
     //console.log(priceamount.price)


    //let pa = priceamount.state;
    //setPa(priceamount.state)
 //  if(pa === 1){
 //    //c.append(t)
 //    console.log("checkcon","Added for sale console")



 //  }
 //  else{
 //    //c.append(b)
 //    console.log("checkcons","not for sale console")
 //  }

   
  window.location.reload(false)

   }

   else{

     alert("please updated prize")

   }


  
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
                  history.push("/Mypurchasepage");
                }}>
               Mypurchase
              </button>

              {" "}

              <button

                class="btn btn-info btn-block"
                type="button"
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


{/* <i class="fa fa-refresh"></i>

<button style={{size:24}}>Button <i class="fa fa-refresh"></i></button> */}

{/* <span style={{font-size:'100'}}>&#8634</span> */}
{/* <p>I will display &#8634;</p> */}

{/* <button onClick={() => }>Click to reload!</button> */}

<br></br>


{isLoading ? <div>
              <img style={{width:"200px",height:"200px"}} src="/4V0b.gif" alt=""/></div>:' '}




              {/* <button
                class="btn btn-info btn-block"
                type="button"
                onClick={getImgpa}
              >

                Refresh
              
              </button>

              {' '} */}

<br></br>
<br></br>

              {/* {afternames.length === 0 ? null : 
<div style={{width:'800px',height:'70vh',backgroundColor:'blue',display:'flex',flexDirection:'column',flexWrap:'wrap'}}>
{afternames.map((a)=>{
  console.log(`a`, a)

  if((a.addId !== ' ') && (a.addsrc !== ' '))
  return (
    <div>

  <img   src={a.addsrc}  style={{height:300,width:300}}     />
  <br></br>
  <h5>hello{a.addId}</h5>
  <br></br>
  <button onClick={()=>buynow(a)} >BuyNow</button>
  
  </div>
  )

})

} */}




{/* {name.map((b)=>{

return (
  <div>


<h5>hello{b}</h5>
</div>
)

})}
 */}


  
{/* </div>
} */}


<div>

{Loader?
<h1>Loading.....</h1>
:
<>
{getIm.length === 0 ? null :( 
<div style={{backgroundColor:'skyblue',display:'flex',flexWrap:'wrap'}}>
{getIm.map((a)=>{
  console.log(`a`, a)

  // Object.keys(a).map((b)=>{

  //   console.log(`b`, b)
  //   console.log(`bnext`, a[b].imageUrl)

        
  // })
  //if((a.addId !== ' ') && (a.addsrc !== ' '))


  // return (
  //   <div style={{backgroundColor:'skyblue',height:'600px',width:'600px'}}>

  // <img   src={a.addImgs}  style={{height:250,width:250}} alt=""    />
  
  

  
  // {/* <h5>hello{a[b].imageUrl}</h5> */}

  // <h3>Name : {a.addName}</h3>
  
  // <h3>Symbol : {a.addSymbol}</h3>
  
  // <h3>price :{a.addPrices}</h3>

  // { <button onClick={()=>setprice(a)} >updateprice</button> }

  // {' '}

  // <button onClick={()=>send(a)} >Send</button>

  
  
  
  

  // {' '}
  
  // </div>
  // )

  //above end

  if(a.addPrices === ''){
    return (
      <div style={{backgroundColor:'skyblue',height:'600px',width:'600px'}}>
  
    <img   src={a.addImgs}  style={{height:250,width:250}}    alt={""} />
    {' '}
    <br></br>
    
    <h3>Name : {a.addName}</h3>
    
    <h3>Symbol : {a.addSymbol}</h3>
    
    <h3>price : {a.addPrices}</h3>
  
  
    {/* <h4>Added to sale </h4> */}
    
    <button onClick={()=>setprice(a)} >SetPrice</button>  
  
    {' '}
  
    {/* <button onClick={()=>send(a)} >Send</button> */}
    
    </div>
    )
    
    }else if(a.addImgSrc !== '' && a.addPrices !== ''){
  
  
      return (
        <div style={{backgroundColor:'skyblue',height:'600px',width:'600px'}}>
    
      <img   src={a.addImgs}  style={{height:250,width:250}}    alt={""} />
      {' '}
      <br></br>
      
      <h3>Name : {a.addName}</h3>
      
      <h3>Symbol : {a.addSymbol}</h3>
      
      <h3>price : {a.addPrices}</h3>
      
      {/* <button  >SetPrice</button> */}
  
    
      <button onClick={()=>send(a)} >Send</button>
      
      </div>
      )
  
  
      
    }


})



}
</div>
)
}
</>
}
</div>                    

            <Router history={history}>
          <Switch>
            <Route path="/" exact>
              <div class="display-4 mb-1">Choose a route to go to</div>
              
            </Route>

            <Route path="/Explore">
              <Explore />
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

            <Route path="/Mypurchasepage">
              <Mypurchasepage />
            </Route>


            <Route path="/Receivedpage">
              <Receivedpage />
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

export default Createandpurchasepage;
