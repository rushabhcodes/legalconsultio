import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import Link from "next/link";
import { motion } from "framer-motion";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={"fade"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" bg-slider_1 flex h-screen bg-cover bg-no-repeat ">
            <div>
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 0.4,
                    },
                  },
                }}
                className="text-left  font-bold text-white text-4xl lg:text-5xl pt-52 pl-12"
              >
                Welcome to{" "}
                <span className="text-gray-950  lg:text-6xl  bg-white rounded bg-opacity-30">
                  legalconsultio.com
                </span>
              </motion.h1>
              <p
                className={
                  "font-semibold text-white text-xl lg:text-3xl lg:py-10 pl-12 pt-5"
                }
              >
                Your FIGHT is our FIGHT!!!
              </p>

              <p className="text-white text-sm lg:text-lg  py-3 pl-12 mr-14 pt-16 ">
                The Law firm believes that the Indian Legal System is very
                highly complex, yet there are some extremely simple solution.
              </p>
              <p className="text-white text-sm lg:text-lg py-3 pl-12 mr-14 pt-5">
                This Law firm keeps learning, reading, revising, shaping its
                opinionas the world evolves & changes around us.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-slider_3 flex h-screen bg-cover">
            <div className="">
              <h1 className="text-left text-4xl lg:text-5xl font-bold text-white pt-52 pl-12">
                Where{" "}
                <span className="text-gray-950  lg:text-6xl  bg-white rounded bg-opacity-30">
                  Law
                </span>{" "}
                Meets{" "}
                <span className="text-gray-950  lg:text-6xl  bg-white rounded bg-opacity-30">
                  Results
                </span>{" "}
                - Trustworthy Advocacy for Your Legal Needs
              </h1>
              <p className={"text-3xl text-white py-6"}></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-slider_2 flex h-screen bg-cover">
            <div className="">
              <h1 className="text-left text-4xl lg:text-5xl font-bold text-white pt-52 pl-12">
                Feel free to contact us
                <span className="text-gray-950  lg:text-6xl  bg-white rounded bg-opacity-30"></span>
              </h1>
              <p className={"text-3xl text-white py-6"}></p>
              <motion.div
                className="pl-12 w-fit h-fit"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
              >
                <Link href="/contact">
                  <button className="bg-gray-600 text-white p-7 lg:text-2xl font-semibold border-dotted border-black rounded py-3 hover:bg-gray-400">
                    Contact Us
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
