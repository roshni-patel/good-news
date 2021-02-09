import './App.css';
import React, { useState, useEffect, useContext} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios'; 
import Profile from './components/Profile'; 
import Login from './components/Login'; 
import UserProvider, {UserContext} from "./providers/UserProvider";
import Dashboard from './components/Dashboard'; 
import ArticleList from './components/ArticleList';

import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import SavedArticleList from './components/SavedArticleList';

function App() {
  // const [currentUser, setCurrentUser] = useState({id: "pBmcWZixbjllgC3iTxY4", name: "test user", email: "test@email.com"}); 
  const currentUser = useContext(UserContext)
  console.log(currentUser)
  const BASE_URL = "http://localhost:5000"
  
  // userprovider like global app state, but readonly mostly
  return (
    <div className="container">
    <UserProvider >
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
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
              <Login />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/profile">
              <Profile user={currentUser}/>
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
      </UserProvider>
    </div>
  );
}

export default App;
