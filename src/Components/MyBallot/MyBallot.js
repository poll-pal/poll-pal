import React, { Component } from 'react'
import "./MyBallot.css";
import BallotCard from '../BallotCard'

class MyBallot extends Component {

    noSavedInfo = () => {
        if (this.props.user.candidates.length) {
            return "Your Candidates"
        } else {
            return "You have no saved candidates"
        } if (this.props.user.ballotInitiatives.length) {
            return "Your Ballot Measures"
        } else {
            return "You have no saved ballots"
        }
    }



    render() {
        return (
            <div>
                <BallotCard
                    user={this.props.user}
                    ballots={this.props.user.ballotInitiatives}
                    candidates={this.props.user.candidates}
                    updateUser={this.props.updateUser}
                    candidatesTitle={this.noSavedInfo()}
                    ballotsTitle={this.noSavedInfo()}
                />
            </div >
        );
    }
}

export default MyBallot;
