'use client'
import Sidebar from '@/components/DashboardComponents/Sidebar';
import Link from 'next/link';
import React from 'react';

const AttendAppointmentButton = ({ roomId }) => {


  return (
    <div className="flex flex-col md:flex-row ">
    <Sidebar />
    <main className="flex-1 p-6">
    <button>
      <Link href={'/videocall/room/roomId'} target='_blank'className="text-blue-500 hover:underline mr-4" >
      Attend Next Appointment
      </Link>
    </button>
    </main>
    </div>
  );
};

export default AttendAppointmentButton;
