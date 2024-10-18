'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '@/components/DashboardComponents/Sidebar'; 
import api from '@/utils/api';

const CreateTimeSlot = () => {
  const [formData, setFormData] = useState({
    day: '',
    startTime: '',
    endTime: '',
    date: '',
  });

  // Load doctorId and workLocationId from localStorage when the component mounts
  useEffect(() => {
    const doctor = JSON.parse(localStorage.getItem('doctor'));
    const workLocation = JSON.parse( localStorage.getItem('doctorWorkLocation'));
    if (doctor && workLocation) {
      setFormData((prevData) => ({
        ...prevData,
        doctorId: doctor.id,
        workLocationId: workLocation.id,
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Combine the selected date with the start and end times to create valid Date objects
      const startDateTime = new Date(`${formData.date}T${formData.startTime}`);
      const endDateTime = new Date(`${formData.date}T${formData.endTime}`);
  
      if (isNaN(startDateTime) || isNaN(endDateTime)) {
        alert('Invalid start time or end time');
        return;
      }
  
      const requestData = {
        ...formData,
        startTime: startDateTime,
        endTime: endDateTime,
      };
  
      const response = await api.post('/appointment/add-schedule', requestData);
      if (response.status === 201) {
        alert('Time slot created successfully');
        setFormData({
          ...formData,
          day: '',
          startTime: '',
          endTime: '',
          date: '',
        });
      }
    } catch (error) {
      console.error('Error creating time slot:', error);
      alert('Failed to create time slot');
    }
  };
  

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar /> {/* Sidebar component */}
      <div className="flex-1 p-6">
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Add Doctor Availability</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Day</label>
              <select
                name="day"
                value={formData.day}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              >
                <option value="">Select Day</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
                <option value="sunday">Sunday</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Time</label>
              <input
                type="time"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">End Time</label>
              <input
                type="time"
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTimeSlot;
