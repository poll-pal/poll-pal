import React from "react";
import "./BallotCard.css";

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
                    <img src="" alt="John Doe" className="candidateImage" />
                    <h3>Beto O'Rourke</h3>
                    <h4>Running For: Senate</h4>
                    <h5>Party: Democrat</h5>
                </div>
            </div>
        </div>
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