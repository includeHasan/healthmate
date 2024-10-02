const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const {fetchHeader,decodeToken} = require('../utils/auth')
const {uploadProfilePicture,uploadDocument} = require('../middlewares/multer.middleware')

const createDoctor = async (req, res) => {
    try {
        console.log("Creating new doctor...");
        const { firstName, lastName, licenseNo, speciality, experienceYrs } = req.body;
        const token = fetchHeader(req,res);
        const decoded = decodeToken(token);
        const userId = decoded.id;

        let profilePicUrl = '';
        let documentUrls = [];

        
        if (req.files && req.files.profilePic) {
            profilePicUrl = await uploadProfilePicture(req.files.profilePic[0], userId);
        }

      
        if (req.files && req.files.document) {
            for (let i = 0; i < req.files.document.length; i++) {
                const documentUrl = await uploadDocument(req.files.document[i], userId);
                documentUrls.push(documentUrl);
            }
        }

       
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
        return;
    }
};

const getDoctorDetails = async (req, res) => {  
    try {
        const token = fetchHeader(req,res);
        const decoded = decodeToken(token);
        const userId = decoded.id;
        const doctor = await prisma.doctor.findUnique({
            where: {
                userId
            }
        })
        res.status(200).json({ success: true, message: "Doctor details fetched successfully", doctor });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

const setLocation = async (req, res) => {
    try {
        const data = req.body;
        const token = fetchHeader(req);
        const decoded = decodeToken(token);
        const userId = decoded.id;
        const doctorWorkLocation = await prisma.doctorWorkLocation.create({
            data: {
                ...data,
                doctorId: userId
            }
        })
        res.status(200).json({ success: true, message: "Location set successfully", doctorWorkLocation });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

const setTimeTable = async (req, res) => {
    try {
        const data = req.body;
        const token = fetchHeader(req);
        const decoded = decodeToken(token);
        const userId = decoded.id;
        const timeTable=await prisma.doctorTimeTable.create({
            data:{
                ...data,
                doctorId: userId
            }
        })
        res.status(200).json({ success: true, message: "Time table set successfully", timeTable });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}   

const setAvailability = async (req, res) => {
    try {
        const data = req.body;
        const token = fetchHeader(req);
        const decoded = decodeToken(token);
        const userId = decoded.id;
        const availability=await prisma.doctorAvailability.create({
            data:{
                ...data,
                doctorId: userId
            }
        })
        res.status(200).json({ success: true, message: "Availability set successfully", availability });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}


  

module.exports = { createDoctor, getDoctorDetails, setLocation, setTimeTable, setAvailability };
