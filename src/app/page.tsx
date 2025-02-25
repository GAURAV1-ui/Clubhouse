"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/navbar';
import { FaGooglePlay } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-[#DEE0F2] m-8 rounded-3xl">
    <Navbar /> 
    <div className="relative flex flex-col items-center mt-20 min-h-screen px-4 text-center">
      <motion.img
        src="/hand_megaphone.png"
        alt="Megaphone"
        className="absolute -left-10 top-10 w-72"
        initial={{ y: -20 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />
      <motion.img
        src="/rocket.png"
        alt="Rocket"
        className="absolute -right-10 bottom-20 w-96"
        initial={{ y: 20 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />
      <motion.img
        src="/target.png"
        alt="Target"
        className="absolute bottom-0 w-64"
        initial={{ y: 20 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />
      <h2 className="text-gray-600 text-lg uppercase">I T E K S E O &nbsp; A G E N C Y</h2>
      <h1 className="text-8xl max-w-4xl font-bold text-black mt-3">
        SEO Analytics and Marketing for
      </h1>
      <h1 className="text-white text-8xl max-w-4xl font-bold my-4 bg-[#6640F4] px-4 py-2 rounded-2xl">
  Startup
</h1>


      <p className="text-gray-500 mt-10 max-w-lg">
        Ensuring the best return on investment for your bespoke SEO campaign requirement.
        Get your free SEO Analysis.
      </p>
      <div className="mt-6 flex items-center">
      <button className="flex items-center z-10 gap-2 px-6 py-3 bg-[#6640F4] text-white rounded-lg hover:bg-purple-700 transition font-medium">
        <FaGooglePlay className="text-xl" />
        <span>Get it on Google Play</span>
      </button>
    </div>
    </div>
    </div>
  );
}
