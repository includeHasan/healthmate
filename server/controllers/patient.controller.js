const { PrismaClient } = require('@prisma/client');
const { fetchHeader, decodeToken } = require('../utils/auth');
const prisma = new PrismaClient();

const createPatient = async (req, res) => {
    try {
        const token = fetchHeader(req);
        const decoded = decodeToken(token);
        const userId = decoded.id;
        const patient = await prisma.patient.create({
            data: {
                ...req.body,
                userId
            }
        })
        res.status(200).json({ success: true, message: "Patient created successfully", patient });
    } catch (error) {   
        res.status(500).json({ success: false, error: error.message });
    }
}

const removePatient = async (req, res) => {
    try {
        const {id} = req.params;
        const patient = await prisma.patient.delete({
            where: {
                id
            }
        })
        res.status(200).json({ success: true, message: "Patient deleted successfully", patient });  
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });

    }
}

const getPatientDetails = async (req, res) => {
    try {
        const id = req.params.id;
        const patient = await prisma.patient.findUnique({
            where: {
                id
            }
        })
        res.status(200).json({ success: true, message: "Patient details fetched successfully", patient });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}



const getPatientHistory = async (req, res) => {
    try {
        const id = req.params.id;
        const patientHistory = await prisma.patientHistory.findMany({
            where: {
                patientId: id
            }
        })
        res.status(200).json({ success: true, message: "Patient history fetched successfully", patientHistory });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

module.exports = { createPatient, removePatient, getPatientDetails, getPatientHistory };