// Import required packages
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const ollama = require('ollama');

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

// Function to suggest a doctor based on a message
async function suggestDoctor(message) {
    const model = 'llama3.1=2:8=1b'; // Change to your model as needed

    const messages = [
        { role: 'user', content: message }
    ];

    console.log("Sending initial query to LLM...");
    const response = await ollama.chat({
        model: model,
        messages: messages,
        temperature: 0,
        tools: [
            {
                type: 'function',
                function: {
                    name: "find_doctor",
                    description: "Suggest a doctor based on user message",
                    parameters: {
                        type: "object",
                        properties: {
                            symptoms: {
                                type: "string",
                                description: "The symptoms faced by the patient"
                            },
                            location: {
                                type: "string",
                                description: "The location of the patient"
                            }
                        },
                        required: ["symptoms", "location"]
                    }
                }
            }
        ]
    });

    console.log("LLM response received. Checking for function calls...");
    console.log("LLM response:", JSON.stringify(response.message, null, 2));

    if (!response.message.tool_calls || response.message.tool_calls.length === 0) {
        console.log("The model didn't use the function. Its response was:");
        console.log(response.message.content);
        return;
    }

    let symptoms = "";
    let location = "";

    for (const tool of response.message.tool_calls) {
        if (tool.function.name === 'find_doctor') {
            const args = tool.function.arguments;

            // Here we can use the arguments to fetch the relevant doctors
            symptoms = args.symptoms;
            location = args.location;

            const doctors = await prisma.doctor.findMany({
                where: {
                    OR: [
                        { speciality: { contains: 'general', mode: 'insensitive' } },
                        { speciality: { contains: 'infectious disease', mode: 'insensitive' } },
                        // Expand this to include more specialties based on symptom analysis
                    ],
                    workLocations: {
                        some: {
                            city: { contains: location, mode: 'insensitive' },
                            // You can add state and country checks if needed
                        }
                    }
                },
                include: { workLocations: true }
            });

            if (doctors.length > 0) {
                // If doctors are found, send them back to the AI
                messages.push({
                    role: 'tool',
                    content: JSON.stringify(doctors)
                });
            } else {
                // Handle case where no doctors are found
                messages.push({
                    role: 'tool',
                    content: JSON.stringify({ error: `No doctors found for symptoms: ${symptoms} in location: ${location}.` })
                });
            }
        }
    }

    // Send final query to the LLM with the result of the function call
    console.log("Sending final query to LLM...");
    const finalResponse = await ollama.chat({
        model: model,
        messages: messages,
    });

    // Log and display the final LLM response
    console.log("Final LLM response:", finalResponse.message.content);
}

// Route to handle doctor suggestion requests
app.post('/suggest-doctor', async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ success: false, message: 'Message is required.' });
    }

    try {
        await suggestDoctor(message);
        res.status(200).json({ success: true, message: 'Doctor suggestion process completed.' });
    } catch (error) {
        console.error("Error suggesting doctor:", error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Start the server
const PORT = 2000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
