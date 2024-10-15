
const express =require('express');
const { handleHealthInquiry } = require("../controllers/ai.controller.js");
const {s3UploadMiddlewareForGemeni}=require('../middlewares/multer.middleware')

const router = express.Router();

// Combined route for chatbot, symptom detection, and health report analysis
router.post("/health-inquiry",s3UploadMiddlewareForGemeni, handleHealthInquiry);

module.exports = router;
