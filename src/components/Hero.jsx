import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUserCheck, FaUsers, FaHeart } from "react-icons/fa";
import assets from "../assets/assets";

const images = [assets.hero1, assets.hero2, assets.hero3, assets.hero4];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[calc(100vh-5rem)] overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`w-full h-screen object-cover absolute top-0 left-0 transition-opacity duration-1000 ${
              currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gray-900/40 z-10" />
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight">
          Find Your Perfect <br className="hidden sm:block" />
          <span className="text-white">Life Partner</span>
        </h1>

        <p className="text-gray-200 text-sm sm:text-base xl:text-lg max-w-2xl mb-6">
          A trusted platform connecting Muslim hearts worldwide. Built on
          Islamic values, dedicated to helping you find your blessed union with
          complete privacy and respect.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <NavLink
            to="/contact"
            className="bg-green-600 hover:bg-green-700 hover:border-white text-white px-6 py-3 rounded-full text-sm xl:text-base font-medium transition duration-300 border-2 border-green-600"
          >
            Start Your Journey
          </NavLink>
          <NavLink
            to="/contact"
            className="bg-white text-green-700 hover:border-green-400 px-6 py-3 rounded-full text-sm xl:text-base font-medium transition duration-300 border-2 border-white"
          >
            Login
          </NavLink>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 text-white text-sm sm:text-base">
          <div className="flex items-center gap-2 hover:text-green-300 hover:scale-110 hover:cursor-pointer transition">
            <FaUserCheck className="text-green-300" />
            <span>100% Verified Profiles</span>
          </div>
          <div className="flex items-center gap-2 hover:text-green-300 hover:scale-110 hover:cursor-pointer transition">
            <FaUsers className="text-green-300" />
            <span>50,000+ Active Members</span>
          </div>
          <div className="flex items-center gap-2 hover:text-green-300 hover:scale-110 hover:cursor-pointer transition">
            <FaHeart className="text-green-300" />
            <span>2,500+ Success Stories</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
