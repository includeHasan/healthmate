'use client';
import React, { useState, useEffect } from 'react';
import api from '@/utils/api';

const ViewAllPatients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await api.get('/patient'); 
      if (response.data.success) {
          setPatients(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching patients:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All Patients</h2>
      <div className="overflow-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">First Name</th>
              <th className="py-2 px-4 border-b">Last Name</th>
              <th className="py-2 px-4 border-b">Date of Birth</th>
              <th className="py-2 px-4 border-b">Weight (kg)</th>
              <th className="py-2 px-4 border-b">Height (cm)</th>
              <th className="py-2 px-4 border-b">Gender</th>
              <th className="py-2 px-4 border-b">City</th>
              <th className="py-2 px-4 border-b">State</th>
              <th className="py-2 px-4 border-b">Other Phone No.</th>
              <th className="py-2 px-4 border-b">User ID</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td className="py-2 px-4 border-b">{patient.firstName}</td>
                <td className="py-2 px-4 border-b">{patient.lastName}</td>
                <td className="py-2 px-4 border-b">
                  {new Date(patient.dateOfBirth).toLocaleDateString()}
                </td>
                <td className="py-2 px-4 border-b">{patient.weight}</td>
                <td className="py-2 px-4 border-b">{patient.height}</td>
                <td className="py-2 px-4 border-b">{patient.gender}</td>
                <td className="py-2 px-4 border-b">{patient.city}</td>
                <td className="py-2 px-4 border-b">{patient.state}</td>
                <td className="py-2 px-4 border-b">{patient.otherPhoneNo}</td>
                <td className="py-2 px-4 border-b">{patient.userId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAllPatients;
