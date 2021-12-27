/* global AlgoSigner */
import MyAlgoConnect from '@randlabs/myalgo-connect';
import { Container, Button } from "reactstrap"
import web3 from '../../web3';
import React, { useState,useEffect } from "react";
import Popup from "../../Popup";
import Modald from "../../ModalD";
import FolowStepsd from "../../FolowStepsd";
import ModalList from "../../components/ModalList";

import styles from "../../components/ConnectWallet.module.sass";

import FolowStepsList from "../../components/FolowStepList";

import ModaldConnect from "../ModalDConnect";
import FolowStepsdConnect from "../FolowStepsdConnect";

//window.wallet="";
const algosdk = require('algosdk');
const { MyAlgoWallet } = require('@randlabs/myalgo-connect');
//import MyAlgoConnect from '@randlabs/myalgo-connect';
//const myAlgoWallet = new MyAlgoConnect();
const algodClient = new algosdk.Algodv2('', 'https://api.testnet.algoexplorer.io', '');
const myAlgoConnect = new MyAlgoConnect();

const Header = (props) => {
    const [isListtry, setisListtry] = useState([]);
    const [isOpenlisttry, setIsOpenlisttry] = useState(false);    
    const [isListtrys, setisListtrys] = useState();
    const [isOpen, setIsOpen] = useState(false);
    const[dis,setDis] = useState("");
   
    const Connectalgosigner=async()=>{                          
        AlgoSigner.connect()
        .then((d) => {
        AlgoSigner.accounts({
          ledger: 'TestNet'
        })
        .then((d) => {    
          console.log("listaccount",d)
         localStorage.setItem("wallet",d[3].address)
         //window.location.reload();
          setisListtry(d)
          setIsOpenlisttry(true)  
        })
        .catch((e) => {
          console.error(e);
        }); 
        })
        .catch((e) => {
        console.error(e);
        });
        
                
                
           
            }
    const Connectwallet = async () => {
      try {
        const myAlgoConnect = new MyAlgoConnect();
        const accountswall = await myAlgoConnect.connect();
        const addresseswall = accountswall.map(accountswall => accountswall.address);

        console.log("listaccount",accountswall)
             localStorage.setItem("wallet",accountswall[0].address)
             //window.location.reload();
              setisListtry(accountswall)
              setIsOpenlisttry(true)  
      }
      catch (err) {
          console.error(err);
      }
  }
    const Disconnect=()=>{            
      
              localStorage.setItem("wallet","")
              window.location.reload()
               
               
           }
    


    return (<>
       <Modald visible={isOpen} onClose={() => setIsOpen(false)}>
        <FolowStepsdConnect viewhistory={dis}  />
      </Modald>
        <div className="header bg-site-secondary ">
            <Container fluid className="px-md-5">
                <div className="d-flex align-items-center font-semi-bold">
                    <span className="mr-3 toggler-btn" ><i className="fa fa-bars"></i></span>
                   
                    <h5 className="m-0" id="header-title"></h5>
                    <div className="ml-auto topbar-btns">
                      <Button color="outline-site-primary" >Algorand </Button>
                        {
                            localStorage.getItem("wallet")===null || localStorage.getItem("wallet")==="" ||localStorage.getItem("wallet")==='undefined' ||localStorage.getItem("wallet")===undefined ?  
                            (<Button color="site-primary" className="ml-4"onClick={Connectwallet}>CONNECT WALLET</Button>):(
                              < ><Button color="site-primary" className="ml-4" onClick={Connectwallet}>{localStorage.getItem("wallet").slice(0,10)}......{localStorage.getItem("wallet").slice(39,42)}</Button>
                                &nbsp; &nbsp;
                                <Button color="outline-site-primary" onClick={Disconnect}>DISCONNECT</Button>
                                </>    
                            )
                        }
                      
                    </div>
                </div>
            </Container>
        </div>
        <ModalList visible={isOpenlisttry} >
        <FolowStepsList className={styles.steps} data={isListtry} datas={(a)=>
        {
          setisListtrys(a)
          setIsOpenlisttry(false)          
          setIsOpen(true)
          localStorage.setItem("net","testnet")
        }
        }/>          
    </ModalList>
    </>);
}

export default Header;