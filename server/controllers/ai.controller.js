const { generateResponse, analyzeImage } = require("../utils/ai");


 const handleHealthInquiry = async (req, res) => {
  try {
    const { symptoms, message } = req.body;
    let response = {};

    // General Chat Mode (message input)
    if (message) {
      const prompt = message;
      const assistantResponse = await generateResponse(prompt, "You are a helpful doctor assistant named HealthMate.");
      response.chatbot = assistantResponse;
    }

    // Symptom Detection
    if (symptoms) {
      const symptomPrompt = `A patient has the following symptoms: ${symptoms}. What kind of specialist should they see?`;
      const recommendation = await generateResponse(symptomPrompt);
      response.recommendation = recommendation;
    }

    // Health Report Analysis (if an image is uploaded)
    if (req.file) {
      const reportUrl = req.file.location; // S3 file URL
      const reportExplanation = await analyzeImage(reportUrl);
      response.reportExplanation = reportExplanation;
    }

    // If no input is provided
    if (!message && !symptoms && !req.file) {
      return res.status(400).json({ error: "Please provide a message, symptoms, or upload a health report." });
    }

    res.json(response);
  } catch (error) {
    res.status(500).json({ error: "Error handling health inquiry" });
  }
};

module.exports = {
  handleHealthInquiry,
};
