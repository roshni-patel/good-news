import React, { useState, useEffect, createContext } from "react";
import { auth } from "../services/firebase";
import PropTypes from "prop-types";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
export const UserContext = createContext({ user: null });
const UserProvider = (props) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // When the user loggs in and out
    auth.onAuthStateChanged(async (user) => {
      if (!user) {
        setUser(null); //logout
        return;
      } else {
        var docRef = firebase.firestore().collection("users").doc(user.uid);
        docRef
          .get()
          .then((doc) => {
            if (doc.exists) {
              console.log("Document data:", doc.data());
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          })
          .catch((error) => {
            console.log("Error getting document:", error);
          });
        firebase
          .firestore()
          .collection("users")
          .doc(user.uid)
          .set({
            displayName: user.displayName,
            email: user.email,
            saved_articles: {},
          })
          .then(() => {
            console.log("Document successfully written!");
            const { displayName, email, uid } = user;
            setUser({
              name: displayName,
              email: email,
              id: uid,
            });
          })
          .catch((error) => {
            console.log("Error writing document: ", error);
          });
        // Here I can write to Firestore and read from it.
        // if they've logged in, generate document to the users collection
        console.log("Returned user Object from Firebase", user);
        // user.uid i added in uid here
        const { displayName, email, uid } = user;
        setUser({
          name: displayName,
          email: email,
          id: uid,
        });
      }
    });
  }, []);
  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};
export default UserProvider;