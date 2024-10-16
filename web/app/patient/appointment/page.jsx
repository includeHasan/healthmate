'use client'
// components/Appointments.js
import React, { useEffect, useState } from 'react';
import api from '@/utils/api';
import SidebarPatient from '@/components/DashboardComponents/SideBarPatient';
import { BiSolidDashboard } from 'react-icons/bi';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Fetch appointments from the backend
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        // Replace with your backend endpoint
        const response = await api.get('/appointment/book-appointment');
        setAppointments(response.data); // Assuming the data is in the response.data
      } catch (err) {
        console.error('Error fetching appointments:', err);
        setError('Failed to fetch appointments.');
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  // Render loading state
  if (loading) {
    return <div className="text-center mt-5">Loading appointments...</div>;
  }

  // Render error state
  if (error) {
    return <div className="text-center mt-5 text-red-500">{error}</div>;
  }

  // Render the list of appointments
  return (

    <>
        <SidebarPatient
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      {/* Hamburger Button */}
      <div className="md:hidden p-4">
        <button onClick={toggleSidebar} className="text-gray-700">
          <BiSolidDashboard className="text-2xl" />
        </button>
      </div>
  
    <div className="max-w-3xl mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">My Appointments</h2>
      {appointments.length === 0 ? (
        <p className="text-center text-gray-500">No appointments found.</p>
      ) : (
        <ul className="space-y-4">
          {appointments.map((appointment) => (
            <li
              key={appointment.id}
              className="p-4 border rounded-lg bg-white shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold">{appointment.title}</h3>
              <p className="text-gray-600">
                Date: {new Date(appointment.date).toLocaleDateString()}
              </p>
              <p className="text-gray-600">Time: {appointment.time}</p>
              <p className="text-gray-600">Location: {appointment.location}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
  );
};

export default Appointments;
