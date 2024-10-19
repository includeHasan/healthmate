'use client'
import api from '@/utils/api';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const ViewUnverifiedDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchUnverifiedDoctors();
  }, []);

  const fetchUnverifiedDoctors = async () => {
    try {
      const response = await api.get('/admin/unverified');
      if (response.data.success) {
          setDoctors(response.data.doctors);
      }
    } catch (error) {
      console.error('Error fetching unverified doctors:', error);
    }
  };

  const verifyDoctor = async (doctorId) => {
    try {
      await api.get(`/admin/verifyDoctor`,{
        params:{
            id:doctorId
        }
      });
      alert('Doctor verified successfully!');
      fetchUnverifiedDoctors();
    } catch (error) {
      console.error('Error verifying doctor:', error);
      alert('Failed to verify doctor. Please try again.');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Unverified Doctors</h2>
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
            <div className="flex justify-center mt-4">
              <button
                onClick={() => verifyDoctor(doctor.id)}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Verify
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewUnverifiedDoctors;
