import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const about = () => {
  return (
    <>
      <div className="bg-about bg-fixed bg-repeat-round  h-auto lg:h-80">
        <Navbar />
        <h1 className="font-bold flex justify-center text-center align-middle pt-40 text-6xl">
          About Us
        </h1>
      </div>

       {/* Desigination of founder */}
       <div className="flex justify-center">
        <h1 className="font-bold text-4xl mt-5">Founder</h1>
      </div>
      
      {/* Image  of founder */}
      <div className="flex justify-center">
        <img
          className="rounded-full h-96 w-96"
          src="https://thumbs.dreamstime.com/b/flat-male-avatar-image-beard-hairstyle-businessman-profile-icon-vector-179285629.jpg"
          alt="Founder Image"
        />
      </div>

      {/* Name of founder */}
      <div className="flex justify-center">
        <h1 className="font-semibold text-3xl">Mr. John Doe</h1>
      </div>


      {/* Desigination of co-founder */}
      <div className="flex justify-center">
        <h1 className="font-bold text-4xl mt-10">Co-Founder</h1>
      </div>

      {/* Image of co-founder */}
      <div className="flex justify-center">
        <img
          className="rounded-full h-96 w-96"
          src="https://static.vecteezy.com/system/resources/previews/006/735/770/original/beautiful-woman-avatar-profile-icon-vector.jpg"
          alt="Co-Founder Image"
        />
      </div>

      {/* Name of co-founder */}
      <div className="flex justify-center">
        <h1 className="font-semibold text-3xl">Mr. Jane Doe</h1>
      </div>

      {/* description */}
      <div className="flex justify-center">
        <p className="text-center font-semibold text-2xl p-5 mt-5  px-5 lg:px-40">
          We are a team of lawyers who are here to help you with your legal
          queries. We have a team of lawyers who are experts in their fields and
          are here to help you with your legal issues. We are here to help you
          with your legal issues and queries.
        </p>
      </div>

      <div>
        <p className="text-center font-semibold text-xl p-5 mt-5 px-5 lg:px-40">
          While you are facing any sort of a legal questioning, you must not be
          aware from where to start your journey from. Indeed it is a daunting
          task to evaluate the legal issues along with choosing the perfect
          lawyer to handle your legal things as per your requirements. Searching
          for a lawyer is an easy task but searching for the RIGHT LAWYER is
          what we can serve you right here to give you the One Stop Solution
          with our team of experts. We here at Dahanu Lawyers are right here to
          assist you with your personal and your financial stakes. Be it
          corporate or the general clients, since it is not that easy to gather
          the facts we help you out with every bit of it.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default about;
