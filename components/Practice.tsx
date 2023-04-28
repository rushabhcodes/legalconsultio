import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Practice = () => {
  return (
    <div>
      <h1 className="text-center font-semibold text-3xl p-5 mt-5">
        Practice Areas
      </h1>
      {/* make a respinsive grid with cards in it which will be 3 columns on desktop and 1 column on on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-20 p-20">
      
      {/* Banking And Finance */}


          {/* Civil */}
          

          {/* Criminal */}
          

          {/* Electricity */}
          
          {/* Family Disputes */}
          <div className="border-solid shadow-2xl border-black  text-center p-10 rounded">
            <div className="items-center">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                <Link href="/practice/family">
                  <img
                    className="mx-auto h-32"
                    src="\images\family.png"
                    alt="Family Disputes Image"
                  />
                </Link>
              </motion.div>
            </div>

            <h1 className="text-center font-bold text-3xl py-5">
              Family Disputes
            </h1>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
              <Link href="/practice/family">
                <button className="bg-gray-600 text-white p-4 font-semibold border-dotted border-black rounded py-3 hover:bg-gray-400">
                  Know More
                </button>
              </Link>
            </motion.div>
          </div>
      </div>
</div>

  );
};

export default Practice;
