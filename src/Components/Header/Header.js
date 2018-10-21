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
        content = [
            <li className="nav-item" key="1">
                <span className="navbar-text">Hello, {props.user.givenName}</span>
            </li>,
            <li className="nav-item" key="2">
                <Link to="/user">
                    <img
                        style={{ borderRadius: '50%', padding: '8px 8px' }}
                        src={props.user.imageURL}
                        alt="User profile"
                    />
                </Link>
            </li>,
            <li className="nav-item" key="3">
                <a className="nav-link" href="/auth/logout">Logout</a>
            </li>
        ];
    }
    return (
        // Displays content if user is not logged in.
        <nav className="navbar navbar-expand-lg navbar-light bg-light" key="7">
            <Link className="navbar-brand" to="/">
                Poll Pal
            </Link>
            <ul className="navbar-nav">
                {content}
                <li className="nav-item" key="4">
                    <Link to="/survey">
                        <span className="nav-link" key="5">Get Started</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
