import React from 'react'
import { BiSolidDashboard } from "react-icons/bi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import {  FaRegCalendarDays } from 'react-icons/fa6';
import { FaFileMedicalAlt, FaUserAlt, FaUserCircle } from 'react-icons/fa';
import { FaUserPlus } from "react-icons/fa";
import Link from 'next/link';
const SidebarPatient = ({isSidebarOpen,toggleSidebar}) => {
  return (
    <aside className={`fixed md:relative z-10 w-full md:w-1/5 bg-white p-4 shadow-lg transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
        <div className="flex flex-col items-center border-b-2 border-blue-700 pb-4 text-blue-800">
        <div className="md:hidden p-4">
        <button onClick={toggleSidebar} className="text-gray-700 self-end">
          {/* Hamburger Icon */}
        <MdLogout className="text-2xl" />
        </button>
        </div>
        <FaUserCircle className='text-9xl my-6' />
          <h2 className="text-lg font-bold">Dr. Marttin Deo</h2>
          <p className="text-sm ">MBBS, FCPS - MD (Medicine), MCPS</p>
        </div>
        <nav className="mt-8 text-lg font-semibold">
          <ul>
            <li className="flex items-center p-2 text-gray-700">
              <Link href={'/patient/addMember'}>
                <FaUserPlus className="text-2xl mr-2 inline" />Add Family Member
              </Link>
            </li>
            <li className="flex items-center p-2 text-gray-700">
              <BiSolidDashboard className="text-2xl mr-2" /> Dashboard
            </li>
            <li className="flex items-center p-2 text-gray-700">
              <FaRegCalendarDays className="text-2xl mr-2" /> Appointment
            </li>
            <li className="flex items-center p-2 text-gray-700">
              <FaFileMedicalAlt className="text-2xl mr-2" /> Appointment Page
            </li>
            <li className="flex items-center p-2 text-gray-700">
              <RiSecurePaymentFill className="text-2xl mr-2" /> Payment
            </li>
            <li className="flex items-center p-2 text-gray-700">
              <FaUserAlt className="text-2xl mr-2" /> Profile
            </li>
            <li className="flex items-center p-2 text-gray-700">
              <MdLogout className="text-2xl mr-2" /> Logout
            </li>
          </ul>
        </nav>
      </aside>
  )
}

export default SidebarPatient