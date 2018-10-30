require('dotenv').config();
const axios = require('axios');

const getPollingPlaces = (address, res) => {
    axios.get(`https://content.googleapis.com/civicinfo/v2/voterinfo?key=${process.env.GOOGLE_API_KEY}&electionId=6000&returnAllAvailableData=true&address=${address}`)
        .then(response =>{
            console.log(response.data);
            if(res){
                res.json(response.data);
            }
        })
        .catch(err => console.log(err.message));
};

module.exports = {
    getPollingPlaces: getPollingPlaces
}