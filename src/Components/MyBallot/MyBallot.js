import React from 'react'
import "./MyBallot.css";
import BallotCard from '../BallotCard'

const MyBallot = (props) => {
    return (
        <div>
            <BallotCard
                user={props.user}
                ballots={props.user.ballotInitiatives}
                candidates={props.user.candidates}
                updateUser={props.updateUser}
                candidatesTitle="Your Candidates"
                ballotsTitle="Your Ballot Measures"
            />
        </div>
    );
}

export default MyBallot;
