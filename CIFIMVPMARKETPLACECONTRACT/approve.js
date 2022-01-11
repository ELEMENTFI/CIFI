const approvalProgramSourceInitial = `#pragma version 5
txn ApplicationID
int 0
==
bnz newapp
txn OnCompletion
int OptIn
==
bnz finished
txn OnCompletion
int UpdateApplication
==
bnz update
txna ApplicationArgs 0
byte "createlisting"
==
bnz createlisting
txna ApplicationArgs 0
byte "Buynow"
==
bnz buynow


buynow:
global GroupSize
int 7
==
bz failed
gtxn 0 TypeEnum
int 6
==
//&&
gtxn 2 Sender
gtxn 3 AssetReceiver
==
&&
gtxn 2 Receiver
byte "E"
app_global_get
==
&&

gtxn 2 Amount
int 100
/
int 95
*
gtxn 4 Amount
==
bz failed
gtxn 2 Amount
int 5
*
int 100
/
gtxn 6 Amount
==
bz failed
gtxn 3 TypeEnum
int axfer
==
&&
gtxn 3 AssetReceiver
gtxn 0 Sender
==
&&
gtxn 5 ConfigAssetManager
gtxn 0 Sender
==
&&
byte "C"
app_global_get
gtxn 6 Receiver
==
&&
bnz finished

createlisting:
global GroupSize
int 5
==
bz failed
gtxn 0 TypeEnum
int 6
==
//&&
gtxn 0 Sender
gtxn 3 AssetSender
==
&&
//byte "MyNFTPrice"
//gtxna 0 ApplicationArgs 1
//btoi
//app_local_put
gtxn 3 TypeEnum
int axfer
==
bz failed
gtxn 3 AssetReceiver
byte "E"
app_global_get
==
gtxn 4 AssetSender
gtxn 1 Sender
==
&&
gtxn 4 ConfigAssetManager
byte "E"
app_global_get
==
bnz finished
bz failed

update:
txn Sender
byte "C"
app_global_get
==
bz failed
byte "E"
txna ApplicationArgs 0
app_global_put
b finished


newapp:
byte "C"
txn Sender
app_global_put
byte "E"
global ZeroAddress
app_global_put
b finished

finished:
int 1
return

failed:
int 0
return`;
export default approvalProgramSourceInitial;