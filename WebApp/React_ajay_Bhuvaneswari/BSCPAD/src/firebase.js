import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAPqq2SL1Jf9ojbpQilxMTPqrm8cZwJhag",
    authDomain: "react-bsc.firebaseapp.com",
    projectId: "react-bsc",
    storageBucket: "react-bsc.appspot.com",
    messagingSenderId: "352731249469",
    appId: "1:352731249469:web:7a8488c5131ce63810e354",
    measurementId: "G-E8VMVL5XV1"
  };

    // Initialize Firebase
var fireDB = firebase.initializeApp(firebaseConfig);
export default fireDB;