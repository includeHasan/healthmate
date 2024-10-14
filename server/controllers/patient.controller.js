const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Create a new patient profile
const createPatient = async (req, res) => {
    try {
        const userId = req.user.id;  // Access the decoded user id from the middleware

        // Create a patient entry associated with the logged-in user
        const patient = await prisma.patient.create({
            data: {
                ...req.body,
                userId  // Associate the patient with the authenticated user
            }
        });

        res.status(200).json({ success: true, message: "Patient created successfully", patient });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Remove a patient record by patient ID
const removePatient = async (req, res) => {
    try {
        const { id } = req.params;  // Get the patient ID from request params

        // Delete the patient record
        const patient = await prisma.patient.delete({
            where: {
                id
            }
        });

        res.status(200).json({ success: true, message: "Patient deleted successfully", patient });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get details of a specific patient by patient ID
const getPatientDetails = async (req, res) => {
    try {
        const { id } = req.params;  // Get the patient ID from request params

        // Fetch the patient details
        const patient = await prisma.patient.findUnique({
            where: {
                id
            }
        });

        res.status(200).json({ success: true, message: "Patient details fetched successfully", patient });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Get the medical history of a specific patient by patient ID
const getPatientHistory = async (req, res) => {
    try {
        const { id } = req.params;  // Get the patient ID from request params

        // Fetch the patient's medical history
        const patientHistory = await prisma.patientHistory.findMany({
            where: {
                patientId: id
            }
        });

        res.status(200).json({ success: true, message: "Patient history fetched successfully", patientHistory });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

const allPatients = async (req, res) => {
    console.log("hello")
    try{
        const userId = req.user.id;
        console.log(userId)
         const patients=await prisma.patient.findMany({
              where:{
                userId:userId
              }
         });

            res.status(200).json({ success: true, message: "Patients fetch successfully", patients });
    }
    catch(error){
        res.status(500).json({ success: false, error: error.message });
}
}

module.exports = { createPatient, removePatient, getPatientDetails, getPatientHistory, allPatients }
