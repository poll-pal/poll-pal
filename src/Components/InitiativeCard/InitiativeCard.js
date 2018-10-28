import React from 'react'
import "./InitiativeCard.css";


const InitiativeCard = props => (
    <div>
        <div className="col-lg-4 col-sm-12">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{}</h3>
                    <p>{props.ballot.name}</p>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <span><button type="button" className="btn btn-yes">Vote Yes</button></span>&nbsp;&nbsp;<span><button type="button" className="btn btn-no">Vote No</button></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default InitiativeCard;
