import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB9mT6z7nuYHrJoZK-tYa3ZGxFspZifw_A",
  authDomain: "keeper-c3c70.firebaseapp.com",
  projectId: "keeper-c3c70",
  storageBucket: "keeper-c3c70.appspot.com",
  messagingSenderId: "771893364297",
  appId: "1:771893364297:web:7fef6a91c6cf11e793a198",
  measurementId: "G-K3TCPE0ERN",
};

// Connecting firebase to react
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Enable access to firestore
const database = firebaseApp.firestore();
// Enable authentication
const auth = firebase.auth();
// Enable google authentication
const provider = new firebase.auth.GoogleAuthProvider();

export default database;
export { auth, provider };
