import React from 'react'
import "./CandidateCard.css";


const CandidateCard = props => (
    <div>
        <div className="col-lg-12 col-xs-12">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{props.candidate.person_name}</h3>
                    {/* need to grab these */}
                    <h4>{props.candidate.race_office_name}</h4>
                    <h5>{props.candidate.part_affiliation}</h5>
                    <p>
                        <span><a href="{props.candidate.campaign_website_url}" target="_blank">website</a></span> | 
                        <span><a href="{props.candidate.campaign_twitter}" target="_blank"><i className="fab fa-twitter fa-sm"></i></a></span>
                    </p>
                    <br/>
                    <span><button type="button" className="btn btn-yes">Vote Yes</button></span>&nbsp;&nbsp;<span><button type="button" className="btn btn-no">Vote No</button></span>
                </div>
            </div>
        </div>
    </div>
);

export default CandidateCard;
