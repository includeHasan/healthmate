const express = require('express');
const router = express.Router();
const { allDocters, getDocterDetails, searchAndFilterDoctors, nearestDoctors, getDoctorsAvailability } = require('../controllers/docters.controller');

router.get('/', allDocters);
router.get('/:id', getDocterDetails);
router.get('/search', searchAndFilterDoctors);
router.get('/nearest', nearestDoctors);
router.get('/availability', getDoctorsAvailability);

module.exports = router;