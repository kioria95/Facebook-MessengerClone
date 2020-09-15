import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBdaDYFXqfUorNamKUNMAgSgz6R0JV9wno",
  authDomain: "facebookmessenger-b42d3.firebaseapp.com",
  databaseURL: "https://facebookmessenger-b42d3.firebaseio.com",
  projectId: "facebookmessenger-b42d3",
  storageBucket: "facebookmessenger-b42d3.appspot.com",
  messagingSenderId: "545902282223",
  appId: "1:545902282223:web:62c5e27b9c35dbc310221a",
  measurementId: "G-0DFFRBY9QL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();


export default db;
