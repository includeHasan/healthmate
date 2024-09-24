import { useState } from "react";

const LoginForm = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState();
    return (
        <form className="space-y-4" >
            <div>
              <label className="block text-gray-700" htmlFor="email">Email</label>
              <div className="relative">
                <input
                id="email"
                  type="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={e => setPassword(e.target.value)}
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
            >
              Login
            </button>
          </form>
    )
}

export default LoginForm;