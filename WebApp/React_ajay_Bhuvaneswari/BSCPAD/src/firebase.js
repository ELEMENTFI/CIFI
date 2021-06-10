import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCYiv3QpHUx9LrGGwltRnuLBf6YfvJT4Oc",
    authDomain: "react-bsc-86577.firebaseapp.com",
    projectId: "react-bsc-86577",
    storageBucket: "react-bsc-86577.appspot.com",
    messagingSenderId: "387531336164",
    appId: "1:387531336164:web:b5f1bf37a9493b70adbff1",
    measurementId: "G-C7NGE0R5EZ"
  };
    // Initialize Firebase
var fireDB = firebase.initializeApp(firebaseConfig);
export default fireDB;