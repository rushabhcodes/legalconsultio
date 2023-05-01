import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import DV from "@/components/DV/dv.json";

const dv = () => {
  return (
    <div>
      <div className="max-w-screen bg-court bg-fixed bg-repeat-round h-80 rounded-b-2xl">
        <Navbar />
        <h1 className="font-bold flex justify-center text-center align-middle pt-40 text-6xl">
          <span className="text-gray-950  text-6xl bg-white rounded px-2 bg-opacity-30">
            DV
          </span>
        </h1>
      </div>

      {DV.map((DV) => {
        return (
          <div className="flex justify-center" key={DV.id}>
            <div className="max-w-screen-xl bg-white rounded-xl shadow-xl p-10 m-10">
              <div className="flex justify-center">
                <h1 className="font-bold text-4xl">{DV.title}</h1>
              </div>
              <div className="flex justify-center">
                <p className="text-xl">{DV.description}</p>
              </div>
              <div className="flex justify-center">
                <Link href={`${DV.url}`} key={DV.id}>
                  <div className="text-blue-500 text-xl">Read More</div>
                </Link>
              </div>
            </div>
          </div>
        );
      })}

      <Footer />
    </div>
  );
};

export default dv;
