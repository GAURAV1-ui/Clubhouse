import React from "react";
import { FaGooglePlay } from "react-icons/fa";

export default function Download() {
  return (
    <div className="bg-gray-100 ">
      <div className="flex flex-col md:flex-row items-center justify-between p-10 rounded-lg mx-auto text-left max-w-6xl">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            Your Notes <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">Security</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            "I don’t know what else to say, this is something that you haven’t seen before. Unique design, lightweight, and outstanding support. Itkeseo always a pleasure to work!"
          </p>
          <button className="flex items-center gap-3 px-6 py-3 bg-[#6640F4] text-white rounded-lg hover:bg-purple-700 transition font-medium">
            <FaGooglePlay className="text-2xl" />
            <span className="text-lg">Get it on Google Play</span>
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <div className="w-80 h-80 md:w-96 md:h-96 flex items-center justify-center ">
            <img
              src="/download.png"
              className="w-full h-full"
              alt="Download App"
            />
          </div>
        </div>
      </div>
    </div>
  );
}