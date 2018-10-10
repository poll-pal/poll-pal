import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';


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
      <Router>
        <div className="container">
          <Header user={this.state.user} />
          <Switch>
            {/* <Route exact path="/" component={} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
