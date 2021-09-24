import Web3 from 'web3';



// ADDITION This is needed to allow this application to interact with metamask

//window.alert("Do you want to connect with metamask");

//window.ethereum.enable();



// window.web3 coming from metamask

const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
console.log('currProvider ');

console.log(web3);

console.log('currProvider',web3);

//console.log(currProvider);



//  Returns our version of web3 with metamask provider irrespective of web3 version injected by metamask

export default web3;