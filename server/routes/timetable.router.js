const express = require('express');
const router = express.Router();
const {
    createTimeSlot,
    updateTimeSlot,
    deleteTimeSlot,
    getTimeSlots,
} = require('../controllers/timetable.controller');

router.post('/create-time-slot',createTimeSlot);
router.get("/get-time-slot",getTimeSlots);
router.post('/update-time-slot',updateTimeSlot);
router.delete('/delete-time-slot',deleteTimeSlot);

module.exports = router;