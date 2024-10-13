"use client";
import { useAuth } from "@/utils/useAuth";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignUpOptionOpen, setIsSignUpOptionOpen] = useState(false);
  const [userType,setUserType] = useState('');
  const {isLoggedIn , logout} = useAuth();
  const dropdownRef = useRef(null);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSignupOptionToggle = () => {
    setIsSignUpOptionOpen(!isSignUpOptionOpen);
  };
  useEffect(() => {
    // This code will only run on the client side
    const data = localStorage.getItem("userData");
    if (data) {
      const parsedData = JSON.parse(data).userType || "patient";
      setUserType(parsedData); // Set the user type state
    }
    
  }, []);

  // Close signup dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsSignUpOptionOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">HealthMate</div>
          </div>
          <nav className="hidden md:flex lg:flex md:space-x-6 lg:space-x-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 nav-link active"
            >
              HOME
            </Link>
            <Link
              href="/allDoctors"
              className="text-gray-700 hover:text-blue-600 nav-link"
            >
              ALL DOCTORS
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 nav-link"
            >
              ABOUT
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 nav-link"
            >
              CONTACT
            </Link>
          </nav>
          <div className="flex space-x-4 items-center">
            {isLoggedIn ? (
              <>
                <Link
                  href={`/${userType}/dashboard`}
                  className="bg-blue-600 text-white px-4 py-2 rounded-full hidden md:inline-block lg:inline-block"
                >
                  Dashboard
                </Link>
                <Link
                  href="/patient/addMember"
                  className="bg-blue-600 text-white px-4 py-2 rounded-full hidden md:inline-block lg:inline-block"
                >
                  Add Member
                </Link>
              </>
            ) : (
              <>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full sm:hidden md:inline-block lg:inline-block">
                  <Link href={"/login"}>Login</Link>
                </button>
                <div className="relative" ref={dropdownRef}>
                  <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-full sm:hidden lg:inline-block md:inline-block"
                    onClick={handleSignupOptionToggle}
                  >
                    Create account
                  </button>
                  {isSignUpOptionOpen && (
                    <div
                      className="absolute z-10 w-44 text-base mt-1 right-0 bg-white rounded divide-y divide-gray-300 shadow-md"
                    >
                      <ul className="py-2">
                        <li className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer">
                          <Link href={"/signup?userType=doctor"}>Sign up as Doctor</Link>
                        </li>
                        <li className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer">
                          <Link href={"/signup?userType=patient"}>Sign up as Patient</Link>
                        </li>
                        <li className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer">
                          <Link href={"/doctor/verify"}>Verify</Link>
                        </li>
                        <li className="block py-2 px-4 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer">
                          <Link href={"/patient/addMember"}>Add Patient</Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </>
            )}
            <button
              className="md:hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 place-items-center py-2.5 text-center inline-flex"
              onClick={handleToggle}
            >
              <FaBars className="ms-3 text-white" />
            </button>
          </div>
        </div>
      </header>
      {isOpen && (
        <div
          className="md:hidden lg:hidden absolute w-full bg-white z-10 divide-y divide-gray-500 shadow-md overflow-y-auto"
        >
          <ul className="py-2 text-sm text-gray-700">
            <li>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/allDoctors" className="block px-4 py-2 hover:bg-gray-100">
                ALL DOCTORS
              </Link>
            </li>
            <li>
              <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100">
                CONTACT
              </Link>
            </li>
            {isLoggedIn ? (
              <>
                <li>
                  <Link href={`/${userType}/dashboard`} className="block px-4 py-2 hover:bg-gray-100">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/patient/addMember" className="block px-4 py-2 hover:bg-gray-100">
                    Add Member
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/login" className="block px-4 py-2 hover:bg-gray-100">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/signup?userType=doctor" className="block px-4 py-2 hover:bg-gray-100">
                    Sign up as Doctor
                  </Link>
                </li>
                <li>
                  <Link href="/signup?userType=patient" className="block px-4 py-2 hover:bg-gray-100">
                    Sign up as Patient
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
