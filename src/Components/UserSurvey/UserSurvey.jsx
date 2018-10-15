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
        <div id="surveyContainer" className="container">
            <iframe src="http://www.people-press.org/quiz/political-typology/" frameborder="0"></iframe>
        </div>
    );
  }

  componentDidMount() {
    
  }
}

export default UserSurvey;

