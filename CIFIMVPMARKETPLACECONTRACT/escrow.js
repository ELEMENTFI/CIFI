const data = `#pragma version 5
gtxn 0 TypeEnum
int 4
==
bnz opt_in

gtxn 0 TypeEnum
int 5
==
gtxn 0 ApplicationArgs 0
byte "createlisting"
==
&&
bnz createlisting

gtxn 0 TypeEnum
int 5
==
gtxn 0 ApplicationArgs 0
byte "Buynow"
==
&&
bnz buynow


opt_in:
int 1
return
createlisting:
global GroupSize
int 5
==
gtxn 0 TypeEnum
int 6
==
&&
// The specific App ID must be called
// This should be changed after creation
gtxn 0 ApplicationID
int 50714558
==
&&
// The applicaiton call must either be
// A general applicaiton call or a delete
// call
gtxn 0 OnCompletion
int NoOp
==
int DeleteApplication
gtxn 0 OnCompletion
==
||
//&&
int 1
return

buynow:
global GroupSize
int 7
==
gtxn 0 TypeEnum
int 6
==
&&
// The specific App ID must be called
// This should be changed after creation
gtxn 0 ApplicationID
int 50714558
==
&&
// The applicaiton call must either be
// A general applicaiton call or a delete
// call
gtxn 0 OnCompletion
int NoOp
==
int DeleteApplication
gtxn 0 OnCompletion
==
||
&&
int 1
return`;
export default data;