import DoctorCardsCollection from '@/components/HomeComponents/DoctorCardsCollection'
import Footer from '@/components/HomeComponents/Footer'
import NavBar from '@/components/HomeComponents/NavBar'
import React from 'react'

const AllDoctors = () => {
  return (
    <>
    <NavBar/>
      <h1 className="text-2xl font-bold text-center my-6">Browse through the doctors</h1>
      <DoctorCardsCollection  /> 
      <Footer/> 
    </>
  )
}

export default AllDoctors