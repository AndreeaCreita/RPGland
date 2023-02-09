import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFPGf1yJ940zHcwGfdboGvlcbRcJlM9t0",
  authDomain: "rpgland-b92d1.firebaseapp.com",
  projectId: "rpgland-b92d1",
  storageBucket: "rpgland-b92d1.appspot.com",
  messagingSenderId: "617742018387",
  appId: "1:617742018387:web:4177a01b9bfc6ae10ba3a6"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
