import './App.css';
import React, { useContext, useState } from 'react';
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
import About from './components/About';
import 'firebaseui/dist/firebaseui.css'
import SavedArticleList from './components/SavedArticleList';

function App() {
  const currentUser = useContext(UserContext)
  const BASE_URL = "https://good-news-capstone.herokuapp.com"
  // const BASE_URL = "http://localhost:5000"

  const convertTime = (publicationDate) => {
    return new Date(publicationDate).toLocaleString();
  }
  
  // const [darkMode, setDarkMode] = useState(false);
  // const toggleDarkMode = () => setDarkMode(darkMode ? false : true);

  return (
    // <div className="App" data-theme={darkMode ? "dark" : "light"}>
      <div className="container">
        {/* <button className="btn btn-primary" onClick={toggleDarkMode}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button> */}
        <div className="custom-control custom-switch">
          <input type="checkbox" className="custom-control-input" id="darkSwitch" />
          <label className="custom-control-label" htmlFor="darkSwitch">Dark Mode</label>
        </div>
        <script src="dark-mode-switch.min.js"></script>
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
              <Route path="/about">
                <About />
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
  // </div>
  );
}

export default App;
