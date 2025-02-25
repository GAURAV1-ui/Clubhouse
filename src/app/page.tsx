"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import { FaGooglePlay } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-[#DEE0F2] md:m-8 md:rounded-3xl">
      <Navbar />
      <div className="relative flex flex-col items-center mt-20 min-h-screen px-4 text-center">
        <motion.img
          src="/hand_megaphone.png"
          alt="Megaphone"
          className="absolute left-0 top-20 md:-left-10 md:top-10 w-32 sm:w-52 md:w-72"
          initial={{ y: -20 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />

        <motion.img
          src="/rocket.png"
          alt="Rocket"
          className="absolute right-0 md:-right-4 sm:-right-10 -top-10 sm:bottom-20 w-40 sm:w-64 md:w-96"
          initial={{ y: 20 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />

        {/* <motion.img
          src="/target.png"
          alt="Target"
          className="absolute bottom-10 sm:bottom-16 md:bottom-20 w-32 sm:w-48 md:w-64"
          initial={{ y: 20 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        /> */}

        <h2 className="text-gray-600 text-sm sm:text-base md:text-lg uppercase z-10">
          I T E K S E O &nbsp; A G E N C Y
        </h2>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl max-w-4xl font-bold text-black mt-3 z-10">
          SEO Analytics and Marketing for
        </h1>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-white font-bold my-4 bg-[#6640F4] px-3 sm:px-4 py-1 sm:py-2 rounded-2xl">
          Startup
        </h1>

        <p className="text-gray-500 mt-10 max-w-lg">
          Ensuring the best return on investment for your bespoke SEO campaign
          requirement. Get your free SEO Analysis.
        </p>
        <div className="relative mt-10  flex flex-col items-center">
          <motion.img
            src="/target.png"
            alt="Target"
            className="absolute top-0 w-32 sm:w-48 md:w-64"
            initial={{ y: 20 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />

          <button className="flex items-center gap-2 px-6 py-3 bg-[#6640F4] text-white rounded-lg hover:bg-purple-700 transition font-medium z-10">
            <FaGooglePlay className="text-xl" />
            <span>Get it on Google Play</span>
          </button>
        </div>
      </div>
    </div>
  );
}
