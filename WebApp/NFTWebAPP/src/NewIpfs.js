// /* global AlgoSigner */
// import firebase from "firebase";
// import fireDb from "./firebase";
// import Popup from './Popup';
// import axios from 'axios';
import React, { useState,useEffect,useCallback } from "react";
//import fs from 'fs';
const NewIpfs=()=>{


    // const getSHA=(fileName)=> {
    //     return new Promise((resolve, reject) => {
    //       //let hash = crypto.createHash("sha1");
          
    //       let stream = fs.createReadStream(fileName);
    //       stream.on("error", err => reject(err));
    //       //stream.on("data", chunk => hash.update(chunk));
    //       //stream.on("end", () => resolve(hash.digest("hex")));
    //       console.log(stream)
    //     });
    //   }

    let pinataApiKey='88348e7ce84879e143e1';
    let pinataSecretApiKey='e4e8071ff66386726f9fe1aebf2d3235a9f88ceb4468d4be069591eb78d4bf6f';

const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK(pinataApiKey, pinataSecretApiKey);
const loadDoc=()=>{

    //getSHA('./dhon.png')

    alert("new");

    //start

    // const axios = require('axios');
    // const url = 'https://api.pinata.cloud/pinning/pinJSONToIPFS';
    // const data = new FormData();
    // data.append('file', 'demosss');
    // axios
    //   .post(url, data, {
    //     maxBodyLength: 'Infinity', // this is needed to prevent axios from erroring out with large files
    //     headers: {
    //       'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
    //       pinata_api_key: pinataApiKey,
    //       pinata_secret_api_key: pinataSecretApiKey,
    //     },
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     console.log("response")
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });


    //end


    pinata.testAuthentication().then((result) => {
        //handle successful authentication here
        console.log(result);



        const metadata = {
            name: 'demo',
            keyvalues: {
                newKey: 'demos',
                existingKey: 'demos',
                existingKeyToRemove: null
            }
        };
        pinata.hashMetadata('QmRN6acixDMyB6ZT9EWDeUiWVZ5xg8eFKhU5wRFy5jDot3', metadata).then((result) => {
            //handle results here
            console.log(result);

            pinata.userPinnedDataTotal().then((result) => {
                //handle results here
                console.log("result");
                console.log(result);


                //file start

//                 const fs = require('fs');
// //const readableStreamForFile = fs.createReadStream('./dhon.png');
// const optionss = {
//     pinataMetadata: {
//         name: 'demolast',
//         keyvalues: {
//             customKey: 'customValue',
//             customKey2: 'customValue2'
//         }
//     },
//     pinataOptions: {
//         cidVersion: 0
//     }
// };
// pinata.pinFileToIPFS('./dhon.png', optionss).then((result) => {
//     //handle results here
//     console.log(result);
//     console.log("fileresult")
// }).catch((err) => {
//     //handle error here
//     console.log(err);
// });




                //end

                //start

                let ge='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCADCAQMDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECAwT/xAArEAACAgEEAgEDBAIDAAAAAAAAAQIRIQMSMUFRcWEEEyIUIzKBQpGhsfH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/APQRsWZbKyNksllSCqVIJGkiKIoKVEKAEAAAAAAA8mprVqSay+EwPWRtLlnk/Uyqml7MvWk+WFx7WzLZxh9RGkpNpllqwr8W2wY1JnOUhKRzbArZkEKKCACkAIAAChAUggKAPU2ZbDMthGkaRhG0FbRowmWwNFMWLKjVizNk3BG7FmNwsDdizNiwMa7/AB5a9HkpylSy2d9e3JLyi6cNrtckajMfpvLK/pV02jtZSNOH6WNZbOU9KWlJN5T4Z68mZ1KLiwjztkK+SG2UAAAAgFIAQAAFAAQAUAeiiNGiARI2jJUBRZGQDVizIKK2SyAC2yoiNIgqKEAOWp/KPo2rUMcmZW1brnBtU0iK4Sru2/JjTlLfUWz0zjCrbownpwy8P5CprTnGorFmYyny2n8G5yhq0rSfRI6NO8P0A2WTYdopNYLtNMuGwfbO+0m0Dj9sfbO20UBx2Imw7USgOewbDrQoDi4fBNh2IQctgOoAjZLI2ZsDpZbOaYsDdizFiwN2LMWLKN2QzYsDaZpM52VMDqmVHLcaTAssZ8HKM8UdqUuVZ5dT8ZteGZxdNSb3+g1OeaZmE6lbydZakatRTA5flFptHXT1XbS4I3CUcqv7MQ52xWWwPZpL8X8s3QiqikUqJQooAlEaNGWBlmSyZzlKgNg5qZdwGmQw5GXIDrYOW8AdNpNp0oUBzUC7DpQoDnsGw60KA5bBsOtCgOWwbDrQoDlsLtOlCgOe0qRuhQBI8/1UM7l/Z61GnRz1cyA8KwLOs4Lk57QJZ3+mS375Ljg5RienTg5KrpAd00+ChJJUsJEeVh5AAMACMpGBiRykjszLQHKhR0oUBycSOJ1oUBx2g7UANglgmjQJYsaNAzYsmjQJYsuiglixooJZuMcWwIk3wivTtU3/AKN2RlHO2nT5/wCznqOtVp+LOjt4eUcdW3Tbyu/P/gGJmaK89m4vTjzbfoimnpN5eEehKlRj7+n22v6EtaCdRyVGpJyeW0jUdsVSwjC3Szx7NxilnlgWk+E0YOpHT5A52LLKNZXBkgMhSE0AANCiUUDRKBQNEAKQQFAEBQBCgAAABYK38HUzFVH2VM1Abrk5ym3hIj1L1JQeK4MOT4Qqxpufx/sk2/tNPOOUZptfyozKlpySbbaoLV04XHdWZZD02eiKSSXhUHRWXn+0+zpCCXRv2aS8AVAAAUgsC84ZykqdHUkla+USwcgAZAAAAAAAAAEAFBCgAAAAAAsVbIdYKo+ywGFj2V8ZMXZocteDlUo4kv8Ak5RnuXhrk9LPPrQuW6GJd/IFxw2SliKTzJZY04Pmar4OnOrFeLZFtdST/GN9lSLJWqKjkoJq23ns1ottZH2+rdGk6VJFGrMtkbZhtkHRujDdsXaJFZA6RwbMGkwMTVP2ZOklao5maAAIAIAAAAAAAAAAAIABUrKEVbo7Wl2ZjVUkytKuDUgbkzMmusGOGYk3LCdIoT1FwjWnXL5Oe2it1wBuQgst/BjfSyWM0/A1cdrSDmuDnuRHSzwNMdLtFOcJNq9r2+WasIrMyyUMDCfRqJzliSZtOgNt0WLTM1borqKpcgdDlNU/ZVOuUWdSja6JRzBQZEBQBAUAAAAAAAAADUUZNReSwbvoy7ZG8sy23hGgtPBlxrNlpRWTlKV+gJLU/dilxeTfJnT07e5r0aIMyX9kTilmNM3VmJX4TQWKpJcFX7uqof4rLOWPB0+lwpS8sQr14aqsEcU+qImFJlQcK4dmWmbbbLaXIHKUHWUYjadPNdnou2AMboqleWVKD4dmnXZmUU7TWQNbSUlx2crcHcW38NnSE1NWue0BgFlz7IYAAAAAABABQQAUEAFKjJU6EoPkOSirMtnOTtmglJyeS6at56MpXwdYqkS0aONts6nOC7EFfFIzsvujdFS7KPPNSSeDelJRgk2d9qfKMS0l4KC1U8I0po5bHHKMSUn2wPXFp9mZPJw05YpvJ1oDouLIpU8swm1grSeUBtytGHO18ozTQrsDW7cvkxlS3LkNNZRVJdgdJO0n5IS8IGKKCACggAgAIAAAoIAKCABJWqsyoLtmil0RJLhFAIBiPDNmUufZqCxRp+AsKwuTQqKRd+wAasy4GrLYHm1IbZewpSXZ31EpR+UcqAm9vmjUWybTcYsB+fwT8/g0DOjm1IKLvJ0ITRQQEFBABQQAAAAAAAAAAAAAAAAAUnYBqDT4C4ANAuX7KABGAABkACeDpEADL5fsgBgAAQAAAAAAAAf/2Q==';

                const body = {
                    message: ge
                };
                const options = {
                    pinataMetadata: {
                        name: 'demokohli',
                        keyvalues: {
                            customKey: 'customValue',
                            customKey2: 'customValue2'
                        }
                    },
                    pinataOptions: {
                        cidVersion: 0
                    }
                };
                pinata.pinJSONToIPFS(body, options).then((result) => {
                    //handle results here
                    console.log(result);
                    console.log("jsonresult")
                }).catch((err) => {
                    //handle error here
                    console.log(err);
                });
                


                //end


                //start git


                // const metadataFilter = {
                //     name: 'demo',
                //     keyvalues: {
                //         testKeyValue: {
                //             value: 'demo',
                //             op: 'eq'
                //         },
                //         total: {
                //             value: 60000,
                //             secondValue: 618776,
                //             op: 'between'
                //         }
                        
                //     }
                // };
                
                const filters = {
                    status : 'pinned',
                    pageLimit: 10,
                    pageOffset: 0
                    //metadata: metadataFilter
                };
                pinata.pinList(filters).then((result) => {
                    //handle results here
                    console.log(result);
                    console.log("gitresult")
                }).catch((err) => {
                    //handle error here
                    console.log(err);
                });
                


                //stop git
//start

// const axios = require('axios');
// //const fs = require('fs');
// const FormData = require('form-data');

// const pinFileToIPFS = (pinataApiKey, pinataSecretApiKey) => {
//     console.log("pin")
//     const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

//     //we gather a local file for this example, but any valid readStream source will work here.
//     let data = new FormData();
//     data.append('file', fs.createReadStream('./dhon.png'));

//     //You'll need to make sure that the metadata is in the form of a JSON object that's been convered to a string
//     //metadata is optional
//     const metadata = JSON.stringify({
//         name: 'testname',
//         keyvalues: {
//             exampleKey: 'exampleValue'
//         }
//     });
//     data.append('pinataMetadata', metadata);

//     //pinataOptions are optional
//     const pinataOptions = JSON.stringify({
//         cidVersion: 0,
//         customPinPolicy: {
//             regions: [
//                 {
//                     id: 'FRA1',
//                     desiredReplicationCount: 1
//                 },
//                 {
//                     id: 'NYC1',
//                     desiredReplicationCount: 2
//                 }
//             ]
//         }
//     });
//     data.append('pinataOptions', pinataOptions);

//     return axios
//         .post(url, data, {
//             maxBodyLength: 'Infinity', //this is needed to prevent axios from erroring out with large files
//             headers: {
//                 'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
//                 pinata_api_key: pinataApiKey,
//                 pinata_secret_api_key: pinataSecretApiKey
//             }
//         })
//         .then(function (response) {
//             //handle response here
//         })
//         .catch(function (error) {
//             //handle error here
//         });
// };


//end




            }).catch((err) => {
                //handle error here
                console.log(err);
            });


            
            //start

// const sourcePath = 'C:/Users/ramam/Downloads/dhon.png';
// console.log(sourcePath);
// const options = {
//     pinataMetadata: {
//         name: 'My Awesome Website',
//         keyvalues: {
//             customKey: 'customValue',
//             customKey2: 'customValue2'
//         }
//     },
//     pinataOptions: {
//         cidVersion: 0
//     }
// };
// pinata.pinFromFS(sourcePath, options).then((result) => {
//     //handle results here
//     console.log(result);
// }).catch((err) => {
//     //handle error here
//     console.log("error");
//     console.log("error",err);

// });
//

var http = require('http');
var fs = require('fs').promises;

http.createServer(function(req, res) {
  // The filename is simple the local directory and tacks on the requested url
  var filename = __dirname+req.url;

  // This line opens the file as a readable stream
  var readStream = fs.createReadStream('./he.txt');

  // This will wait until we know the readable stream is actually valid before piping
  readStream.on('open', function () {
    // This just pipes the read stream to the response object (which goes to the client)
    readStream.pipe(res);
    console.log("Resultget",res)
  });

  // This catches any errors that happen while creating the readable stream (usually invalid names)
  readStream.on('error', function(err) {
    res.end(err);
  });
}).listen(3000);


//

//const fs = require('fs').promises;
const readableStreamForFile = fs.createReadStream('helloworld');
console.log("reaf",readableStreamForFile)
const options = {
    pinataMetadata: {
        name: 'MyCustomName',
        keyvalues: {
            customKey: 'customValue',
            customKey2: 'customValue2'
        }
    },
    pinataOptions: {
        cidVersion: 0
    }
};
pinata.pinFileToIPFS(readableStreamForFile, options).then((result) => {
    //handle results here
    console.log(result);
}).catch((err) => {
    //handle error here
    console.log(err);
});




            //end




        }).catch((err) => {
            //handle error here
            console.log(err);
        });

    }).catch((err) => {
        //handle error here
        console.log(err);
    });


}

let addImgs='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCADCAQMDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECAwT/xAArEAACAgEEAgEDBAIDAAAAAAAAAQIRIQMSMUFRcWEEEyIUIzKBQpGhsfH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/APQRsWZbKyNksllSCqVIJGkiKIoKVEKAEAAAAAAA8mprVqSay+EwPWRtLlnk/Uyqml7MvWk+WFx7WzLZxh9RGkpNpllqwr8W2wY1JnOUhKRzbArZkEKKCACkAIAAChAUggKAPU2ZbDMthGkaRhG0FbRowmWwNFMWLKjVizNk3BG7FmNwsDdizNiwMa7/AB5a9HkpylSy2d9e3JLyi6cNrtckajMfpvLK/pV02jtZSNOH6WNZbOU9KWlJN5T4Z68mZ1KLiwjztkK+SG2UAAAAgFIAQAAFAAQAUAeiiNGiARI2jJUBRZGQDVizIKK2SyAC2yoiNIgqKEAOWp/KPo2rUMcmZW1brnBtU0iK4Sru2/JjTlLfUWz0zjCrbownpwy8P5CprTnGorFmYyny2n8G5yhq0rSfRI6NO8P0A2WTYdopNYLtNMuGwfbO+0m0Dj9sfbO20UBx2Imw7USgOewbDrQoDi4fBNh2IQctgOoAjZLI2ZsDpZbOaYsDdizFiwN2LMWLKN2QzYsDaZpM52VMDqmVHLcaTAssZ8HKM8UdqUuVZ5dT8ZteGZxdNSb3+g1OeaZmE6lbydZakatRTA5flFptHXT1XbS4I3CUcqv7MQ52xWWwPZpL8X8s3QiqikUqJQooAlEaNGWBlmSyZzlKgNg5qZdwGmQw5GXIDrYOW8AdNpNp0oUBzUC7DpQoDnsGw60KA5bBsOtCgOWwbDrQoDlsLtOlCgOe0qRuhQBI8/1UM7l/Z61GnRz1cyA8KwLOs4Lk57QJZ3+mS375Ljg5RienTg5KrpAd00+ChJJUsJEeVh5AAMACMpGBiRykjszLQHKhR0oUBycSOJ1oUBx2g7UANglgmjQJYsaNAzYsmjQJYsuiglixooJZuMcWwIk3wivTtU3/AKN2RlHO2nT5/wCznqOtVp+LOjt4eUcdW3Tbyu/P/gGJmaK89m4vTjzbfoimnpN5eEehKlRj7+n22v6EtaCdRyVGpJyeW0jUdsVSwjC3Szx7NxilnlgWk+E0YOpHT5A52LLKNZXBkgMhSE0AANCiUUDRKBQNEAKQQFAEBQBCgAAABYK38HUzFVH2VM1Abrk5ym3hIj1L1JQeK4MOT4Qqxpufx/sk2/tNPOOUZptfyozKlpySbbaoLV04XHdWZZD02eiKSSXhUHRWXn+0+zpCCXRv2aS8AVAAAUgsC84ZykqdHUkla+USwcgAZAAAAAAAAAEAFBCgAAAAAAsVbIdYKo+ywGFj2V8ZMXZocteDlUo4kv8Ak5RnuXhrk9LPPrQuW6GJd/IFxw2SliKTzJZY04Pmar4OnOrFeLZFtdST/GN9lSLJWqKjkoJq23ns1ottZH2+rdGk6VJFGrMtkbZhtkHRujDdsXaJFZA6RwbMGkwMTVP2ZOklao5maAAIAIAAAAAAAAAAAIABUrKEVbo7Wl2ZjVUkytKuDUgbkzMmusGOGYk3LCdIoT1FwjWnXL5Oe2it1wBuQgst/BjfSyWM0/A1cdrSDmuDnuRHSzwNMdLtFOcJNq9r2+WasIrMyyUMDCfRqJzliSZtOgNt0WLTM1borqKpcgdDlNU/ZVOuUWdSja6JRzBQZEBQBAUAAAAAAAAADUUZNReSwbvoy7ZG8sy23hGgtPBlxrNlpRWTlKV+gJLU/dilxeTfJnT07e5r0aIMyX9kTilmNM3VmJX4TQWKpJcFX7uqof4rLOWPB0+lwpS8sQr14aqsEcU+qImFJlQcK4dmWmbbbLaXIHKUHWUYjadPNdnou2AMboqleWVKD4dmnXZmUU7TWQNbSUlx2crcHcW38NnSE1NWue0BgFlz7IYAAAAAABABQQAUEAFKjJU6EoPkOSirMtnOTtmglJyeS6at56MpXwdYqkS0aONts6nOC7EFfFIzsvujdFS7KPPNSSeDelJRgk2d9qfKMS0l4KC1U8I0po5bHHKMSUn2wPXFp9mZPJw05YpvJ1oDouLIpU8swm1grSeUBtytGHO18ozTQrsDW7cvkxlS3LkNNZRVJdgdJO0n5IS8IGKKCACggAgAIAAAoIAKCABJWqsyoLtmil0RJLhFAIBiPDNmUufZqCxRp+AsKwuTQqKRd+wAasy4GrLYHm1IbZewpSXZ31EpR+UcqAm9vmjUWybTcYsB+fwT8/g0DOjm1IKLvJ0ITRQQEFBABQQAAAAAAAAAAAAAAAAAUnYBqDT4C4ANAuX7KABGAABkACeDpEADL5fsgBgAAQAAAAAAAAf/2Q==';


  
  return (
    <div >

        <h1 style={{color:'white'}}>hello</h1>

        <div style={{color:'white'}}>

      <button type="submit" onClick={loadDoc}>Algorand </button>
      </div>
      
      <img   src={addImgs}  style={{height:120,width:120,marginTop:'10px'}} alt="" />

  </div>
  );
}
export default NewIpfs;