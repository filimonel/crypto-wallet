import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDesNqmjtSPd6W3SrTKIqXZLAGCbBwqKA4",
  authDomain: "keep-d6ee0.firebaseapp.com",
  projectId: "keep-d6ee0",
  storageBucket: "keep-d6ee0.appspot.com",
  messagingSenderId: "106743928329",
  appId: "1:106743928329:web:2f6b65b45b1714eff68ad8",
  measurementId: "G-N4NVJX14L9",
};

// Connecting firebase to react
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
