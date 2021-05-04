import React, { useState,useEffect } from "react";

//import { Router, Route, Switch, Link } from "react-router-dom";

//import web3 from './web3';

//import { ReactComponent as Logo } from './logo.svg';

// import { Offline, Online } from "react-detect-offline";

// import Popup from './Popup';

import firebaseConfig from './firebase';

import Login from './Logins';
//import Heros from './Heros';
import Explore from './Explore';
// import Followingpage from "./Followingpage";
// import Activitypage from "./Activitypage";
// import Howitworkpage from "./Howitworkpage";
// import Communitypage from "./Communitypage";
// import Salepagecopy from "./Salepagecopy";
// import Nft from "./Nft";
//import {  RecaptchaVerifier } from "firebase";

import axios from 'axios';
import Popup from './Popup';
import { Link } from "react-router-dom";

const App=() => {

  const [isOpenset, setIsOpenset] = useState(false);

  const [tcode,setTcode] = useState("");

  const[statusadd,setStatusadd]=useState("");

  const[detailsadd,setDetailsadd]=useState("");

  const [isOpenNext, setIsOpenNext] = useState(false);

  const[phoneNumberLo,setPhoneNumberLo]=useState('');  
  const[passwordPhoneLo,setpasswordPhoneLo]=useState('');  

  // let g1=localStorage.getItem('myPhoneNumber');
  // let g2=localStorage.getItem('myPhonePass');



  // if(g1!=='' && g2!==''){

  //   setIsOpenNext(true);

  // }


  const togglePopupset = () => {
    setIsOpenset(false);    
  }



  const[phoneNumber,setPhoneNumber]=useState('');  
  const[passwordPhone,setpasswordPhone]=useState('');  

  const clearInputs=()=>{
    setEmail('');
    setPassword('');
  }

  const clearErrors=()=>{
    setEmailError('');
    setPasswordError('');
  }

  const[user,setUser]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[emailError,setEmailError]=useState('');
  const[passwordError,setPasswordError]=useState('');
  const[hasAccount,setHasAccount]=useState(false);
  const[hasAccountO,setHasAccountO]=useState(false);

  // const[SignInM,setSignInM]=useState();

  
  //const apikeyuri='https://2factor.in/API/V1/0824764a-ac0e-11eb-80ea-0200cd936042/BAL/SMS';

  const phoneAuthLogin=()=>{
    

    console.log("mbnumber",phoneNumber);
    console.log("mbpassword",passwordPhone);

    firebaseConfig.database().ref("mobilenumber").child(phoneNumber).child('number').on("value",(data)=>{
      if(data){
       console.log("mbc1",data.val());
       setPhoneNumberLo(data.val());
      }
    });
    firebaseConfig.database().ref("mobilenumber").child(phoneNumber).child('password').on("value",(data)=>{
      if(data){
        console.log("mbc2",data.val());
        setpasswordPhoneLo(data.val());

        localStorage.setItem('myPhoneNumber',phoneNumber); 
        localStorage.setItem('myPhonePass',passwordPhone); 
        setIsOpenNext(true);

      }
    });



    

    // .then(()=>{setIsOpenNext(true)})
    

    // if(phoneNumberLo === phoneNumber && passwordPhoneLo === passwordPhone){
    //     console.log("loginphone","success");
    // }

  }

  

  const phoneAuth=()=>{

    console.log("mbnumber",phoneNumber);
    console.log("mbpassword",passwordPhone);
    const apikeyuri=`https://2factor.in/API/V1/0824764a-ac0e-11eb-80ea-0200cd936042/SMS/${phoneNumber}/AUTOGEN`;

    axios.request(`${apikeyuri}`)
        .then((response)=>{
          
          setStatusadd(response.data.Status);
          setDetailsadd(response.data.Details);

          setIsOpenset(true);

          //console.log("resgog",response.data.Status);

        //   if(statusadd === 'Success' && detailsadd !== ' ')
        // {
        // }else{          
        // }         
        }).catch(error => console.error(`Error: ${error}`));       
    
  }

  const setotpCheck=()=>{

    setIsOpenset(false); 

    
    localStorage.setItem('myPhoneNumber',phoneNumber); 
    localStorage.setItem('myPhonePass',passwordPhone); 

    let apiuriotp=`https://2factor.in/API/V1/0824764a-ac0e-11eb-80ea-0200cd936042/SMS/VERIFY/${detailsadd}/${tcode}`
    console.log("fir1",statusadd);
    console.log("fir2",detailsadd);
    console.log("fir3",tcode);


    axios.get(`${apiuriotp}`)
        .then((response)=>{

          setUser(true);
          console.log("resgogotp",response.data.Details);

          let ref2=firebaseConfig.database().ref(`mobilenumber/${phoneNumber}`);

                        const db = ref2.push().key;

                         
                        console.log("dbcheckappjs",db)

                        ref2.set({id:db,profileimageUrl:"",name:"",number:phoneNumber,password:passwordPhone})


          setIsOpenNext(true);

        //   if(statusadd === 'Success' && detailsadd !== ' ')
        // {


        //   setIsOpenset(true);

        // }else{
          
        // }
         
          
        }).catch(error => console.error(`Error: ${error}`));       

  }
  

// const auth = firebaseConfig.auth();
// auth.languageCode = 'it';
// const appVerifier = window.recaptchaVerifier;

// // To apply the default browser preference instead of explicitly setting it.
// // firebase.auth().useDeviceLanguage();

// window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
//   'size': 'normal',
//   'callback': (response) => {
//     // reCAPTCHA solved, allow signInWithPhoneNumber.
//     // ...

//     firebaseConfig.auth().signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//     .then((confirmationResult) => {
//       // SMS sent. Prompt user to type the code from the message, then sign the
//       // user in with confirmationResult.confirm(code).
//       window.confirmationResult = confirmationResult;
//       // ...
//     }).catch((error) => {
//       // Error; SMS not sent
//       // ...
//     });



//   },
//   'expired-callback': () => {
//     // Response expired. Ask user to solve reCAPTCHA again.
//     // ...
//   }
// }, auth);


// const setuprecaptcha =()=>{
//   window.recaptchaVerifier = new firebaseConfig.auth.RecaptchaVerifier('recaptcha-container', {
//       size: 'invisible',
//       callback: function (response) {
//           console.log("recature resolved")
//           this.onSignInSubmit();
//       }
//   });

// }


//const phoneAuth=(event) =>{

  
    
  // event.preventDefault();
  // setuprecaptcha();
  // //var phoneNumber = valu;
  // var appVerifier = window.recaptchaVerifier;
  // firebaseConfig.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
  //     .then(function (confirmationResult) {
  //         console.log("Success");
  //         // SMS sent. Prompt user to type the code from the message, then sign the
  //         // user in with confirmationResult.confirm(code).
  //         window.confirmationResult = confirmationResult;
  //         var verificationId = window.prompt("Enter otp")
  //         confirmationResult
  //             .confirm(verificationId)
  //             .then(function (result) {
  //                 // User signed in successfully.
  //                 var user = result.user;
  //                 user.getIdToken().then(idToken => {
  //                     window.localStorage.setItem('idToken', idToken);

                     
  //                     console.log(idToken);
  //                 });
  //             })
  //             .catch(function (error) {
  //                 // User couldn't sign in (bad verification code?)
  //                 console.error("Error while checking the verification code", error);
  //                 window.alert(
  //                     "Error while checking the verification code:\n\n" +
  //                     error.code +
  //                     "\n\n" +
  //                     error.message
  //                 );
  //             });

  //     })
  //     .catch(function (error) {
  //         console.log("sign Up error:" + error.code);
  //     });

//}


  //const phoneAuth=()=>{

    // let recaptcha=new firebaseConfig.auth.RecaptchaVerifier('recaptcha');
    // let numberss=phoneNumber;
    // firebaseConfig.auth().signInWithPhoneNumber(numberss,recaptcha).then(function(e){
    //   let code=prompt('enter otp');
    //   if(code === null){

    //     return;

    //   }else{

    //     e.confirm(code).then(function(result){
    //       console.log("presult",result.user);

    //     })

    //   }
    // }).catch((error)=>{
    //   console.log("perror",error);
    // })
    
    // console.log("resp",phoneNumber);

    //     firebaseConfig.auth().signInWithPhoneNumber(phoneNumber)
    // .then((confirmationResult) => {
    //   // SMS sent. Prompt user to type the code from the message, then sign the
    //   // user in with confirmationResult.confirm(code).
    //   window.confirmationResult = confirmationResult;
    //   console.log("res1",confirmationResult);
    //   // ...
    // }).catch((error) => {
    //   // Error; SMS not sent
    //   // ...
    //   console.log("res2",error);
    // });

  //}
  
  
  
  const handleLogin=()=>{

    clearErrors();


    //alert("email",email)

    //console.log("emails",email)

    firebaseConfig
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch((err) =>{
      // eslint-disable-next-line default-case
      switch(err.code) {
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
             setEmailError(err.message);
             break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
        
      }
    });


  };

  const handleSignup=()=>{


    clearErrors();

    // firebaseConfig
    // .auth()
    // .sendSignInLinkToEmail(email)
    // .catch((err) =>{
    //   // eslint-disable-next-line default-case

    //   alert(err)
      
    // });

    
    // let recaptcha=new firebaseConfig.auth().RecaptchaVerifier('recaptcha');
    // let number ="+916383116826";
    // firebaseConfig.auth().signInWithPhoneNumber(number,recaptcha)
    // .then(function(e){
    //   let code=prompt('enter the otp','')

    //   if(code === null){
    //     alert("nulll")
    //   }
    //   else{
    //     e.confirm(code).then(function(result){
    //       alert('user',result.user)
    //     })
    //   }

    // }).catch((error)=>{
    //   console.log(error)

    // })

  //   const actionCodeSettings = {
  //     // URL you want to redirect back to. The domain (www.example.com) for this
  //     // URL must be in the authorized domains list in the Firebase Console.
  //     url: 'https://www.example.com/finishSignUp?cartId=1234',
  //     // This must be true.
  //     handleCodeInApp: true,
  //     iOS: {
  //       bundleId: 'com.example.ios'
  //     },
  //     android: {
  //       packageName: 'com.example.android',
  //       installApp: true,
  //       minimumVersion: '12'
  //     },
  //     //example.page.link
  //     dynamicLinkDomain: 'demonft-2e778.firebaseapp.com'
      
  //   };

  // firebaseConfig
  // .auth()
  // .sendSignInLinkToEmail(email,actionCodeSettings)
  // .then(result => {

  //   alert("result",result)
  //   // The link was successfully sent. Inform the user.
  //   // Save the email locally so you don't need to ask the user for it again
  //   // if they open the link on the same device.
  //   window.localStorage.setItem('emailForSignIn', email);
    
  // })
  // .catch((error) => {
  //   var errorCode = error.code;
    
  //   var errorMessage = error.message;

  //   alert("error alert-1  "+errorCode)
  //   alert("error alert-2  "+errorMessage)
    
  // });


    firebaseConfig
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch((err) =>{
      // eslint-disable-next-line default-case
      switch(err.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
             setEmailError(err.message);
             break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
        
      }
    });

  };


  const handleLogout=()=>{
firebaseConfig.auth().signOut();

  }

  const authListener =()=>{

    firebaseConfig.auth().onAuthStateChanged(user=>{

      if(user){
        clearInputs();
        setUser(user);
      }
      else{
        setUser('');
      }

    })

  };

  useEffect(()=>{
    authListener()
  },[]);


  return(



    <div>

<div>
{/* <button type="button" onClick={setSignInM(true)} style={{width:'210px'}}>sign-in with Email</button>
<br></br>
<br></br>
<button type="button" onClick={setSignInM(false)} style={{width:'210px'}}>sign-in with Mobile-Number</button> */}


</div>


<div>

      {user ? (
<Explore handleLogout={handleLogout} />
      ):(
<Login 
email={email}
setEmail={setEmail}
password={password} 
setPassword={setPassword} 
handleLogin={handleLogin}
handleSignup={handleSignup}
hasAccount={hasAccount}
setHasAccount={setHasAccount}
emailError={emailError}
passwordError={passwordError}
phonenumber={phoneNumber}
phoneAuth={phoneAuth}
setPhoneNumber={setPhoneNumber}
setpasswordPhone={setpasswordPhone}
passwordPhone={passwordPhone}
phoneAuthLogin={phoneAuthLogin}
hasAccountO={hasAccountO}
setHasAccountO={setHasAccountO}
// SignInM={SignInM}

//phoneAuth={phoneAuth}
/>



      )}
</div>



{isOpenset && <Popup content={<>
        <b>Notification</b>
        <p>Enter otp </p>
        <center>
      <input
        type="number"
        value={tcode}
        placeholder="Enter otp"
        onChange={e => {
          setTcode(e.target.value);
        }}
      />
      <br></br>
      <br></br>

        <button type="button" onClick={()=>{setotpCheck()}}>submit</button>
        </center>
      </>}
       handleClose={togglePopupset}
    />}



{isOpenNext && <Popup content={<>
        <b>Notification</b>
        <p>Login successfully </p>
        <center>
      
        <Link
              to="/explore">

        <button type="button">Done</button>

        </Link>
        </center>
      </>}
      //  handleClose={togglePopupset}
    />}

      </div>

  );  

  
};

export default App;
