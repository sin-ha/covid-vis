const express = require('express');
const router = express.Router();
const covidController = require('./controllers/covidController');
const vaxController = require('./controllers/vaxController');

router.get('/',covidController.homeVis);
router.get('/covidvis',covidController.covidVis);
router.get('/vaxvis', vaxController.vaxVis);


module.exports = router;
