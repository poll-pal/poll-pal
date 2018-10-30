const express = require('express');
const router = express.Router();
const places = require('../controllers/pollingPlaces');

router.get('/', (req, res, next) =>{
    try{
        let address = req.query.address;
        places.getPollingPlaces(address, res);
    }
    catch (err){
        res.json({
            message: err.message
        });
    }
    
});
