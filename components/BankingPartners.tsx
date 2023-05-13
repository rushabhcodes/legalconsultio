import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import kotak from "../public/logos/Kotak_Mahindra_Bank_logo.png";
import axis from "../public/logos/Axis_Bank_logo.png";

const BankingPartners = () => {
  return (
    <>
      <div>
        <h1 className="text-center font-semibold text-3xl p-10 bg-slate-200">
          Our Banking Partners
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <Link href={"https://www.kotak.com/en/home.html"}>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="shadow-2xl p-10 m-16 mb-0 lg:mb-16 rounded-md"
            >
              <Image
                className=" overflow-auto"
                src={kotak}
                alt="Kotak Mahindra Bank logo"
                width={500}
                height={500}
              />
            </motion.div>
          </Link>
        </div>
        <div>
          <Link href={"https://www.axisbank.com/"}>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="shadow-2xl p-10 m-16 rounded-md"
            >
              <Image
                className="overflow-auto"
                src={axis}
                alt="Axis Bank Logo"
                width={500}
                height={500}
              />
            </motion.div>
          </Link>
        </div>
      </div>

      {/* <div><h1 className='text-center font-semibold text-3xl p-10 bg-slate-200'>Our Banking Partners</h1></div>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-20 p-20 bg-white px-40 '>
        <Link href={"https://www.kotak.com/en/home.html"}><motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className='shadow-lg shadow-black p-5 rounded-md '><h3 className='text-center'></h3>
        <Image
                className=" overflow-auto"
                src={kotak}
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
                src={axis}
                alt="Axis Bank logo"
                width={500}
                height={500}
              />
        </motion.div>
        </Link>
    </div> */}
    </>
  );
};

export default BankingPartners;
