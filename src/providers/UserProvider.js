import React, { useState, useEffect, createContext } from 'react';
import { auth } from '../services/firebase';

export const UserContext = createContext({ user: null });

const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  // without useeffect - would add another event listenre
  useEffect(() => {
    // When the user logs in and out
    auth.onAuthStateChanged(async (user) => {
      if (!user) {
        setUser(null) //logout
        return;
      }
      // Here I can write to Firestore and read from it.
      
      console.log('Returned user Object from Firebase', user);
      //user.uid
      const { displayName, email } = user;
      setUser({
        displayName,
        email,
      });
    });
  }, []);

  // component providing context, value is the user state 
  // any component can just use context, they just have to be a child 
  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  )
}

export default UserProvider;