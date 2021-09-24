import React, { useState,useEffect } from "react";
import {Link } from "react-router-dom";
//import web3 from './web3';
import { Offline, Online } from "react-detect-offline";

import Popup from '../Popup';


import { Redirect } from "react-router-dom";
//import firebaseConfig from "../config";
//import firebase from "./firebase";
import firebaseConfig from '../firebase';

const Register = () => {
  const [currentUser, setCurrentUser] = useState(null);    

  //firebase
  const handleSubmit = (e) => {
    e.preventDefault();    
    const { email, password } = e.target.elements;
    try {
      // //signInWithEmailLink(email.value,password.value);
      // //createUserWithEmailAndPassword(, password.value);      )
      // firebaseConfig.auth().isSignInWithEmailLink(email.value);
      // 


      alert(email.value)
      firebaseConfig.auth().createUserWithEmailAndPassword(email.value,password.value) 
      .then(res => {
        console.log(res)
        alert(res)
      })
      .catch(err => {
        alert("already signed in this email-id")
        console.error(err)
      })

      setCurrentUser(true);

  



    } catch (error) {
      alert(error);
    }
  };
  if (currentUser) {
      return <Redirect to="/dashboard" />;
  }
  return (
    <>
    <div style={{ textAlign: 'center' }}>
      <h1>Sign Up</h1>
      <center>
      <form onSubmit={handleSubmit}>
      <br>
        </br>
        <label for="email">Email                            :-</label>{' '}
        <input type="email" name="email" placeholder="Email" required/>
        {/* <input type="number" name="email" placeholder="Number" /> */}
        <br></br>
        <br></br>
        <label for="password">Password</label>
        <input type="password" name="password" placeholder="Password" required/>
        <br>
        </br>
        <br>
        </br>
        
        <button type="submit">Submit</button>
        
      </form>
      </center>
      </div>


    </>
    
  );
};

export default Register;
