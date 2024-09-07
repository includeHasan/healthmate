const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createDocter = async (req, res) => {
    try {
        const { name, email, phoneNo, password, specialization } = req.body;
        const docter = await prisma.docter.create({
            data: {
                name,
                email,
                phoneNo,
                password,
                specialization
            }
        });
        res.status(200).json({ success: true, message: "Docter created successfully", docter });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = { createDocter };//hello