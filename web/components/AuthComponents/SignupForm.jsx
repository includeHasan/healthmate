"use client";


import api from "@/utils/api";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SignupForm = () => {
  const router = useRouter();
  const params = useSearchParams();
  const userType = params.get("userType");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phoneNo: "",
  });
  const toastId = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const phoneNoRef = useRef(null);

  const validatePhoneNumber = (number) => {
    const phoneRegex =
      /^[+]?[0-9]{1,3}?[-.\s]?([0-9]{3})?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/;
    return phoneRegex.test(number);
  };

  const SubmitFormHandler = async (e) => {
    e.preventDefault();
    toastId.current = toast.info("Please wait!! Loading...");
    if (!validatePhoneNumber(formData.phoneNo)) {
      toast.dismiss(toastId.current);
      toast.warn("Invalid Phone Number");
      return;
    }
    try {
      const response = await api.post(
        "/user/createUser",
        {
          email: formData.email,
          password: formData.password,
          phoneNo: formData.phoneNo,
          userType,
        },
      );
      console.log(formData,userType);
      
      setFormData({email:'', password: '', phoneNo: ''});
      if (response.data.success) {
        console.log(response.data);
        toast.success(`Sign Up Successful as ${userType}`);
        router.push(`/${response.data.user.userType}/dashboard`);
      } else{
        console.log("Invalid response");
      }
    } catch (error) {
      if(error.response && error.response.status === 400){
        toast.dismiss(toastId.current);
        toast.error(`${error.response.data.error}`)
      }
      else{
        toast.dismiss(toastId.current);
        toast.error(`An Error Occured. Please try again.`)
      } 
      console.error("error yaha h" + error);
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
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              onKeyDown = {(e) => {
                if(e.key === "Enter"){
                  passwordRef.current.focus();
                }
              }}
              ref={emailRef}
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
              ref={passwordRef}
              value={formData.password}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
              onKeyDown = {(e) => {
                if(e.key === "Enter"){
                  phoneNoRef.current.focus();
                }
              }}
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
              ref={phoneNoRef}
              value={formData.phoneNo}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, phoneNo: e.target.value }))
              }
              onKeyDown = {(e) => {
                if(e.key === "Enter"){
                  SubmitFormHandler(new Event('submit'));
                }
              }}
            />
            <i className="fas fa-phone absolute right-3 top-3 text-gray-400"></i>
          </div>
        </div>
        <button
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          onClick={SubmitFormHandler}
        >
          Signup
        </button>
      </div>
    </>
  );
};
