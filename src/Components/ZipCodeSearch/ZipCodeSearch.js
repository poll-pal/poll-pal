import React, { Component } from 'react';
import "./ZipCodeSearch.css";
import axios from 'axios';

class ZipCodeSearch extends Component {



    state = {
        zipCode: "",
        apiBallot: null,
        apiCandidate: null,
        error: null
    };

    validateZip = () => {
        const { zipcode } = this.state
        if (!zipcode) {
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
            let candidate = null;
            axios.get('http://localhost:3000/api/candidates/?race=Colorado+House+of+Representatives+District+41').then(res => {
                candidate = res.data;
            });
            let ballot = null;
            axios.get('http://localhost:3000/api/ballotMeasures/?zip=' + this.state.zipCode).then(res => {
                ballot = res.data;
            });

            this.setState({ zipCode: "", error: null, apiCandidate: candidate, apiBallot: ballot, });
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
            <form className="zipForm" >
                < div className="row justify-content-center" >
                    <div className="col-md-3 searchContainer">
                        <input
                            className="form-control"
                            id="zipSearch"
                            type="text"
                            placeholder="Enter Your Zip Code"
                            value={this.state.zipCode}
                            onChange={this.handleInputChange}
                            onSubmit={this.handleSubmit}
                        />
                    </div>
                </div>
                {this.state.error ? <p className="validationAlert">{this.state.error}</p> : <p></p>}
            </form>
        )
    }


}

export default ZipCodeSearch;


// Schuyler [7:18 PM]
// http://localhost:3000/api/candidates/?race=Colorado+House+of+Representatives+District+41


// Schuyler [8:34 PM]
// Here's the ballot measures endpoint http://localhost:3000/api/ballotMeasures/?zip=80004
