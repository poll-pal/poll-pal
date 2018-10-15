import React, { Component } from 'react';
import "./UserProfileForm.css";



class UserProfileForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: props.user.givenName,
            lastName: props.user.familyName
        }

    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        //Call this with the updated user from the from.[]
        this.props.updateUser({
            givenName: this.state.firstName,
            familyName: this.state.lastName,
            // location: this.state.location,
            // party: this.state.party,
        })
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
                    <label htmlFor="firstName">First name</label>
                    <input type="text" className="form-control" id="firstName"
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                        name="firstName"
                        placeholder="First Name (required)" />
                </div>
                <div className="form-group">
                    <label htmlFor="LastName">Last Name</label>
                    <input type="text" className="form-control" id="lastName"
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                        name="lastName"
                        placeholder="Last Name (required)" />
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
