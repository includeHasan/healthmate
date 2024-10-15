const { GoogleGenerativeAI } =require("@google/generative-ai");


const genAI = new GoogleGenerativeAI("AIzaSyAELw_KDmy6FQJMzFZjSICJ7cWGeDoazPc");
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: "You are a helpful doctor assistant named HealthMate.",
});


 const generateResponse = async (prompt, systemInstruction = null) => {
  try {
    const modelConfig = systemInstruction
      ? { model: "gemini-1.5-flash", systemInstruction }
      : { model: "gemini-1.5-flash" };

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });
    return result.response.text();
  } catch (error) {
    console.error("Error generating AI response:", error);
    throw error;
  }
};

// Analyze health report (image)
const analyzeImage = async (imageUrl) => {
  try {
    const prompt = `Analyze the following health report: ${imageUrl}`;
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });
    return result.response.text();
  } catch (error) {
    console.error("Error analyzing health report:", error);
    throw error;
  }
};

module.exports = {
  generateResponse,
  analyzeImage,
};
