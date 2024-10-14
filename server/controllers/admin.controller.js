const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const unVerifiedDoctors = async (req, res) => {
    try {
        const doctors = await prisma.doctor.findMany({
            where: {
                verified: false
            }
        });

        res.status(200).json({ success: true, message: "Unverified doctors fetched successfully", doctors });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

const verifyDoctor = async (req, res) => {
    try {
        const { id } = req.params;

        const doctor = await prisma.doctor.update({
            where: {
                id
            },
            data: {
                verified: true
            }
        });

        res.status(200).json({ success: true, message: "Doctor verified successfully", doctor });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};



module.exports = {
    unVerifiedDoctors,
    verifyDoctor
};