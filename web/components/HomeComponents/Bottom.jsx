'use client';
import Image from "next/image";
import Link from "next/link";


  
 const Bottom = () => {
    
  return (
    <div>
      <header className="text-center py-10">
        <h1 className="text-3xl font-semibold">Top Doctors to Book</h1>
        <p className="text-gray-600 mt-2">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </header>
      <main className="max-w-6xl mx-auto px-4">
      
      <div className="text-center mt-10">
        <button className="bg-gray-200 text-gray-700 py-2 px-6 rounded-full">
          more
        </button>
      </div>
    </main>
      <section className="bg-blue-500 text-white py-16 mt-16">
        <div className="max-w-6xl mx-auto px-4 lg:max-h-48 sm:max-h-full flex flex-col md:flex-row items-center">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-semibold">Book Appointment</h2>
            <p className="text-xl mt-2">With 100+ Trusted Doctors</p>
            <button className="bg-white text-blue-500 py-2 px-6 rounded-full mt-6 mr-4">
              <Link href={'/signup?userType=patient'}>
              Create account as Patient
              </Link>
            </button>
            <button className="bg-white text-blue-500 py-2 px-6 rounded-full mt-6">
              <Link href={'/login'}>
              Login
              </Link>
            </button>
          </div>
          <div className="flex place-items-baseline sm:inline content-end">
          <Image src={'/doctor_b.png'} alt="doctor" width={100} height={100} unoptimized className="w-fit h-full lg:relative md:relative sm:inline  lg:pb-32"/>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Bottom;