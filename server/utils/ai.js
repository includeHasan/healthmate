const { GoogleGenerativeAI } =require("@google/generative-ai");


const genAI = new GoogleGenerativeAI("AIzaSyAELw_KDmy6FQJMzFZjSICJ7cWGeDoazPc");
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: "You are a helpful doctor assistant named HealthMate.",
});


 const generateResponse = async (prompt, systemInstruction = null) => {
  try {
    const modelConfig = systemInstruction
      ? { model: "gemini-1.0-pro-latest", systemInstruction }
      : { model: "gemini-1.0-pro-latest" };

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
    const prompt = `Analyze the following health report please read the health report and explain the user about the condition and problems: ${imageUrl}`;
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
