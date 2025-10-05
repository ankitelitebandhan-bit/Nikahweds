import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import assets from "../assets/assets";
const slides = [
  {
    title: "Islamic Decorations",
    subtitle: "Creating beauty within Islamic boundaries",
    description:
      "Beautiful halal decorations and venues that align with Islamic principles and aesthetic values.",
    image: assets.hero1,
  },
  {
    title: "Henna Ceremonies",
    subtitle: "Celebrating Allah's blessings with family",
    description:
      "Beautiful traditional henna ceremonies celebrating the bride's journey into marriage with family and friends.",
    image: assets.hero2,
  },
  {
    title: "Nikah Ceremony",
    subtitle: "The sacred contract of marriage",
    description:
      "The Nikah is the religious ceremony for a Muslim couple to be legally wed under Islamic law.",
    image: assets.hero3,
  },
  {
    title: "Walima Celebration",
    subtitle: "A joyful reception with blessings",
    description:
      "The Walima is the marriage banquet and celebration hosted by the groom’s family after the Nikah.",
    image: assets.hero4,
  },
  {
    title: "Islamic Modest Attire",
    subtitle: "Modesty in dress reflects inner beauty",
    description:
      "Traditional Islamic wedding attire honors modesty, dignity, and culture in a beautifully respectful way.",
    image: assets.hero2,
  },
  {
    title: "Family Blessings",
    subtitle: "The heart of the celebration",
    description:
      "A time for families to unite, give blessings, and support the couple’s journey into a shared life.",
    image: assets.hero3,
  },
];

const IslamicWeddingSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-16 min-h-[60vh] xl:min-h-[80vh]">
      <h2 className="text-3xl  xl:text-4xl font-bold text-center text-green-800 mb-4 mt-9">
        Islamic Wedding Traditions
      </h2>
      <p className="text-center text-base/loose lg:text-lg text-green-700 mb-14 max-w-2xl mx-auto">
        Celebrating the beauty of Islamic matrimony with traditions that honor
        Allah, family, and the sacred bond of marriage.
      </p>

      <div className="flex justify-center items-center ">
        <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-5xl w-full flex flex-col md:flex-row relative border border-green-100 min-h-[60vh] md:min-h-[44vh] ">
          {/* Left Side - Image */}
          <div className="md:w-1/2 w-full">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover md:p-2"
            />
          </div>

          {/* Right Side - Content */}
          <div className="md:w-1/2 w-full p-6 flex flex-col justify-center bg-green-50/60 md:bg-green-50 max-md:mt-1">
            <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-4  rounded-full mb-3 p-y-1 w-3/4">
              {slides[currentSlide].subtitle}
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-3">
              {slides[currentSlide].title}
            </h3>
            <p className="text-green-600 mb-5">
              {slides[currentSlide].description}
            </p>

            {/* Slide Indicators */}
            <div className="flex items-center gap-2">
              {slides.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-3 w-3 rounded-full ${
                    idx === currentSlide ? "bg-green-400" : "bg-green-200"
                  }`}
                ></span>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 md:bg-white bg-white/77 border border-gray-200 shadow p-2 rounded-full hover:bg-green-100"
          >
            <FaChevronLeft className="text-green-400" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 md:bg-white bg-white/77 border border-gray-200 shadow p-2 rounded-full hover:bg-green-100"
          >
            <FaChevronRight className="text-green-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IslamicWeddingSlider;
