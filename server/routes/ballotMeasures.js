const express = require('express');
const router = express.Router();
const measures = require('../controllers/ballotMeasures');


router.get('/', (req, res, next) => {
    if(req.query.state){
        measures.getMeasuresByState(req.query.state, res);
    }
    else if(req.query.address){
        measures.getMeasuresByAddress(req.query.address, res);
    }
    else if(req.query.zip){
        measures.getMeasuresByAddress(req.query.zip, res);
    }
    else{
        res.json({
            message: "Unrecognized paramater"
        })
    }
    
});


module.exports = router;
