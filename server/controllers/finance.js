const axios = require('axios');
const propublica_url = "https://api.propublica.org/campaign-finance/v1/";

const getCandidateData = () => {
    axios.get()
        .then(response => { 
            console.log(response);
        })
        .catch(err => console.log(err.message));
};