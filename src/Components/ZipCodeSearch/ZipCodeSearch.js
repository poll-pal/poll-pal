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


    handleUseAddressButton = () => {

    }

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

            //add ....if user..... zipCode === user address? get zip out of it?
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
                            {this.props.user ?
                                <button
                                    onClick={this.handleUseAddressButton}
                                    type="button"
                                    className="currentAddressBtn btn" >Use Saved Address</button> : null}
                        </div>
                    </div>
                </form>
                {this.state.error ? <p className="validationAlert">{this.state.error}</p> : <p></p>}
            </div>
        )
    }


}

export default ZipCodeSearch;

