import React from 'react';
import { Link } from 'react-router-dom';
import "./MainPage.css";
import Countdown from '../Countdown/';
import ZipCodeSearch from '../ZipCodeSearch/';


const MainPage = () => (
    <div className="container" id="greeting">
        <div className="row">
            <div className="col-lg-12 text-center">
            <img src='img/logo-1.png'  className="img-fluid logo" />
            </div>

            <div className="col-lg-12" >
                <h3 id="second">Voting is cool, let us help you</h3>
            </div>
        </div>
        {/* <Countdown /> */}
        <ZipCodeSearch />
    </div>

);

export default MainPage;
