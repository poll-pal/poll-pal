import React, { Component } from 'react';
import "./ZipCodeSearch.css";

class ZipCodeSearch extends Component {

    state = {
        zipCode: "",
        error: null,
        laoding: false
    };


    handleUseAddressButton = (event) => {
        this.props.search(this.props.user.address);
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
                                {this.props.user.address ?
                                    <button
                                        onClick={this.handleUseAddressButton}
                                        type="button"
                                        className="currentAddressBtn btn" >Use Saved Address</button> : null}
                            </div>
                        </form>
                        {this.state.error ? <p className="validationAlert">{this.state.error}</p> : <p></p>}
                    </div>
                </div>

            </div>
        )
    }


}

export default ZipCodeSearch;

