import React, { Component } from 'react'
import "./MyBallot.css";
import BallotCard from '../BallotCard'

class MyBallot extends Component {

    candidateTitle = () => {
        if (this.props.user.candidates.length) {
            return "Your Candidates"
        } else {
            return "You have no saved candidates"
        }


    }

    ballotsTitle = () => {
        if (this.props.user.ballotInitiatives.length) {
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
                    candidatesTitle={this.candidateTitle()}
                    ballotsTitle={this.ballotsTitle()}
                />
            </div >
        );
    }
}

export default MyBallot;
