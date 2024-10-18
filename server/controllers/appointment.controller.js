const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAvailableSlots = async (req, res) => {
  const { doctorId, date } = req.query;
  try {
    const slots = await prisma.doctorAvailability.findMany({
      where: {
        timeTable: {
          doctorId: doctorId
        },
        date: new Date(date),
        isAvailable: 'yes',
      },
      include: {
        timeTable: true,
      }
    });
    res.status(200).json({ success: true, data: slots });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Add doctor schedule (time slots)
exports.addDoctorSchedule = async (req, res) => {
  const { doctorId, workLocationId, day, startTime, endTime, date } = req.body;
  console.log(req.body);
  
  try {
    const timetable = await prisma.doctorTimeTable.create({
      data: {
        doctorId: doctorId,
        workLocationId: workLocationId,
        day: day,
        startTime: new Date(startTime),
        endTime: new Date(endTime),
        date: new Date(date),
      }
    });

    res.status(201).json({ success: true, data: timetable });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Book an appointment
exports.bookAppointment = async (req, res) => {
  const { patientId, doctorAvailabilityId, appointmentDate, startTime, endTime, mode, workLocationId } = req.body;
  
  try {
    // Check if the slot is available and not fully booked
    const availability = await prisma.doctorAvailability.findFirst({
      where: {
        id: doctorAvailabilityId,
        isAvailable: 'yes',
      },
    });

    if (!availability) {
      return res.status(400).json({ success: false, message: 'Slot is not available' });
    }

    // Check if max appointments have been reached
    if (availability.currentAppointments >= availability.maxAppointments) {
      return res.status(400).json({ success: false, message: 'No more slots available for this schedule' });
    }

    // Book the appointment
    const appointment = await prisma.appointmentSchedule.create({
      data: {
        patientId: patientId,
        doctorAvailabilityId: doctorAvailabilityId,
        appointmentDate: new Date(appointmentDate),
        startTime: new Date(startTime),
        endTime: new Date(endTime),
        mode: mode,
        workLocationId: workLocationId,
        status: 'booked',
       
      },
    });

    // Increment the number of current appointments for the slot
    await prisma.doctorAvailability.update({
      where: { id: doctorAvailabilityId },
      data: {
        currentAppointments: { increment: 1 }, // Increment by 1 for each booking
      },
    });

    // Check if max appointments have been reached, if yes, mark slot as unavailable
    if (availability.currentAppointments + 1 >= availability.maxAppointments) {
      await prisma.doctorAvailability.update({
        where: { id: doctorAvailabilityId },
        data: { isAvailable: 'no' },
      });
    }

    res.status(201).json({ success: true, data: appointment });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};


// Update appointment status (cancel or complete)
exports.updateAppointmentStatus = async (req, res) => {
  const { appointmentId, status } = req.body;
  try {
    const updatedAppointment = await prisma.appointmentSchedule.update({
      where: { id: appointmentId },
      data: { status: status },
    });

    res.status(200).json({ success: true, data: updatedAppointment });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
