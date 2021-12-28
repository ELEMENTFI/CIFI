/* global AlgoSigner */
import MyAlgoConnect from '@randlabs/myalgo-connect';
//import React, { Component, useState, useEffect, useRef } from 'react';
import React, { Component, useState, useEffect, useRef } from 'react';

import { Link } from "react-router-dom";
import { Container, Button, Col, Row, Card, Table } from "reactstrap";
import icon from "../../assets/img/icon.PNG";
import icon1 from "../../assets/img/icon1.PNG";
import CustomCard from "../global/CustomCard";
import PoolCardTabs from "./PoolCardTabs";
import Chart from "react-apexcharts";
import Pools from "./Pools";
import configfile from "../../config.json";
//import black from "../../views/blackAbi";
//import cbusdtoken from "../../views/cbusdAbi";
//import wbnb from "../../views/wbnbabi";



//import blackoracle from "../../views/blackOracleAbi";

import web3 from "../../web3";
const algosdk = require('algosdk');
const algodClient = new algosdk.Algodv2('', 'https://api.testnet.algoexplorer.io', '');
const myAlgoConnect = new MyAlgoConnect();
const YieldFarming = ()  => {
 
 
  const[totalstake,setTotalStake]=useState("");
  const[prices1,setS1]=useState("");
  const[prices2,setS2]=useState("");
  const[price,setprice]=useState("");
  
  const[totalreward,setTotalreward]=useState("");
  const[totalrewardallocated,setTotalrewardallocated]=useState("");
  

    useEffect(() => {
      const fetchPosts = async () => {
     
    //let applicationid = 53433787;
    const client = new algosdk.Algodv2('', 'https://api.testnet.algoexplorer.io', '');
    let accountInfoResponse1 = await client.accountInformation(configfile.creatoraddress).do();
  
  for (let i = 0; i < accountInfoResponse1['created-apps'].length; i++) { 
     console.log("Application's global state:");
    if (accountInfoResponse1['created-apps'][i].id == (parseInt(configfile.applicationid))) {
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
            if(enc['key'] === "VFNVTEM="){
              setTotalreward( accountInfoResponse1['created-apps'][i]['params']['global-state'][n]['value']['uint']);
              console.log("checktvl", accountInfoResponse1['created-apps'][i]['params']['global-state'][n]['value']['uint'])
            }
            if(enc['key'] === "VFNM"){
              setTotalrewardallocated( accountInfoResponse1['created-apps'][i]['params']['global-state'][n]['value']['uint']);
              console.log("checktvl", accountInfoResponse1['created-apps'][i]['params']['global-state'][n]['value']['uint'])
            }
        }
        
    }
}
      
      };
      
  
      fetchPosts();
    }, []);


//for price
    useEffect(() => {
      const fetchPosts = async () => {
        let slpricenew;
        let s2pricenew;
    let applicationid1 = 21580889;
    const client = new algosdk.Algodv2('', 'https://api.testnet.algoexplorer.io', '');
    //let accountInfoResponse1 = await client.accountInformation("MX4W5I4UMDT5B76BMP4DS63Z357WDMNHDICPNEKPG4HVPZJTS2G53DDVBY").do();
    let accountInfoResponse2 = await client.accountInformation(configfile.pairescrowaddress).do();
    console.log("accinfolocalprice",accountInfoResponse2);
    if( accountInfoResponse2['apps-local-state'].length === null|| accountInfoResponse2['apps-local-state'].length ===undefined||accountInfoResponse2['apps-local-state'].length===""){
      alert("checkprice");
   }else{
    console.log("priceconsole",accountInfoResponse2['apps-local-state'].length);
    for (let i = 0; i < accountInfoResponse2['apps-local-state'].length; i++) { 
      if (accountInfoResponse2['apps-local-state'][i].id == parseInt(configfile.priceappid)) {
          console.log("User's local stateprice:",accountInfoResponse2['apps-local-state'][i].id);
          let acccheck= accountInfoResponse2['apps-local-state'][i][`key-value`]; 
          console.log("Usercheckfor price",acccheck);
          console.log("Userforprice",accountInfoResponse2['apps-local-state'][i][`key-value`]);
        
          if(accountInfoResponse2['apps-local-state'][i][`key-value`]=== null|| accountInfoResponse2['apps-local-state'][i][`key-value`] === undefined||accountInfoResponse2['apps-local-state'][i][`key-value`]===""){
            alert("check");
         }
        else{
for (let n = 0; n < accountInfoResponse2['apps-local-state'][i][`key-value`].length; n++) {
              console.log(accountInfoResponse2['apps-local-state'][i][`key-value`][n]);
              //setStakedBalance(accountInfoResponse['apps-local-state'][i][`key-value`][n]);
              
              let rewardkey =accountInfoResponse2['apps-local-state'][i]['key-value'][n];
             if(rewardkey['key'] === "czE="){
              slpricenew=accountInfoResponse2['apps-local-state'][i]['key-value'][n]['value']['uint'];
              console.log("s1pricenew",accountInfoResponse2['apps-local-state'][i]['key-value'][n]['value']['uint']);
               setS1(accountInfoResponse2['apps-local-state'][i]['key-value'][n]['value']['uint']);
             }
            if(rewardkey['key'] === "czI="){
              s2pricenew=accountInfoResponse2['apps-local-state'][i]['key-value'][n]['value']['uint'];
              console.log("s2pricenew",accountInfoResponse2['apps-local-state'][i]['key-value'][n]['value']['uint']);
              setS2(accountInfoResponse2['apps-local-state'][i]['key-value'][n]['value']['uint']);
            
            }
            
              
          }

        }

          
      }
  }


   }
   let pricecal;
   pricecal=parseInt((slpricenew)/(s2pricenew));
   console.log("pricecalculated",pricecal);
   setprice(pricecal);
      
      };
      
  
      fetchPosts();
    }, []);




        
       
      
 

  let [activeTab, setActiveTab] = useState("ViewPool");
  let [series, setSeries] = useState([{
    name:"Deposits",
    data: [0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5,
      3.9, 3.5, 3
    ]
  },
    {
      name: "Withdraws",
      data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4,
      -4.1, -4, -4.1, -3.4, -3.1, -2.8
      ]
    }]);
  let [options, setOptions] = useState({
    chart: {
      type: 'bar',
      height: 440,
      stacked: true,
    toolbar: {
        show: false,
      },
    },
    colors: ['#ff0083', '#4f6ae6'],
  })
  return (
    <>
      <Row className="m-3 m-md-5">
        <Col xl="4" lg="8" xs="12" className="mb-4">
          <CustomCard title="TOTAL VALUE LOCKED" text={parseInt(totalstake/1000000)}  subText="CIFI" />
        </Col>
        <Col xl="4" lg="8" xs="12" className="mb-4">
          <CustomCard title="CIFI REWARDS" text={parseInt(totalreward/1000000)} subText={parseInt(totalrewardallocated/1000000)} />
        </Col>
        <Col xl="4" lg="8" xs="12" className="mb-4">
          <CustomCard title="CIFI PRICE" text={price}  />
        </Col>
        {/* <Col xl="4" lg="8" xs="12" className="mb-4">
          <CustomCard title="SLATE PRICE" text={0} subText="Uniswap market" />
        </Col> */}
        {/* <Col xl="3" lg="6" xs="12" className="mb-4">
          <CustomCard title="TIME LEFT" text="3d 14h 41m 39s" subText="until next epoch" />
        </Col> */}
      </Row>
      <div className="m-3 m-md-5 pl-3"><h2><b>Pools</b></h2>
        <h6 className="text-muted"><b>Overview</b></h6>
      </div>

      <Pools/>
      <div className="m-3 m-md-5">
        {/* <Container fluid>
          <Card className="custom-card mt-2 mb-2 ml-0 mr-0 p-2">
            <Chart options={options} series={series} type="bar" height={440} />
          </Card>
        </Container> */}
      </div>
      <Container fluid>

        {/* <Card className="custom-card mt-4 ml-md-5 mx-3 mr-md-5">
          <div className="d-flex overflow-auto" style={{ padding: "12px" }}>
            <h6 className="flex-start font-weight-bold mt-auto mb-auto pl-3">
              Transactions
            </h6>

            <Button outline className="ml-auto mr-3 text-dark" color="light"
              style={{
                border: "1px solid rgba(6, 10, 13, 0.1) ",
              }}>
              All tokens<i class="fas fa-sort-down ml-2"></i>
            </Button>
            <Button outline className="mr-3 text-dark" color="light"
              style={{
                border: "1px solid rgba(6, 10, 13, 0.1) ",
              }}>
              All transactions<i class="fas fa-sort-down ml-2"></i>
            </Button>
          </div>
          <Table className="custom-table" responsive>
            <thead>
              <tr>
                <th>Transaction</th>
                <th>Amount</th>
                <th>Address</th>
                <th>Transaction hash/timestamp</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="d-flex">
                    <img
                      left
                      width="15%"
                      height="15%"
                      style={{
                        margin: "auto",
                        marginRight: "5px",
                        marginLeft: "5px",
                      }}
                      src={icon}
                      alt="Card image cap"
                    />
                    <div className="pl-2 pr-2">
                      <h6 style={{ fontWeight: "600" }}>Transaction</h6>
                      <div
                        className="mb-0 text-muted"
                        style={{ fontSize: "12px", fontWeight: "600" }}
                      >
                        Uniswap V2
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex justify-content-left">
                    <div className=" align-items-baseline">
                      <h6 style={{ fontWeight: "600", color: '#00d395' }}>+0.000094533573581011 UNI-V2</h6>
                      <div
                        className="mb-0 text-muted"
                        style={{ fontSize: "12px", fontWeight: "600" }}
                      >
                        $1,081.16
                      </div>
                    </div>
                  </div>
                </td>

                <td style={{ verticalAlign: "middle" }}>
                  <Link to="https://app.barnbridge.com/">
                    <h6 style={{ fontWeight: "600" }}>0x8b3f...13b7</h6>
                  </Link>
                </td>
                <td>
                  <div className="d-flex justify-content-left">
                    <div className=" align-items-baseline">
                      <Link to="https://app.barnbridge.com/">
                        <h6 style={{ fontWeight: "600" }}>0xa6aa...6acb</h6>
                      </Link>                        <div
                        className="mb-0 text-muted"
                        style={{ fontSize: "12px", fontWeight: "600" }}
                      >
                        08.12.2021 13:06
                      </div>
                    </div>
                  </div>
                </td>

              </tr>
              <tr>
                <td>
                  <div className="d-flex">
                    <img
                      left
                      width="15%"
                      height="15%"
                      style={{
                        margin: "auto",
                        marginRight: "5px",
                        marginLeft: "5px",
                      }}
                      src={icon}
                      alt="Card image cap"
                    />
                    <div className="pl-2 pr-2">
                      <h6 style={{ fontWeight: "600" }}>Transaction</h6>
                      <div
                        className="mb-0 text-muted"
                        style={{ fontSize: "12px", fontWeight: "600" }}
                      >
                        Uniswap V2
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex justify-content-left">
                    <div className=" align-items-baseline">
                      <h6 style={{ fontWeight: "600", color: '#00d395' }}>+0.000094533573581011 UNI-V2</h6>
                      <div
                        className="mb-0 text-muted"
                        style={{ fontSize: "12px", fontWeight: "600" }}
                      >
                        $1,081.16
                      </div>
                    </div>
                  </div>
                </td>

                <td style={{ verticalAlign: "middle" }}>
                  <Link to="https://app.barnbridge.com/">
                    <h6 style={{ fontWeight: "600" }}>0x8b3f...13b7</h6>
                  </Link>
                </td>
                <td>
                  <div className="d-flex justify-content-left">
                    <div className=" align-items-baseline">
                      <Link to="https://app.barnbridge.com/">
                        <h6 style={{ fontWeight: "600" }}>0xa6aa...6acb</h6>
                      </Link>                        <div
                        className="mb-0 text-muted"
                        style={{ fontSize: "12px", fontWeight: "600" }}
                      >
                        08.12.2021 13:06
                      </div>
                    </div>
                  </div>
                </td>

              </tr>
              <tr>
                <td>
                  <div className="d-flex">
                    <img
                      left
                      width="15%"
                      height="15%"
                      style={{
                        margin: "auto",
                        marginRight: "5px",
                        marginLeft: "5px",
                      }}
                      src={icon}
                      alt="Card image cap"
                    />
                    <div className="pl-2 pr-2">
                      <h6 style={{ fontWeight: "600" }}>Transaction</h6>
                      <div
                        className="mb-0 text-muted"
                        style={{ fontSize: "12px", fontWeight: "600" }}
                      >
                        Uniswap V2
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex justify-content-left">
                    <div className=" align-items-baseline">
                      <h6 style={{ fontWeight: "600", color: '#00d395' }}>+0.000094533573581011 UNI-V2</h6>
                      <div
                        className="mb-0 text-muted"
                        style={{ fontSize: "12px", fontWeight: "600" }}
                      >
                        $1,081.16
                      </div>
                    </div>
                  </div>
                </td>

                <td style={{ verticalAlign: "middle" }}>
                  <Link to="https://app.barnbridge.com/">
                    <h6 style={{ fontWeight: "600" }}>0x8b3f...13b7</h6>
                  </Link>
                </td>
                <td>
                  <div className="d-flex justify-content-left">
                    <div className=" align-items-baseline">
                      <Link to="https://app.barnbridge.com/">
                        <h6 style={{ fontWeight: "600" }}>0xa6aa...6acb</h6>
                      </Link>                        <div
                        className="mb-0 text-muted"
                        style={{ fontSize: "12px", fontWeight: "600" }}
                      >
                        08.12.2021 13:06
                      </div>
                    </div>
                  </div>
                </td>

              </tr>
              <tr>
                <td>
                  <div className="d-flex">
                    <img
                      left
                      width="15%"
                      height="15%"
                      style={{
                        margin: "auto",
                        marginRight: "5px",
                        marginLeft: "5px",
                      }}
                      src={icon}
                      alt="Card image cap"
                    />
                    <div className="pl-2 pr-2">
                      <h6 style={{ fontWeight: "600" }}>Transaction</h6>
                      <div
                        className="mb-0 text-muted"
                        style={{ fontSize: "12px", fontWeight: "600" }}
                      >
                        Uniswap V2
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex justify-content-left">
                    <div className=" align-items-baseline">
                      <h6 style={{ fontWeight: "600", color: '#00d395' }}>+0.000094533573581011 UNI-V2</h6>
                      <div
                        className="mb-0 text-muted"
                        style={{ fontSize: "12px", fontWeight: "600" }}
                      >
                        $1,081.16
                      </div>
                    </div>
                  </div>
                </td>

                <td style={{ verticalAlign: "middle" }}>
                  <Link to="https://app.barnbridge.com/">
                    <h6 style={{ fontWeight: "600" }}>0x8b3f...13b7</h6>
                  </Link>
                </td>
                <td>
                  <div className="d-flex justify-content-left">
                    <div className=" align-items-baseline">
                      <Link to="https://app.barnbridge.com/">
                        <h6 style={{ fontWeight: "600" }}>0xa6aa...6acb</h6>
                      </Link>                        <div
                        className="mb-0 text-muted"
                        style={{ fontSize: "12px", fontWeight: "600" }}
                      >
                        08.12.2021 13:06
                      </div>
                    </div>
                  </div>
                </td>

              </tr>
              <tr>
                <td>
                  <div className="d-flex">
                    <img
                      left
                      width="15%"
                      height="15%"
                      style={{
                        margin: "auto",
                        marginRight: "5px",
                        marginLeft: "5px",
                      }}
                      src={icon}
                      alt="Card image cap"
                    />
                    <div className="pl-2 pr-2">
                      <h6 style={{ fontWeight: "600" }}>Transaction</h6>
                      <div
                        className="mb-0 text-muted"
                        style={{ fontSize: "12px", fontWeight: "600" }}
                      >
                        Uniswap V2
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex justify-content-left">
                    <div className=" align-items-baseline">
                      <h6 style={{ fontWeight: "600", color: '#00d395' }}>+0.000094533573581011 UNI-V2</h6>
                      <div
                        className="mb-0 text-muted"
                        style={{ fontSize: "12px", fontWeight: "600" }}
                      >
                        $1,081.16
                      </div>
                    </div>
                  </div>
                </td>

                <td style={{ verticalAlign: "middle" }}>
                  <Link to="https://app.barnbridge.com/">
                    <h6 style={{ fontWeight: "600" }}>0x8b3f...13b7</h6>
                  </Link>
                </td>
                <td>
                  <div className="d-flex justify-content-left">
                    <div className=" align-items-baseline">
                      <Link to="https://app.barnbridge.com/">
                        <h6 style={{ fontWeight: "600" }}>0xa6aa...6acb</h6>
                      </Link>                        <div
                        className="mb-0 text-muted"
                        style={{ fontSize: "12px", fontWeight: "600" }}
                      >
                        08.12.2021 13:06
                      </div>
                    </div>
                  </div>
                </td>

              </tr>

            </tbody>
          </Table>
          <div className="p-24 pagination-wrapper">
            <div className="d-md-flex">
              <small className="m-0 font-weight-bold text-muted">Showing 1 to 10 out of 28839 transactions</small>
              <div className="d-flex pagination align-items-center mt-3 mt-md-0 ml-md-auto">
                <i className="fa fa-angle-left"></i>
                <span className="active">1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span className="mx-2">...</span>
                <span>2884</span>
                <i className="fa fa-angle-right"></i>
              </div>
            </div>
          </div>
        </Card> */}

      </Container>

    </>);
}

export default YieldFarming;