import React, { useEffect, useState } from 'react'
import { BiSolidDashboard } from "react-icons/bi";
import { MdAddLocationAlt, MdLogout } from "react-icons/md";
import { FaCalendarDays } from 'react-icons/fa6';
import { FaFileMedicalAlt } from 'react-icons/fa';
import Image from 'next/image';
import { handleLogout } from '@/utils/logout';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const Sidebar = () => {
  const [doctor,setDoctor]=useState(null);
  const router  =useRouter();
  useEffect(() => {
    const drStr = localStorage.getItem('doctor');
    console.log('side'+drStr);
    if (drStr) {
      setDoctor(JSON.parse(drStr));
      console.log(111+doctor);
      
    }
  },[])
 
  return (
    <aside className="w-full md:w-1/5 bg-white p-4 shadow-lg ">
    <div className="flex flex-col items-center border-b-2 border-blue-700 pb-4 text-blue-800">
      <Image
        src={doctor? doctor.profilePic:"/doctor_default.jpeg"}
        alt="Doctor's profile picture"
        width={75}
        height={100}
        className="rounded-full mb-4 h-28 w-28 object-cover"
       unoptimized
      />
      <h2 className="text-lg font-bold">DR. {doctor ? `${doctor.firstName} ${doctor.lastName}` : 'Default Name'}</h2>
      <p className="text-sm ">{doctor ? doctor.speciality.map((d) => d) : 'Default Specialization'}</p>
    </div>
    <nav className="mt-8 text-lg font-semibold">
      <ul>
        <li className=" p-2 text-gray-700">
          <Link href={'/doctor/dashboard'} className='flex items-center'>
          <BiSolidDashboard className="text-2xl mr-2" /> Dashboard
          </Link>
        </li>
        <li className=" p-2 text-gray-700">
          <Link className='flex items-center' href={'/doctor/addWorkLocation'}>
          <MdAddLocationAlt className="text-2xl mr-2" /> Add Work Location
          </Link>
        </li>
        
        <li className="flex items-center p-2 text-gray-700">
          <FaCalendarDays className="text-2xl mr-2" /> Upload Timetable
        </li>
        <li className=" p-2 text-gray-700" >
              <button className='flex items-center' onClick={() => handleLogout(router)}>
              <MdLogout className="text-2xl mr-2" /> Logout
              </button>
            </li>
      </ul>
    </nav>
  </aside>
  )
}

export default Sidebar