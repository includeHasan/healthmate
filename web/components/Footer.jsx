import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold">Prescripto</h3>
          <p className="text-gray-600 mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">COMPANY</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="text-gray-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">GET IN TOUCH</h3>
          <ul className="mt-4 space-y-2">
            <li className="text-gray-600">+1-221-456-7890</li>
            <li className="text-gray-600">greatstockdev@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-10">
        Copyright © 2024 GreatStock - All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;
