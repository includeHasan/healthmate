"use client"
import { useRouter } from 'next/navigation'
 
import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const router=useRouter()
  const [loginState, setLoginState] = useState({ email: '', password: '' });
  
  const submitLogin = async () => {
    try {
      const response = await axiosInstance.post('https://healthmate-backend.vercel.app/user/loginUser', loginState);
      if (response.data.message) {
        router.push('/');
      } else {
        console.log('Invalid credentials');
      }
    } catch (error) {
      console.error(error);
    }
  };


    return (
        <div className="space-y-4" >
            <div>
              <label className="block text-gray-700" htmlFor="email">Email</label>
              <div className="relative">
                <input
                id="email"
                  type="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your email address"
                  value={loginState.email}
                  onChange={(e) => setLoginState(prev => ({...prev , email:e.target.value}))}
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700" htmlFor="password">Password</label>
              <div className="relative">
                <input
                id="password"
                  type="password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your password"
                  value={loginState.password}
                  onChange={(e) => setLoginState(prev => ({...prev , password:e.target.value}))}
                />
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
              onClick={submitLogin}
            >
              Login
            </button>
          </div>
    )
}

export default LoginForm;