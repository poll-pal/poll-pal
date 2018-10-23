const express = require('express');
const router = express.Router();
const districts = require('../controllers/district');

router.get('/coords', (req, res, next) => {
    console.log(req.query);
    districts.getDistrictsLatLng([req.query.lat, req.query.lng], res);
});

router.get('/', (req, res, next) => {
    console.log(req.query.address);
    districts.getDistrictsByAddress(req.query.address, res);
});


module.exports = router;
