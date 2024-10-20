'use client';
import api from '@/utils/api';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const ViewVerifiedDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchVerifiedDoctors();
  }, []);

  const fetchVerifiedDoctors = async () => {
    try {
      const response = await api.get('/admin/verified');
      setDoctors(response.data.doctors);
    } catch (error) {
      console.error('Error fetching verified doctors:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Verified Doctors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="bg-white shadow-md rounded-lg p-6">
            <Image
              src={doctor.profilePic || '/default-doctor.jpg'}
              alt={`${doctor.firstName} ${doctor.lastName}`}
              width={32}
              height={32}
              unoptimized
              className="w-32 h-32 rounded-full mx-auto"
            />
            <h3 className="text-xl font-bold mt-4 text-center">
              {doctor.firstName} {doctor.lastName}
            </h3>
            <p className="text-gray-600 text-center">Speciality: {doctor.speciality}</p>
            <p className="text-gray-600 text-center">Experience:{doctor.experienceYrs} Years</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewVerifiedDoctors;
