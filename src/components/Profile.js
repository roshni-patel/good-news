import React from 'react';
import { Link } from 'react-router-dom';


const Profile = (props) => {
    return (
        <div>
            <h1>Welcome, {props.user.name}</h1>
            <h3>Your Information:</h3>
            <h4>Name:</h4>
            <p>{props.user.name}</p>
            <h4>Email:</h4>
            <p>{props.user.email}</p>
            <Link to="/saved"><h4>Saved Articles</h4></Link>
        </div>
    )
}
export default Profile;