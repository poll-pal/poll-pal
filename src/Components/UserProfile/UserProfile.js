import React from "react";
import { Link } from "react-router-dom";
import "./UserProfile.css";

// Displays the user profile (image, location, affiliation)
const UserProfile = props => {
    let content = <div>You must sign in to view your profile</div>
    if (props.user) {
        content = (<div className="row">
            <div className="card">
                <img src={props.user.imageURL} alt="user" className="userImage" />
                <h3>{props.user.givenName} {props.user.familyName}</h3>
                <h4>Address: {props.user.address}</h4>
                <h4>Party Affiliation: Add Code Here</h4>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Link to="/user/edit">Edit</Link>
                </div>
            </div>
        </div>);
    }
    return content;
};

export default UserProfile;
