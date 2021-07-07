const firebase = require("firebase");
require("firebase/firestore");

/* var firebaseConfig = {
  apiKey: "AIzaSyA6yrI3DpOChLUyMMtAvVDO1QYQyE1NC3M",
  authDomain: "task-manager-fee35.firebaseapp.com",
  databaseURL: "https://task-manager-fee35.firebaseio.com",
  projectId: "task-manager-fee35",
  storageBucket: "task-manager-fee35.appspot.com",
  messagingSenderId: "607989740122",
  appId: "1:607989740122:web:da9ade769623a6f82a5e63"
}; */
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
