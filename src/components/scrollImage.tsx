"use client";
import { useState, useEffect } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = ["/1.png", "/2.png", "/3.png", "/4.jpg", "/5.png"];

export default function PhoneCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Track screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Force re-render after component mount
  useEffect(() => {
    setLoaded(true);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_oldIndex: number, newIndex: number) =>
      setCurrentIndex(newIndex),
  };

  const getPreviewImages = (offset: number) => {
    return images[(currentIndex + offset + images.length) % images.length];
  };

  return (
    <div className="bg-gray-100 pt-10">
      {/* Responsive Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black text-center leading-snug sm:leading-tight px-4">
        Contact{" "}
        <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
          Now
        </span>
      </h1>

      <div className="flex items-center justify-center py-20 md:py-40 px-4">
        <div className="flex w-full max-w-[1200px] justify-between items-center">
          {/* Left Preview Image */}
          <div className="w-[100px] md:w-[180px] flex justify-center">
            <img
              src={getPreviewImages(-1)}
              alt="Left Preview"
              className="w-[80px] h-[160px] md:w-[140px] md:h-[280px] object-cover rounded-lg opacity-60 transition-transform duration-700"
            />
          </div>

          {/* Main Phone Container */}
          <div className="relative w-[40%] max-w-[350px] h-auto flex justify-center items-center mx-4">
            {/* Hand Holding Phone */}
            <img
              src="/hand.png"
              alt="Hand Holding Phone"
              className="absolute w-full h-auto max-h-[700px] object-contain z-10 pointer-events-none"
            />

            <div
              className="absolute w-[42%] h-[50%] -top-20 md:-top-52 rounded-[30px] z-0"
              style={{
                width: "42%",
                height: "50%",
                left: "12%",
              }}
            >
              {loaded && (
                <Slider {...settings}>
                  {images.map((img, index) => (
                    <div key={index} className="w-full h-full flex justify-center items-center">
                      <img
                        src={img}
                        alt={`Screen ${index + 1}`}
                        className="w-full h-full object-contain rounded-[30px]"
                        style={{ maxHeight: "100%", maxWidth: "100%" }}
                      />
                    </div>
                  ))}
                </Slider>
              )}
            </div>
          </div>

          {/* Right Preview Image */}
          <div className="w-[100px] md:w-[180px] flex justify-center">
            <img
              src={getPreviewImages(1)}
              alt="Right Preview"
              className="w-[80px] h-[160px] md:w-[140px] md:h-[280px] object-cover rounded-lg opacity-60 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
