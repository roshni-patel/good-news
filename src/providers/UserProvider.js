import React, { useState, useEffect, createContext } from 'react';
import { auth } from '../services/firebase';
import PropTypes from 'prop-types';


export const UserContext = createContext({ user: null });

const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // When the user logs in and out
    auth.onAuthStateChanged(async (user) => {
      if (!user) {
        setUser(null) //logout
        return;
      }
      // Here I can write to Firestore and read from it.
      
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