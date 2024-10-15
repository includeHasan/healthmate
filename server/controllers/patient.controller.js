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
    console.log("Entering allPatients function");
    try {
        const userId = await req.user.id;
        console.log("User ID:", userId);

        const user = await prisma.user.findUnique({
            where: { id: userId },
            include: { patients: true },
        });

        if (!user) {
            console.log("User not found");
            return res.status(404).json({ success: false, message: "User not found" });
        }

        console.log("User found:", user);

        const patients = user.patients.length > 0 ? user.patients : [];
        console.log("Patients:", patients);

        return res.status(200).json({
            success: true,
            message: "Patients fetched successfulliii",
            patients
        });
    } catch (error) {
        console.error("Error fetching patients:", error);
        return res.status(500).json({ success: false, message: "Error fetching patients", error: error.message });
    } finally {
        console.log("Exiting allPatients function");
    }
};

const allPatientsRelatedToUser = async (req, res) => 
    {
        console.log("Entering allPatientsRelatedToUser function");
        try {
            const userId = req.user.id;
            const user = await prisma.user.findUnique({
                where: { id: userId },
                include: { patients: true },
            });

            if (!user) {
                return res.status(404).json({ success: false, message: "User not found" });
            }

            const patients = user.patients.length > 0 ? user.patients : [];

            return res.status(200).json({
                success: true,
                message: "Patients fetched successfully",
                patients
            });
        } catch (error) {
            return res.status(500).json({ success: false, message: "Error fetching patients", error: error.message });
        }
    }


module.exports = { createPatient, removePatient, getPatientDetails, getPatientHistory, allPatients,allPatientsRelatedToUser }
