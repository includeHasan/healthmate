import Image from 'next/image'
import React from 'react'

const SpecialityHome = () => {
  return (
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Find by Speciality</h2>
            <p className="text-gray-600 mb-10"> Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
            <div className="flex justify-center space-x-6">
              <div className="text-center">
                <Image src="" alt="General physician" className="w-20 h-20 mx-auto mb-2" />
                <p>General physician</p>
              </div>
              <div className="text-center">
                <Image src="" alt="Gynecologist" className="w-20 h-20 mx-auto mb-2" />
                <p>Gynecologist</p>
              </div>
              <div className="text-center">
                <Image src="" alt="Dermatologist" className="w-20 h-20 mx-auto mb-2" />
                <p>Dermatologist</p>
              </div>
              <div className="text-center">
                <Image src='' alt="Pediatricians" className="w-20 h-20 mx-auto mb-2" />
                <p>Pediatricians</p>
              </div>
              <div className="text-center">
                <Image src="" alt="Neurologist" className="w-20 h-20 mx-auto mb-2" />
                <p>Neurologist</p>
              </div>
              <div className="text-center">
                <Image src="" alt="Gastroenterologist" className="w-20 h-20 mx-auto mb-2" />
                <p>Gastroenterologist</p>
              </div>
            </div>
          </div>
        </section>
  )
}

export default SpecialityHome