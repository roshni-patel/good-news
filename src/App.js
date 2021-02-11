import './App.css';
import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
} from "react-router-dom";
import Profile from './components/Profile'; 
import Login from './components/Login'; 
import { UserContext } from "./providers/UserProvider";
import ArticleList from './components/ArticleList';
import Nav from './components/Nav';

import 'firebaseui/dist/firebaseui.css'
import SavedArticleList from './components/SavedArticleList';
import { logOut } from './services/firebase';


function App() {
  const currentUser = useContext(UserContext)
  // console.log(currentUser)
  // https://good-news-capstone.herokuapp.com/
  const BASE_URL = "http://localhost:5000"
  
  return (
    <div className="container">
      <Router>
        <div>
          {/* <Nav> */}
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              { currentUser ? null :
              <li>
                <Link to="/login">Login</Link>
              </li>
              }
              { currentUser ?
              <li> 
                <Link to="/profile">Profile</Link> 
              </li>
              : null 
              }
            </ul>
          </nav>
          {/* </Nav> */}
          {/* Here I want to show login / logout depending on whether the user is signed in, I also want to show their name if logged in, maybe
          this would be nicer to have in the router? */}
          <div className="logout">
            { currentUser ? <button onClick={logOut} className="btn btn-primary">Logout</button> : <Login />}
            {/* {console.log(currentUser)} */}
            {/* { currentUser ? <Link to="/profile">{currentUser.name}</Link> : null } */}
          </div>
          <span className="user">
          { currentUser ? <Link to="/profile">{currentUser.name}</Link> : null }
          </span>

          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/login">
              <Login />
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
    </div>
  );
}

export default App;
