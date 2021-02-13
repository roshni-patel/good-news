import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import {UserContext} from "../providers/UserProvider";
import './Profile.css';


const Profile = () => {
    const user = useContext(UserContext)

    return (
        user ? (
        <div>
            <h1>Welcome, {user.name}</h1>
            <h3>Your Information:</h3>
            <h4>Name:</h4>
            <p>{user.name}</p>
            <h4>Email:</h4>
            <p>{user.email}</p>
        </div>
    ) : (<Redirect to="/"/>)
    )
}
export default Profile;