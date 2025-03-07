"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = ["/1.png", "/2.png", "/3.png", "/4.jpg", "/5.png", "/5.png"];

export default function PhoneCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5, // Default for large screens
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // Mobile (now showing 3 slides)
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="relative w-full h-[280px] sm:h-[320px] flex justify-center items-center">
        <img
          src="/hand.png"
          alt="Hand Holding Phone"
          className="absolute top-0 sm:-top-6 md:-top-8 w-[200px] sm:w-[320px] md:w-[400px] h-auto z-10 pointer-events-none"
        />
        <div className="w-full overflow-hidden">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index} className="px-2 sm:px-3">
                <img
                  src={img}
                  alt={`Screen ${index + 1}`}
                  className="w-[85%] sm:w-[75%] h-[40%] rounded-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
