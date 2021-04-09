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




function Followingpage() {

  
    //fb 
  
  const [currentid, setCurrentid] = useState("");

 
  
 const [afternames,setAfternames] = useState([]);
 const [name,setnames] = useState([]);
 const [tid,setId] = useState(""); 

 var [getAddressDb,setGetAddressDb]=useState([]);

 var [getAddressDbs,setGetAddressDbs]=useState([]);

 
 console.log("initialgetaddresss",getAddressDbs)
 
 console.log("initialgetaddress",getAddressDb)
 console.log("ipname",name)

  //temp start


  const getImgpa = () =>{

    let ref2=firebase.database().ref("imageref/");

        ref2.on('value',function(data){

            let register2=data.val();

            let key2=Object.keys(register2)

            let length2=key2.length;

            console.log("getdatapragr",register2)

            console.log("getdatapragk",key2)

            console.log("getdataprag2",length2)

            let addressset2 =[];

            for(let p2=0;p2<length2;p2++){


                var k22=key2[p2];

                console.log("getdatapragk22",key2[p2])

                let ref22=firebase.database().ref("imageref/").child(k22);

                ref22.on('value',function(datas){
                  
                    var register22=datas.val();

                    var key22=Object.keys(register22)

                    var length22=key22.length;

                    console.log("loglengths",register22)

                    for(var k2=0;k2<length22;k2++){


                      var keyss=key22[k2]

                      var leftside1=register22[keyss];//getting

                      //var templink=leftside1.replace(/[^a-zA-Z ]/g, "");

                      // let gelen=[];
                      // let getdat=firebase.database().ref("imageprice/").child(templink).once('value').then(snap =>{
                      //   if (snap.val()){
                      //     gelen=snap.val()
                          
                      //   } else {
                      //     console.log('error');
                      //   }
                      // })

                      // console.log("valget",gelen)

                      // for(let ge=0;ge<gelen.length;ge++){



                      // }

                      //console.log("lget",getdat)                  

                      console.log("lenfirsts",leftside1)                  

                      addressset2.push(leftside1)
                      
                    }            
                    
                    
                })

                
            }

            setGetAddressDbs(addressset2)
        });
  

  }


  useEffect(()=>{getImgpa()},[])

  
const onSubmitNFTTs = async (event) => {

  var ref=firebase.database().ref("contractaddress/");

        ref.on('value',function(data){

            var register=data.val();

            var key=Object.keys(register)

            var length=key.length;

            //console.log("getdataprag",length)

            for(var p=0;p<length;p++){

                var k2=key[p];

                var ref2=firebase.database().ref("contractaddress/").child(k2);

                ref2.on('value',function(data2){

                  let addressset =[];

                    var register2=data2.val();

                    var key2=Object.keys(register2)

                    var length2=key2.length;

                    console.log("loglength",length2)

                    for(var k=0;k<length2;k++){

                      

                      var keyss=key2[k]

                      var leftside=register2[keyss];//getting

                      console.log("lenfirst",leftside)                  

                      addressset.push(leftside)
                      
                    }            
                    setGetAddressDb(addressset)
                    
                })
            }
        });
  
        var names =[];
  var ima =[];
  var p =[];
  var ps =[];

	
	for(var ill=0;ill<getAddressDb.length;ill++){

        //alert("stu "+getAddressDb[ill])  
    
      var poda = getAddressDb[ill]//'0x5e0c8fe9af42c6e486e6cdf00891b6b003b59e1a'//stuset[i]

      console.log("getadbss",getAddressDb[ill]);
	
    var getaaa=new web3.eth.Contract(abi,poda);

  
const accounts = await web3.eth.getAccounts();

console.log(accounts[0])

var items = await getaaa.methods.totalSupply().call();
console.log("totalsup",items)
for(var ikk=0;ikk<items;ikk++){
  var v = await getaaa.methods.tokenByIndex(ikk).call();
  console.log("id" + v)
  var s = await getaaa.methods.items(v).call();
  console.log("ids" + v)
  var state = s.state;
  console.log("idss" + v)
  if(state == 1){
    names.push(v)
    console.log("For Sale" + v)
    p.push(s.price)
    ps.push(v)
  }
  console.log("idpush" + p)
}

console.log("getlen",names.length)

for(var ijj=0;ijj<names.length;ijj++){

  let cler=await getaaa.methods.tokenURI(names[ijj]).call();

  if(cler !== ''){

    ima.push({
      add:poda,
      addId: p[ijj],
      addv:ps[ijj],
      addsrc: await getaaa.methods.tokenURI(names[ijj]).call()
    })
    

  }


console.log("getnamea",names[ijj])
//var a=document.createElement("img");
//var  b=document.createElement("button")
var t = document.createElement("textbox")

//console.log("getima",ima)

//t.innerText= "Price" + "     " +p[ijj]

//console.log("parea",t.innerText)

}
//array store
console.log("getima",ima)

  }

  setAfternames(ima)

  setnames(p)

}

//useEffect(()=>{onSubmitNFTTs()},[])

console.log("afterget",afternames)
const buynow= async(a) =>{


    let getaaa=new web3.eth.Contract(abi,a.add);

    console.log("insidebutton",a.add)
    console.log("insidebuttonid",a.addv)

    const accounts = await web3.eth.getAccounts();
  
    let thing = a.addv;

    console.log("thingget",a.addv)

    let s = await getaaa.methods.items(thing).call();

    let state = s.price;
    
    //alert(state)
    await getaaa.methods.buyThing(thing).send({from:accounts[0], value: web3.utils.toWei(state, 'ether')});
    console.log("Token Purchased Id" + thing)
   
  }  






  //temp end


  

  return (
    <>

      <div class="display-4 mb-1"></div>

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


<br></br>
<br></br>


              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={getImgpa}
              >
              
              </button>



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



{getAddressDbs.length === 0 ? null : 
<div style={{width:'800px',height:'70vh',backgroundColor:'skyblue',display:'flex',flexDirection:'column',flexWrap:'wrap'}}>
{getAddressDbs.map((a)=>{
  console.log(`a`, a)

  //if((a.addId !== ' ') && (a.addsrc !== ' '))
  return (
    <div>

  <img   src={a}  style={{height:300,width:300}}     />
  {' '}
  <br></br>
  <h5>hello{}</h5>
  <br></br>
  <button onClick={()=>buynow(a)} >BuyNow</button>
  
  </div>
  )

})


}
</div>
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

export default Followingpage;
