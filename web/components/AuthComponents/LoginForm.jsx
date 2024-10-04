"use client";
import { useRouter } from "next/navigation";

import { useState } from "react";

import { api } from "@/utils/api";

const LoginForm = () => {
  const router = useRouter();
  const [loginState, setLoginState] = useState({ email: "", password: "" });

  const submitLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/user/loginUser", loginState, {
        withCredentials: true,
      });
      if (response.data) {
        loginState.email = "";
        loginState.password = "";
        router.replace("/");
      } else {
        console.log("Invalid credentials");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-gray-700" htmlFor="email">
          Email
        </label>
        <div className="relative">
          <input
            id="email"
            name="email"
            type="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter your email address"
            value={loginState.email}
            onChange={(e) =>
              setLoginState((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>
      </div>
      <div>
        <label className="block text-gray-700" htmlFor="password">
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            name="password"
            type="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter your password"
            value={loginState.password}
            onChange={(e) =>
              setLoginState((prev) => ({ ...prev, password: e.target.value }))
            }
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
  );
};

export default LoginForm;
