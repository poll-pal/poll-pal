import React from 'react';
import { Link } from 'react-router-dom';
import "./MainPage.css";
import Countdown from '../Countdown/';

const MainPage = () => (
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h1>Hey Pal.</h1>
                <h3>Voting is cool. Let us help you!</h3>
            </div>
        </div>
        <Countdown />
        {/* Input to zearch by zip code. */}
        <div className="row">
            <div className="col-lg-3">&nbsp;</div>
            <div className="col-lg-6 searchContainer">
                <input className="form-control" id="zipSearch" type="text" placeholder="Enter Your Zip Code" />
            </div>
            <div className="col-lg-3">&nbsp;</div>
        </div>
    </div>
);

export default MainPage;