'use client'
import Sidebar from '@/components/DashboardComponents/Sidebar';
import React from 'react';

const AttendAppointmentButton = ({ roomId }) => {

  const handleAttendClick = () => {
    // Use Next.js router to build the URL and open it in a new tab
    const url = `/videocall/room/roomId`;
    window.open(url, '_blank'); // Opens the URL in a new browser tab
  };

  return (
    <div className="flex flex-col md:flex-row ">
    <Sidebar />
    <main className="flex-1 p-6">
    <button onClick={handleAttendClick}>
      Attend Next Appointment
    </button>
    </main>
    </div>
  );
};

export default AttendAppointmentButton;
