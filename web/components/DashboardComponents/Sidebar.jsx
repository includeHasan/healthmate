import React from 'react'
import { BiSolidDashboard } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { FaCalendarDays, FaUserDoctor } from 'react-icons/fa6';
import { FaFileMedicalAlt, FaUserAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
const Sidebar = () => {
  return (
    <aside className="w-full md:w-1/5 bg-white p-4 shadow-lg ">
    <div className="flex flex-col items-center border-b-2 border-blue-700 pb-4 text-blue-800">
      <Image
        src="/doctor_default.jpeg"
        alt="Doctor's profile picture"
        width={75}
        height={100}
        className="rounded-full mb-4 h-28 w-28 object-cover"
       unoptimized
      />
      <h2 className="text-lg font-bold">Dr. Vivek Yadav</h2>
      <p className="text-sm ">MBBS, FCPS - MD (Medicine), MCPS</p>
    </div>
    <nav className="mt-8 text-lg font-semibold">
      <ul>
        <li className="flex items-center p-2 text-gray-700">
          <BiSolidDashboard className="text-2xl mr-2" /> Dashboard
        </li>
        <li className="flex items-center p-2 text-gray-700">
          <FaCalendarDays className="text-2xl m w-r-2" /> Appoinments
        </li>
        <li className="flex items-center p-2 text-gray-700">
          <FaFileMedicalAlt className="text-2xl mr-2" /> Appoinment Page
        </li>
        <li className="flex items-center p-2 text-gray-700">
          <FaCalendarDays className="text-2xl mr-2" /> Upload Timetable
        </li>
        <li className=" p-2 text-gray-700">
          <Link href={'/doctor/verify'} className='flex items-center'>
          <FaUserDoctor className="text-2xl mr-2" /> Register Doctor
          </Link>
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