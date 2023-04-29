import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const BankingPartners = () => {
  return (
    <>
    <div><h1 className='text-center font-semibold text-3xl p-10  text-white bg-gray-600'>Our Banking Partners</h1></div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-20 p-20 text-white bg-gray-500 px-40 '>
        <Link href={"https://www.kotak.com/en/home.html"}><motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className='shadow-lg shadow-black p-5 rounded-md'><h3 className='text-center'></h3>
        <img
                className=" overflow-auto"
                src="/logos/Kotak_Mahindra_Bank_logo.png"
                alt="Kotak Mahindra Bank logo"
              />
        </motion.div>
        </Link>
        <Link href={"https://www.axisbank.com/"}>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className=' shadow-lg shadow-black p-5 rounded-md'><h3 className='text-center'></h3>
        <img
                className="overflow-auto mt-5"
                src="/logos/Axis_Bank_logo.png"
                alt="Axis Bank logo"
              />
        </motion.div>
        </Link>
    </div>
    </>
  )
}

export default BankingPartners