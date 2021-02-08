import './App.css';
import React, { useState, useEffect, useContext} from 'react';
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
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import PasswordReset from "./components/PasswordReset";
import { UserContext } from "./providers/UserProvider";

// import Logout from './components/Logout';
import ArticleList from './components/ArticleList';
import firebaseConfig from './fire'; 
import firebase from 'firebase';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import SavedArticleList from './components/SavedArticleList';
// firebase.initializeApp(firebaseConfig);

function App() {
  const [currentUser, setCurrentUser] = useState({id: "pBmcWZixbjllgC3iTxY4", name: "test user", email: "test@email.com"}); 
  const BASE_URL = "http://localhost:5000"

  const logOut = () => {
    firebase.auth().signOut(); 
  }

  // TODO 
  // Logging out, needs to be an option on all pages
  // Showing based on state the login/logout buttons 
  // How to get google user documents 
  // How to change info about the user to have this info - saved articles, filtered articles, time preference, etc. 

  const user = useContext(UserContext);
  console.log(user)
  
  return (
    <div className="container">
    <Router>
      {/* <div id="firebaseui-auth-container"></div> */}
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
            <SignIn />
            <SignUp />
            <PasswordReset />
            <Route path="signUp">
              <SignUp />
            </Route>
            <Route path="passwordReset">
              <PasswordReset />
            </Route>
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/saved">
            <SavedArticleList baseUrl={BASE_URL} user={currentUser} />
          </Route>
          <Route path="/">
            <ArticleList baseUrl={BASE_URL} user={currentUser}/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
