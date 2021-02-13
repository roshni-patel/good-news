import './App.css';
import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Profile from './components/Profile'; 
import Login from './components/Login'; 
import { UserContext } from "./providers/UserProvider";
import ArticleList from './components/ArticleList';
import Nav from './components/Nav';
import 'firebaseui/dist/firebaseui.css'
import SavedArticleList from './components/SavedArticleList';

function App() {
  const currentUser = useContext(UserContext)
  // console.log(currentUser)
  // https://good-news-capstone.herokuapp.com/
  const BASE_URL = "http://localhost:5000"

  const convertTime = (publicationDate) => {
    return new Date(publicationDate).toLocaleString();
  }
  
  return (
    <div className="container">
      <Router>
        <div>
          <Nav />
          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/saved">
              <SavedArticleList baseUrl={BASE_URL} user={currentUser} convertTime={convertTime}/>
            </Route>
            <Route path="/">
              <ArticleList baseUrl={BASE_URL} user={currentUser} convertTime={convertTime}/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
