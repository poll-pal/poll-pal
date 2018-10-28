import React, { Component } from 'react'
import "./InitiativeCard.css";

class InitiativeCard extends Component {

    handleYesVoteClick = (event) => {
        console.log("you clicked yes on a initiative")
        const ballotInitiative = {
            id: this.props.ballot.id,
            name: this.props.ballot.name,
            choice: 'yes'
        };
        //add Ballot Initiative to user
        //TODO: Make sure user.ballotInitiatives is empty array
        //TODO: Check if initiative is already saved on user
        let user = this.props.user;
        user.ballotInitiatives.push(ballotInitiative);
        //update user
        this.props.updateUser(user);
    }
    handleNoVoteClick = (event) => {
        console.log("you clicked no on a initiative")
        const ballotInitiative = {
            id: this.props.ballot.id,
            name: this.props.ballot.name,
            choice: 'no'
        };
        //add Ballot Initiative to user
        //TODO: Make sure user.ballotInitiatives is empty array
        //TODO: Check if initiative is already saved on user
        let user = this.props.user;
        user.ballotInitiatives.push(ballotInitiative);
        //update user
        this.props.updateUser(user);
    }

    render() {
        return (
            <div>
                <div className="col-lg-4 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">{}</h3>
                            <p>{this.props.ballot.name}</p>
                            <p>{this.props.choice}</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <span><button onClick={this.handleYesVoteClick} type="submit" className="btn btn-success">Vote Yes</button></span>&nbsp;&nbsp;<span><button onClick={this.handleNoVoteClick} type="submit" className="btn btn-danger">Vote No</button></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default InitiativeCard;
