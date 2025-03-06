import React from "react";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center p-4 rounded-lg mx-auto text-left">
        <div className="md:w-[40%]">
          <div className="bg-purple-600 text-white p-3 rounded-full inline-block text-6xl">
            &ldquo;
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            About{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
              Us
            </span>
          </h1>
          <p className="text-xl text-gray-800 mt-4">
            "I don’t know what else to say, this is something that you haven’t
            seen before. Unique design, lightweight, and outstanding support.
            Itkeseo always a pleasure to work!"
          </p>
          <p className="mt-4 font-semibold text-gray-900">"Conor Martinelli"</p>
          <p className="text-gray-500 text-sm">"Founder & CEO"</p>
        </div>
        <div className="md:w-[60%] flex justify-center mt-10 md:mt-0 relative h-[400px] md:h-[500px] lg:h-[600px]">
          <div
            className="absolute w-[80%] h-[80%] rounded-full bg-cover bg-center animate-spin-extra-slow z-0"
            style={{ backgroundImage: "url('/bubble.png')" }}
          ></div>

          <img
            src="/users.png"
            className="w-[70%] h-full object-contain relative"
            alt="Download App"
          />
        </div>
      </div>
    </div>
  );
}
