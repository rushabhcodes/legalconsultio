import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const BankingPartners = () => {
  return (
    <><hr/>
    <div><h1 className='text-center font-semibold text-3xl p-10 bg-slate-200'>Our Banking Partners</h1></div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-20 p-20 bg-white px-40 '>
        <Link href={"https://www.kotak.com/en/home.html"}><motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className='shadow-lg shadow-black p-5 rounded-md '><h3 className='text-center'></h3>
        <Image
                className=" overflow-auto"
                src="/logos/Kotak_Mahindra_Bank_logo.png"
                alt="Kotak Mahindra Bank logo"
                width={500}
                height={500}
              />
        </motion.div>
        </Link>
        <Link href={"https://www.axisbank.com/"}>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className=' shadow-lg shadow-black p-5 rounded-md'><h3 className='text-center'></h3>
        <Image
                className="overflow-auto mt-5"
                src="/logos/Axis_Bank_logo.png"
                alt="Axis Bank logo"
                width={500}
                height={500}
              />
        </motion.div>
        </Link>
    </div>
    </>
  )
}

export default BankingPartners