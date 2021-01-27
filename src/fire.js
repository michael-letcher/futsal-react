// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkhM38vV-7LKDUKpYHUvudoFtbbQ0-bmU",
  authDomain: "evolution-futsal.firebaseapp.com",
  databaseURL: "https://evolution-futsal.firebaseio.com",
  projectId: "evolution-futsal",
  storageBucket: "evolution-futsal.appspot.com",
  messagingSenderId: "34116853640",
  appId: "1:34116853640:web:cecea47ab23eed5af3a43d",
};

export var fire = firebase.initializeApp(firebaseConfig);
export var db = fire.firestore();
