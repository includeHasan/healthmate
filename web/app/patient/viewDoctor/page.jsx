"use client";
// components/DoctorsList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import api from "@/utils/api";
import SidebarPatient from "@/components/DashboardComponents/SideBarPatient";

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await api.get("/docters");
        setDoctors(response.data.doctors);
        console.log(response.data.doctors);
      } catch (err) {
        console.error("Error fetching doctors:", err);
        setError("Failed to fetch doctors.");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const handleBookAppointment = (doctorId) => {
    // Redirect to appointment booking page with the doctor's ID
    router.push(`/book-appointment/${doctorId}`);
  };

  if (loading)
    return <div className="text-center mt-5">Loading doctors...</div>;
  if (error)
    return <div className="text-center mt-5 text-red-500">{error}</div>;

  return (
    <div className="h-full grid grid-cols-5">
      {/* Sidebar for large screens */}
      <SidebarPatient
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        className={'col-span-2'}
      />
      <div className="max-w-5xl mx-auto p-4 bg-gray-100 rounded-lg shadow-md col-span-3 ">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Available Doctors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={doctor.profilePic || "/doctor_default.jpeg"}
                alt={doctor.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-center">
                {doctor.firstName + " " + doctor.lastName}
              </h3>
              <p className="text-gray-600 text-center">
                Speciality: {doctor.speciality.join(", ")}
              </p>
              <p className="text-gray-600 text-center">
                Experience: {doctor.experienceYrs} Years
              </p>
              <button
                onClick={() => handleBookAppointment(doctor.id)}
                className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Book Appointment
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorsList;
