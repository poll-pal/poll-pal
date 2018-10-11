import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";


const Header = props => {
    let content = (
        <li className="nav-item">
            <a className="nav-link" href="/auth/google">Sign In With Google</a>
        </li>
    );
    if (props.user) {
        content = [
            <li className="nav-item" key="1">
                <span className="navbar-text">Hello, {props.user.givenName}</span>
            </li>,
            <li className="nav-item" key="2">
                <img
                    style={{ borderRadius: '50%', padding: '8px 8px' }}
                    src={props.user.imageURL}
                    alt="User profile"
                />
            </li>,
            <li className="nav-item" key="3">
                <a className="nav-link" href="/auth/logout">Logout</a>
            </li>
        ];
    }

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                Poll Pal
                    </Link>
            <ul className="navbar-nav">{content}</ul>
        </nav>
    );
};

export default Header;
