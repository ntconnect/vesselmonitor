const express = require('express');
const router = express.Router();

const mapsController = require('../app/controllers/mapController');

router.use('/', mapsController.index);

module.exports = router;
