import React from 'react'

const BankingPartners = () => {
  return (
    <>
    <div><h1 className='text-center font-semibold text-3xl p-5 mt-5 text-white bg-gray-600'>Our Banking Partners</h1></div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-20 p-20 text-white bg-gray-600 px-40 '>
        <div className='h-40 shadow-lg shadow-white p-5 rounded-md'><h3 className='text-center'>Bank 1</h3></div>
        <div className='h-40 shadow-lg shadow-white p-5 rounded-md'><h3 className='text-center'>Bank 2</h3></div>
    </div>
    </>
  )
}

export default BankingPartners