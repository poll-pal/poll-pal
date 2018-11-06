import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./Header.css";

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true, 
            path: "" 
        };
    }

    updateRoute() {
        this.setState({
            path: window.location.pathname
        });
    }
  
    toggleNavbar() {
      this.setState({
        collapsed: !this.state.collapsed
      });
    }

    render() {
        let content;
        // Navbar content if user is logged in
        if (this.props.user) {
            content =
                <div>
                <NavItem>
                    <NavLink tag={Link} to="/myballot" onClick={this.toggleNavbar}>My Ballot</NavLink>
                </NavItem>
                <hr className="divider" />
                    <div id="profileGroup">
                        <NavItem>
                            <NavLink tag={Link} to="/user" onClick={this.toggleNavbar}>
                                <span className="namePlate">{this.props.user.givenName}</span><br />
                                {/* <img
                                    className="profilePic"
                                    style={{ borderRadius: '50%' }}
                                    src={this.props.user.imageURL}
                                    alt="User profile"
                                /> */}
                            </NavLink>
                        </NavItem>
                        <NavItem className="logout-link">
                            <NavLink href="/auth/logout">Logout <i className="fas fa-sign-out-alt"></i></NavLink>
                        </NavItem>
                    </div>
                </div>;
        }
        else {
            content = <NavItem><NavLink href="/auth/google">Login</NavLink></NavItem>
        }
      return (
        <div>
          <Navbar color="faded" light>
            <NavbarBrand href="/" className="mr-auto">{(this.state.path != "/" && this.state.collapsed) &&
                            <span className="navBrand logo">Poll Pal</span>
                        }
            </NavbarBrand>
            {this.state.collapsed && <NavbarToggler onClick={this.toggleNavbar} id="navToggleButton" className="mr-2" />}
            <Collapse isOpen={!this.state.collapsed} navbar className="custoNav">
              <Nav navbar className="linkList">
                <NavItem>
                    <i className="fas fa-times" onClick={this.toggleNavbar}></i> 
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/" onClick={this.toggleNavbar}>
                    <NavbarBrand className="mr-auto">
                        <span className="navBrand">Poll Pal</span>
                    </NavbarBrand>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/about" onClick={this.toggleNavbar}>About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/survey" onClick={this.toggleNavbar}>Get Started</NavLink>
                </NavItem>
                {content}
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
    componentDidMount(){
        this.setState({
            path: window.location.pathname
        });
    }
}

export default Header;
