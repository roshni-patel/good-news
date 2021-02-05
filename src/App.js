import './App.css';
import React, { useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios'; 
// import Home from './components/Home'; 
import Profile from './components/Profile'; 
import Login from './components/Login'; 
// import Logout from './components/Logout';
import ArticleList from './components/ArticleList';
import firebaseConfig from './fire'; 
import firebase from 'firebase';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
firebase.initializeApp(firebaseConfig);
var ui = new firebaseui.auth.AuthUI(firebase.auth());


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log(user.displayName)
  } else {
    // No user is signed in.
    console.log("no user")
  }
});

function App() {
  //  if they're logged in, we want to have an option to logout and go to their profile
  // otherwise we just want a login button 
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  // also need to think about how often articles are refreshed -- maybe once or twice a day?
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [latestArticles, setLatestArticles] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [user, setUser] = useState(''); //
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [emailError, setEmailError] = useState('');
  // const [passwordError, setPasswordError] = useState(''); 
  // const [hasAccount, setHasAccount] = useState(false); 

  var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return false;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        // document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
  };

  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
    ui.start('#firebaseui-auth-container', uiConfig);
  })

  firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
  
// let currentDate = new Date().toISOString() // resulted in basically an infintie loop







  useEffect(() => {
    axios.get("http://localhost:5000/articles")
      .then((response) => {
        const apiArticles = response.data 
        console.log(apiArticles)
        setLatestArticles(apiArticles)
        // console.log(apiArticles)
      })
      .catch((error) => {
        setErrorMessage(error);
        console.log(errorMessage)
      })
  }, []);


    







  // console.log(latestArticles)
// for profile could pass a saved articles prop

  return (
    <div className="container">
    <Router>
      <div id="firebaseui-auth-container"></div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* { isLoggedIn ? } */}
            <li>
              <Link to="/login">Login/Logout</Link>
            </li>
            <li> 
              <Link to="/profile">Profile</Link> 
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            {/* { user ? (
              <Logout />
            ) : ( null 
            )} */}
            <Login  />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <ArticleList articles={latestArticles}/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
