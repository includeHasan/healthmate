'use client'
import Image from "next/image";
import doctor_login from '../../public/doctor_login.png';

export default function LoginPage() {
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
      </div>
      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4">Login to your account</h2>
          <p className="mb-6 text-gray-600">
            Login to access your healthcare dashboard. Explore appointments,
            manage tasks and patient records with ease.
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Email</label>
              <div className="relative">
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your email address"
                />
                <i className="fas fa-envelope absolute left-3 top-3 text-gray-400"></i>
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your password"
                />
                <i className="fas fa-eye absolute right-3 top-3 text-gray-400"></i>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-gray-700">Remember Me</span>
              </label>
              <a href="#" className="text-blue-600">
                Forgot your password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md"
            >
              Login
            </button>
          </form>
          <div className="mt-6 text-center text-gray-600">
            Or connect with a social account
          </div>
          <div className="flex space-x-4 mt-4">
            <button className="flex-1 bg-white border border-gray-300 text-gray-700 py-2 rounded-md flex items-center justify-center">
              <i className="fab fa-google mr-2"></i> Google
            </button>
            <button className="flex-1 bg-white border border-gray-300 text-gray-700 py-2 rounded-md flex items-center justify-center">
              <i className="fab fa-facebook-f mr-2"></i> Facebook
            </button>
          </div>
          <div className="mt-6 text-center text-gray-600">
            Don't have an account yet?{" "}
            <a href="#" className="text-blue-600">
              Signup
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
