const express = require('express');
const router = express.Router();
const measures = require('../controllers/ballotMeasures');


router.get('/', (req, res, next) => {
    console.log(req.query.state);
    measures.getMeasures(req.query.state, res);
});


module.exports = router;
