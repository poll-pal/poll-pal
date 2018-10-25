import React from "react";
import { Link } from "react-router-dom";
import "./UserSurvey.css";



// We'll need to pull our data out of the iframe with some JS.  
class UserSurvey extends React.Component {
  constructor() {
    super();
    let userData = null;  // This will get pulled in from Mongo
    this.state = { user: userData };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-xs-12">
            <h1 id="surveyTitle">Get Involved</h1>
            <p id="surveyIntro">
              Make your voice heard this election season. Get started by registering to vote or learn more about where you stand 
              with the quiz below. Then find your voting district with your zip code and start saving your votes in the next 
              election. We're here to help guide you.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-xs-12">
            <div id="surveyContainer">
              <iframe src="http://www.people-press.org/quiz/political-typology/" frameborder="0"></iframe>
            </div>
          </div>
        </div>
      </div>
      
    );
  }

  componentDidMount() {

  }
}

export default UserSurvey;

