'use client';
import React, { useState } from 'react'
import DoctorCard from './DoctorCard'

const api = axios.create({
    baseURL: "https://healthmate-backend.vercel.app",
  });
  
const DoctorCardsCollection = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error,setError] = useState(false);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
  )
}

export default DoctorCardsCollection