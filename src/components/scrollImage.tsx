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
        breakpoint: 1024, 
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="relative w-full h-[350px] flex justify-center items-center">
        <img
          src="/hand.png"
          alt="Hand Holding Phone"
          className="absolute -top-8 ml-16 w-[420px] h-auto z-10 pointer-events-none"
        />
        <div className="w-full overflow-hidden">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index} className="px-4">
                <img
                  src={img}
                  alt={`Screen ${index + 1}`}
                  className="w-[70%] h-[40%] rounded-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
