const express = require('express');
const router = express.Router();

const {
    unVerifiedDoctors,
    verifyDoctor,verifiedDoctors
}= require('../controllers/admin.controller');

router.get('/unverified',unVerifiedDoctors);
router.get('/verifyDoctor',verifyDoctor);
router.get('/verified',verifiedDoctors);

module.exports=router;