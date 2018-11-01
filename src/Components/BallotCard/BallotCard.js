import React, { Component } from "react";
import "./BallotCard.css";
import Footer from '../Footer';
import InitiativeCard from '../InitiativeCard';
import CandidateCard from '../CandidateCard';

class BallotCard extends Component {


    state = {
        showCandidate: true,
        showInitiative: true
    }

    toggleCandidate = () => {
        if (this.state.showCandidate) {
            this.setState({ showCandidate: false })
        } else {
            this.setState({ showCandidate: true })
        }
    }

    toggleInitiative = () => {
        if (this.state.showInitiative) {
            this.setState({ showInitiative: false })
        } else {
            this.setState({ showInitiative: true })
        }
    }

    renderCandidates = () => {
        if (this.state.showCandidate) {
            return (<div>
                
                <div className="row">
                    <div className="col-lg-12 candidateResults">
                        <span><h2>{this.props.candidatesTitle}</h2></span><span><button className="btn btn-display" onClick={this.toggleCandidate}>Hide Candidates</button></span>
                    </div>
                </div>

                <div className="row resultsList">
                    {this.props.candidates.map((candidate, index) => (
                        <CandidateCard
                            candidate={candidate}
                            key={index}
                            user={this.props.user}
                            updateUser={this.props.updateUser} />
                    ))}
                </div>
            </div>)
        } else {
            return <span><button className="btn btn-display" onClick={this.toggleCandidate}>Show Candidates</button></span>

        }

    }

    renderInitiatives = () => {
        if (this.state.showInitiative) {
            return (<div>
                <div className="row initiaveRow">
                    <div className="col-lg-12 col-xs-12 InitiativeResults">
                        <span><h2>{this.props.ballotsTitle}</h2></span><span><button className="btn btn-display" onClick={this.toggleInitiative}>Hide Initiatives</button></span>
                    </div>
                </div>
                <div className="row resultsList">
                    {this.props.ballots.map((ballot, index) => {
                        return (
                            <InitiativeCard
                                ballot={ballot}
                                key={index}
                                user={this.props.user}
                                updateUser={this.props.updateUser} />
                        );
                    }
                    )}
                </div>
            </div>)
        } else {
            return <span><button className="btn btn-display" onClick={this.toggleInitiative}>Show Initiatives</button></span>

        }

    }




    render() {
        console.log(this.state.showCandidate)

        return (
            <div className="container districtBallot">
                <div className="row ballotMain">
                    {/* <div className="col-lg-6 col-sm-12 text-center">
                        <img src="img/ballot-page.png" alt="Vote" className="ballotPageImg rounded img-fluid" />
                    </div> */}
                    <div className="col-lg-12 col-sm-12 ballotDescription">
                        <h1 className="ballotHeader">Your District Ballot</h1>
                        <br />
                        <p className="ballotWelcome">
                            Be part of the change in your community by casting your vote! Discover who's running in your district and
                            find out what candidates you might identify with best, then visit their website and social media platforms to
                            learn even more about what they stand for. Keep scrolling for state and county ballot initiatives so you're ready
                            to fill out that ballot in style! Because voting is cool. 😎
                            <br />
                            <em className="disclaimer">*Some reading required. Please note this is not a real ballot, you will still need to vote.</em>
                        </p>
                    </div>
                </div>
                {this.renderCandidates()}
                {this.renderInitiatives()}
            </div>
        )
    }

};

export default BallotCard;
