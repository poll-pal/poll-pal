import React, { Component } from 'react';
import "./UserProfileForm.css";
import axios from 'axios';



class UserProfileForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: props.user.givenName,
            lastName: props.user.familyName,
            address: props.user.address,
            originalAddress: props.user.address,
            districts: props.user.districts
        }

    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        //Call this with the updated user from the form.
        this.props.updateUser({
            givenName: this.state.firstName,
            familyName: this.state.lastName,
            address: this.state.address,
            // location: this.state.location,
            // party: this.state.party,
        });
        // This will be two API calls daisy chained.  
        if(this.state.address !== this.state.originalAddress){
            // GPS Coordinate Call
            axios.get(`../api/districts/?address=${this.state.address}`)
                .then(response => {
                    let races = []
                    response.data.forEach(race => {
                        let raceObj = {
                            name: race.name,
                            state: race.state,
                            type: race.type,
                            kml: race.kml
                        };
                        races.push(raceObj);
                    });
                    console.table(races);
                    this.props.updateUser({
                        givenName: this.state.firstName,
                        familyName: this.state.lastName,
                        address: this.state.address,
                        districts: races
                        // location: this.state.location,
                        // party: this.state.party,
                    });
                })
                .catch(err => console.log(err.message));
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        let content = <div>You must sign in to edit your profile</div>
        if (this.props.user) {

            content = (<form>
                <div className="form-group">
                    
                    <input type="text" className="form-control" id="firstName"
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                        name="firstName"
                        placeholder="First Name (required)" />
                    <label htmlFor="firstName">First name</label>
                    
                    <input type="text" className="form-control" id="lastName"
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                        name="lastName"
                        placeholder="Last Name (required)" />
                    <label htmlFor="LastName">Last Name</label>
                    
                    <input type="text" className="form-control" id="address"
                        value={this.state.address}
                        onChange={this.handleInputChange}
                        name="address"
                        placeholder="Physical Address or Postal Code" />
                    <label htmlFor="address">Voting Address</label>
                </div>
                {/* <div className="form-group">
                    <label htmlFor="Party">Party</label>
                    <input type="text" className="form-control" id="party"
                        value={this.state.party}
                        onChange={this.handleInputChange}
                        name="party"
                        placeholder="party" />
                </div>
                <div className="form-group">
                    <label htmlFor="Location">Location</label>
                    <input type="text" className="form-control" id="location"
                        value={this.state.location}
                        onChange={this.handleInputChange}
                        name="location"
                        placeholder="location" />
                </div> */}
                <button onClick={this.handleFormSubmit} className="btn btn-primary">Update</button>
            </form>);
        }
        return content;
    }
}


export default UserProfileForm;
