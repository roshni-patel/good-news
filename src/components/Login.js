import React, { useState, useContext, useEffect } from 'react';
import './Login.css'
import { signInWithGoogle } from '../services/firebase';
import { UserContext } from '../providers/UserProvider';
import { Redirect } from 'react-router-dom';

const Login = () => {
    const user = useContext(UserContext);
//   console.log(user);

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
        <button className="btn btn-primary" onClick={signInWithGoogle}>
            Sign in with Google
        </button>
    </div>
);
}

export default Login;