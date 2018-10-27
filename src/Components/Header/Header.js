import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";


const Header = props => {
    // Setting up main navbar content
    let content = (
        <li className="nav-item">
            <a className="nav-link" href="/auth/google">Login</a>
        </li>
    );
    // Navbar content if user is logged in
    if (props.user) {
        content = 
            <div className="profile nav-item text-center">
                <Link to="/user" className="nav-link" key="1">
                    <span className="userName">{props.user.givenName}</span><br/>
                    <img
                        className="profilePic"
                        style={{ borderRadius: '50%', marginTop:'10%'}}
                        src={props.user.imageURL}
                        alt="User profile"
                    />
                </Link>
                <a className="logout nav-link" href="/auth/logout">Logout <i className="fas fa-sign-out-alt"></i></a>
            </div>
    }
    return (
        // Displays content if user is not logged in.
        <nav className="navbar navbar-expand-md" key="7">
        <div className="d-flex w-100 order-0">
            <Link to="/" className="navbar-brand mr-1">
                <span className="navBrand">Poll Pal</span>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                <i className="fas fa-bars"></i>
            </button>
        </div>
        <div className="navbar-collapse collapse justify-content-between align-items-center w-50" id="collapsingNavbar">
            <ul className="navbar-nav mx-auto text-center">
                <Link to="/about">
                    <li className="nav-item" key="4">
                        <span className="nav-link" key="5">About</span>
                    </li>  
                </Link>
                <Link to="/survey">
                    <li className="nav-item" key="6">
                        <span className="nav-link" key="7">Get Started</span>
                    </li>
                </Link>
            </ul>
            <ul className="nav navbar-nav flex-row justify-content-center flex-nowrap">
            {content}
            </ul>
        </div>
        
    </nav>


    );
};


export default Header;

