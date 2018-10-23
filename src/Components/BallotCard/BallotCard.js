import React from "react";
import "./BallotCard.css";

const BallotCard = () => (
    <div className="container">
        <div className="row ballotMain">
            <div className="col-lg-6 col-sm-12">
                <img src="img/ballot-page.png" alt="Vote" className="ballotPageImg" />
            </div>
            <div className="col-lg-6 col-sm-12 ballotDescription">
                <h1>Your District Ballot</h1>
                <br/>
                <p className="ballotWelcome">
                    Be part of the change in your community by casting your vote! Discover who's running in your district and 
                    find out what candidates you might identify with best, then visit their website and social media platforms to 
                    learn even more about what they stand for. Keep scrolling for state and county ballot initiatives so you're ready 
                    to fill out that ballot in style! Just Vote Yes or Vote No and then pull up your Poll Pal to help you out!
                </p>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12 candidateResults">
                <h2>Candidates in Your District</h2>
            </div>
        </div>

        <div className="row ballotCard">
            <div className="col-lg-4 col-sm-12">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">Beto O'Rourke</h3>
                        <h4>Senate</h4>
                        <h5>Democratic Party</h5>
                        <p>
                            <span>website</span>
                            <span> | <i className="fab fa-twitter fa-sm"></i></span>
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <span><button type="button" className="btn btn-success">Vote Yes</button></span>&nbsp;&nbsp;<span><button type="button" className="btn btn-danger">Vote No</button></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
    
export default BallotCard;

// ========= UNCOMMENT THIS OUT WHEN WE HAVE DATA ================
// Displays the ballot measure or candidate
// const BallotCard = props => {
//     let content =  
//     <div className="container">
//         <div className="row">
//             <div className="col-lg-12">
//                 <h1>Candidates in Your District</h1>
//             </div>
//         </div>

//         <div className="card">
//             <img src="" alt="John Doe" className="candidateImage" />
//             <h3>{props.CandidateSchema.name}</h3>
//             <h4>Running For: {props.CandidateSchema.race}</h4>
//             <h5>Party: {props.CandidateSchema.party}</h5>
//         </div>
//     </div>;
//     return content;
// };