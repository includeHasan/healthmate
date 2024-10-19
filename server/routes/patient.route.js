const express = require('express');
const router = express.Router();
const {
  createPatient,
  removePatient,
  getPatientDetails,
  getPatientHistory,
  allPatients,
  getAllPatient
 
} = require('../controllers/patient.controller');
const { verifyToken, isPatient } = require('../middlewares/verify.middleware');
router.get('/',getAllPatient);
router.post('/', verifyToken,isPatient,createPatient);


router.delete('/:id', verifyToken,isPatient,removePatient);


router.get('/patientId/:id', verifyToken,isPatient,getPatientDetails);

router.get('/patients', verifyToken,allPatients);


router.get('/:id/history', verifyToken,isPatient,getPatientHistory);

module.exports = router;

