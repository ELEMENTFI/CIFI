import web3 from"./web3";
import $ from 'jquery';
import TESTToken from './TESTToken';
import Web3 from "web3";

function button() {
    const approve = async (event) =>{
     event.preventDefault();
     const accounts = await  web3.eth.getAccounts();
     setapprove(await share.methods.approve("0x409e9135Ab9005abaAEcC6C03E300809848a41E4","999999999900000000000000000000000000000").
     send({
       from: accounts[0]
      
     }));
   }
   const onSubmitNFT = async (event) => {
     window.alert("hiii");
     window.addEventListener('load', async () => { 
       if (window.TESTToken) {
           window.web3 = new Web3(TESTToken);
           try {
             await TESTToken.enable();
             initPayButton()
           } 
           catch (err) {
             $('#status').html('User denied account access', err)
           }
         } 
         else if (window.web3) {
           window.web3 = new Web3(web3.currentProvider)
           initPayButton()
         } 
         else {
           $('#status').html('No Metamask (or other Web3 Provider) installed')
         }
         })
   
       const initPayButton = () => {
         $('.pay-button').click(() => {
           // paymentAddress is where funds will be send to
           const paymentAddress = '0x192c96bfee59158441f26101b2db1af3b07feb40'
           const amountEth = 1
   
           web3.eth.sendTransaction({
             to: paymentAddress,
             value: web3.toWei(amountEth, 'ether')
           }, (err, transactionId) => {
             if  (err) {
               console.log('Payment failed', err)
               $('#status').html('Payment failed')
             } else {
               console.log('Payment successful', transactionId)
               $('#status').html('Payment successful')
             }
           })
         })
       }
   
  
   };

   return(
<div>
  <button onClick={onSubmitNFT}>
pay
  </button>
</div>


   );

  }