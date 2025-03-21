import React from "react";
import { FaGooglePlay } from "react-icons/fa";

export default function Download() {
  return (
    <div className="flex items-center justify-center py-8 bg-white">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12 rounded-lg mx-auto text-left max-w-7xl w-full relative">
        

        <div className="md:w-[40%] space-y-4 sm:space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
          Download{" "}
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            App
          </span>
        </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700">
            "I don’t know what else to say, this is something that you haven’t
            seen before. Unique design, lightweight, and outstanding support.
            Itkeseo always a pleasure to work!"
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-3 bg-[#6640F4] text-white rounded-lg hover:bg-purple-700 transition font-medium">
              <FaGooglePlay className="text-lg sm:text-2xl" />
              <span className="text-sm sm:text-lg">Get it on Google Play</span>
            </button>
          </div>
        </div>
        <div className="md:w-[60%] flex justify-center mt-10 md:mt-0 relative">
          <div
            className="absolute w-[80%] h-[80%] rounded-full bg-cover bg-center animate-spin-extra-slow z-0"
            style={{ backgroundImage: "url('/bubble.png')" }}
          ></div>
          
          <img
            src="/download.png"
            className="w-[70%] max-w-[400px] sm:max-w-[500px] md:max-w-[600px] relative"
            alt="Download App"
          />
        </div>
        
      </div>
    </div>
  );
}
