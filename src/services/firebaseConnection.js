import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
   apiKey: "AIzaSyBxVVAPD5S3ZrVwN04mQLoRG7duLFfCdFU",
   authDomain: "financ-32b74.firebaseapp.com",
   databaseURL: "https://financ-32b74-default-rtdb.firebaseio.com/",
   projectId: "financ-32b74",
   storageBucket: "financ-32b74.appspot.com",
   messagingSenderId: "679177423195",
   appId: "1:679177423195:web:82cfe53b1818cdf1edb27e"
 };
  
 
   firebase.initializeApp(firebaseConfig);

  

export default firebase;
