import React from "react";
import { Link } from "react-router-dom";
import "./UserProfile.css";

// Displays the user profile (image, location, affiliation)
const UserProfile = props => {
    let content = (<div className="container userContainer">
        <h3>Whoops! You need to be logged in for this.</h3>
    </div>
    );
    if (props.user) {
        content = (<div className="container userContainer">
            <div className="row">
                <div className="col-lg-12 col-xs-12 userRow">
                    <img src={props.user.imageURL} alt="user" className="userImage rounded" />
                    <h2 className="userName">{props.user.givenName} {props.user.familyName}</h2>
                    <br/>
                    <h3 className="subFont">{props.user.address ? props.user.address : 'Enter an Address (ex: 80214)'}</h3>
                    <br/>
                    <Link to="/user/edit">
                        <button type="button" className="btn btn-info subFont">Edit</button>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-xs-12">
                    <div className="districts text-center">
                        <h5 className="subFont">Districts (Races you can vote in):</h5>
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col" className="subFont">Name</th>
                                    <th scope="col" className="subFont">Type</th>
                                    <th scope="col" className="subFont">State</th>
                                    <th scope="col" className="subFont">Map</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.user.districts.map(district => (
                                    <tr key={district.name}>
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
            </div>      
        </div>
        );
    }
    return content;
};

export default UserProfile;
