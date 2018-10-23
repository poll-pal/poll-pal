import React from "react";
import { Link } from "react-router-dom";
import "./UserProfile.css";


// Displays the user profile (image, location, affiliation)
const UserProfile = props => {
    let content = <div>You must sign in to view your profile</div>
    if (props.user) {
        content = (<div className="row">
            <div className="card text-center">
                <a className="close" aria-label="Close" href="/">
                    <span aria-hidden="true">&times;</span>
                </a>
                <img src={props.user.imageURL} alt="user" className="userImage rounded" />

                <h2>{props.user.givenName} {props.user.familyName}</h2>
                <h3>Address: {props.user.address}</h3>
                <h3>Party Affiliation: Add Code Here</h3>
                <Link to="/user/edit">
                    <button type="button" className="btn btn-info btn-lg">Edit Profile</button>
                </Link>
                <div className="districts text-center">
                    <h5>Districts (Races you can vote in):</h5>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Type</th>
                                <th scope="col">State</th>
                                <th scope="col">Map</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.user.districts.map(district => (
                                <tr>
                                    <td>{district.name}</td>
                                    <td>{district.type}</td>
                                    <td>{district.state}</td>
                                    <td>{district.kml}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>);
    }
    return content;
};

export default UserProfile;
