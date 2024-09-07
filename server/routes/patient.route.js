const express = require('express');
const router = express.Router();
const {
  createPatient,
  removePatient,
  getPatientDetails,
  getPatientHistory
} = require('../controllers/patient.controller');

router.post('/', createPatient);


router.delete('/:id', removePatient);


router.get('/:id', getPatientDetails);


router.get('/:id/history', getPatientHistory);

module.exports = router;

