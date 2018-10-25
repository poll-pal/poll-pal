require('dotenv').config();
const axios = require('axios');
const MQ_API = `https://www.mapquestapi.com/geocoding/v1/address?key=${process.env.MQ_API_KEY}&inFormat=kvp&outFormat=json&thumbMaps=false&maxResults=1&location=`;

const geocode = (address, callback, expRes) => {
    axios.get(MQ_API + address)
        .then(response =>{
            let geoResponse = response.data.results[0].locations;
            callback(geoResponse, expRes);
        })
        .catch(error => console.log(error.message));
}

module.exports = {
    geocode: geocode
};

