require('dotenv').config();
// const express = require('express');
// const router = express.Router();
const axios = require('axios');
// const BP_URL = `https://api.ballotpedia.org/v3/api/contains?access_token=${process.env.BP_KEY}&point=`;
const BP_URL = `http://api.ballotpedia.org/v3/api/1.1/tables/candidates/rows?access_token=${process.env.BP_KEY}&filters[race_general_election_date][eq]=2018-11-06&filters[general_status][neq]=null&filters[race_election_district_name][eq]=`
const districts = require('./district');
const geocoder = require('./geocode');
const districtsArray = [];
var candidatesArray = [];
var sentReply = true;

/* 
 * @function getCandidates - this will return candidates using the 'race_election_district_name' attribute returned in the 'district' API calls
 * @param race [String] - the race your would like candiates to be from
 * ie - 'Colorado District 7'  or for the state-wide races use the full name of the state 'Colorado'
 */
const getCandidate = () => {

};

const toCandidateModel = apiData => {
    return {
        ...apiData,
        name: apiData.person_name,
        office: apiData.race_office_name,
        party: apiData.party_affiliation.data.name,
        state: apiData.race_office_district_state,
        incumbent: apiData.is_incumbent,
        website: apiData.campaign_website_url,
        twitter: apiData.campaign_twitter
    };
}

const getCandidates = (racesArray, callback = null) => {
    let race = racesArray.pop();
    if (race.name === undefined) {
        return;
    }
    let uri = BP_URL + race.name + "&filters[race_office_district_state][eq]=" + race.state;
    console.log(uri);
    axios.get(uri)
        .then(response => {
            if (response.data.data.length > 0) {
                candidatesArray.push(response.data.data);
                candidatesArray = [].concat.apply([], candidatesArray);
            }
            if (racesArray.length === 0 && !sentReply) {
                sentReply = true;
                // We're done
                setTimeout(() => {
                    const candidateModels = candidatesArray.map(toCandidateModel)
                    callback.status(200).json(candidateModels);
                    return;
                }, 3000);
            }
        })
        .catch(err => console.log(err.message));
    getCandidates(racesArray, callback);
};

const getCandidatesByZip = (postalCode, expRes = null) => {
    sentReply = false;
    geocoder.geocode(postalCode, districtsCallback, expRes);
};

const districtsCallback = (geoObj, callback = null) => {
    let location = {
        state: geoObj[0].adminArea3,
        postalCode: geoObj[0].postalCode,
        lat: geoObj[0].latLng.lat,
        lng: geoObj[0].latLng.lng,
    }
    districts.getDistrictsModule([location.lat, location.lng], districtList, callback);
    console.log(location);
}

const districtList = (response, expRes) => {
    response.forEach(district => {
        let race = {
            name: district.name,
            state: district.state
        };
        districtsArray.push(race);
    });
    // console.log(districtsArray);
    getCandidates(districtsArray, expRes);
};


module.exports = {
    getCandidate: getCandidate,
    getCandidates: getCandidates,
    getCandidatesByZip: getCandidatesByZip
}
