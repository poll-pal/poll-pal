import React from "react";
import "./BallotCard.css";
import Footer from '../Footer';

const BallotCard = () => (
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h1>Candidates in Your District</h1>
            </div>
        </div>

        <div className="row">
            <div className="col-lg-6 col-sm-12">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">Beto O'Rourke<span><i className="fas fa-info-circle pull-right"></i></span></h3>
                        <h4>Senate</h4>
                        <h5>Democratic Party</h5>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <span><button type="button" className="btn btn-success">Vote Yes</button></span>&nbsp;&nbsp;<span><button type="button" className="btn btn-danger">Vote No</button></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
);

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

export default BallotCard;
