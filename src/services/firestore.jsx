/* eslint-disable */

import firebase from "firebase/compat";

const firebaseConfig = {
    apiKey: "AIzaSyDtELk0p5pV4VuTnzjLeI3pfAT8O6SA4_M",
    authDomain: "personalbalance-c6ffa.firebaseapp.com",
    projectId: "personalbalance-c6ffa",
    storageBucket: "personalbalance-c6ffa.appspot.com",
    messagingSenderId: "77404817708",
    appId: "1:77404817708:web:f7dec550518993b2b94489",
    measurementId: "G-JK4BEDFNEM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

export default db;