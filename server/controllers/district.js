require('dotenv').config();
const axios = require('axios');
const BP_URL = `https://api.ballotpedia.org/v3/api/contains?access_token=${process.env.BP_KEY}&point=`;
const MQ_API = `https://www.mapquestapi.com/geocoding/v1/address?key=${process.env.MQ_API_KEY}&inFormat=kvp&outFormat=json&thumbMaps=false&maxResults=1&location=`;

/* 
 * 
 */
const getDistrictsLatLng = (latLng, callback = null) => {
    let uri = BP_URL + latLng.join(',');
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

const getDistrictsByAddress = (address, callback = null) => {
    // TODO - Convert address to coords
    axios.get(MQ_API+address).then(geoResponse => {
        let locationObj = geoResponse.data.results[0].locations[0];
        console.log(locationObj);
        axios.get(BP_URL+locationObj.latLng.lat+','+locationObj.latLng.lng)
        .then(response => { 
            if(callback){
                callback.json(response.data);
            }
            else{
                console.log(response.data);
            }
        })  
        .catch(err => console.log(err.message));
        } // End BallotPedia API Call
    ).catch(err => console.error(err.message));
    // End Outer MapQuest API call
}

module.exports = {
    getDistrictsLatLng: getDistrictsLatLng,
    getDistrictsByAddress: getDistrictsByAddress
}
// Test API Call - Uncomment below
// getDistrictsLatLng([39.4711, -104.7890])
// getDistrictsByAddress('7135 W 32nd Ave Wheat Ridge, CO 80033');