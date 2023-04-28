import Link from "next/link";
import React from "react";

const Intern = () => {
  return (
    <>
      <h1 className="text-center font-semibold text-4xl p-5 mt-5">
        Want to be an Intern?
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-20 lg:gap-16 p-20">
        <div><img src="/images/intern.jpg" alt="" /></div>
        <div className="p">
          <p className="text-xl py-10">Start your law career at the best place. Learn from the experts in
          this field through the practical methods. Send us your CV and Cover
          Letter.</p>
          <Link href="/internship">
            <button className="bg-gray-600 text-white p-4 font-semibold border-dotted border-black rounded hover:bg-gray-400">
                    Upload Now
                  </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Intern;
