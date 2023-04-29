import { Popover } from "@headlessui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{
        backgroundColor: `${color}`,
        background: `${color === "transparent" ? "rgba(0, 0, 0, 0.4)" : "1"}`,
      }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
            LOGO
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Link href="/">Home</Link>
            </motion.div>
          </li>
          <li className="p-4">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Link href="/courtAndForums">Court and Forums</Link>
            </motion.div>
          </li>
          <li className="p-4">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Link href="/articles">Articles</Link>
            </motion.div>
          </li>
          <li className="p-4">
            <Popover className="relative">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <Popover.Button>
                  <div className="">Judgement</div>
                </Popover.Button>
              </motion.div>
              <Popover.Panel className="absolute z-10 left-0 -m-3">
                <div className="p-5"></div>
                <div className="justify-center border border-black">
                  <div style={{
        backgroundColor: `${color}`,
        background: `${color === "transparent" ? "rgba(0, 0, 0, 0.4)" : "1"}`,
      }} className="bg-black pt-2 py-2 px-12">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <Link href="/DV">DV</Link>
                    </motion.div>
                  </div>
                  <div style={{
        backgroundColor: `${color}`,
        background: `${color === "transparent" ? "rgba(0, 0, 0, 0.4)" : "1"}`,
      }} className="bg-black pb-2 py-2 px-12">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    >
                      <Link href="/curl">138</Link>
                    </motion.div>
                  </div>
                </div>
              </Popover.Panel>
            </Popover>
          </li>
          <li className="p-4">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Link href="/about">About Us</Link>
            </motion.div>
          </li>
          <li className="p-4">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Link href="/contact">Contact Us</Link>
            </motion.div>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li className="p-4">
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className="p-4 hover:text-gray-500 text-2xl"
              >
                <Link href="/">Home</Link>
              </motion.div>
            </li>
            <li className="p-4">
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className="p-4 hover:text-gray-500 text-2xl"
              >
                <Link href="/courtAndForums">Court and Forums</Link>
              </motion.div>
            </li>
            <li className="p-4">
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className="p-4 hover:text-gray-500 text-2xl"
              >
                <Link href="/articles">Articles</Link>
              </motion.div>
            </li>
            <li className="p-4">
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className="p-4 hover:text-gray-500 text-2xl"
              >
                <Link href="/about">About Us</Link>
              </motion.div>
            </li>
            <li className="p-4">
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className="p-4 hover:text-gray-500 text-2xl"
              >
                <Link href="/contact">Contact Us</Link>
              </motion.div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
