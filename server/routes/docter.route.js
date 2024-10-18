const express = require('express');
const { createDoctor, getDoctorDetails,setLocation } = require('../controllers/docter.controller');
const {upload }= require('../middlewares/multer.middleware');
const { verifyToken, isDoctor } = require('../middlewares/verify.middleware');
const router = express.Router();


router.post('/createDocter',verifyToken,isDoctor, upload.fields([
    { name: 'profilePic', maxCount: 1 },
    { name: 'document', maxCount: 10 }   
]), createDoctor)

router.get('/getDoctorDetails', verifyToken,isDoctor,getDoctorDetails);
router.post('/setDoctorLocation',verifyToken,isDoctor,setLocation);

module.exports = router;
