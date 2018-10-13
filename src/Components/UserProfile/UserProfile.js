import React from "react";
import "./UserProfile.css";

// Displays the user profile (image, location, affiliation)
const UserProfile = () => (
    <div className="row">
        <div className="card">
            <img src="" alt="John Doe" className="userImage"/>
            <h3>User Name Goes Here</h3>
            <p>Party: Add Code Here</p>
            <p>Location: Add Code Here</p>
        </div>
        <div className="row">
        <div className="col-md-12">
        <button className="btn btn-primary">Edit</button>
        </div>
        </div>
    </div>

);

export default UserProfile;