import { Card, Col, Row, Button } from "reactstrap";
import PoolCardTabs from "./PoolCardTabs";
import React, { Component, useState, useEffect, useRef } from 'react';
import icon from "../../assets/img/logonew.PNG";
import icon1 from "../../assets/img/icon1.PNG";
import { Link,useHistory } from "react-router-dom";
import moment from 'moment';
import configfile from "../../config.json";
import MyAlgoConnect from '@randlabs/myalgo-connect';
const algosdk = require('algosdk');
const algodClient = new algosdk.Algodv2('', 'https://api.testnet.algoexplorer.io', '');
const myAlgoConnect = new MyAlgoConnect();
const Pools = () => {
    const[stakeenddate,setStakeendDate]=useState('');
    const[datedisplay,setDateDisplay]=useState('');
    const[stakedbalance,setStakedBalance] = useState([]);
    const[totalstake,setTotalStake]=useState("");
    const[totallock,setTotallock]=useState("");
    const[totalclaimed,setTotalclaim]=useState("");
    const[rewardleft,setRewardleft]=useState("");
    //let assetid = 53453651;
    //let applicationid = 53433787;

    let address=localStorage.getItem("wallet");
    const client = new algosdk.Algodv2('', 'https://api.testnet.algoexplorer.io', '');

    useEffect(() => {
        const fetchPosts = async () => {
       
      //let applicationid = 53433787;
      const client = new algosdk.Algodv2('', 'https://api.testnet.algoexplorer.io', '');
      let accountInfoResponse1 = await client.accountInformation(configfile.creatoraddress).do();
    
    for (let i = 0; i < accountInfoResponse1['created-apps'].length; i++) { 
       console.log("Application's global state:");
      if (accountInfoResponse1['created-apps'][i].id == parseInt(configfile.applicationid)) {
          console.log("Application's global state:");
          for (let n = 0; n < accountInfoResponse1['created-apps'][i]['params']['global-state'].length; n++) {
              console.log(accountInfoResponse1['created-apps'][i]['params']['global-state'][n]);
              let enc = accountInfoResponse1['created-apps'][i]['params']['global-state'][n];
              console.log("encode",enc);
              var decodedString = window.atob(enc.key);
              if(enc['key'] === "R0E="){
                setTotalStake( accountInfoResponse1['created-apps'][i]['params']['global-state'][n]['value']['uint']);
                console.log("checktvl", accountInfoResponse1['created-apps'][i]['params']['global-state'][n]['value']['uint'])
              }
              
          }
          
      }
  }
        
        };
        
    
        fetchPosts();
      }, []);
      
      //userbalance useeffect
      useEffect(() => {
        const fetchPosts = async () => {
             // read local state of application from user account
       //async function readLocalState(client, address, index){
      let accountInfoResponse = await client.accountInformation(localStorage.getItem("wallet")).do();
      // let val = await client.ApplicationInformation(appId);
      // console.log("val",val)
      console.log("accinfolocal",accountInfoResponse);
      if( accountInfoResponse['apps-local-state'].length === null|| accountInfoResponse['apps-local-state'].length ===undefined||accountInfoResponse['apps-local-state'].length===""){
        alert("check");
     }
    else{
      console.log("User",accountInfoResponse['apps-local-state'].length);
      for (let i = 0; i < accountInfoResponse['apps-local-state'].length; i++) { 
          if (accountInfoResponse['apps-local-state'][i].id == parseInt(configfile.applicationid)) {
              console.log("User's local state:",accountInfoResponse['apps-local-state'][i].id);
              let acccheck= accountInfoResponse['apps-local-state'][i][`key-value`]; 
              console.log("Usercheck",acccheck);
              console.log("User",accountInfoResponse['apps-local-state'][i][`key-value`]);
            
              if(accountInfoResponse['apps-local-state'][i][`key-value`]=== null|| accountInfoResponse['apps-local-state'][i][`key-value`] === undefined||accountInfoResponse['apps-local-state'][i][`key-value`]===""){
                alert("check");
             }
            else{
    for (let n = 0; n < accountInfoResponse['apps-local-state'][i][`key-value`].length; n++) {
                  console.log(accountInfoResponse['apps-local-state'][i][`key-value`][n]);
                  //setStakedBalance(accountInfoResponse['apps-local-state'][i][`key-value`][n]);
                  
                  let rewardkey =accountInfoResponse['apps-local-state'][i]['key-value'][n];
                 if(rewardkey['key'] === "MjA="){
                   setStakedBalance(accountInfoResponse['apps-local-state'][i]['key-value'][n]['value']['uint']);
                 }
                
                
                  
              }
    
            }
    
              
          }
      }
    }
     
      
      
        
        };
        
    
        fetchPosts();
      }, []);  
  
    //rewardleft
      useEffect(() => {
        const fetchPosts = async () => {
            
  let appById = await algodClient.getApplicationByID(parseInt(configfile.applicationid)).do();
  console.log("globalappid",appById);
 
    console.log("Application's global state:");
   
       console.log("Application's global state:1",appById['params']['global-state']);
       console.log("Application's :1",appById['params']['global-state'][0]['key']);
       console.log("globaltime",appById['params']['global-state'][0]['value']['uint']);
      
       
       let totalclaim;
       let totallock;
       let rewardleft;
       for(let i=0;i<11;i++){
          
          
            if(appById['params']['global-state'][i]['key']==="VFNVTEM="){
                totalclaim =appById['params']['global-state'][i]['value']['uint'];
                console.log("totalclaim",totalclaim);
                setTotalclaim(appById['params']['global-state'][i]['value']['uint']);
                }
            if(appById['params']['global-state'][i]['key']==="VFNM"){
                
                totallock=appById['params']['global-state'][i]['value']['uint'];
                console.log("totallock",totallock);
                  setTotallock(appById['params']['global-state'][i]['value']['uint']);
                  }   
           }
        
         rewardleft=(parseFloat(totallock-totalclaim)).toFixed(4);
         setRewardleft(rewardleft);

        };
        
    
        fetchPosts();
      }, []); 
      


const stakepools = async() => {
   
  
       
            var  currentdate=(new Date().getTime())/1000;
            var enddatediff =  1671692309-currentdate;
            if(enddatediff>0){
                setStakeendDate(1);
        
            }
            else{
                setStakeendDate(0);
                console.log("enddate",stakeenddate);
            }
            
            // var t = new Date();
            // t.setSeconds( 1670436722 );
            // var formatted =moment().add(20, 'days').calendar();      // 12/27/2021

            // console.log("time",formatted);
            // setDateDisplay(moment().add(20, 'days').calendar() );
           var ff=new Date( 1671692309*1000);
           console.log("date",ff.toDateString());
           setDateDisplay(ff.toDateString());
          
   
      
    }
    useEffect(()=>{stakepools()},[datedisplay])
    let history=useHistory();
       return (
        <Row className="m-3 m-md-5">
        {localStorage.getItem("wallet")===null || localStorage.getItem("wallet")==="" ||localStorage.getItem("wallet")==='undefined' ||localStorage.getItem("wallet")===undefined ?(<>
        
          <>
                        <Col xl="4" md="6" className="mb-4">

<Card className="custom-card mt-2 mb-2 ml-0 mr-0 p-2">
  <div className="d-flex" style={{ padding: "12px" }}>
      <img
          className="pool-card-image"
          src={icon}
          alt="Card image cap"
      />
      {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
      <div
          className=" pl-2 pr-2 align-item-center"
          style={{
              marginRight: "10px",
              marginTop: "auto",
              marginBottom: "auto",
          }}
      >
          <p style={{ fontWeight: "600", margin: "auto" }}>
              Cifi
          </p>
      </div>
  </div>
  <div style={{ padding: "12px" }}>
      <PoolCardTabs />
  </div>
  <div className="d-flex pl-3 pr-3 mt-2 mb-2">
      <div
          style={{
              marginRight: "auto",
              marginTop: "auto",
              marginBottom: "auto",
          }}
      >
          <p
              style={{ fontWeight: "600", fontSize: "12px" }}
              className="text-muted"
          >
              APR
          </p>
      </div>
      {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
      <div style={{ marginLeft: "auto" }}>
          <p>
              <img
                  left
                  width="15px"
                  style={{
                      marginTop: "auto",
                      marginBottom: "auto",
                      marginLeft: "10px",
                      marginRight: "10px",
                  }}
                  //   style={{ marginButtom: "auto" }}
                  src={icon}
                  alt="Card image cap"
              />
              <b>14.5 %</b>
          </p>
      </div>
  </div>
  <div className="d-flex  pl-3 pr-3 mt-2 mb-2">
      <div
          style={{
              marginRight: "auto",
              marginTop: "auto",
              marginBottom: "auto",
          }}
      >
          <p
              style={{ fontWeight: "600", fontSize: "12px" }}
              className="text-muted"
          >
              Staking End Date
          </p>
      </div>
      {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
      <div style={{ marginLeft: "auto" }}>
          <p style={{ fontWeight: "600", textAlign: "center" }}>
              <img
                  left
                  width="15px"
                  //   style={{ marginTop:'auto' , marginBottom:'auto',marginLeft:'10px',marginRight:'10px' }}
                  //   style={{ marginButtom: "auto" }}
                  src={icon}
                  alt="Card image cap"
              />
             {datedisplay}
             
          </p>
      </div>
  </div>
  <div className="d-flex  pl-3 pr-3 mt-2 mb-2">
      <div
          style={{
              marginRight: "auto",
              marginTop: "auto",
              marginBottom: "auto",
          }}
      >
          <p
              style={{ fontWeight: "600", fontSize: "12px" }}
              className="text-muted"
          >
              Cifi rewards left
          </p>
      </div>
      {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
      <div style={{ marginLeft: "auto" }}>
          <p style={{ fontWeight: "600", textAlign: "center" }}>
              <img
                  left
                  width="15px"
                  //   style={{ marginTop:'auto' , marginBottom:'auto',marginLeft:'10px',marginRight:'10px' }}
                  //   style={{ marginButtom: "auto" }}
                  src={icon}
                  alt="Card image cap"
              />
               {parseFloat(rewardleft)/1000000}
          </p>
      </div>
  </div>
  <div className="d-flex  pl-3 pr-3 mt-2 mb-2">
      <div
          style={{
              marginRight: "auto",
              marginTop: "auto",
              marginBottom: "auto",
          }}
      >
          <p
              style={{ fontWeight: "600", fontSize: "12px" }}
              className="text-muted"
          >
              Pool balance
          </p>
      </div>
      {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
      <div style={{ marginLeft: "auto" }}>
          <p style={{ fontWeight: "600", textAlign: "center" }}>
              <img
                  left
                  width="15px"
                  //   style={{ marginTop:'auto' , marginBottom:'auto',marginLeft:'10px',marginRight:'10px' }}
                  //   style={{ marginButtom: "auto" }}
                  src={icon}
                  alt="Card image cap"
              />
             {parseInt(totalstake/1000000)}
          </p>
      </div>
  </div>
     
  <Button  className={`ml-3 mr-3 pb-0 mb-0 mt-2 mb-2
      `} color="site-primary" width="full" onClick={e => {history.push("/slate-stake")}}><b>View pool</b></Button> 
</Card>
</Col>
              
              </>
   
        
        
        
        </>):(<>
         
          {stakeenddate===1 ? (
              <>
                        <Col xl="4" md="6" className="mb-4">

<Card className="custom-card mt-2 mb-2 ml-0 mr-0 p-2">
  <div className="d-flex" style={{ padding: "12px" }}>
      <img
          className="pool-card-image"
          src={icon}
          alt="Card image cap"
      />
      {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
      <div
          className=" pl-2 pr-2 align-item-center"
          style={{
              marginRight: "10px",
              marginTop: "auto",
              marginBottom: "auto",
          }}
      >
          <p style={{ fontWeight: "600", margin: "auto" }}>
              Cifi
          </p>
      </div>
  </div>
  <div style={{ padding: "12px" }}>
      <PoolCardTabs />
  </div>
  <div className="d-flex pl-3 pr-3 mt-2 mb-2">
      <div
          style={{
              marginRight: "auto",
              marginTop: "auto",
              marginBottom: "auto",
          }}
      >
          <p
              style={{ fontWeight: "600", fontSize: "12px" }}
              className="text-muted"
          >
              APR
          </p>
      </div>
      {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
      <div style={{ marginLeft: "auto" }}>
          <p>
              <img
                  left
                  width="15px"
                  style={{
                      marginTop: "auto",
                      marginBottom: "auto",
                      marginLeft: "10px",
                      marginRight: "10px",
                  }}
                  //   style={{ marginButtom: "auto" }}
                  src={icon}
                  alt="Card image cap"
              />
              <b>14.5 %</b>
          </p>
      </div>
  </div>
  <div className="d-flex  pl-3 pr-3 mt-2 mb-2">
      <div
          style={{
              marginRight: "auto",
              marginTop: "auto",
              marginBottom: "auto",
          }}
      >
          <p
              style={{ fontWeight: "600", fontSize: "12px" }}
              className="text-muted"
          >
              Staking End Date
          </p>
      </div>
      {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
      <div style={{ marginLeft: "auto" }}>
          <p style={{ fontWeight: "600", textAlign: "center" }}>
              <img
                  left
                  width="15px"
                  //   style={{ marginTop:'auto' , marginBottom:'auto',marginLeft:'10px',marginRight:'10px' }}
                  //   style={{ marginButtom: "auto" }}
                  src={icon}
                  alt="Card image cap"
              />
             {datedisplay}
             
          </p>
      </div>
  </div>
  <div className="d-flex  pl-3 pr-3 mt-2 mb-2">
      <div
          style={{
              marginRight: "auto",
              marginTop: "auto",
              marginBottom: "auto",
          }}
      >
          <p
              style={{ fontWeight: "600", fontSize: "12px" }}
              className="text-muted"
          >
              Cifi rewards left
          </p>
      </div>
      {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
      <div style={{ marginLeft: "auto" }}>
          <p style={{ fontWeight: "600", textAlign: "center" }}>
              <img
                  left
                  width="15px"
                  //   style={{ marginTop:'auto' , marginBottom:'auto',marginLeft:'10px',marginRight:'10px' }}
                  //   style={{ marginButtom: "auto" }}
                  src={icon}
                  alt="Card image cap"
              />
               {parseFloat(rewardleft)/1000000}
          </p>
      </div>
  </div>
  <div className="d-flex  pl-3 pr-3 mt-2 mb-2">
      <div
          style={{
              marginRight: "auto",
              marginTop: "auto",
              marginBottom: "auto",
          }}
      >
          <p
              style={{ fontWeight: "600", fontSize: "12px" }}
              className="text-muted"
          >
              Pool balance
          </p>
      </div>
      {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
      <div style={{ marginLeft: "auto" }}>
          <p style={{ fontWeight: "600", textAlign: "center" }}>
              <img
                  left
                  width="15px"
                  //   style={{ marginTop:'auto' , marginBottom:'auto',marginLeft:'10px',marginRight:'10px' }}
                  //   style={{ marginButtom: "auto" }}
                  src={icon}
                  alt="Card image cap"
              />
             {parseInt(totalstake/1000000)}
          </p>
      </div>
  </div>
     
  <Button  className={`ml-3 mr-3 pb-0 mb-0 mt-2 mb-2
      `} color="site-primary" width="full" onClick={e => {history.push("/slate-stake")}}><b>View pool</b></Button> 
</Card>
</Col>
              
              </>
          ):(
           <>
                    <Col xl="4" md="6" className="mb-4">
          <Card className="custom-card mt-2 mb-2 ml-0 mr-0 p-2">
              <div className="d-flex" style={{ padding: "12px" }}>
                  <img
                      className="pool-card-image"
                      src={icon}
                      alt="Card image cap"
                  />
                  {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
                  <div
                      className=" pl-2 pr-2 align-item-center"
                      style={{
                          marginRight: "10px",
                          marginTop: "auto",
                          marginBottom: "auto",
                      }}
                  >
                      <p style={{ fontWeight: "600", margin: "auto" }}>
                          Slate
                      </p>
                      <p className="text-danger mb-0 font-weight-bold" style={{ fontSize: '12px' }}>Epoch 25 / 25</p>
                  </div>
                  <div className="ml-auto mt-auto mb-auto"
                      style={{
                          backgroundColor: "#f8f8f9",
                          borderRadius: "20px",
                          fontWeight: "600",
                          fontSize: "14px",
                      }}><p className="font-weight-bold text-muted pt-1 pb-1 pl-3 pr-3 mb-0">ENDED</p></div>
              </div>
              <div style={{ padding: "12px" }}>
                  <PoolCardTabs />
              </div>
              <div
                  className="d-flex align-items-center m-3 p-3 "
                  style={{
                      backgroundColor: "#f8f8f9",
                      borderRadius: "5px",
                      border: "1px solid rgba(6, 10, 13, 0.1) ",
                      color: "#4f6ae6",
                      fontWeight: "600",
                      fontSize: "14px",
                  }}
              >
                  <p className="m-0 text-muted">
                      The Slate staking pool ended.  Deposits are now disabled but you can still withdraw your tokens and collect any unclaimed rewards.
                  </p>
              </div>
              <div className="d-flex  pl-3 pr-3 mt-2 mb-2">
                  <div
                      style={{
                          marginRight: "auto",
                          marginTop: "auto",
                          marginBottom: "auto",
                      }}
                  >
                      <p
                          style={{ fontWeight: "600", fontSize: "12px" }}
                          className="text-muted"
                      >
                          Your balance
                      </p>
                  </div>

                  {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
                  <div style={{ marginLeft: "auto" }}>
                      <p style={{ fontWeight: "600", textAlign: "center" }}>
                          {localStorage.getItem("wallet")>0 ? (<>
                          
                           
                          </>):(<>
                            {parseInt(stakedbalance/1000000)}
                          
                          </>)}
                      
                      </p>
                  </div>
              </div>
              <Button className={`ml-3 mr-3 pb-0 mb-0 mt-2 mb-2`}
                  color="site-primary" width="full"  onClick={e => {history.push("/slate-stake")}}><b>View pool</b></Button>
          </Card>
      </Col>
      
           </>
          ) }
         </> )}
         </Row>
    );
}

export default Pools;