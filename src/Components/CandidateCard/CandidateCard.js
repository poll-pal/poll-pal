import React from 'react'
import "./CandidateCard.css";


const CandidateCard = props => (
    <div>


        <div className="col">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{props.candidate.person_name}</h3>

                    {/* need to grab these */}
                    <h4>{props.candidate.race_office_name}</h4>
                    <h5>{props.candidate.part_affiliation}</h5>
                    <p>
                        <span>{props.candidate.campaign_website_url}</span>
                        <span> {props.candidate.campaign_twitter} | <i className="fab fa-twitter fa-sm"></i></span>
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

);

export default CandidateCard;
