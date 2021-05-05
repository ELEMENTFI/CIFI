import {useParams,Link} from "react-router-dom";
import firebase from "firebase";
import React, { useState,useEffect } from "react";
import web3 from './web3';
import {abi} from './data'
import Popup from './Popup';
import { Offline, Online } from "react-detect-offline";
import axios from 'axios';
import Footer from './footer'



const DisplayData=()=>{

  const {oaddress,key}=useParams()

    //const {key}=useParams()


    const[getIm,setgetIm]=useState([]);

    console.log("getIII",getIm)


  const [isOpen, setIsOpen] = useState(false);

  const [bookss, setBookss] = useState(null);

  //const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";

  //0xdbb163b22e839a26d2a5011841cb4430019020f9

  

 
  const togglePopup = () => {
    setIsOpen(false);

    //window.location.reload(false)
    
  }

  const ownerDisplay= async (getting)=>{

    const getcadd = getting;

    //testnet using
  //const apiURL = "https://api.etherscan.io/api?module=account&action=tokennfttx&contractaddress="+getcadd+"&page=1&offset=10&sort=asc&apikey=9EFYVV4BAJS2M3M3ADUFN8G8XTCTAMR7R9";

  //sample mainnet example
  //0xdbb163b22e839a26d2a5011841cb4430019020f9
  const apiURL = "https://api.etherscan.io/api?module=account&action=tokennfttx&contractaddress=0xdbb163b22e839a26d2a5011841cb4430019020f9&page=1&offset=2&sort=asc&apikey=9EFYVV4BAJS2M3M3ADUFN8G8XTCTAMR7R9";

  //alert(apiURL);

    axios.get(`${apiURL}`)
        .then((response)=>{
          const allNotes=response.data.result;
          setBookss(allNotes)
        }).catch(error => console.error(`Error: ${error}`));       

  }



  useEffect(()=>{ownerDisplay()},[bookss])  

  console.log("getbbb",bookss)


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


      const[getOwner,setGetOwner]=useState();

      const[getMaker,setGetMaker]=useState();
      

      const imgcall = async(getss) => {


        // const accounts = await  web3.eth.getAccounts();

        //alert(getIm.cAddress+"and "+getIm.id)

        let getsss=new web3.eth.Contract(abi,getIm.cAddress);



        setGetOwner(await getsss.methods.ownerOf(getIm.id).call());

        setGetMaker(await getsss.methods.maker().call());


        setIsOpen(true);
 

      };

    



    //console.log("addressget",address.)

    return(

      <div>


<div style={{backgroundColor:'white',height:'70px',width:'1500px',marginBlock:'5px',display:'flex'}}>



      <div style={{backgroundColor:'white',height:'43px',width:'1154px',marginLeft:'150px',marginBlock:'15px'}}>



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


</div>
</div>


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

<div>
    <Online>
    

</Online>

    </div>

    <div>

    <Offline>

{/* 
    {<Popup content={<>
        <b>Notification</b>
        <p>Your are offline please check your internet connection......</p>
        <center>
        <button type="button" onClick={togglePopup}>close</button>
        </center>
      </>}
     handleClose={togglePopup}
    />}
 */}

    </Offline>

    </div>

</div>





<center>


<div>

{getIm.length === 0 ? null :( 
  <div style={{backgroundColor:'black',display:'flex',flexWrap:'wrap'}}>
    
    
      

        <div style={{backgroundColor:'black',height:'600px',width:'300px'}}>

        <div style={{border: '2px solid white',borderRadius:'5px'}}>
  
        {/* imgcall(getIm.id); */}
    
        <img   src={getIm.imageUrl}  style={{height:250,width:250,marginTop:'10px'}} alt=""    onClick={() => {imgcall(getIm.id)}} />
  
    
        <h5 style={{color:'white'}}>Name : {getIm.userName}</h5>
      
        <h5 style={{color:'white'}}>Symbol : {getIm.userSymbol}</h5>

        <h5 style={{color:'white'}}>Token_id : {getIm.id}</h5>
      
        <h5 style={{color:'white'}}>price : {getIm.priceSet}</h5>

        <h5 style={{color:'white'}}>Contract_Address : {getIm.cAddress}</h5>
      
        <h5 style={{color:'white'}}>Status : {getIm.extra1}</h5>
      
        <h5 style={{color:'white'}}>Owner_Address : {getIm.ownerAddress}</h5>

      
      
      {/* { <button onClick={()=>buynow(a)} >BuyNow</button> } */}
    
      {' '}


      <div>

{ <div className="books">
<h5 style={{color:'white'}}>History of Owner_Address</h5>
      {bookss &&
        bookss.map((book) => {
          
          return (
        
            <div className="details">
              

                <h5 style={{color:'white'}}> {book.to}</h5>
                {/* <h5 style={{color:'white'}}> {book.tokenID}</h5> */}
                {/* <p style={{color:'white'}}>🏘️: {book.country}</p>
                <p style={{color:'white'}}>⏰: {cleanedDate}</p> */}
              </div>
          );
        })}
    </div>
}

</div>


      </div>

      </div>
      
  
  </div>
)}

  </div>    

</center>

  {isOpen && <Popup content={<>
  <div>
        <b>Notification</b>
        <h5>Owner_Address:-{getOwner}</h5>
        <h5>Maker_Address:-{getMaker}</h5>
        <center>
        <button type="button" onClick={togglePopup}>close</button>
        </center>
        </div>
      </>}
       handleClose={togglePopup}
    />}




<div style={{backgroundColor:'white',height:'150px',width:'1500px',marginBlock:'5px',display:'flex',marginLeft:'2px'}} >

  <Footer/>
  
  </div>
  


  

</div>





    );

}

export default DisplayData;