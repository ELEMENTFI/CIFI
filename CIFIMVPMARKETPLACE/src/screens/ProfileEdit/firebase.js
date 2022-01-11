import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASDEvZMWV0vDnyx-BZ6b0YZCnjKo-56uk",
  authDomain: "demonft-2e778.firebaseapp.com",
  databaseURL: "https://demonft-2e778-default-rtdb.firebaseio.com",
  projectId: "demonft-2e778",
  storageBucket: "demonft-2e778.appspot.com",
  messagingSenderId: "683266236237",
  appId: "1:683266236237:web:f0d4d77b802ef34eb1a104",
  measurementId: "G-4C5VLLDDPH"
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb;