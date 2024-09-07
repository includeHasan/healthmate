const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const {uploadToS3} = require('../middlewares/multer')
const createDoctor = async (req, res) => {
    try {
        const { name, email, phoneNo, password, specialization } = req.body;

        // Upload files (profilePic and multiple documents)
        let profilePicUrl = '';
        let documentUrls = [];

        // Upload profilePic
        if (req.files && req.files.profilePic) {
            profilePicUrl = await uploadToS3(req.files.profilePic[0]);
        }

        // Upload multiple documents
        if (req.files && req.files.document) {
            for (let i = 0; i < req.files.document.length; i++) {
                const documentUrl = await uploadToS3(req.files.document[i]);
                documentUrls.push(documentUrl);
            }
        }

        // Create the doctor in the database with profilePic and document URLs
        const doctor = await prisma.doctor.create({
            data: {
                name,
                email,
                phoneNo,
                password,
                specialization,
                profilePic: profilePicUrl,        // Store profilePic URL
                documentUrls: documentUrls        // Store document URLs (array)
            }
        });

        res.status(200).json({ success: true, message: "Doctor created successfully", doctor });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
module.exports = { createDocter };