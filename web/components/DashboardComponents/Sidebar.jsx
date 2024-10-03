import React from 'react'
import { BiSolidDashboard } from "react-icons/bi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { FaCalendarDays } from 'react-icons/fa6';
import { FaFileMedicalAlt, FaUserAlt } from 'react-icons/fa';
import Image from 'next/image';
const Sidebar = () => {
  return (
    <aside className="w-full md:w-1/5 bg-white p-4 shadow-lg ">
    <div className="flex flex-col items-center border-b-2 border-blue-700 pb-4 text-blue-800">
      <Image
        src="https://placehold.co/100x100"
        alt="Doctor's profile picture"
     i   className="rounded-full mb-4"
      />
      <h2 className="text-lg font-bold">Dr. Marttin Deo</h2>
      <p className="text-sm ">MBBS, FCPS - MD (Medicine), MCPS</p>
    </div>
    <nav className="mt-8 text-lg font-semibold">
      <ul>
        <li className="flex items-center p-2 text-gray-700">
          <BiSolidDashboard className="text-2xl mr-2" /> Dashboard
        </li>
        <li className="flex items-center p-2 text-gray-700">
          <FaCalendarDays className="text-2xl mr-2" /> Appoinment
        </li>
        <li className="flex items-center p-2 text-gray-700">
          <FaFileMedicalAlt className="text-2xl mr-2" /> Appoinment Page
        </li>
        <li className="flex items-center p-2 text-gray-700">
          <RiSecurePaymentFill className="text-2xl mr-2" /> Payment
        </li>
        <li className="flex items-center p-2 text-gray-700">
          <FaUserAlt className="text-2xl mr-2" /> Profile
        </li>
        <li className="flex items-center p-2 text-gray-700">
          <IoSettingsSharp className="text-2xl mr-2" /> Settings
        </li>
        <li className="flex items-center p-2 text-gray-700">
          <MdLogout className="text-2xl mr-2" /> Logout
        </li>
      </ul>
    </nav>
  </aside>
  )
}

export default Sidebar