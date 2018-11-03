require('dotenv').config();
const axios = require('axios');
const MQ_API = `https://www.mapquestapi.com/geocoding/v1/address?key=${process.env.MQ_API_KEY}&inFormat=kvp&outFormat=json&thumbMaps=false&maxResults=1&location=`;
var locations= [];
var sentReply = true;

const getPollingCoords = (placesArray, callback = null) => {
    let place = placesArray.pop();
    if (place.address.line1 === undefined) {
        return;
    }
    axios.get(`${MQ_API}${place.address.line1} ${place.address.city} ${place.address.state} ${place.address.zip}`)
        .then(response =>{
            if (response.data.results.length > 0) {
                let locationData = response.data.results[0].locations[0];
                console.log(locationData);
                place.geo = locationData;
                locations.push(place);
                locations = [].concat.apply([], locations);
            }
            if (placesArray.length === 0 && !sentReply) {
                sentReply = true;
                // We're done
                setTimeout(() => {
                    callback.status(200).json(locations);
                    return;
                }, 3000);
            }
        })
        .catch(err => {
            console.log(err.message);
        });
    getPollingCoords(placesArray, callback);
};


const getPollingPlaces = (address, res) => {
    axios.get(`https://content.googleapis.com/civicinfo/v2/voterinfo?key=${process.env.GOOGLE_API_KEY}&electionId=6000&returnAllAvailableData=true&address=${address}`)
        .then(response =>{
            console.log("****************************");
            console.log(response.data.pollingLocations);
            console.log("****************************");
            let places = response.data.pollingLocations;
            if(res){
                // res.json(response.data);
                sentReply = false;
                getPollingCoords(places, res);
            };

        })
        .catch(err => console.log(err.message));
};

module.exports = {
    getPollingPlaces: getPollingPlaces
}