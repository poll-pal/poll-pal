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
            <div className="mainBallotCard">
        <div className="col-lg-12 col-xs-12">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{this.props.candidate.person_name}</h3>
                    {/* need to grab these */}
                    <h4 className="cadidateOffice">{this.props.candidate.race_office_name}</h4>
                    <h5 className="cadidateParty">{this.props.candidate.part_affiliation}</h5>
                    <p>
                        <span><a href="{this.props.candidate.campaign_website_url}" target="_blank">website</a></span> | 
                        <span><a href="{this.props.candidate.campaign_twitter}" target="_blank"><i className="fab fa-twitter fa-sm"></i></a></span>
                    </p>
                    <br/>
                    <span><button type="button" className="btn btn-yes" onClick={this.handleYesVoteClick}>Vote Yes</button></span>&nbsp;&nbsp;<span><button type="button" className="btn btn-no" onClick={this.handleNoVoteClick}>Vote No</button></span>
                </div>
            </div>
        </div>
    </div>

        );
    }
}

export default CandidateCard;
