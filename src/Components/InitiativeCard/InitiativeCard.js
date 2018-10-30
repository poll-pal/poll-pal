import React, { Component } from 'react'
import { Tooltip } from 'reactstrap';
import "./InitiativeCard.css";


class InitiativeCard extends Component {

    state = {
        tooltipYesOpen: false,
        tooltipNoOpen: false
    }

    toggleYes = () => {
        this.setState({
            tooltipYesOpen: !this.state.tooltipYesOpen
        });
    }

    toggleNo = () => {
        this.setState({
            tooltipNoOpen: !this.state.tooltipNoOpen
        });
    }

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
                ...this.props.ballot,
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
                            <span><button id={"yesBtn" + this.props.ballot.id} onClick={this.handleYesVoteClick} type="button" className="btn btn-yes">Vote Yes</button></span>&nbsp;&nbsp;<span><button onClick={this.handleNoVoteClick} id={"noBtn" + this.props.ballot.id} type="button" className="btn btn-no">Vote No</button></span>
                            <Tooltip placement="bottom" isOpen={this.state.tooltipYesOpen} target={"yesBtn" + this.props.ballot.id} toggle={this.toggleYes}>
                                {this.props.ballot.yesVote}
                            </Tooltip>
                            <Tooltip placement="bottom" isOpen={this.state.tooltipNoOpen} target={"noBtn" + this.props.ballot.id} toggle={this.toggleNo}>
                                {this.props.ballot.noVote}
                            </Tooltip>
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
                            {/* renders official title if present, if not renders name */}
                            <h3 className="card-title">{this.props.ballot.name}</h3>
                            <a href={this.props.ballot.url} target="_blank">Read More</a>
                        </div>
                        {this.renderVotingContent()}
                    </div>
                </div>
            </div>
        );
    }
}

export default InitiativeCard;
