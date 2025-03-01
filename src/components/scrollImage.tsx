"use client";
import { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/1.png",
  "/2.png",
  "/3.png",
  "/3.png",
];

export default function PhoneCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    afterChange: (index: number) => setCurrentIndex(index),
  };

  // Calculate left and right images based on the current index
  const leftImage = images[(currentIndex - 1 + images.length) % images.length];
  const rightImage = images[(currentIndex + 1) % images.length];

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* Left Image (Previous Slide) */}
      <img
        src={leftImage}
        alt="Left Preview"
        className="hidden md:block w-[120px] h-[250px] object-cover rounded-lg opacity-60 transition-all duration-500"
      />

      <div className="relative w-[90%] max-w-[400px] h-[80vh] max-h-[800px] flex justify-center items-center mx-4">
        <img
          src="/hand.png"
          alt="Hand Holding Phone"
          className="absolute w-full h-full object-contain z-10"
        />
        <div className="absolute w-[42%] h-[68%] top-[8%] left-[12.5%] overflow-hidden rounded-[30px] z-0">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index} className="w-full h-full flex justify-center items-center">
                <img src={img} alt={`Screen ${index + 1}`} className="w-full h-full object-cover rounded-[30px]" />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <img
        src={rightImage}
        alt="Right Preview"
        className="hidden md:block w-[120px] h-[250px] object-cover rounded-lg opacity-60 transition-all duration-500"
      />
    </div>
  );
}
