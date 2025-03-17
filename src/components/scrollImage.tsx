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
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full my-5 pt-16 pb-24 bg-[#F9FAFB]">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black text-center leading-snug sm:leading-tight px-4 mb-20">
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
                className="w-[70%] md:w-[60%] lg:w-[55%] xl:w-[50%] object-cover rounded-lg shadow-lg mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
