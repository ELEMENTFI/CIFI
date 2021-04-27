import React, { useState,useEffect } from "react";

import { Router, Route, Switch, Link } from "react-router-dom";

import web3 from './web3';

import { ReactComponent as Logo } from './logo.svg';

import { Offline, Online } from "react-detect-offline";

import Popup from './Popup';

import firebaseConfig from './firebase';

import Login from './Logins';
import Heros from './Heros';
import Explore from './Explore';
import Followingpage from "./Followingpage";
import Activitypage from "./Activitypage";
import Howitworkpage from "./Howitworkpage";
import Communitypage from "./Communitypage";
import Salepagecopy from "./Salepagecopy";
import Nft from "./Nft";

const App=() => {

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
  
  const handleLogin=()=>{

    clearErrors();

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
/>



      )}




      </div>

  );  
};

export default App;
