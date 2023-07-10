import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const contact = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-screen bg-about backdrop-blur-sm bg-fixed bg-repeat-round bg-cover h-96 rounded border bg-white ">
        <h1 className="font-bold flex justify-center text-center align-middle pt-40 text-6xl">
          <span className="text-gray-950  text-6xl bg-white px-2 bg-opacity-30">
            Contact Us
          </span>
        </h1>
      </div>
      <div className="flex justify-center">
        <h1 className="font-bold text-4xl mt-10 px-10">
          How would you like to connect with us?
        </h1>
      </div>
      {/* a responsive grid of cards with neomorphic design which has icons on location, hone, whatsapp and email, hover and click effects on cards, also add some padding above and below the grid */}
      <div className="flex justify-center pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 px-10 py-10">
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-1 hover:scale-110 transition duration-500">
            <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
            </div>
            <div className="flex justify-center">
              <h1 className="font-semibold text-3xl">Phone</h1>
            </div>
            <div className="flex justify-center">
              <p className="text-center font-semibold text-xl p-5 mt-5 px-20">
              +91 8149722555
              </p>
            </div>
          </div>

          <Link href={"https://wa.me/+918149722555"}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-1 hover:scale-110 transition duration-500">
              <div className="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 448 512"><path d="M224 122.8c-72.7 0-131.8 59.1-131.9 131.8 0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6 49.9-13.1 4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8 0-35.2-15.2-68.3-40.1-93.2-25-25-58-38.7-93.2-38.7zm77.5 188.4c-3.3 9.3-19.1 17.7-26.7 18.8-12.6 1.9-22.4.9-47.5-9.9-39.7-17.2-65.7-57.2-67.7-59.8-2-2.6-16.2-21.5-16.2-41s10.2-29.1 13.9-33.1c3.6-4 7.9-5 10.6-5 2.6 0 5.3 0 7.6.1 2.4.1 5.7-.9 8.9 6.8 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9c-7.6 15.2-15.7 14.6-11.6 21.6 15.3 26.3 30.6 35.4 53.9 47.1 4 2 6.3 1.7 8.6-1 2.3-2.6 9.9-11.6 12.5-15.5 2.6-4 5.3-3.3 8.9-2 3.6 1.3 23.1 10.9 27.1 12.9s6.6 3 7.6 4.6c.9 1.9.9 9.9-2.4 19.1zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM223.9 413.2c-26.6 0-52.7-6.7-75.8-19.3L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5 29.9 30 47.9 69.8 47.9 112.2 0 87.4-72.7 158.5-160.1 158.5z"/></svg>
              </div>
              <div className="flex justify-center">
                <h1 className="font-semibold text-3xl">Whatsapp</h1>
              </div>
              <div className="flex justify-center">
                <p className="text-center font-semibold text-xl p-5 mt-5 px-20">
                  +91 8149722555
                </p>
              </div>
            </div>
          </Link>
          <Link href={"mailto:legalconsultio@gmail.com"}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-1 hover:scale-110 transition duration-500">
              <div className="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
              </div>
              <div className="flex justify-center">
                <h1 className="font-semibold text-3xl">Email</h1>
              </div>
              <div className="flex justify-center">
                <p className="text-center font-semibold text-xl p-5 mt-5 px-20">
                legalconsultio@gmail.com
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default contact;
