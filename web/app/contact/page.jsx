import React from 'react';

const ContactUs = () => {
  return (
    <div className="px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto ">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">CONTACT <span className="text-blue-600">US</span></h2>
        <p className="text-gray-700 mb-8">We&apos;d love to hear from you! Whether you have a question about your healthcare needs or you need assistance, the HealthMate team is here to help.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Contact Details */}
          <div className="py-6 px-10  bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">Office Address</h3>
            <p className="text-gray-700 mb-2">HealthMate Pvt. Ltd.</p>
            <p className="text-gray-700 mb-2">6th Floor, C Building,</p>
            <p className="text-gray-700 mb-2">Lokmanya Tilak College of Engineering, Kopar Khairne,</p>
            <p className="text-gray-700 mb-2">Navi Mumbai, Maharashtra - 400709</p>
            <p className="text-gray-700 mb-2">India</p>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center mt-8">Contact Information</h3>
            <p className="text-gray-700 mb-2">Phone: +91-22-12345678</p>
            <p className="text-gray-700 mb-2">Email: contact@healthmate.in</p>
            <p className="text-gray-700 mb-2">Website: www.healthhmate.vercel.app</p>
          </div>

          {/* Contact Form */}
          <div className="py-6 px-10 bg-white rounded-lg shadow-lg ">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">Get In Touch</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-600 mb-1" htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full border-gray-500 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1" htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-1" htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition ">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12">
          <iframe
            className="w-full h-96 rounded-lg shadow-lg"
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.850505663224!2d73.00505931504728!3d19.10570959685776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfc96f80e9b5%3A0xf65357c4cce6644b!2sLocation!5e0!3m2!1sen!2sin!4v1631628025091!5m2!1sen!2sin'
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
