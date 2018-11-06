import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Components/Header/Header';
import UserProfile from './Components/UserProfile';
import UserProfileForm from './Components/UserProfileForm';
import BallotCard from './Components/BallotCard';
import UserSurvey from './Components/UserSurvey';
import MainPage from './Components/MainPage';
import About from './Components/About';
import MyBallot from './Components/MyBallot';

class App extends Component {
  state = { 
    user: null, 
    loading: true
  };

  componentDidMount() {
    axios.get('/auth/current_user').then(({ data }) => {
      this.setState({ user: data, loading: false });
    });
  }

  updateUser = (updatedUser) => {
    axios.put("/api/users/" + this.state.user._id, updatedUser).then(({ data }) => {
      this.setState({ user: data });
    });
  }

  render() {

    let content = <div className="loadingFont">Loading...</div>

    if (!this.state.loading) {
      content = (<Switch>
        <Route exact path="/" render={() => {
          return (
            <MainPage user={this.state.user} updateUser={this.updateUser} />
          )
        }} />
        <Route exact path="/user" render={(props) => <UserProfile {...props} user={this.state.user} />} />
        <Route exact path="/user/edit" render={(props) => <UserProfileForm {...props} user={this.state.user} updateUser={this.updateUser} />} />
        <Route exact path="/survey" component={UserSurvey} />
        <Route exact path="/about" component={About} />
        <Route exact path="/myBallot" component={(props) => <MyBallot {...props} user={this.state.user} updateUser={this.updateUser} />} />
      </Switch>);
    }
    return (
      <div>
        <Router>
          <div>
            {/* <BSNav user={this.state.user} /> */}
            <Header user={this.state.user} />
            <div className="container">
              {content}
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
