const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const geolib = require('geolib');


const allDocters = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query; // Pagination params

        const docters = await prisma.doctor.findMany({
            skip: (page - 1) * limit,
            take: parseInt(limit)
        });

        const totalDocters = await prisma.doctor.count();

        res.status(200).json({
            success: true,
            message: "Doctors fetched successfully",
            doctors: docters,
            pagination: {
                total: totalDocters,
                page: parseInt(page),
                limit: parseInt(limit)
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

const getDocterDetails = async (req, res) => {
    try {
        const id = req.params.id;
        const docter = await prisma.doctor.findUnique({
            where: { id }
        });

        res.status(200).json({ success: true, message: "Doctor details fetched successfully", docter });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};


const searchAndFilterDoctors = async (req, res) => {
    try {
        const { searchString, specialization, location, page = 1, limit = 10 } = req.query;

        const doctors = await prisma.doctor.findMany({
            where: {
                AND: [
                    specialization ? { speciality: specialization } : {},
                    location ? {
                        workLocations: {
                            some: {
                                OR: [
                                    { city: { contains: location, mode: 'insensitive' } },
                                    { state: { contains: location, mode: 'insensitive' } },
                                    { country: { contains: location, mode: 'insensitive' } },
                                    { locationName: { contains: location, mode: 'insensitive' } }
                                ]
                            }
                        }
                    } : {},
                    searchString ? {
                        OR: [
                            { firstName: { contains: searchString, mode: 'insensitive' } },
                            { lastName: { contains: searchString, mode: 'insensitive' } },
                            { speciality: { contains: searchString, mode: 'insensitive' } },
                            {
                                workLocations: {
                                    some: {
                                        OR: [
                                            { city: { contains: searchString, mode: 'insensitive' } },
                                            { state: { contains: searchString, mode: 'insensitive' } },
                                            { country: { contains: searchString, mode: 'insensitive' } },
                                            { locationName: { contains: searchString, mode: 'insensitive' } }
                                        ]
                                    }
                                }
                            }
                        ]
                    } : {}
                ]
            },
            include: { workLocations: true },
            skip: (page - 1) * limit,
            take: parseInt(limit)
        });

        const totalDoctors = await prisma.doctor.count();

        res.status(200).json({
            success: true,
            message: "Doctors fetched successfully",
            doctors,
            pagination: {
                total: totalDoctors,
                page: parseInt(page),
                limit: parseInt(limit)
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

const nearestDoctors = async (req, res) => {
    try {
        const { latitude, longitude, maxDistance = 50000, page = 1, limit = 10 } = req.body;
        const userLocation = { latitude, longitude };

        const doctors = await prisma.doctor.findMany({
            include: { doctorWorkLocations: true }
        });

        const doctorsWithDistance = doctors.map(doctor => {
            const nearestLocation = doctor.doctorWorkLocations.reduce((nearest, location) => {
                const [lat, lon] = location.coordinates.split(',');
                const distance = geolib.getDistance(userLocation, { latitude: parseFloat(lat), longitude: parseFloat(lon) });
                return distance < nearest.distance ? { distance, location } : nearest;
            }, { distance: Infinity, location: null });

            return {
                ...doctor,
                distance: nearestLocation.distance,
                nearestLocation: nearestLocation.location
            };
        }).filter(doctor => doctor.distance <= maxDistance);

        const sortedDoctors = doctorsWithDistance.sort((a, b) => a.distance - b.distance);
        const paginatedDoctors = sortedDoctors.slice((page - 1) * limit, page * limit);

        res.status(200).json({
            success: true,
            message: "Nearest doctors fetched successfully",
            doctors: paginatedDoctors,
            pagination: {
                total: doctorsWithDistance.length,
                page: parseInt(page),
                limit: parseInt(limit)
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

const getDoctorsAvailability = async (req, res) => {
    try {
        const { doctorId, date, page = 1, limit = 10 } = req.query;

        const availability = await prisma.doctorTimeTable.findMany({
            where: {
                doctorId,
                date: new Date(date)
            },
            include: {
                doctorAvailability: true,
                workLocation: true
            },
            skip: (page - 1) * limit,
            take: parseInt(limit)
        });

        const totalAvailability = await prisma.doctorTimeTable.count({
            where: {
                doctorId,
                date: new Date(date)
            }
        });

        res.status(200).json({
            success: true,
            message: "Doctor's availability fetched successfully",
            availability,
            pagination: {
                total: totalAvailability,
                page: parseInt(page),
                limit: parseInt(limit)
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};



module.exports = { allDocters, getDocterDetails, searchAndFilterDoctors, nearestDoctors, getDoctorsAvailability };
