const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createTimeSlot = async (req, res) => {
    const { doctorId, workLocationId, day, startTime, endTime, date } = req.body;

    try {
        const newTimeSlot = await prisma.doctorTimeTable.create({
            data: {
                doctorId,
                workLocationId,
                day,
                startTime,
                endTime,
                date,
            },
        });
        res.status(201).json(newTimeSlot);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create time slot' });
    }
};

const updateTimeSlot = async (req, res) => {
    const { id } = req.params;
    const { startTime, endTime, day, date } = req.body;

    try {
        const updatedTimeSlot = await prisma.doctorTimeTable.update({
            where: { id },
            data: {
                startTime,
                endTime,
                day,
                date,
            },
        });
        res.status(200).json(updatedTimeSlot);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update time slot' });
    }
};

const deleteTimeSlot = async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.doctorTimeTable.delete({
            where: { id },
        });
        res.status(204).send(); // No content
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete time slot' });
    }
};

const getTimeSlots = async (req, res) => {
    const { doctorId } = req.params;

    try {
        const timeSlots = await prisma.doctorTimeTable.findMany({
            where: { doctorId },
            include: {
                doctorAvailability: true, // Includes availability info
            },
            orderBy: { day: 'asc' },
        });
        res.status(200).json(timeSlots);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve time slots' });
    }
};

module.exports = {
    createTimeSlot,
    updateTimeSlot,
    deleteTimeSlot,
    getTimeSlots,
};