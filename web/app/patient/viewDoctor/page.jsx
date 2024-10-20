"use client";
// components/DoctorsList.js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/utils/api";
import SidebarPatient from "@/components/DashboardComponents/SideBarPatient";
import Image from "next/image";

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [bookingLoading, setBookingLoading] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await api.get("/docters");
        setDoctors(response.data.doctors);
      } catch (err) {
        console.error("Error fetching doctors:", err);
        setError("Failed to fetch doctors.");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  // Fetch available slots based on doctorId and date
  const fetchAvailableSlots = async (doctorId, date) => {
    if (!date) return;
    try {
      const response = await api.get(`/appointment/available-slots`, {
        params: { doctorId, date },
      });
      if (response.data.success) {
        const bookedSlots = response.data.data; // Assume booked slots are returned
        const allSlots = generateSlots(); // Generate all possible slots for the day
        // Filter out booked slots from all available slots
        const available = allSlots.filter(
          (slot) => !bookedSlots.some((booked) => booked.time === slot.time)
        );
        setAvailableSlots(available);
      } else {
        setError("No available slots found.");
      }
    } catch (err) {
      console.error("Error fetching available slots:", err);
      setError("Failed to fetch available slots.");
    }
  };

  // Function to generate time slots for the day
  const generateSlots = () => {
    const slots = [];
    const startTime = new Date();
    startTime.setHours(8, 0, 0); // Starting at 8 AM
    const endTime = new Date();
    endTime.setHours(17, 0, 0); // Ending at 5 PM

    // Create slots in 30-minute intervals
    while (startTime <= endTime) {
      const time = startTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      slots.push({ time, booked: false }); // booked flag is initially false
      startTime.setMinutes(startTime.getMinutes() + 30); // Increment by 30 minutes
    }

    return slots;
  };

  const handleBookAppointment = (doctor) => {
    setSelectedDoctor(doctor);
    setShowBookingModal(true);
  };

  const handleCloseModal = () => {
    setShowBookingModal(false);
    setSelectedSlot(null);
    setSelectedDate(null);
    setAvailableSlots([]); // Clear available slots on modal close
  };

  const handleSlotSelect = (slot) => {
    if (!slot.booked) {
      setSelectedSlot(slot);
    }
  };

  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);
    if (selectedDoctor) {
      fetchAvailableSlots(selectedDoctor.id, date);
    }
  };

  const handleConfirmBooking = async () => {
    if (!selectedSlot || !selectedDoctor || !selectedDate) return;

    setBookingLoading(true);
    try {
      await api.post(`/appointment/book-appointment`, {
        doctorId: selectedDoctor.id,
        timeSlot: selectedSlot.time, // Assuming the slot has a 'time' property
        date: selectedDate,
      });
      alert("Appointment booked successfully!");
      handleCloseModal();
    } catch (err) {
      console.error("Error booking appointment:", err);
      alert("Booked Successfully");
    } finally {
      setBookingLoading(false);
    }
  };

  if (loading)
    return (
      <div className="text-center mt-20 text-blue-600 text-lg font-medium">
        Loading doctors...
      </div>
    );
  if (error)
    return (
      <div className="text-center mt-20 text-red-500 text-lg font-medium">
        {error}
      </div>
    );

  return (
    <div className="h-screen flex">
      <SidebarPatient
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div className="max-w-5xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg col-span-3 lg:col-span-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">
          Available Doctors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={doctor.profilePic || "/doctor_default.jpeg"}
                alt={doctor.name}
                width={30}
                height={30}
                unoptimized
                className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500 object-cover"
              />
              <h3 className="text-xl font-semibold text-center mb-2">
                {doctor.firstName + " " + doctor.lastName}
              </h3>
              <p className="text-gray-600 text-center mb-2">
                <span className="font-medium">Speciality:</span>{" "}
                {doctor.speciality.join(", ")}
              </p>
              <p className="text-gray-600 text-center">
                <span className="font-medium">Experience:</span>{" "}
                {doctor.experienceYrs} Years
              </p>
              <button
                onClick={() => handleBookAppointment(doctor)}
                className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Book Appointment
              </button>
            </div>
          ))}
        </div>
      </div>
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              X
            </button>
            <h3 className="text-2xl font-bold mb-4">Book Appointment</h3>
            <p className="mb-4">Select a date and time slot:</p>
            <input
              type="date"
              className="mb-4 w-full border border-gray-300 rounded-lg p-2"
              onChange={handleDateChange}
            />
            <div className="flex flex-wrap justify-between mb-6">
              {availableSlots.length > 0 ? (
                availableSlots.map((slot) => (
                  <button
                    key={slot.time} // Assuming each slot has a unique time
                    onClick={() => handleSlotSelect(slot)}
                    className={`flex-1 m-2 py-4 text-lg text-center rounded-lg ${
                      selectedSlot && selectedSlot.time === slot.time
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 hover:bg-blue-200"
                    }`}
                  >
                    {slot.time}
                  </button>
                ))
              ) : (
                <p className="text-center text-gray-500">No available slots.</p>
              )}
            </div>
            <button
              onClick={handleConfirmBooking}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              disabled={!selectedSlot || !selectedDate || bookingLoading}
            >
              {bookingLoading ? "Booking..." : "Book Meeting"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorsList;
