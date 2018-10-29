import React, { Component } from 'react'
import "./MyBallot.css";
import BallotCard from '../BallotCard'

class MyBallot extends Component {

    render() {
        return (
            <div>
                <BallotCard
                    user={this.props.user}
                    ballots={this.props.user.ballotInitiatives}
                    candidates={this.props.user.candidates}
                    updateUser={this.props.updateUser} />
            </div>
        );
    }
}

export default MyBallot;
