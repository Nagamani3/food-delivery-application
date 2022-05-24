import "firebase/auth";
import "firebase/database";
import "firebase/functions";
import "firebase/storage"
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC9fWap-9Rxh6GFKAHBAxNofAsFFEBUj2c",
  authDomain: "servpan-8a51e.firebaseapp.com",
  projectId: "servpan-8a51e",
  storageBucket: "servpan-8a51e.appspot.com",
  messagingSenderId: "1073542105316",
  appId: "1:1073542105316:web:741d76d35d7d14c47684f1",
  measurementId: "G-3S421GGF3F"
};

firebase.initializeApp(firebaseConfig)
export default firebase;