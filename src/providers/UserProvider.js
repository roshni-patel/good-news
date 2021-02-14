import React, { useState, useEffect, createContext } from 'react';
import { auth } from '../services/firebase';
import PropTypes from 'prop-types';
import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';
export const UserContext = createContext({ user: null });

const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // When the user logs in and out
    auth.onAuthStateChanged(async (user) => {
      console.log( `got to auth state changed with user ${user}`)
      if (!user) {
        setUser(null) //logout
        return;
      }

    firebase.firestore().collection('users').doc(user.uid)
    .set({
      displayName: user.displayName,
      email: user.email,
      saved_articles: {}
  })
  .then(() => {
    console.log("Document successfully written!");
})
.catch((error) => {
    console.log("Error writing document: ", error);
});

      // Here I can write to Firestore and read from it.
      // if they've logged in, generate document to the users collection 
      console.log('Returned user Object from Firebase', user);
      //user.uid i added in uid here
      const { displayName, email, uid } = user;
      setUser({
        name: displayName,
        email: email,
        id: uid,
      });
    });
  }, []);

  // component providing context, value is the user state 
  // any component can just use context, they just have to be a child 
  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.node
}

export default UserProvider;