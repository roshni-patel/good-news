// import dotenv from 'dotenv'; 
// import firebase from "firebase/app";
// import "firebase/auth";

// let auth; 
// let googleProvider;
// if (window.firebase) {
//   console.log("in window firebase")
//   auth = window.firebase.auth();

//   googleProvider = new window.firebase.auth.GoogleAuthProvider();
// } else {
//   console.log("not in window firebase")
//   dotenv.config();
//   console.log(firebase.apps.length)
//   if (firebase.apps.length === 0) { 
//     try {
//     firebase.initializeApp({
//           apiKey: process.env.REACT_APP_API_KEY,
//           authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//           projectId: process.env.REACT_APP_PROJECT_ID,
//           storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//           messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//           appId: process.env.REACT_APP_APP_ID,
//     });
//     auth = firebase.auth();

//     googleProvider = new firebase.auth.GoogleAuthProvider();
//   }
//   catch (error) {
//     console.log(error.stack)
//   }
// }
// }

// const signInWithGoogle = () => {
//     auth.signInWithPopup(googleProvider).then((res) => {
//     console.log(res.user);
//     // immediately after logging in 
//     // write to firebase, or load something 
//   }).catch((error) => {
//     console.log(error.message);
//   });
// }

// const logOut = () => {
//   auth.signOut().then(() => {
//     console.log('Signing out!');
//   }).catch((error) => {
//     console.log(error.message);
//   });
// }

// export {auth, signInWithGoogle, logOut}; 



import dotenv from "dotenv";
import firebase from "firebase/app";
import "firebase/auth";
dotenv.config();
firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
});
export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth
    .signInWithPopup(googleProvider)
    .then((res) => {
      console.log(res.user);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
export const logOut = () => {
  auth
    .signOut()
    .then(() => {
      console.log("Signing out!");
    })
    .catch((error) => {
      console.log(error.message);
    });
};
