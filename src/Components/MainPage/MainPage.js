import React, { Component } from 'react';
import "./MainPage.css";
import Countdown from '../Countdown/';
import ZipCodeSearch from '../ZipCodeSearch/';
import axios from 'axios';
import BallotCard from '../BallotCard'


class MainPage extends Component {
    state = {
        zipCode: "",
        apiBallot: [],
        apiCandidate: [],
        laoding: false
    };

    onZipcodeSearch = (zipcode) => {
        this.setState({ loading: true })
        let candidate = null;
        axios.get('http://localhost:3000/api/candidates/search?zip=' + zipcode).then(res => {
            candidate = res.data;
            let ballot = null;
            axios.get('http://localhost:3000/api/ballotMeasures/?zip=' + zipcode).then(res => {
                ballot = res.data;
                this.setState({ error: null, apiCandidate: candidate, apiBallot: ballot, loading: false });
                console.log(ballot);
                console.log(candidate);
            });
        });

    }

    render() {
        let content = (
            <div className="container" id="greeting">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <img src='img/logo-1.png' className="responsive img-fluid logo" />
                    </div>

                    <div className="col-lg-12" >
                        <h3 id="second">Voting is cool, let us help you</h3>
                    </div>
                </div>
                {/* <Countdown /> */}
                <ZipCodeSearch user={this.props.user} updateUser={this.props.updateUser} search={this.onZipcodeSearch} />
                <div>{this.state.loading ? <p className="spinner fas fa-spinner">Loading Please Wait</p> : <p></p>}</div>
            </div>
        );
        if (this.state.apiBallot.length || this.state.apiCandidate.length) {
            content = (
                <div className="row">
                    <BallotCard user={this.props.user} ballots={this.state.apiBallot} candidates={this.state.apiCandidate} updateUser={this.props.updateUser} />
                </div>
            );
        }
        return content;
    }
}

export default MainPage;
