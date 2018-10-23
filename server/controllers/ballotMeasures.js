require('dotenv').config();
const axios = require('axios');
// const BP_URL = `https://api.ballotpedia.org/v3/api/contains?access_token=${process.env.BP_KEY}&point=`;
const BP_URL = `http://api.ballotpedia.org/v3/api/1.1/tables/ballot_measures/rows?access_token=${process.env.BP_KEY}&filters[election_date][gte]=2018-10-01&filters[election_date][lte]=2018-11-07&filters[district_state]=`
const MQ_API = `https://www.mapquestapi.com/geocoding/v1/address?key=${process.env.MQ_API_KEY}&inFormat=kvp&outFormat=json&thumbMaps=false&maxResults=1&location=`;

/* 
 * @function getCandidates - this will return candidates using the 'race_election_district_name' attribute returned in the 'district' API calls
 * @param race [String] - the race your would like candiates to be from
 * ie - 'Colorado District 7'  or for the state-wide races use the full name of the state 'Colorado'
 */
const getMeasuresByState = (state, callback = null) => {
    let uri = BP_URL + state;
    console.log(uri);
    axios.get(uri)
        .then(response => {
            let validMeasures = [];
            response.data.data.forEach(measure =>{
                if(measure.status == 'On the ballot'){
                    console.log(measure);
                    validMeasures.push(measure);
                }
            });
            if(callback){
                callback.json(validMeasures);
            }
            else{
                console.log(response.data);
            }
    })
        .catch(err => console.log(err.message));
};

const getMeasuresByAddress = (address, callback = null) => {
    axios.get(MQ_API+address).then(geoResponse => {
        let locationObj = geoResponse.data.results[0].locations[0];
        console.log(locationObj);
        axios.get(BP_URL+locationObj.adminArea3)
        .then(response => { 
            let validMeasures = [];
            response.data.data.forEach(measure =>{
                if(measure.status == 'On the ballot'){
                    console.log(measure);
                    validMeasures.push(measure);
                }
            });
            if(callback){
                callback.json(validMeasures);
            }
            else{
                console.log(response.data);
            }
        })  
        .catch(err => console.log(err.message));
        } // End BallotPedia API Call
    ).catch(err => console.error(err.message));
};



module.exports = {
    getMeasuresByState:getMeasuresByState,
    getMeasuresByAddress: getMeasuresByAddress
}
