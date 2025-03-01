import React from "react";

export default function About() {

  return (
    <div>
      <h1 className="text-3xl text-center text-black"> About</h1>
    <div className="flex flex-col md:flex-row items-center justify-center p-10 rounded-lg mx-auto text-left max-w-6xl">
      <div className="md:w-1/2">
        <div className="bg-purple-600 text-white p-3 rounded-full inline-block text-3xl">
          &ldquo;
        </div>
        <p className="text-xl text-gray-800 mt-4">
          "I don’t know what else to say, this is something that you haven’t seen before. Unique design, lightweight, and outstanding support. Itkeseo always a pleasure to work!"
        </p>
        <p className="mt-4 font-semibold text-gray-900">
        "Conor Martinelli"
        </p>
        <p className="text-gray-500 text-sm">
        "Founder & CEO"
        </p>
      </div>
      <div className="hidden md:flex md:w-1/2 justify-center relative">
      <div className="flex items-center justify-center">
  <div className=" rounded-full overflow-hidden flex items-center justify-center">
    <img
      src="/users.png"
      className="w-full h-full"
      alt="testimonial user"
    />
  </div>
</div>
      </div>
    </div>
    </div>
  );
}
