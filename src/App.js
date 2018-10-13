import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Components/Header/Header';
import Countdown from './Components/Countdown/';
import UserProfile from './Components/UserProfile';
import BallotCard from './Components/BallotCard';

class App extends Component {
  state = { user: null };

  componentDidMount() {
    axios.get('/auth/current_user').then(({ data }) => {
      this.setState({ user: data });
      console.log("here is the user data", data);
    });
  }

  render() {
    return (
      <div>
        <Router>
          <div className="container">
            <Header user={this.state.user} />
            <Switch>
              <Route exact path="/" render={() => {
                return (
                  <Countdown /> 
                )
              }} />
              <Route exact path="/user" component={UserProfile} />
              <Route exact path="/yourballot" component={BallotCard} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
