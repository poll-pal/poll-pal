import React from "react";
import "./BallotCard.css";
import Footer from '../Footer';
import InitiativeCard from '../InitiativeCard';
import CandidateCard from '../CandidateCard';

const BallotCard = props => (
    <div className="container districtBallot">
        <div className="row ballotMain">
            {/* <div className="col-lg-6 col-sm-12 text-center">
                <img src="img/ballot-page.png" alt="Vote" className="ballotPageImg rounded img-fluid" />
            </div> */}
            <div className="col-lg-12 col-sm-12 ballotDescription">
                <h1 className="ballotHeader">Your District Ballot</h1>
                <br />
                <p className="ballotWelcome">
                    <b>Please note this is not a real ballot (obviously).</b><br />
                    Be part of the change in your community by casting your vote! Discover who's running in your district and
                    find out what candidates you might identify with best, then visit their website and social media platforms to
                    learn even more about what they stand for. Keep scrolling for state and county ballot initiatives so you're ready
                    to fill out that ballot in style! Because voting is cool.*
                    <br />
                    <em>*Some reading required.</em>
                </p>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12 candidateResults">
                <h2>{props.candidatesTitle}</h2>
            </div>
        </div>
        <div className="row resultsList">
            {props.candidates.map((candidate, index) => (
                <CandidateCard
                    candidate={candidate}
                    key={index}
                    user={props.user}
                    updateUser={props.updateUser} />
            ))}
        </div>

        <div className="row initiaveRow">
            <div className="col-lg-12 col-xs-12 InitiativeResults">
                <h2>{props.ballotsTitle}</h2>
            </div>
        </div>
        <div className="row resultsList">
            {props.ballots.map((ballot, index) => {
                return (
                    <InitiativeCard
                        ballot={ballot}
                        key={index}
                        user={props.user}
                        updateUser={props.updateUser} />
                );
            }
            )}
        </div>
        <Footer />
    </div>
);

export default BallotCard;
