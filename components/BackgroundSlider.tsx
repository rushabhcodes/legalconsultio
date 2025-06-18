import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

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
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative h-screen w-full">
            <Image
              src="/sliderImages/slider_1.webp"
              alt="Legal Hero Image"
              layout="fill"
              objectFit="cover"
              priority
              quality={80}
              className="z-0"
            />
            <div className="absolute inset-0 flex items-start pt-52 pl-12 z-10">
              <div>
                <motion.h1
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { scale: 0.8, opacity: 0 },
                    visible: {
                      scale: 1,
                      opacity: 1,
                      transition: { delay: 0.4 },
                    },
                  }}
                  className="text-left font-bold text-white text-4xl lg:text-5xl"
                >
                  Welcome to{" "}
                  <span className="text-gray-950 lg:text-6xl bg-white rounded bg-opacity-30">
                    legalconsultio.com
                  </span>
                </motion.h1>
                <p className="font-semibold text-white text-xl lg:text-3xl lg:py-10 pt-5">
                  Your FIGHT is our FIGHT!!!
                </p>
                <p className="text-white text-sm lg:text-lg py-3 mr-14 pt-16">
                  The Law firm believes that the Indian Legal System is very
                  highly complex, yet there are some extremely simple solutions.
                </p>
                <p className="text-white text-sm lg:text-lg py-3 mr-14 pt-5">
                  This Law firm keeps learning, reading, revising, shaping its
                  opinion as the world evolves & changes around us.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative h-screen w-full">
            <Image
              src="/sliderImages/slider_3.webp"
              alt="Law Results Background"
              layout="fill"
              objectFit="cover"
              quality={80}
              className="z-0"
            />
            <div className="absolute inset-0 flex items-start pt-52 pl-12 z-10">
              <div>
                <h1 className="text-left text-4xl lg:text-5xl font-bold text-white">
                  Where{" "}
                  <span className="text-gray-950 lg:text-6xl bg-white rounded bg-opacity-30">
                    Law
                  </span>{" "}
                  Meets{" "}
                  <span className="text-gray-950 lg:text-6xl bg-white rounded bg-opacity-30">
                    Results
                  </span>{" "}
                  - Trustworthy Advocacy for Your Legal Needs
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative h-screen w-full">
            <Image
              src="/sliderImages/slider_2.webp"
              alt="Contact Background"
              layout="fill"
              objectFit="cover"
              quality={80}
              className="z-0"
            />
            <div className="absolute inset-0 flex items-start pt-52 pl-12 z-10">
              <div>
                <h1 className="text-left text-4xl lg:text-5xl font-bold text-white">
                  Feel free to contact us
                </h1>
                <motion.div
                  className="mt-8 w-fit h-fit"
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
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
