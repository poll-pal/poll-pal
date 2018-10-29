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
        if (zipCode.length !== 5) {
            return "Zipcode must be 5 digits";
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        const errorMsg = this.validateZip()
        if (errorMsg) {
            this.setState({ error: errorMsg })
        } else {
            this.props.search(this.state.zipCode);


        }
    }

    handleInputChange = event => {
        const value = event.target.value;
        this.setState({
            zipCode: value,
        })
    }


    render() {
        return (
            <div>
                <div className="row">
                        <div className="col-md-6 offset-md-3 text-center searchContainer">
                            <form className="zipForm" onSubmit={this.handleSubmit} >
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        id="zipSearch"
                                        type="text"
                                        placeholder="Enter Your Zip Code"
                                        value={this.state.zipCode}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                            </form>
                        </div>
                </div>

                {this.state.error ? <p className="validationAlert">{this.state.error}</p> : <p></p>}
            </div>
        )
    }


}

export default ZipCodeSearch;


                // Schuyler [7:18 PM]
                // http://localhost:3000/api/candidates/?race=Colorado+House+of+Representatives+District+41


                // Schuyler [8:34 PM]
                // Here's the ballot measures endpoint http://localhost:3000/api/ballotMeasures/?zip=80004
