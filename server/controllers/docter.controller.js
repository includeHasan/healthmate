const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { uploadProfilePicture, uploadDocument } = require('../middlewares/multer.middleware');

// Create a new doctor profile
const createDoctor = async (req, res) => {
    try {
        const { firstName, lastName, licenseNo, speciality, experienceYrs } = req.body;
        const userId = req.user.id;  // Access the decoded user id from the middleware

        let profilePicUrl = '';
        let documentUrls = [];

        // Upload profile picture if present
        if (req.files && req.files.profilePic) {
            profilePicUrl = await uploadProfilePicture(req.files.profilePic[0], userId);
        }

        // Upload documents if present
        if (req.files && req.files.document) {
            for (let i = 0; i < req.files.document.length; i++) {
                const documentUrl = await uploadDocument(req.files.document[i], userId);
                documentUrls.push(documentUrl);
            }
        }

        // Create doctor profile
        const doctor = await prisma.doctor.create({
            data: {
                userId,
                firstName,
                lastName,
                licenseNo,
                speciality,
                experienceYrs: parseInt(experienceYrs),
                profilePic: profilePicUrl,
                documentUrl: documentUrls
            }
        });

        console.log("Doctor created successfully:", doctor);
        res.status(200).json({ success: true, message: "Doctor created successfully", doctor });
    } catch (error) {
        console.error("Error creating doctor:", error);
        res.status(400).json({ success: false, error: error.message });
    }
};

// Fetch doctor details for logged-in user
const getDoctorDetails = async (req, res) => {
    try {
        const userId = req.user.id;  // Access the decoded user id from the middleware

        // Fetch doctor details using userId
        const doctor = await prisma.doctor.findUnique({
            where: { userId }
        });

        if (!doctor) {
            return res.status(404).json({ success: false, message: "Doctor not found" });
        }

        res.status(200).json({ success: true, message: "Doctor details fetched successfully", doctor });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Set doctor's work location
const setLocation = async (req, res) => {
    try {
        const data = req.body;
        const userId = req.user.id;  // Access the decoded user id from the middleware

        // Create doctor's work location
        const doctorWorkLocation = await prisma.doctorWorkLocation.create({
            data: {
                ...data,
                doctorId: userId
            }
        });

        res.status(200).json({ success: true, message: "Location set successfully", doctorWorkLocation });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Set doctor's time table
const setTimeTable = async (req, res) => {
    try {
        const data = req.body;
        const userId = req.user.id;  // Access the decoded user id from the middleware

        // Create doctor's time table
        const timeTable = await prisma.doctorTimeTable.create({
            data: {
                ...data,
                doctorId: userId
            }
        });

        res.status(200).json({ success: true, message: "Time table set successfully", timeTable });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// Set doctor's availability
const setAvailability = async (req, res) => {
    try {
        const data = req.body;
        const userId = req.user.id;  // Access the decoded user id from the middleware

        // Create doctor's availability
        const availability = await prisma.doctorAvailability.create({
            data: {
                ...data,
                doctorId: userId
            }
        });

        res.status(200).json({ success: true, message: "Availability set successfully", availability });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = {
    createDoctor,
    getDoctorDetails,
    setLocation,
    setTimeTable,
    setAvailability
};
