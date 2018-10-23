import React from 'react'
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = props => (



    <footer className="container footer border-top">
        <div className="row">
            <div className="col-12 col-md">
                <small className="d-block mb-3 text-muted">Poll Pal, LLC © 2018</small>
            </div>
            <div className="col-6 col-md">
                <h5>Follow Us!</h5>
                <ul className=" ul-social list-unstyled text-small">
                    <span><i className="social fab fa-facebook fa-lg"></i></span>
                    <span><i className="social fab fa-twitter-square fa-lg"></i></span>
                    <span><i className="social fab fa-instagram fa-lg"></i></span>
                </ul>
            </div>
            <div className="col-6 col-md">
                <h5>Features</h5>
                <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="#">Cool stuff</a></li>
                    <li><a className="text-muted" href="#">Random feature</a></li>
                    <li><a className="text-muted" href="#">Team feature</a></li>
                </ul>
            </div>
            <div className="col-6 col-md">
                <h5>Resources</h5>
                <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="#">Resource</a></li>
                    <li><a className="text-muted" href="#">Resource name</a></li>
                    <li><a className="text-muted" href="#">Another resource</a></li>
                </ul>
            </div>
            <div className="col-6 col-md">
                <h5>About</h5>
                <ul className="list-unstyled text-small">
                    <li><a className="text-muted" href="#">Team</a></li>
                    <li><a className="text-muted" href="#">Privacy</a></li>
                    <li><a className="text-muted" href="#">Terms</a></li>
                </ul>
            </div>
        </div>
    </footer>





)

export default Footer;
