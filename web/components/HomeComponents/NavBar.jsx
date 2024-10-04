"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignUpOptionOpen, setIsSignUpOptionOpen] = useState(false);
  const [loggedin ,setLoggedin] =useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSignupOptionToggle = () => {
    setIsSignUpOptionOpen(!isSignUpOptionOpen);
  };

  useEffect(() => {
    
    if(document.cookie)
      setLoggedin(!loggedin);
  },[loggedin])

  return (
    <div>
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">HealthMate</div>
          </div>
          <nav className="hidden md:flex lg:flex md:space-x-6 lg:space-x-6">
            <Link
              href="#"
              className="text-gray-700 hover:text-blue-600 nav-link active"
            >
              HOME
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-blue-600 nav-link"
            >
              ALL DOCTORS
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-blue-600 nav-link"
            >
              ABOUT
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-blue-600 nav-link"
            >
              CONTACT
            </Link>
          </nav>
          {!loggedin ? (<div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full sm:hidden md:inline-block lg:inline-block">
              <Link href={"/login"}>Login</Link>
            </button>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-full sm:hidden lg:inline-block md:inline-block"
              onClick={handleSignupOptionToggle}
            >
              Create account
            </button>
            <div
              className={`fixed z-10 w-44 text-base top-16 mt-1 right-6 bg-white rounded divide-y divide-gray-800 shadow-md shadow-gray-700  ${
                isSignUpOptionOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              <ul className="py-2">
                <li className={`block py-2 px-4 text-sm text-gray-800 hover:bg-gray-100 ${isSignUpOptionOpen? 'cursor-pointer' : "cursor-default" } `} >
                  <Link href={"/signup?userType=doctor"}>Sign up as Doctor</Link>
                </li>
                <li className={`block py-2 px-4 text-sm text-gray-800 hover:bg-gray-100 ${isSignUpOptionOpen? 'cursor-pointer' : "cursor-default"}` }>
                <Link href={"/signup?userType=patient"}>Sign up as Patient</Link>
                </li>
              </ul>
            </div>
          </div>) : <div> Hello User  <Link href={"/doctor/verify"}>Verify</Link> </div>}
          <button
            className="md:hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 place-items-center py-2.5 text-center inline-flex "
            onClick={handleToggle}
          >
            <FaBars className=" ms-3 text-white" />
          </button>
        </div>
      </header>
      <div
        className={`md:hidden lg:hidden absolute w-full bg-white z-10 divide-y divide-gray-500 shadow-md overflow-y-auto ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <ul className="py-2 text-sm text-gray-700">
          <li>
            <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
              HOME
            </Link>
          </li>
          <li>
            <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
              ALL DOCTORS
            </Link>
          </li>
          <li>
            <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
              CONTACT
            </Link>
          </li>
        </ul>
        {!loggedin ? (<div className="py-2">
          <ul>
            <li className="block px-4 py-2 hover:bg-gray-100">
                Login
            </li>
            <li className="block px-4 py-2 hover:bg-gray-100">
                Create Account
            </li>
          </ul>
        </div>) : <div>profile </div>}
      </div>
    </div>
  );
};

export default NavBar;
