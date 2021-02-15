import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from "../providers/UserProvider";
import { logOut } from '../services/firebase';
import Login from './Login';
import './Nav.css';

const Nav = () => {
    const currentUser = useContext(UserContext)

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
            <a className="navbar-brand" href="/">Good News</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item m-2">
                        <Link to="/" className="nav-links">Home</Link>
                    </li>
                    <li className="nav-item m-2">
                        <Link to="/about" className="nav-links">About</Link>
                    </li>
                { currentUser ?
                <li className="nav-item m-2"> 
                    <Link to="/profile" className="nav-links">Profile</Link> 
                </li>
                : null 
                }
                { currentUser ?
                <li className="nav-item m-2"> 
                    <Link to="/saved" className="nav-links">Saved</Link> 
                </li>
                : null 
                }
                </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                { currentUser ? <button onClick={logOut} className="btn btn-primary">Logout</button> : <Login />}
                </li>
            </ul>
            </div>
        </nav>
    )
}

export default Nav; 