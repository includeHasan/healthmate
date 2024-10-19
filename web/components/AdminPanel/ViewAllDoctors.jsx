'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';

const ViewAllDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get('/docters');
      if (response.data.success) {
        
        setDoctors(response.data.doctors);
      }
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All Doctors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="bg-white shadow-md rounded-lg p-6">
            <Image
              src={doctor.profilePic || '/doctor_default.jpg'}
              alt={`${doctor.firstName} ${doctor.lastName}`}
              width={30}
              height={30}
              unoptimized
              className="w-32 h-32 rounded-full mx-auto"
            />
            <h3 className="text-xl font-bold mt-4 text-center">
              {doctor.firstName} {doctor.lastName}
            </h3>
            <p className="text-gray-600 text-center">{doctor.speciality}</p>
            <p className="text-gray-500 text-center">
              Experience: {doctor.experienceYrs} years
            </p>
            <div className="flex justify-center mt-4">
              <Link
                href={doctor.documentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mr-4"
              >
                View Document
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAllDoctors;
