import React, { useState, useContext, useEffect } from 'react';
import './Login.css'
import { signInWithGoogle } from '../services/firebase';
import { UserContext } from '../providers/UserProvider';
import { Redirect } from 'react-router-dom';

const Login = () => {
  const user = useContext(UserContext);
  console.log(user);

  const [redirect, setredirect] = useState(null);
//   if user is logged in, updates redirect to dashboard, if set, logged in already sents dashboard 
  useEffect(() => {
    if (user) {
      setredirect('/profile');
    }
  }, [user])
  
  if (redirect) {
   return <Redirect to={redirect} />
  }
  return (
      <div className="login-buttons">
        <button className="login-provider-button" onClick={signInWithGoogle}>
          <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon"/>
          <span> Continue with Google</span>
        </button>
      </div>
  );
}

export default Login;