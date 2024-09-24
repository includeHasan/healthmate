"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const api = axios.create({
  baseURL: "https://healthmate-backend.vercel.app",
});

export const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phoneNo: "",
    userType: "",
    isError: false,
  });
  const router = useRouter();
  const validatePhoneNumber = (number) => {
    const phoneRegex =
      /^[+]?[0-9]{1,3}?[-.\s]?([0-9]{3})?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/;
    return phoneRegex.test(number);
  };
  const userType =(window.location.href).split("/")[3];
  const SubmitFormHandler = async (e) => {
    e.preventDefault();
    if (!validatePhoneNumber(formData.phoneNo)) {
      setFormData((prevFormData) => ({ ...prevFormData, isError: true }));
      return;
    }
    try {
      const response = await api.post("/user/createUser", formData);
      if (response.data.response) {
        router.push("/");
      } else {
        console.log("Invalid response");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
    {FormData.isError && (<div className="text-red-500">Enter Valid Input </div>)}
      <div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <div className="relative">
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              type="email"
              id="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={e => setFormData(prev => ({...prev ,email: e.target.value}))}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              type="password"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={e => setFormData(prev => ({...prev, password:e.target.value}))}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="phone">
            Phone Number
          </label>
          <div className="relative">
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              value={formData.phoneNo}
              onChange={e => setFormData(prev => ({...prev ,phoneNo:e.target.value}))}
            />
            <i className="fas fa-phone absolute right-3 top-3 text-gray-400"></i>
          </div>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
        onClick={SubmitFormHandler}>
          Signup
        </button>
      </div>
    </>
  );
};
