'use client'

import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '@/components/DashboardComponents/Sidebar';

const DoctorWorkLocationForm = () => {
  const [formData, setFormData] = useState({
    locationType: 'hospital',
    name: '',
    city: '',
    state: '',
    pincode: '',
    country: '',
    latitude: '',
    longitude: ''
  });

  const [loadingLocation, setLoadingLocation] = useState(false);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Get user location using geolocation API
  const getLocation = () => {
    setLoadingLocation(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData({
            ...formData,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
          setLoadingLocation(false);
          alert(`Location fetched: (${position.coords.latitude}, ${position.coords.longitude})`);
        },
        (error) => {
          setLoadingLocation(false);
          alert('Error fetching location. Please try again.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
      setLoadingLocation(false);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send data to the backend API
      const response = await axios.post('/api/doctor-location', formData);
      alert('Work location added successfully');
      console.log(response.data);
    } catch (error) {
      console.error('Error adding work location:', error);
      alert('Failed to add work location');
    }
  };

  return (
    <div className="h-full flex flex-col md:flex-row">
      <Sidebar />
      <div className="max-w-6xl px-12 py-10 shadow-lg  border-blue-200 border-2 rounded-3xl flex-1 mt-20 pb-16 mb-20 lg:mx-16 md:mx-auto">
        <h1 className="text-3xl font-bold text-blue-600 mb-7">Doctor Verification</h1>
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="col-span-1">
              <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="locationType">
                <span className="font-bold text-red-600">*</span> Location Type
              </label>
              <select
                id="locationType"
                name="locationType"
                value={formData.locationType}
                onChange={handleChange}
                className="block w-full p-2 pl-6 text-md font-semibold text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              >
                <option value="hospital">Hospital</option>
                <option value="clinic">Clinic</option>
              </select>
            </div>

            <div className="col-span-1">
              <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="name">
                <span className="font-bold text-red-600">*</span> Location Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="block w-full p-2 pl-6 text-md font-semibold text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="city">
                <span className="font-bold text-red-600">*</span> City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="block w-full p-2 pl-6 text-md font-semibold text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="state">
                <span className="font-bold text-red-600">*</span> State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="block w-full p-2 pl-6 text-md font-semibold text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="pincode">
                <span className="font-bold text-red-600">*</span> Pincode
              </label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
                className="block w-full p-2 pl-6 text-md font-semibold text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            <div className="col-span-1">
              <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="country">
                <span className="font-bold text-red-600">*</span> Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="block w-full p-2 pl-6 text-md font-semibold text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center mt-6">
            <button
              type="button"
              onClick={getLocation}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full mr-4"
              disabled={loadingLocation}
            >
              {loadingLocation ? 'Fetching Location...' : 'Take My Location'}
            </button>
            <p className="text-md text-gray-600">
              {formData.latitude && formData.longitude
                ? `Coordinates: (${formData.latitude}, ${formData.longitude})`
                : 'No location fetched'}
            </p>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full"
              onClick={handleSubmit

              }
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorWorkLocationForm;
