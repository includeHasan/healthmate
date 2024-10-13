"use client";

import api from "@/utils/api";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const PatientForm = () => {
  const router= useRouter();
  // Combine all state variables into a single state object
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: null,
    weight: 0,
    height: 0,
    gender: "",
    city: "",
    state: "",
    otherPhoneNo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "dateOfBirth") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value ? new Date(value) : null, // Convert to Date object
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.info("Creating New Patient ...");
    try {
      const response = await api.post("/patient",{...formData,weight:parseInt(formData.weight),height:parseInt(formData.height)});
      console.log(response.data);
      toast.success("Patient created successfully!");
      router.replace('/patient/dashboard');
    } catch (error) {
      console.log(error.response?.data?.error);
      toast.error(error.response?.data?.error);
    }

  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="max-w-6xl mx-auto px-8 py-10 shadow-lg mt-5 border-blue-200 border-2 rounded-3xl bg-white">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Patient Registration</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="col-span-1">
            <label className="block text-gray-700 text-md font-bold mb-2">
              <span className="font-bold text-red-600">*</span> First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              className="block w-full p-2 pl-4 text-md font-semibold text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-span-1">
            <label className="block text-gray-700 text-md font-bold mb-2">
              <span className="font-bold text-red-600">*</span> Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              className="block w-full p-2 pl-4 text-md font-semibold text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-span-1">
            <label className="block text-gray-700 text-md font-bold mb-2">
              <span className="font-bold text-red-600">*</span> Date of Birth
            </label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth ? formData.dateOfBirth.toISOString().split("T")[0] : ""}
              className="block w-full p-2 pl-4 text-md font-semibold text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-span-1">
            <label className="block text-gray-700 text-md font-bold mb-2">
              <span className="font-bold text-red-600">*</span> Weight (kg)
            </label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              className="block w-full p-2 pl-4 text-md font-semibold text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-span-1">
            <label className="block text-gray-700 text-md font-bold mb-2">
              <span className="font-bold text-red-600">*</span> Height (cm)
            </label>
            <input
              type="number"
              name="height"
              value={formData.height}
              className="block w-full p-2 pl-4 text-md font-semibold text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-span-1">
            <label className="block text-gray-700 text-md font-bold mb-2">
              <span className="font-bold text-red-600">*</span> Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              className="block w-full p-2 pl-4 text-md font-semibold text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="col-span-1">
            <label className="block text-gray-700 text-md font-bold mb-2">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              className="block w-full p-2 pl-4 text-md font-semibold text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              onChange={handleChange}
            />
          </div>
          <div className="col-span-1">
            <label className="block text-gray-700 text-md font-bold mb-2">
              State
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              className="block w-full p-2 pl-4 text-md font-semibold text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              onChange={handleChange}
            />
          </div>
          <div className="col-span-1">
            <label className="block text-gray-700 text-md font-bold mb-2">
              Other Phone Number
            </label>
            <input
              type="text"
              name="otherPhoneNo"
              value={formData.otherPhoneNo}
              className="block w-full p-2 pl-4 text-md font-semibold text-gray-700 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              onChange={handleChange}
            />
          </div>
        </form>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full mt-6"
          onClick={handleSubmit}
        >
          Register Patient
        </button>
      </div>
    </>
  );
};

export default PatientForm;
