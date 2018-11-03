import React, { Component } from 'react';
import "./MainPage.css";
import Countdown from '../Countdown/';
import ZipCodeSearch from '../ZipCodeSearch/';
import axios from 'axios';
import BallotCard from '../BallotCard';
import Footer from '../Footer';

class MainPage extends Component {
    state = {
        zipCode: "",
        apiBallot: [],
        apiCandidate: [],
        loading: false
    };

    onSearch = (searchLocation) => {
        this.setState({ loading: true })
        let candidate = null;
        axios.get('/api/candidates/search?zip=' + searchLocation).then(res => {
            candidate = res.data;
            let ballot = null;
            axios.get('/api/ballotMeasures/?zip=' + searchLocation).then(res => {
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
                    <div className="col-md-8 offset-md-2 text-center">
                        <img src='img/logo-4.png' className="responsive img-fluid logo" />
                    </div>

                    <div className="col-lg-12" >
                        <h3 id="second">Voting is cool, let us help you</h3>
                    </div>
                </div>
                {/* <Countdown /> */}
                <ZipCodeSearch user={this.props.user} updateUser={this.props.updateUser} search={this.onSearch} />
                <div className="spinner">{this.state.loading ?
                    <p className="spinnerFont"><i className="fa fa-spinner fa-spin fa-3x fa-fw"></i><span className="sr-only">&nbsp;&nbsp;Loading...</span></p> : <p></p>}</div>
            </div>
        );
        if (this.state.apiBallot.length || this.state.apiCandidate.length) {
            content = (
                <div className="row">
                    <BallotCard
                        user={this.props.user}
                        ballots={this.state.apiBallot}
                        candidates={this.state.apiCandidate}
                        updateUser={this.props.updateUser}
                        candidatesTitle="Candidates in Your District"
                        ballotsTitle="Initiatives in Your District"
                    />
                    <Footer className="footer" />
                </div>
            );
        }
        return content;
    }

    componentDidMount(){
        // This will be used to hide the logo and other main page activities
        let currentPage = window.location.href;
        let path  = window.location.pathname
        console.log("Current Page is: ")
        console.log(currentPage);
        console.log("Current Path is: ")
        console.log(path);
    }
}

export default MainPage;
