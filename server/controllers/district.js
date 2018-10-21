require('dotenv').config();
const axios = require('axios');
const BP_URL = `https://api.ballotpedia.org/v3/api/contains?access_token=${process.env.BP_KEY}&point=`;
/* 
 * 
 */
const getDistrictCoord = (latLng, callback = null) => {
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

const getDistrictByAddress = (address, callback = null) => {
    // TODO - Convert address to coords
    axios.get(BP_URL)
        .then(response => { 
            if(callback){
                callback.json(response.data);
            }
            else{
                console.log(response.data);
            }
    })
        .catch(err => console.log(err.message));
}

module.exports = {
    latLng: getDistrictCoord
}
