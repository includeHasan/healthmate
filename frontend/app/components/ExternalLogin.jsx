import React from 'react'

const ExternalLogin = () => {
  return (
    <>
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
    </>
  )
}

export default ExternalLogin