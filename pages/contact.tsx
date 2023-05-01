import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const contact = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-screen bg-about bg-fixed bg-repeat-round h-80">
        <h1 className="font-bold flex justify-center text-center align-middle pt-40 text-6xl">
          Contact Us
        </h1>
      </div>
      <div className="flex justify-center">
        <h1 className="font-bold text-4xl mt-10 px-10">How would you like to connect with us?</h1>
      </div>
      {/* a responsive grid of cards with neomorphic design which has icons on location, hone, whatsapp and email, hover and click effects on cards, also add some padding above and below the grid */}
      <div className="flex justify-center pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-10 py-10">
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-1 hover:scale-110 transition duration-500">
            <div className="flex justify-center">
              <Image
                className="mt-5"
                src="/icons/contact-meeting.png"
                alt="Meeting Image"
                width={80}
                height={80}
              />
            </div>
            <div className="flex justify-center">
              <h1 className="font-semibold text-3xl">Online Meeting</h1>
            </div>
            <div className="flex justify-center">
              <div className="text-center font-semibold text-xl p-5 mt-5 px-20">
                <p>B/109, Saras Capital,</p>
                <p>Opp. Axis Bank,</p>
                <p>Dahanu, Tal-Dahanu</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-1 hover:scale-110 transition duration-500">
            <div className="flex justify-center">
              <Image
                className="mt-5"
                src="/icons/contact-phone.png"
                alt="Phone Image"
                width={80}
                height={80}
              />
            </div>
            <div className="flex justify-center">
              <h1 className="font-semibold text-3xl">Phone</h1>
            </div>
            <div className="flex justify-center">
              <p className="text-center font-semibold text-xl p-5 mt-5 px-20">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
                quas.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-1 hover:scale-110 transition duration-500">
            <div className="flex justify-center">
              <Image
                className="mt-5"
                src="/icons/contact-whatsapp.png"
                alt="Whatsapp Image"
                width={80}
                height={80}
              />
            </div>
            <div className="flex justify-center">
              <h1 className="font-semibold text-3xl">Whatsapp</h1>
            </div>
            <div className="flex justify-center">
              <p className="text-center font-semibold text-xl p-5 mt-5 px-20">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
                quas.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-1 hover:scale-110 transition duration-500">
            <div className="flex justify-center">
              <Image
                className="mt-5"
                src="/icons/contact-email.png"
                alt="Email Image"
                width={80}
                height={80}
              />
            </div>
            <div className="flex justify-center">
              <h1 className="font-semibold text-3xl">Email</h1>
            </div>
            <div className="flex justify-center">
              <p className="text-center font-semibold text-xl p-5 mt-5 px-20">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
                quas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default contact;
