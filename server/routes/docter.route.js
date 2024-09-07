const express = require('express');
const { createDoctor } = require('../controllers/docter.controller');
const {upload }= require('../middlewares/multer.middleware');
const router = express.Router();


router.post('/createDocter', upload.fields([
    { name: 'profilePic', maxCount: 1 },
    { name: 'document', maxCount: 10 }   
]), createDoctor)
module.exports = router;
