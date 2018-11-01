import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isOpen: true,
            path: "" 
        };
    }
    menuHandler = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
        console.log(this.state);
    }
    addBackground = () => {
        if (this.state.isOpen) {
            return <div style="background-color:purple; position:absolute; top:0px; right:0px; height: 500px; width: 30vw;"></div>;
        }
        else {
            return <div></div>;
        }
    }



    render() {
        let content;
        // Navbar content if user is logged in
        if (this.props.user) {
            content =
                <div className="profile nav-item text-center">
                    <Link to="/myballot" className="nav-link">My Ballot</Link>
                    <Link to="/user" className="nav-link" key="1">
                        <span className="namePlate">{this.props.user.givenName}</span><br />
                        <img
                            className="profilePic"
                            style={{ borderRadius: '50%' }}
                            src={this.props.user.imageURL}
                            alt="User profile"
                        />
                    </Link>
                    <a className="logout nav-link" href="/auth/logout">Logout <i className="fas fa-sign-out-alt"></i></a>
                </div>;
        }
        else {
            content = <li className="nav-item"> <a className="nav-link" href="/auth/google">Login</a></li>
        }
        return (
            // Displays content if user is not logged in.
            <nav className="navbar" key="7">
                <div className="d-flex w-100 order-0">
                    <a href="/" className="navbar-brand mr-1">
                        {this.state.path != "/" &&
                            <span className="navBrand">Poll Pal</span>
                        }
                    </a>
                    <button className="navbar-toggler collapsed" onClick={this.menuHandler}
                        type="button" data-toggle="collapse"
                        data-target="#collapsingNavbar" aria-controls="collapsingNavbar"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-bar top-bar"></span>
                        <span className="icon-bar middle-bar"></span>
                        <span className="icon-bar bottom-bar"></span>
                        <span className="sr-only">Toggle navigation</span>
                    </button>
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                <i className="fas fa-bars"></i>
            </button> */}
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
                        {content}
                    </ul>
                </div>
            </nav>
        );
    }
    componentDidMount(){
        this.setState({
            path: window.location.pathname
        });
    }
    componentDidUpdate(){
        this.setState({
            path: window.location.pathname
        });
    }
}

export default Header;
