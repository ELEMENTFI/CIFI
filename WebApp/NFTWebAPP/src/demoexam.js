import React, { useState,useEffect,useCallback } from "react";
//import { NFTStorage, File } from 'nft.storage'
const demoexam=async()=>{


    const axios = require('axios');


    const test=()=>{

    

    const url = `https://api.pinata.cloud/data/testAuthentication`;
    return axios
        .get(url, {
            headers: {
                pinata_api_key: '16c67ab08c2dc2f36e8c',
                pinata_secret_api_key: 'QmfWzpNPhwVA6o7Hqh5i2XiJHskpSExQounXmmaRqm9VNB'
            }
        })
        .then(function (response) {
            //handle your response here
        })
        .catch(function (error) {
            //handle error here
        });

    }

//const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDI5RThhQkI4NzI4ODZhNjBkRWQ0MTI1RDYxNzA5NTMwOTgwNTUwNDIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYyNDU1OTU2OTYwNiwibmFtZSI6ImRlbW9rZXkifQ.25DslAudtH8PWQJMeIqBYAeRPV3uT3i8avwTGLKY8ls'
//const client = new NFTStorage({ token: apiKey })

// const metadata = await client.store({
//   name: 'Pinpie',   
//   description: 'Pin is not delicious beef!',
//   image: new File([/* data */], 'pinpie.jpg', { type: 'image/jpg' })
// })
//console.log(metadata.url)

    // const cid = await ipfs.add(
    //     { path: 'metadata.json', content: aJsonString }, 
    //     { wrapWithDirectory: true }
    //   )

    // const IPFS= require('ipfs-mint');
    // const ipfs=new IPFS({host:'ipfs.infura.io',port:5001,protocol:'https'});
    // const data ="QmfWzpNPhwVA6o7Hqh5i2XiJHskpSExQounXmmaRqm9VNB";
    // ipfs.add(data,(err,hash)=>{
    //     if(err){
    //         alert(err)
    //     }
    //     else{
    //         console.log('https://ipfs.infura.io/ipfs/'+hash)
    //     }
    // })


// const express = require('express')
// const app = express()

// const fs =require('fs');

// var multer  = require('multer')
// var upload = multer({ dest: 'uploads/' })

// var ipfsAPI = require('ipfs-api')
// var ipfs = ipfsAPI('ipfs.infura.io', '5001', {protocol: 'https'})
 
// app.get('/', function (req, res) {
// //   res.send('Hello World')
//     res.sendFile(__dirname+'/public/index.html');
// })

// app.post('/profile', upload.single('avatar'), function (req, res, next) {
//     // req.file is the `avatar` file
//     // req.body will hold the text fields, if there were any
//     console.log(req.file);
//     var data = new Buffer(fs.readFileSync(req.file.path));
//     ipfs.add(data, function (err,file){
//         if(err){
//             console.log(err);
//         }
//         console.log(file);
//         res.send(file[0].hash);
//     })

//   })

//   app.get('/download/:ID',function(req,res){
//       console.log(req.params.ID);
//       res.redirect('https://ipfs.io/ipfs/'+req.params.ID);
//   })

return(
    <div>
        <h1 style={{color:'white'}}>helloo</h1>

        <button onClick={test}>GETACC</button>


        

        </div>
);
 
};
export default demoexam;
//app.listen(3000)