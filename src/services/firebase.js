import dotenv from 'dotenv'; 
import firebase from "firebase/app";
import "firebase/auth";

// dotenv.config();
// firebase.initializeApp({
//         apiKey: process.env.REACT_APP_API_KEY,
//         authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//         projectId: process.env.REACT_APP_PROJECT_ID,
//         storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//         messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//         appId: process.env.REACT_APP_APP_ID,
// });
let auth; 
let googleProvider;
if (window.firebase) {
  console.log("in window firbase")
  auth = window.firebase.auth();

  googleProvider = new window.firebase.auth.GoogleAuthProvider();
} else {
  console.log("not in window firebase")
  dotenv.config();
  firebase.initializeApp({
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_PROJECT_ID,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_APP_ID,
});
  auth = firebase.auth();

  googleProvider = new firebase.auth.GoogleAuthProvider();

  
}
// const auth = firebase.auth();

// const googleProvider = new firebase.auth.GoogleAuthProvider();
const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider).then((res) => {
    console.log(res.user);
    // immediately after logging in 
    // write to firebase, or load something 
  }).catch((error) => {
    console.log(error.message);
  });
}

const logOut = () => {
  auth.signOut().then(() => {
    console.log('Signing out!');
  }).catch((error) => {
    console.log(error.message);
  });
}
export {auth, signInWithGoogle, logOut}; 