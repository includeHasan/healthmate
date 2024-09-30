
import Footer from "./Footer";


  
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
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-semibold">Book Appointment</h2>
            <p className="text-xl mt-2">With 100+ Trusted Doctors</p>
            <button className="bg-white text-blue-500 py-2 px-6 rounded-full mt-6 mr-4">
              Create account
            </button>
            <button className="bg-white text-blue-500 py-2 px-6 rounded-full mt-6">
              Login
            </button>
          </div>
          <div className="flex-1 mt-8 md:mt-0">
            <img
              src="https://placehold.co/300x300"
              alt="Doctor pointing"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};
export default Bottom;