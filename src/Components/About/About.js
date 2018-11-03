import React from 'react'
import "./About.css";

const About = () => (
    <div className="container about">
        <div className="row">
            <div className="col-lg-6 col-xs-12 text-center">
                <img src="img/change.png" alt="Change" className="aboutImg"/>
            </div>
            <div className="col-lg-6 col-xs-12 aboutCopy">
                <h1 className="aboutTitle">Shit's Getting Real</h1>
                <br/>
                <p className="aboutPrghOne">
                    We get it. There’s a ton to a ballot and well, with things the way they are, you want to be sure you're making informed decisions.
                    That’s where we come in. Get a closer look at your state and district candidates and initiatives so you can feel
                    more comfortable about making a difference with your votes.
                </p>
                <br/>
                <p className="aboutPrghTwo">
                    Enter your zip code for a snapshot of your ballot, then get prepared to make a difference. Poll Pal makes it easy
                    for you to make informed decisions so you can get involved without all the confusion and stress that comes with
                    ballots these days.<br/>
                    <span><i className="social fab fa-facebook fa-lg"></i></span>
                    <span><i className="social fab fa-twitter-square fa-lg"></i></span>
                    <span><i className="social fab fa-instagram fa-lg"></i></span>
                </p>
            </div>
        </div>
    </div>
)

export default About;
