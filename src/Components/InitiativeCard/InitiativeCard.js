import React, { Component } from 'react'
import "./InitiativeCard.css";

class InitiativeCard extends Component {

    handleYesVoteClick = (event) => {
        this.updateVote('yes');
    }

    handleNoVoteClick = (event) => {
        this.updateVote('no');
    }

    updateVote = (choice) => {
        let user = this.props.user;
        let ballotInitiative = this.findUserBallotInitiative();
        if (ballotInitiative) {
            ballotInitiative.choice = choice;
        } else {
            ballotInitiative = {
                id: this.props.ballot.id,
                name: this.props.ballot.name,
                choice: choice
            };
            user.ballotInitiatives.push(ballotInitiative);
        }
        this.props.updateUser(user);
    }

    findUserBallotInitiative = () => {
        return this.props.user.ballotInitiatives.find(bi => bi.id === this.props.ballot.id);
    }

    renderVotingContent = () => {
        let content = (
            <div className="row">
                <div className="col">
                    <p> Log in to save your vote</p>
                </div>
            </div>
        );
        if (this.props.user) {
            let choice = null;
            const ballotInitiative = this.findUserBallotInitiative();
            if (ballotInitiative) {
                choice = 'You Voted ' + ballotInitiative.choice;
            }

            content = (
                <div>
                    <div className="row">
                        <div className="col-lg-12">
                            <p>{choice}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <span><button onClick={this.handleYesVoteClick} type="submit" className="btn btn-yes">Vote Yes</button></span>&nbsp;&nbsp;<span><button onClick={this.handleNoVoteClick} type="submit" className="btn btn-no">Vote No</button></span>
                        </div>
                    </div>
                </div>
            );
        }
        return content;
    }

    render() {
        return (
            <div>
                <div className="col-lg-4 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">{}</h3>
                            <p>{this.props.ballot.name}</p>
                        </div>
                        {this.renderVotingContent()}
                    </div>
                </div>
            </div>

        );
    }
}

export default InitiativeCard;
