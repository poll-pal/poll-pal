import React, { Component } from 'react';
import "./ZipCodeSearch.css";
import axios from 'axios';
import BallotCard from '../BallotCard'

class ZipCodeSearch extends Component {

    state = {
        zipCode: "",
        apiBallot: [],
        apiCandidate: [],
        error: null,
        laoding: false
    };

    validateZip = () => {
        const { zipCode } = this.state
        if (!zipCode) {
            return "You Must Enter A Zipcode";
        }
    }

    handleSubmit = event => {
        //add axios call here????

        event.preventDefault();
        const errorMsg = this.validateZip()
        if (errorMsg) {
            this.setState({ error: errorMsg })
        } else {
            this.setState({ loading: true })
            let candidate = null;
            axios.get('http://localhost:3000/api/candidates/search?zip=' + this.state.zipCode).then(res => {
                candidate = res.data;
                let ballot = null;
                axios.get('http://localhost:3000/api/ballotMeasures/?zip=' + this.state.zipCode).then(res => {
                    ballot = res.data;
                    this.setState({ error: null, apiCandidate: candidate, apiBallot: ballot, loading: false });
                });
            });

        }
    }

    handleInputChange = event => {
        const value = event.target.value;
        this.setState({
            zipCode: value,
        })
    }


    render() {
        console.log(this.state);
        return (
            <div>
                <form className="zipForm" onSubmit={this.handleSubmit} >
                    < div className="row justify-content-center" >
                        <div className="col-md-3 searchContainer">
                            <input
                                className="form-control"
                                id="zipSearch"
                                type="text"
                                placeholder="Enter Your Zip Code"
                                value={this.state.zipCode}
                                onChange={this.handleInputChange}
                            />
                        </div>
                    </div>
                </form>

                <div>{this.state.loading ? <p className="spinner">Loading Please Wait</p> : <p></p>}</div>

                <div className="row">
                    {this.state.apiBallot.length || this.state.apiCandidate.length ?
                        <BallotCard ballots={this.state.apiBallot} candidates={this.state.apiCandidate} /> : <p></p>}
                </div>

            </div>
        )
    }


}

export default ZipCodeSearch;


                // Schuyler [7:18 PM]
                // http://localhost:3000/api/candidates/?race=Colorado+House+of+Representatives+District+41


                // Schuyler [8:34 PM]
                // Here's the ballot measures endpoint http://localhost:3000/api/ballotMeasures/?zip=80004
