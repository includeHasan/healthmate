const express = require('express');
const { createDoctor, getDoctorDetails } = require('../controllers/docter.controller');
const {upload }= require('../middlewares/multer.middleware');
const router = express.Router();


router.post('/createDocter', upload.fields([
    { name: 'profilePic', maxCount: 1 },
    { name: 'document', maxCount: 10 }   
]), createDoctor)

router.get('/getDoctorDetails', getDoctorDetails)

module.exports = router;
