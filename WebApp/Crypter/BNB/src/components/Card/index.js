// /* global AlgoSigner */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Card.module.sass";
import Icon from "../Icon";
import fireDb from "../../screens/UploadDetails/firebase";
import axios from 'axios';
import FolowStepsd from "./FolowStepsd";
import Modald from "../../components/ModalD";
import web3 from '../../screens/./UploadDetails/web3';
import {abi} from './data'

//import Modald from "../../components/ModalD";
import FolowStep from "../../screens/Profile/FolowStep";
import FolowSteps from "../../screens/Profile/FolowSteps";
//web3



const Card = ({ className, item }) => {
  let history=useHistory();
  const [isOpens, setIsOpens] = useState(false);
  const [isOpenss, setIsOpenss] = useState(false);

  const [visible, setVisible] = useState(false);
  const [historydb, sethistorydb] = useState([]);
  console.log("hist",historydb)
  //const [historydbasset, sethistorydbasset] = useState([]);
  //console.log("histasset",historydbasset)
  const [isOpen, setIsOpen] = useState(false);


  
  const addlikedb=async()=>{
    //let getalgo=localStorage.getItem("wallet");
    const accounts = await  web3.eth.getAccounts();
    console.log("addlikedb function call");

    
    fireDb.database().ref(`imagereflikes/${accounts[0]}`).child(item.highestBid).set({
      id:item.title,imageUrl:item.image,priceSet:item.price,cAddress:item.categoryText,keyId:item.highestBid,
      userName:item.counter,userSymbol:"BNB",ipfsUrl:item.image,
      ownerAddress:accounts[0],soldd:"",extra1:"ready to sold",
      previousoaddress:"",datesets:new Date().toDateString(),
      description:"",whois:'likes'      
      }).then(()=>{
        setVisible(!visible)
        window.location.reload(false)   
      });    
  }

  const saledbset=async()=>{

  // const algosdk = require('algosdk');
  // const baseServer = "https://testnet-algorand.api.purestake.io/idx2";
  // const port = "";
  // const token = {
  
  //     'X-API-key' : 'SVsJKi8vBM1RwK1HEuwhU20hYmwFJelk8bagKPin',
  // }
  // let indexerClient  = new algosdk.Indexer(token, baseServer, port);

  
    console.log("iitem",item)
    console.log("ititem",item.price)
      
      //let accounts;
      //let txParams;
      //let signedTx;
      //let tx;
      //let tokenname;
      //let getAssetid;

    
      const accounts = await  web3.eth.getAccounts();

      console.log("1",item.bid)
      console.log("2",item.highestBid)
      console.log("3",item.category)
      console.log("4",item.image2x)
      console.log("5",item.title)
      console.log("6",item.categoryText)
      console.log("7",item.counter)
      console.log("8",item.image2x)
    

      setIsOpens(true)
      fireDb.database().ref(`imagerefexploreone/${accounts[0]}`).child(item.highestBid).set({
      id:item.title,imageUrl:item.image,priceSet:item.price,cAddress:item.categoryText,keyId:item.highestBid,
      userName:item.counter,userSymbol:"BNB",ipfsUrl:item.image,
      ownerAddress:accounts[0],soldd:"",extra1:"ready to sold",
      previousoaddress:"",datesets:new Date().toDateString(),
      description:"",whois:'Sellers'      
      }).then(()=>{

        fireDb.database().ref(`imageref/${accounts[0]}`).child(item.highestBid).remove();
          console.log("remove db");
          setIsOpens(false)
          window.location.reload(false)   


      })
    


    //   let res="https://testnet.algoexplorerapi.io/v2/transactions/pending/"+item.categoryText+"?format=json";
    //       console.log("ress",res);
    //       axios.get(`${res}`)
    //      .then((res)=>{
    //        const allnote=res;
    //        getAssetid=res.data["asset-index"];
    //        let getAssetName=res.data.txn.txn.apar.an;
    //       console.log("all",allnote)
    //       console.log("allname",getAssetName)
    //        console.log("assetid",getAssetid)
    //       //  localStorage.setItem("assid",allNotes);


    //       //db

    //   console.log("1",item.bid)
    //   console.log("2",item.highestBid)
    //   console.log("3",item.category)
    //   console.log("4",item.image2x)
    //   console.log("5",getAssetid)
    //   console.log("6",item.categoryText)
    //   console.log("7",item.counter)
    //   console.log("8",item.image2x)
      
    //   let getting=[];
    //   // getting=item.url;
    //   // console.log("gett",getting)
    //   // getting.push(item.bid)
    // fireDb.database().ref(`imagerefexploreone/${item.bid}`).child(item.highestBid).set({
    //   id:getAssetid,imageUrl:item.image,priceSet:item.price,cAddress:item.categoryText,keyId:item.highestBid,
    //   userName:item.counter,userSymbol:"Algos",ipfsUrl:"",
    //   ownerAddress:item.bid,soldd:"",extra1:"",privatekey:item.category,paramsdb:item.image2x,history:item.url,
    //   previousoaddress:"",datesets:new Date().toDateString(),
    //   description:"",whois:'Sellers'      
    //   }).then(()=>{
        
    //     fireDb.database().ref(`imageref/${item.bid}`).child(item.highestBid).remove().then(()=>{


    //       fireDb.database().ref(`imagerefexplore/${item.bid}`).child(item.highestBid).remove().then(()=>{


    //         console.log("remove db");
    //       window.location.reload(false)   
    //       })                                  
    //     })                              
    //    })    

    //       //db           
    //      }).catch(error => console.error(`Error: ${error}`));       

    //      console.log("items",item)
    
  }

  const setpricedb=async()=>{

    let getprize = prompt("Please enter Price");
    if(getprize === ""){
      getprize = prompt("Please enter Price");
    }
else{
    console.log("setitem",item)
    console.log("settitem",item.price)
    let checkdb=fireDb.database().ref(`imageref/${item.ownerAddress}`).child(item.highestBid);
    console.log("cdb",checkdb)
    console.log("odb",item.bid)
    console.log("hdb",item.highestBid)
    // let getting=[];
    //   getting=item.url;
    //   console.log("gett",getting)
    //   getting.push(item.bid)    
//     fireDb.database().ref(`imageref/${item.bid}`).child(item.highestBid).update({
//       id:"",imageUrl:item.image,priceSet:getprize,cAddress:item.categoryText,keyId:item.highestBid,userName:item.counter,
//       userSymbol:"BNB",ipfsUrl:"",
//       ownerAddress:item.bid,soldd:"",extra1:"",
//       //history:item.url,
//       previousoaddress:"",datesets:new Date().toDateString(),whois:'',
//       description:""
//  }).then(()=>{
//   window.location.reload(false)   
//  })


            var isd = item.title;//a
            console.log("targetid",isd)
            console.log(`a`,item)
            let getaaaa=new web3.eth.Contract(abi,item.categoryText);
            //alert("con address"+a.addcAdd);
            //alert("token id"+isd);
            const accounts = await  web3.eth.getAccounts();
            console.log("checking")          
            let price=getprize;
            if(accounts[0] === item.bid)
            {
              //change mactimum



              setIsOpens(true);
              await getaaaa.methods.setTokenState([isd],"true").send({
                from:accounts[0],
                //gas: 51753,
                //gasPrice:'10000000000'
              });
              
           // salepage.settokenstate();
            await getaaaa.methods.setTokenPrice([isd],price).send({
              from:accounts[0],
              //gas: 51753,
              //gasPrice:'10000000000'
            })
            //const priceamount = await getaaaa.methods.items(isd).call();
            //console.log(priceamount.price)
            // await getaaaa.methods.setApprovalForAll(a.addcAdd,"true").send({from:accounts[0]})
            await getaaaa.methods.approve(item.categoryText,item.title).send({
              from:accounts[0],
              //gas: 51753,
              //gasPrice:'10000000000'
            })

            
            // let refsellers=fireDb.database().ref(`sellerssavedb/${accounts[0]}`);//.child(a.addKeyI);//ref1
            // const keysellers = refsellers.push().key;          
            // refsellers.child(keysellers).set({
            //   id:a.addIds,imageUrl:a.addImgs,priceSet:price,cAddress:a.addcAdd,keyId:a.addKeyI,userName:a.addName,userSymbol:a.addSymbol,ipfsUrl:a.addIpfs,ownerAddress:accounts[0],
            //   soldd:"",extra1:"readytosold",datesets:new Date().toDateString(),whois:'Sellers'
            // })            
fireDb.database().ref(`imageref/${accounts[0]}`).child(item.highestBid).update({
              id:item.title,imageUrl:item.image,priceSet:price,cAddress:item.categoryText,keyId:item.highestBid,userName:item.counter,userSymbol:"BNB",ipfsUrl:item.image,ownerAddress:accounts[0],
              soldd:"",extra1:"readytosold",datesets:new Date().toDateString(),whois:'Sellers'
}).then(()=>{

  //setTprice("");
  //setIsOpensetFirst(false);
  //setIsOpen(true);
  setIsOpens(false);
  setIsOpenss(true)
    //window.location.reload(false)   

})
// fireDb.database().ref(`imagerefexplore/${accounts[0]}`).child(a.addKeyI).set({
//               id:a.addIds,imageUrl:a.addImgs,priceSet:price,cAddress:a.addcAdd,keyId:a.addKeyI,userName:a.addName,userSymbol:a.addSymbol,ipfsUrl:a.addIpfs,ownerAddress:accounts[0],
//               soldd:"",extra1:"readytosold",datesets:new Date().toDateString(),whois:'Sellers'
// }).then(()=> {
//   setTprice("");
//   //setIsOpensetFirst(false);
//   setIsOpen(true);
//  });  
}
else{
alert("Your are not owner so you does not update or set prizes......")
}
}
}

  const updatepricedb=async()=>{
    let getprize = prompt("Please enter Price");
    if(getprize === ""){
      getprize = prompt("Please enter Price");
    }
else{
    console.log("setitem",item)
    console.log("settitem",item.price)

    let checkdb=fireDb.database().ref(`imageref/${item.ownerAddress}`).child(item.highestBid);
    console.log("cdb",checkdb)
    console.log("odb",item.bid)
    console.log("hdb",item.highestBid)
    // let getting=[];
    //   getting=item.url;
    //   console.log("gett",getting)
    //   getting.push(item.bid)    
//     fireDb.database().ref(`imageref/${item.bid}`).child(item.highestBid).update({
//       id:"",imageUrl:item.image,priceSet:getprize,cAddress:item.categoryText,keyId:item.highestBid,userName:item.counter,
//       userSymbol:"BNB",ipfsUrl:"",
//       ownerAddress:item.bid,soldd:"",extra1:"",
//       //history:item.url,
//       previousoaddress:"",datesets:new Date().toDateString(),whois:'',
//       description:""
//  }).then(()=>{
//   window.location.reload(false)   
//  })


            var isd = item.title;//a
            console.log("targetid",isd)
            console.log(`a`,item)
            let getaaaa=new web3.eth.Contract(abi,item.categoryText);
            //alert("con address"+a.addcAdd);
            //alert("token id"+isd);
            const accounts = await  web3.eth.getAccounts();
            console.log("checking")          
            let price=getprize;
            if(accounts[0] === item.bid)
            {
              //change mactimum
              setIsOpens(true)
              await getaaaa.methods.setTokenState([isd],"true").send({
                from:accounts[0],
                //gas: 51753,
                //gasPrice:'10000000000'
              });
           // salepage.settokenstate();
            await getaaaa.methods.setTokenPrice([isd],price).send({
              from:accounts[0],
              //gas: 51753,
              //gasPrice:'10000000000'
            })
            //const priceamount = await getaaaa.methods.items(isd).call();
            //console.log(priceamount.price)
            // await getaaaa.methods.setApprovalForAll(a.addcAdd,"true").send({from:accounts[0]})
            await getaaaa.methods.approve(item.categoryText,item.title).send({
              from:accounts[0],
              //gas: 51753,
              //gasPrice:'10000000000'
            })
            // let refsellers=fireDb.database().ref(`sellerssavedb/${accounts[0]}`);//.child(a.addKeyI);//ref1
            // const keysellers = refsellers.push().key;          
            // refsellers.child(keysellers).set({
            //   id:a.addIds,imageUrl:a.addImgs,priceSet:price,cAddress:a.addcAdd,keyId:a.addKeyI,userName:a.addName,userSymbol:a.addSymbol,ipfsUrl:a.addIpfs,ownerAddress:accounts[0],
            //   soldd:"",extra1:"readytosold",datesets:new Date().toDateString(),whois:'Sellers'
            // })            
fireDb.database().ref(`imageref/${accounts[0]}`).child(item.highestBid).update({
              id:item.title,imageUrl:item.image,priceSet:price,cAddress:item.categoryText,keyId:item.highestBid,userName:item.counter,userSymbol:"BNB",ipfsUrl:item.image,ownerAddress:accounts[0],
              soldd:"",extra1:"readytosold",datesets:new Date().toDateString(),whois:'Sellers'
}).then(()=>{

  //setTprice("");
  //setIsOpensetFirst(false);
  //setIsOpen(true);

  setIsOpens(false)

  setIsOpenss(true)

    //window.location.reload(false)   

})
// fireDb.database().ref(`imagerefexplore/${accounts[0]}`).child(a.addKeyI).set({
//               id:a.addIds,imageUrl:a.addImgs,priceSet:price,cAddress:a.addcAdd,keyId:a.addKeyI,userName:a.addName,userSymbol:a.addSymbol,ipfsUrl:a.addIpfs,ownerAddress:accounts[0],
//               soldd:"",extra1:"readytosold",datesets:new Date().toDateString(),whois:'Sellers'
// }).then(()=> {
//   setTprice("");
//   //setIsOpensetFirst(false);
//   setIsOpen(true);
//  });  
}
else{
alert("Your are not owner so you does not update or set prizes......")
}
}

}

  //history function
  const viewhistory=()=>{

    console.log("viewhistory inside");
    setIsOpen(true)
    let get=[];
    // get=item.url;

    get.push({
      address:item.url,
      asset:item.title
    })

    sethistorydb(get)
    
    console.log("gettt",get)

    // setIsOpen(true)
    
    
  }

  // const viewhistorys=()=>{

  //   let getasset=[];
  //   getasset=item.title;
  //   sethistorydbasset(getasset)
  //   console.log("getttt",getasset)
    

  // }


  const onSub=()=>{
    console.log("hello close")
    //setIsOpen(false);
    history.push("/")
  }

  return (
    <>
    <div className={cn(styles.card, className)}>
      <div className={styles.preview}>
        
        <img srcSet={`${item.image2x} 2x`} src={item.image} alt="Card" />
        <div className={styles.control}>
          <div
            className={cn(
              { "status-green": item.category === "green" },
              styles.category
            )}
          >
            {item.categoryText}
          </div>
          <button
            className={cn(styles.favorite, { [styles.active]: visible })}
            onClick={addlikedb}
            // ()=>setVisible(!visible)
          >
            <Icon name="heart" size="20" />
          </button>
          <button className={cn("button-small", styles.button)} onClick={saledbset}>
            <span>Place a sale</span>
            <Icon name="scatter-up" size="16" />
          </button>
        </div>
        
      </div>
      <br></br>
      {item.price === "" ? 
(
  <>
      <button className={cn("button-small")} onClick={setpricedb}>
      <span>Price set</span>
      {/* <Icon name="scatter-up" size="16" /> */}
    </button>
    </>
    )
    
    :
    
    (        
      <>
      <button className={cn("button-small")} onClick={updatepricedb}>
      <span>Update price</span>
      {/* <Icon name="scatter-up" size="16" /> */}
    </button>
    </>
    )
    
}
      <Link className={styles.link} to={item.url}>
        <div className={styles.body}>
          <div className={styles.line}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.price}>{item.price}</div>
            
          </div>
          <div className={styles.line}>
            <div className={styles.users}>
              {item.users.map((x, index) => (
                <div className={styles.avatar} key={index}>
                  <img src={x.avatar} alt="Avatar" onClick={viewhistory}/>                  
                </div>
              ))}
            </div>
            <div className={styles.counter}>{item.counter}</div>
          </div>
        </div>
        <div className={styles.foot}>
          <div className={styles.status}>
            
            
            {/* <Icon name="candlesticks-up" size="20" ></Icon> */}
            {/* <button type="button">History</button> */}
            
            
            {/* Highest bid <span>{item.highestBid}</span> */}
          </div>
          {/* <div
            className={styles.bid}
            dangerouslySetInnerHTML={{ __html: item.bid }}
          /> */}
        </div>
      </Link>
      
    </div>
    <Modald visible={isOpen} onClose={() => setIsOpen(false)}>
    <FolowStepsd className={styles.steps} viewhistory={historydb}/>
  </Modald>
  <Modald visible={isOpens} >
<FolowStep className={styles.steps} />
</Modald>

<Modald visible={isOpenss} >
<FolowSteps className={styles.steps} onSub={()=>onSub}/>
</Modald>

{/* onClose={() => setIsOpens(false)} */}
</>
  );
};

export default Card;
