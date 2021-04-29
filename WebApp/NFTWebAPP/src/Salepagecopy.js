import React, { useState,useEffect } from "react";
//import history from "./utils/history";

//import {useState} from 'react';
import web3 from './web3';

import { Router, Route, Switch,Link } from "react-router-dom";

// import Nft from "./Nft";
// import Sendpage from "./Sendpage";
// import Newpage from "./Newpage";
// import Tokencreate from "./Tokencreate";
// import Printallimage from "./Printallimage";
// //import getaaa from "./abinft";
// import Saleimagepage from "./Saleimagepage";
// import Myitem from "./Myitem";
import firebase from "./firebase";
import fireDb from "./firebase";
//import Allcontractpage from "./Allcontractpage";
import {abi} from './data'
// import Mypurchasepage from './Mypurchasepage'
// import Explore from './Explore'
// import Createandpurchasepage from './Createandpurchasepage'
// import Receivedpage from './Receivedpage';
import Popup from './Popup';
import { Offline, Online } from "react-detect-offline";


// console.log(`abi`, abi)


function Salepagecopy() {


  const [isLoading, setLoading] = useState(false)

  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(false);

    //window.location.reload(false)
    
  }


  const [isOpen2, setIsOpen2] = useState(false);
 
  const togglePopup2 = () => {
    setIsOpen2(false);

    window.location.reload(false)
    
  }






const[getImgreff,setgetImgreff]=useState([]);

const[getIm,setgetIm]=useState([]);



  var abcd;

  
  //var names=[];
  const [afternames,setAfternames] = useState([]);
  
  console.log("afternamescheck",afternames)
  // const [names,setnames] = useState([]);

  // console.log("initialnames",names)
  
  // const accounts = [];

  
  // const [getAddressDb,setGetAddressDb]=useState([]);

  const [pa,setPa]=useState();
  // console.log("initialgetaddress",getAddressDb)
  

  
//  const getAdressbyAccount = async  ()=>{
//   const accounts = await web3.eth.getAccounts();


//     // console.log("getaddress0",accounts[0])
  
//     // console.log("function called");
//    let address =[];
//    let add=fireDb.database().ref(`contractaddress/${accounts[0]}`);
//    console.log("addget",add)
//    fireDb.database().ref(`contractaddress/${accounts[0]}`).on("value",(snapshot) =>{
//      snapshot.forEach((s)=>{
//        address.push(s.val());
//      });
     
//    });

//    setGetAddressDb(address)  
//    //console.log("mani",address)

   

   
//  }

  
//   useEffect(()=>{
// getAdressbyAccount()
// setTimeout(()=>{

//   newget()

// },5000)
// setTimeout(()=>{

//   s()

// },10000)
//   },[])



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



  //new function start

  const getImgpa = async() =>{


    setLoading(true);

    const accounts = await web3.eth.getAccounts();
    let req = [];
    let req2 = [];
    //let kreq =[];
    firebase.database().ref("imageref").child(accounts[0]).on("value", (data) => {
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
          addAddress:a.ownerAddress,
          addPrices:a.priceSet,
          addcAdd:a.cAddress,
          addIds:a.id,
          addImgs:a.imageUrl,
          addKeyI:a.keyId,
        addName:a.userName,
      addSymbol:a.userSymbol,
    addIpfs:a.ipfsUrl,
    addsold:a.soldd,
    addextra1:a.extra1,
    addPoAddress:a.previousoaddress})
              
      //})
    })


    
    setgetIm(req2)
    
    console.log("cfba",req)

    setPa(0)
    setLoading(false);
  }


  useEffect(()=>{getImgpa()},[getIm])
  //end here



//  const newget = async()=>{
//   const accounts = await web3.eth.getAccounts();
//   let n =[]
//   getAddressDb.forEach(async(add)=>{
//     let poda = add
//         let getaaaa=new web3.eth.Contract(abi,poda);
        
        
//         let printgeta=await getaaaa.methods.tokensOfOwner(accounts[0]).call();

//         printgeta.forEach((p=>{
//         n.push(p)
// }))
//       setnames(n);    
      
//     })
//  }

//   const s =  async ()=>{
//   const accounts = await web3.eth.getAccounts();

//   let after = []
//    getAddressDb.forEach(async(a)=>{
//        let poda = a
//         let getaaaa=new web3.eth.Contract(abi,poda);
//         names.forEach(async (n)=>{
//           console.log(`n`, n)
//           // console.log(`object`,n, await getaaaa.methods.tokenURI(n).call())     }) 
//           after.push({
//             add:poda,
//             addId:n,
//             addImgSrc:await getaaaa.methods.tokenURI(n).call()})
//    })
//   })

//    console.log(`after`, after)
// setAfternames(after)
//  }


   
const setprice =async (a)=>{

  //let t= document.createElement("textbox")

  //t="Added for sale";
  //b.innerHTML="Enable Sale";

             var isd = a.addIds;//a
             console.log("targetid",isd)

            console.log(`a`, a)
            let getaaaa=new web3.eth.Contract(abi,a.addcAdd);
            const accounts = await  web3.eth.getAccounts();
            console.log("checking")
            let price = window.prompt("enter the price for your token");


            if(accounts[0] === a.addAddress)
            {

              await getaaaa.methods.setTokenState([isd],"true").send({from:accounts[0]});
           // salepage.settokenstate();
            




            await getaaaa.methods.setTokenPrice([isd],price).send({from:accounts[0]})
            const priceamount = await getaaaa.methods.items(isd).call();
            console.log(priceamount.price)


            // await getaaaa.methods.setApprovalForAll(a.addcAdd,"true").send({from:accounts[0]})

            await getaaaa.methods.approve(a.addcAdd,a.addIds).send({from:accounts[0]})


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

         
         //alert("Your price has been set and ready to sale......")

         setIsOpen(true);


            }
            else{

              alert("Your are not owner so you does not update or set prizes......")

            }

            
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
  else if(toaddressget === accounts[0])
  {
    alert("you are entered owner address so you does not send this address")

  }else{

    await getaaaa.methods.safeTransferFrom(accounts[0],toaddressget,a.addIds).send({
      from:accounts[0]
    });
  
    console.log("checkinga",a.addOwnerAddress)
  
    // fireDb.database().ref(`imagerefbuy/${toaddressget}`).child(a.addKeyI).set({
    //   id:a.addIds,imageUrl:a.addImgs,priceSet:a.addPrices,cAddress:a.addcAdd,keyId:a.addKeyI,userName:a.addName,
    //   userSymbol:a.addSymbol,ipfsUrl:a.addIpfs,ownerAddress:toaddressget
    // })
  
    // fireDb.database().ref(`imageref/${toaddressget}`).child(a.addKeyI).set({
    //   id:a.addIds,imageUrl:a.addImgs,priceSet:a.addPrices,cAddress:a.addcAdd,keyId:a.addKeyI,userName:a.addName,
    //   userSymbol:a.addSymbol,ipfsUrl:a.addIpfs,ownerAddress:toaddressget
    // })



      fireDb.database().ref(`imagerefsended/${toaddressget}`).child(a.addKeyI).set({
        id:a.addIds,imageUrl:a.addImgs,priceSet:a.addPrices,cAddress:a.addcAdd,keyId:a.addKeyI,userName:a.addName,
        userSymbol:a.addSymbol,ipfsUrl:a.addIpfs,ownerAddress:toaddressget,soldd:"sended",extra1:"buyed"
      })


      fireDb.database().ref(`imagerefexplore/${toaddressget}`).child(a.addKeyI).update({
        id:a.addIds,imageUrl:a.addImgs,priceSet:a.addPrices,cAddress:a.addcAdd,keyId:a.addKeyI,userName:a.addName,
        userSymbol:a.addSymbol,ipfsUrl:a.addIpfs,ownerAddress:toaddressget,soldd:"sended",extra1:"buyed"
      })

      fireDb.database().ref(`imageref/${toaddressget}`).child(a.addKeyI).update({
        id:a.addIds,imageUrl:a.addImgs,priceSet:a.addPrices,cAddress:a.addcAdd,keyId:a.addKeyI,userName:a.addName,
        userSymbol:a.addSymbol,ipfsUrl:a.addIpfs,ownerAddress:toaddressget,soldd:"sended",extra1:"buyed",addPoAddress:accounts[0]
      })


      fireDb.database().ref('imageref').child(accounts[0]).child(a.addKeyI).remove();

  try{

    fireDb.database().ref('imagerefbuy').child(accounts[0]).child(a.addKeyI).remove();


    fireDb.database().ref('imagepurcre').child(accounts[0]).child(a.addKeyI).remove();

    fireDb.database().ref(`imagerefexplore/${accounts[0]}`).child(a.addKeyI).remove();

  }catch(error)
  {
    
  }

  
  //alert("Your token has been sent successfully......")

  setIsOpen2(true);

  }

    
  

}


//new update price below
 const setprices =async (a,event)=>{

    
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

   //previousoaddress:a.addOwnerAddress

   fireDb.database().ref(`imagerefexplore/${a.addPoAddress}`).child(a.addKeyI).remove();


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


   setIsOpen(true);

 }

 else{

   alert("please enter updated prize..")

 }


 window.location.reload(false) 

}


// const imgcall = (a) => {

//   alert(`Hello, ${a.keyId}`);
// };


// const [state, setstate] = useState({data:""})
  
//     const changeState = (a) => {  
//         setstate({data:`state/hellooooo`}); 
//        }; 
  

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






              <br></br>
<br></br>
</div>

</div>

<br></br>
<br></br><br></br>
<br></br>

{isLoading ? <div><h4>Fetching........</h4>
              <img style={{width:"200px",height:"200px"}} src="/4V0b.gif" alt=""/></div>:' '}











{/* <button
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
              
              </button> */}


              {/* <button
                class="btn btn-info btn-block"
                type="button"
                onClick={getImgpa}
              >
              
              Refresh
              </button> */}
{getIm.length === 0 ? null : 
<div style={{backgroundColor:'black',display:'flex',flexWrap:'wrap'}}>
{getIm.map((a)=>{
  console.log("getas", a.extra1)

  if(a.addPrices === ''){
  return (
    <div style={{backgroundColor:'black',height:'500px',width:'300px'}}>

      {/* onClick={() => alert(a.addImgs)} */}



      
      <div style={{border: '2px solid white',borderRadius:'5px'}}>

        <center>

  <img   src={a.addImgs}  style={{height:250,width:250,marginTop:'10px'}}    alt={""} />

  {/* </Link> */}


  {' '}
  <br></br>
  
  <h5 style={{color:'white'}}>Name : {a.addName}</h5>
    
    <h5 style={{color:'white'}}>Symbol : {a.addSymbol}</h5>
    
    <h5 style={{color:'white'}}>price : {a.addPrices}</h5>

    <h5 style={{color:'white'}}>address: {a.addAddress}</h5>
    

  {/* <h4>Added to sale </h4> */}
  
  <button onClick={()=>setprice(a)} style={{width:'80px',height:'43px'}} >SetPrice</button>  

  {' '}
  </center>

  </div>

  {isOpen && <Popup content={<>
        <b>Notification</b>
        <p>Your token prize has been updated successfully......</p>
        <center>
        <button type="button" onClick={togglePopup}>close</button>
        </center>
      </>}
       handleClose={togglePopup}
    />}


  {/* <button onClick={()=>send(a)} >Send</button> */}
  
  </div>
  )
  
  }else if(a.addImgSrc !== '' && a.addPrices !== ''){


    return (
      <div style={{backgroundColor:'black',height:'500px',width:'300px'}}>

{/* onClick={() => {imgcall(a); }} */}

<div style={{border: '2px solid white',borderRadius:'5px'}}>
  <center>
  
    <img   src={a.addImgs}  style={{height:250,width:250,marginTop:'10px'}}    alt={""}   />
    {' '}
    <br></br>
    
    <h5 style={{color:'white'}}>Name : {a.addName}</h5>
    
    <h5 style={{color:'white'}}>Symbol : {a.addSymbol}</h5>
    
    <h5 style={{color:'white'}}>price : {a.addPrices}</h5>

    <h5 style={{color:'white'}}>address: {a.addAddress}</h5>


    
    {/* <button  >SetPrice</button> */}
    {/* style={{width:'200px',height:'50px'}} */}

    <button onClick={()=>setprices(a)}  >UpdatePrice and again sale</button>  
  {' '}
  
  
    <button onClick={()=>send(a)} style={{width:'80px',height:'43px'}}>Send</button>


    {' '}
    </center>

</div>
    

    {isOpen && <Popup content={<>
        <b>Notification</b>
        <p>Your token prize has been updated successfully......</p>
        <center>
        <button type="button" onClick={togglePopup}>close</button>
        </center>
      </>}
     handleClose={togglePopup}
    />}


{isOpen2 && <Popup content={<>
        <b>Notification</b>
        <p>Your token  has been sended successfully......</p>
        <button type="button" onClick={togglePopup2}>close</button>
      </>}
      // handleClose={togglePopup}
    />}

    
    </div>
    )


    


   
    //return (
  //     <div>
  
  // <img   src={a.addImgs}  style={{height:250,width:250}}  alt={""}   />
  //   {''}
  //   <br></br>
  //   <h3>Name : {a.addName}</h3>
    
  //   <h3>Symbol : {a.addSymbol}</h3>
    
  //   <h3>price : {a.addPrices}</h3>
    
  //   <h3> Added for sale</h3>

  //   <button onClick={()=>send(a)} >Send</button>
    
  //   </div>
  //   )
    
  }
})}
</div>
}


      

<br></br>




	      
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




                    
                    

            {/* <Router history={history}>
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
            <Route path="/Mypurchasepage">
              <Mypurchasepage />
            </Route>
            <Route path="/Explore">
              <Explore />
            </Route>

            <Route path="/Createandpurchasepage">
              <Createandpurchasepage />
            </Route>


            <Route path="/Receivedpage">
              <Receivedpage />
            </Route>
            
            
          </Switch>
        </Router> */}




        


{/* <div style={{flexDirection:'column',width:'500px',flexWrap:'wrap'}}>

<ul id="prabha">

</ul>


<ul id="prag">


</ul>

<ul id="ram" >
  
</ul>

    </div> */}
	  

    </div>

  );
  
}

export default Salepagecopy;