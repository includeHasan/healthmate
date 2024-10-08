const express = require('express');
const router = express.Router();
const {
  createPatient,
  removePatient,
  getPatientDetails,
  getPatientHistory
} = require('../controllers/patient.controller');
const { verifyToken, isPatient } = require('../middlewares/verify.middleware');

router.post('/', verifyToken,isPatient,createPatient);


router.delete('/:id', verifyToken,isPatient,removePatient);


router.get('/:id', verifyToken,isPatient,getPatientDetails);


router.get('/:id/history', verifyToken,isPatient,getPatientHistory);

module.exports = router;

