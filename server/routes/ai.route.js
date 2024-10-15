
const express =require('express');
const { handleHealthInquiry } = require("../controllers/ai.controller.js");
import { s3UploadMiddlewareForGemeni } from '../middlewares/multer.middleware.js';

const router = express.Router();

// Combined route for chatbot, symptom detection, and health report analysis
router.post("/health-inquiry",s3UploadMiddlewareForGemeni, handleHealthInquiry);

export default router;
