require('dotenv').config();
const axios = require('axios');
// const BP_URL = `https://api.ballotpedia.org/v3/api/contains?access_token=${process.env.BP_KEY}&point=`;
const BP_URL = `http://api.ballotpedia.org/v3/api/1.1/tables/candidates/rows?access_token=${process.env.BP_KEY}&filters[race_general_election_date][eq]=2018-11-06&filters[general_status][eq]=On the Ballot&filters[race_election_district_name][eq]=`

/* 
 * @function getCandidates - this will return candidates using the 'race_election_district_name' attribute returned in the 'district' API calls
 * @param race [String] - the race your would like candiates to be from
 * ie - 'Colorado District 7'  or for the state-wide races use the full name of the state 'Colorado'
 */
const getCandidates = (race , callback = null) => {
    let uri = BP_URL + race;
    console.log(uri);
    axios.get(uri)
        .then(response => {
            if(callback){
                callback.json(response.data);
            }
            else{
                console.log(response.data);
            }
    })
        .catch(err => console.log(err.message));
};



module.exports = {
    getCandidates:getCandidates
}
