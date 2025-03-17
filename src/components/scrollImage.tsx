"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = ["/1.png", "/2.png", "/3.png", "/4.jpg", "/5.png"];

export default function ScrollingImage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
    <div className="relative flex flex-col items-center justify-center w-full pt-16 pb-24 bg-[#F9FAFB]">
      <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-12">
        Feat
        <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
          ures
        </span>
      </h1>

      <div className="w-full px-4 relative z-0">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={img}
                alt={`Feature ${index + 1}`}
                className="w-[65%] md:w-[55%] lg:w-[50%] xl:w-[45%] object-cover rounded-lg shadow-lg mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
