import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "I don’t know what else to say, this is something that you haven’t seen before. Unique design, lightweight, and outstanding support. Itkeseo always a pleasure to work!",
    author: "Conor Martinelli",
    position: "Director at Ecoland Resort & Hotel",
  },
  {
    text: "Itkeseo provided an amazing experience! Their support team is incredible, and the design of the product is truly outstanding.",
    author: "Sarah Johnson",
    position: "CEO at GreenTech Solutions",
  },
  {
    text: "A game-changer in the industry. The UI is seamless, and the team behind Itkeseo is highly responsive.",
    author: "David Thompson",
    position: "Product Manager at TechNova",
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-10 rounded-lg mx-auto text-left max-w-6xl">
      <div className="md:w-1/2">
        <div className="bg-purple-600 text-white p-3 rounded-full inline-block text-3xl">
          &ldquo;
        </div>
        <p className="text-xl text-gray-800 mt-4">
          {testimonials[currentIndex].text}
        </p>
        <p className="mt-4 font-semibold text-gray-900">
          {testimonials[currentIndex].author}
        </p>
        <p className="text-gray-500 text-sm">
          {testimonials[currentIndex].position}
        </p>
        <div className="flex space-x-4 mt-6">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
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
  );
}
