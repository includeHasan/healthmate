"use client";
import axios from "axios";
import React, { useState } from "react";

export const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [isError , setIsError] =useState(false);
  const validatePhoneNumber = (number) => {
    const phoneRegex =
      /^[+]?[0-9]{1,3}?[-.\s]?([0-9]{3})?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/;
    return phoneRegex.test(number);
  };
  const SubmitFormHandler = (e) => {
    e.preventDefault();
    if(!validatePhoneNumber(phoneNo)) setIsError(true);
    // axios.post("http://localhost:5000/users/createUser" , {
    //     email,password,phoneNo,userType:"Doctor"
    // })
  }
  return (
    <>
    {isError && (<div className="text-red-500">Enter Valid Input </div>)}
      <form onSubmit={SubmitFormHandler}>
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
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <i className="fas fa-envelope absolute right-3 top-3 text-gray-400"></i>
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
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <i className="fas fa-eye absolute right-3 top-3 text-gray-400"></i>
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
              value={phoneNo}
              onChange={e => setPhoneNo(e.target.value)}
            />
            <i className="fas fa-phone absolute right-3 top-3 text-gray-400"></i>
          </div>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200">
          Signup
        </button>
      </form>
    </>
  );
};
