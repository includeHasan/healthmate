import Image from 'next/image'
import React from 'react'

const SpecialityHome = () => {
  return (
        <section className="py-10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Find by Speciality</h2>
            <p className="text-gray-600 mb-10"> Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
            <div className="lg:flex justify-center space-x-6 md:grid md:grid-cols-3">
              <div className="text-center">
                <Image src={'/generalPhyisian.png'} alt="General physician" className="w-20 h-20 mx-auto mb-2" width={10} height={10} unoptimized />
                <p>General physician</p>
              </div>
              <div className="text-center">
                <Image src="/Gynecologist.png" alt="Gynecologist" className="w-20 h-20 mx-auto mb-2" width={10} height={10} unoptimized />
                <p>Gynecologist</p>
              </div>
              <div className="text-center">
                <Image src="/Dermatologist.png" alt="Dermatologist" className="w-20 h-20 mx-auto mb-2" width={10} height={10} unoptimized />
                <p>Dermatologist</p>
              </div>
              <div className="text-center">
                <Image src='/Pediatricians.png' alt="Pediatricians" className="w-20 h-20 mx-auto mb-2" width={10} height={10} unoptimized/>
                <p>Pediatricians</p>
              </div>
              <div className="text-center">
                <Image src="/Neurologist.png" alt="Neurologist" className="w-20 h-20 mx-auto mb-2" width={10} height={10} unoptimized/>
                <p>Neurologist</p>
              </div>
              <div className="text-center">
                <Image src="/Gastroenterologist.png" alt="Gastroenterologist" className="w-20 h-20 mx-auto mb-2" width={10} height={10} unoptimized />
                <p>Gastroenterologist</p>
              </div>
            </div>
          </div>
        </section>
  )
}

export default SpecialityHome