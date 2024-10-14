const express = require('express');
const router = express.Router();
const {getAvailableSlots,addDoctorSchedule,bookAppointment,updateAppointmentStatus} = require('../controllers/appointment.controller');

// Routes for appointment process
router.get('/available-slots', getAvailableSlots); 
router.post('/add-schedule', addDoctorSchedule);   
router.post('/book-appointment', bookAppointment); 
router.post('/update-status', updateAppointmentStatus); 
module.exports = router;
