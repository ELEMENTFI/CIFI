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
import {  RecaptchaVerifier } from "firebase";

const App=() => {

  const [value, setValue] = useState(0);
  const[phoneNumber,setPhoneNumber]=useState('');  

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


const setuprecaptcha =()=>{
  window.recaptchaVerifier = new firebaseConfig.auth.RecaptchaVerifier('recaptcha-container', {
      size: 'invisible',
      callback: function (response) {
          console.log("recature resolved")
          this.onSignInSubmit();
      }
  });

}


const phoneAuth=(event) =>{

  console.log("mbnumber",phoneNumber);
    
  event.preventDefault();
  setuprecaptcha();
  //var phoneNumber = valu;
  var appVerifier = window.recaptchaVerifier;
  firebaseConfig.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then(function (confirmationResult) {
          console.log("Success");
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          var verificationId = window.prompt("Enter otp")
          confirmationResult
              .confirm(verificationId)
              .then(function (result) {
                  // User signed in successfully.
                  var user = result.user;
                  user.getIdToken().then(idToken => {
                      window.localStorage.setItem('idToken', idToken);

                     
                      console.log(idToken);
                  });
              })
              .catch(function (error) {
                  // User couldn't sign in (bad verification code?)
                  console.error("Error while checking the verification code", error);
                  window.alert(
                      "Error while checking the verification code:\n\n" +
                      error.code +
                      "\n\n" +
                      error.message
                  );
              });

      })
      .catch(function (error) {
          console.log("sign Up error:" + error.code);
      });

}


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

//phoneAuth={phoneAuth}
/>



      )}
</div>




      </div>

  );  

  
};

export default App;
