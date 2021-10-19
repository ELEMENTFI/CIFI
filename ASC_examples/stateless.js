const { makeLogicSig } = require('algosdk');
const algosdk = require('algosdk');
// Import the filesystem module 
const fs = require('fs'); 


const token = {
    'X-API-Key': 'U5ivl9nv603lYUBRN3sHH5g0AzCwsetC7OAtYj9D'
   };
const server = "https://testnet-algorand.api.purestake.io/ps2";
const port = "";


// import your private key mnemonic
// let PASSPHRASE = "<25-word-mnemonic>";
// let PASSPHRASE = "awake used crawl list cruel harvest useful flag essay speed glad salmon camp sudden ride symptom test kind version together project inquiry diet abandon budget";

// var myAccount = algosdk.mnemonicToSecretKey(PASSPHRASE);
// console.log("My Address: " + myAccount.addr);
// Function used to wait for a tx confirmation
const waitForConfirmation = async function (algodclient, txId) {
    let response = await algodclient.status().do();
    let lastround = response["last-round"];
    while (true) {
        const pendingInfo = await algodclient.pendingTransactionInformation(txId).do();
        if (pendingInfo["confirmed-round"] !== null && pendingInfo["confirmed-round"] > 0) {
            //Got the completed Transaction
            console.log("Transaction " + txId + " confirmed in round " + pendingInfo["confirmed-round"]);
            break;
        }
        lastround++;
        await algodclient.statusAfterBlock(lastround).do();
    }
};
// create an algod v2 client
let algodclient = new algosdk.Algodv2(token, server, port);

(async () => {

    // get suggested parameter
    let params = await algodclient.getTransactionParams().do();
    // comment out the next two lines to use suggested fee 
    params.fee = 1000;
    params.flatFee = true;
    console.log(params);
    // create logic sig
    // samplearg.teal
    // This code is meant for learning purposes only
    // It should not be used in production
    // arg_0
    // btoi
    // int 123
    // ==
    // see more info here: https://developer.algorand.org/docs/features/asc1/sdks/#accessing-teal-program-from-sdks
    var fs = require('fs'),
        path = require('path'),
        filePath = path.join(__dirname, 'samplearg.teal');
    // filePath = path.join(__dirname, <'fileName'>);
    let data = fs.readFileSync(filePath);
    let results = await algodclient.compile(data).do();
    console.log("Hash = " + results.hash);
    console.log("Result = " + results.result);
    // let program = new Uint8Array(Buffer.from(<"base64-encoded-program">, "base64"));
    let program = new Uint8Array(Buffer.from(results.result, "base64"));
    // Use this if no args
    // let lsig = algosdk.makeLogicSig(program);

    // String parameter
    // let args = ["<string here>"];
    // let lsig = algosdk.makeLogicSig(program, args);
    // Integer parameter
    let args = [];
    args.push(algosdk.encodeUint64(123));

    let lsig = algosdk.makeLogicSig(program, args);
    //console.log("account = 123",myAccount, "end")
    // sign the logic signature with an account sk
    // lsig.sign(myAccount.sk);
    
    // Setup a transaction
    let sender = lsig.address();
    let receiver = "SOEI4UA72A7ZL5P25GNISSVWW724YABSGZ7GHW5ERV4QKK2XSXLXGXPG5Y";
    // let receiver = "<receiver-address>"";
    let amount = 10000;
    let closeToRemaninder = undefined;
    let note = undefined;
    let txn = algosdk.makePaymentTxnWithSuggestedParams(sender, receiver, amount, closeToRemaninder, note, params)

    // Create the LogicSigTransaction with contract account LogicSig
    let rawSignedTxn = algosdk.signLogicSigTransactionObject(txn, lsig);
    // fs.writeFileSync("simple.stxn", rawSignedTxn.blob);
    // send raw LogicSigTransaction to network    
    let tx = (await algodclient.sendRawTransaction(rawSignedTxn.blob).do());
    console.log("Transaction : " + tx.txId);    
    await waitForConfirmation(algodclient, tx.txId);

})().catch(e => {
    console.error(e);
});
