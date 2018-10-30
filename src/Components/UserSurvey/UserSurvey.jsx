import React from "react";
import { Link } from "react-router-dom";
import "./UserSurvey.css";
import RegisterToVote from "../RegisterToVote";
import PoliticalQuiz from "../PoliticalQuiz";



// We'll need to pull our data out of the iframe with some JS.  
class UserSurvey extends React.Component {
  constructor() {
    super();
    let userData = null;  // This will get pulled in from Mongo
    this.state = { user: userData };
  }

  render() {
    return (
    <div>
      <div className="container involved">
        <div className="row">
          <div className="col-lg-12 col-xs-12 ">
            <h1 id="surveyTitle">Get Involved</h1>
            <p id="surveyIntro">
              Make your voice heard this election season. Get started by registering to vote or learn more about where you stand
              with the quiz below. Then find your voting district with your zip code and start saving your votes in the next
              election. We're here to help guide you.
            </p>
          </div>
        </div>
    
    <div className="row text-center" id="userSurvey">
        <div className="col-lg-6">
          < RegisterToVote />
        </div>
          <div className="col-lg-6">
            
              < PoliticalQuiz />
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

