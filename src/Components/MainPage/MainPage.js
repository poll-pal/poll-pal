import React from 'react';
import { Link } from 'react-router-dom';
import "./MainPage.css";
import Countdown from '../Countdown/';


const MainPage = () => (
    <div className="container" id="greeting">
        <div className="row">
            <div className="col-lg-12">
                    <h1 id="first">POLL PAL</h1>
            </div>  
            <div className="col-lg-12" >
                <h3 id="second">Voting is cool, let us help you</h3>
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
