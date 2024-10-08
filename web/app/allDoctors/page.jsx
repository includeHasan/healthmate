import DoctorCardsCollection from '@/components/HomeComponents/DoctorCardsCollection'
import React from 'react'

const AllDoctors = () => {
  return (
    <>
      <h1 className="text-2xl font-bold text-center my-6">Browse through the doctors</h1>
      <DoctorCardsCollection  /> 
    </>
  )
}

export default AllDoctors