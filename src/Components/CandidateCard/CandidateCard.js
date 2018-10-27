import React, { Component } from 'react'
import "./CandidateCard.css";


class CandidateCard extends Component {

    handleYesVoteClick = (event) => {
        console.log("you clicked yes on a candidate")
        const candidate = {
            id: this.props.candidate.id,
            name: this.props.candidate.name,

            choice: 'yes'
        };
        //add candidate Initiative to user
        //TODO: Make sure user.candidates is empty array
        //TODO: Check if initiative is already saved on user
        let user = this.props.user;
        user.candidates.push(candidate);
        //update user
        this.props.updateUser(user);
    }

    handleNoVoteClick = (event) => {
        console.log("you clicked no on a candidate")

        const candidate = {
            id: this.props.candidate.id,
            name: this.props.candidate.name,
            choice: 'no'
        };
        //add candidate Initiative to user
        //TODO: Make sure user.candidates is empty array
        //TODO: Check if initiative is already saved on user
        let user = this.props.user;
        user.candidates.push(candidate);
        //update user
        this.props.updateUser(user);
    }

    render() {
        return (
            <div>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">{this.props.candidate.person_name}</h3>

                            {/* need to grab these */}
                            <h4>{this.props.candidate.race_office_name}</h4>
                            <h5>{this.props.candidate.part_affiliation}</h5>
                            <p>
                                <span>{this.props.candidate.campaign_website_url}</span>
                                <span> {this.props.candidate.campaign_twitter} | <i className="fab fa-twitter fa-sm"></i></span>
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <span><button onClick={this.handleYesVoteClick} type="button" className="btn btn-success">Vote Yes</button></span>&nbsp;&nbsp;<span><button onClick={this.handleNoVoteClick} type="button" className="btn btn-danger">Vote No</button></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default CandidateCard;
