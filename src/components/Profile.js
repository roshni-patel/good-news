import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {UserContext} from "../providers/UserProvider";


const Profile = (props) => {
    // displayName used to be name when hardcoded
    const user = useContext(UserContext)
    console.log(user)
    console.log(user?.uid)
    return (
        user ? (
        <div>
            <h1>Welcome, {user.name}</h1>
            <h3>Your Information:</h3>
            <h4>Name:</h4>
            <p>{user.name}</p>
            <h4>Email:</h4>
            <p>{user.email}</p>
            <Link to="/saved"><h4>Saved Articles</h4></Link>
        </div>
    ) : (<Redirect to="/"/>)
    )
}
export default Profile;