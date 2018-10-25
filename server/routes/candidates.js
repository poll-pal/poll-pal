const express = require('express');
const router = express.Router();
const candidates = require('../controllers/candidates');


router.get('/', (req, res, next) => {
    console.log(req.query.race);
    candidates.getCandidates(req.query.races, res);
});

router.get('/search', (req, res, next) => {
    console.log(req.query.zip);
    candidates.getCandidatesByZip(req.query.zip, res);
});

module.exports = router;
