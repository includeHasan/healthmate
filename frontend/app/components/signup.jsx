'use client'
import Image from "next/image";
import doctor_login from '../../public/doctor_login.png';

const SignUpPage = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 bg-blue-600 text-white flex flex-col justify-center items-center p-8">
        <div className="text-3xl font-bold mb-4">HealthHub</div>
        <Image src={doctor_login} alt="Doctor Image" className="w-52 h-52 rounded-full object-cover shadow-md"/>
        <h2 className="text-2xl font-semibold mb-2">
          Enhance impact in healthcare
        </h2>
        <p className="text-center mb-4">
          Your impact in healthcare just got stronger. Enhance patient care
          through refined data control, seamless appointments, and impactful
          task management.
        </p>
        <div className="flex space-x-2">
          <span className="w-2 h-2 bg-white rounded-full"></span>
          <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
          <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
          <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
        </div>
      </div>
      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">
            Signup for a Doctor Account
          </h2>
          <p className="mb-6">
            Create an account to access your healthcare dashboard. Manage
            appointments, tasks, and patient records with ease.
          </p>
          <form>
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
                />
                <i className="fas fa-phone absolute right-3 top-3 text-gray-400"></i>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200">
              Signup
            </button>
          </form>
          <div className="my-6 text-center text-gray-500">
            Or connect with a social account
          </div>
          <div className="flex space-x-4">
            <button className="w-1/2 bg-white border border-gray-300 text-gray-700 py-2 rounded-md flex items-center justify-center hover:bg-gray-100 transition duration-200">
              <i className="fab fa-google mr-2"></i> Google
            </button>
            <button className="w-1/2 bg-white border border-gray-300 text-gray-700 py-2 rounded-md flex items-center justify-center hover:bg-gray-100 transition duration-200">
              <i className="fab fa-facebook-f mr-2"></i> Facebook
            </button>
          </div>
          <div className="mt-6 text-center">
            <span className="text-gray-700">Already have an account? </span>
            <a href="#" className="text-blue-600">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;