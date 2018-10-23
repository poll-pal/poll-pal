const express = require('express');
const router = express.Router();
const candidates = require('../controllers/candidates');


router.get('/', (req, res, next) => {
    console.log(req.query.race);
    candidates.getCandidates(req.query.race, res);
});


module.exports = router;
