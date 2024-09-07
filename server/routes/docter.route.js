const express = require('express');
const { createDoctor } = require('../controllers/doctorController');
const upload = require('../middleware/multerConfig');
const router = express.Router();


router.post('/create', upload.fields([
    { name: 'profilePic', maxCount: 1 },
    { name: 'document', maxCount: 10 }   
]), createDoctor);

module.exports = router;
