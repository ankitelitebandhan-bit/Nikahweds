import React from "react";
import assets from "../assets/assets";
import { FaShieldAlt, FaUsers, FaCheckCircle, FaMosque } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  const features = [
    {
      icon: <FaShieldAlt className="text-4xl text-emerald-600 mb-4" />,
      title: "100% Privacy Protected",
      description:
        "Your personal information is completely secure and only shared with your consent.",
    },
    {
      icon: <FaUsers className="text-4xl text-emerald-600 mb-4" />,
      title: "Family Involvement",
      description:
        "We encourage family participation in the process, respecting Islamic traditions.",
    },
    {
      icon: <FaCheckCircle className="text-4xl text-emerald-600 mb-4" />,
      title: "Verified Profiles",
      description:
        "All profiles are thoroughly verified to ensure authenticity and safety.",
    },
    {
      icon: <FaMosque className="text-4xl text-emerald-600 mb-4" />,
      title: "Islamic Values",
      description:
        "Our platform is built on Islamic principles with halal matching processes.",
    },
  ];

  return (
    <div className="bg-white py-12 px-4 sm:px-8 lg:px-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-emerald-700 text-3xl sm:text-4xl font-extrabold italic">
          About NikahWed
        </h1>
        <div className="w-24 h-1 bg-emerald-500 mx-auto my-3 rounded-full" />
        <p className="text-gray-600 font-medium text-base sm:text-lg max-w-3xl mx-auto italic mt-4">
          Founded on Islamic principles, we are dedicated to helping Muslims
          worldwide find their perfect life partner in a halal, respectful, and
          family-oriented environment.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-12 mb-20">
        {/* Left Text */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-emerald-800 text-2xl sm:text-3xl font-bold mb-6 italic">
            NikahWed: Premium Muslim Matrimonial Service for a Blessed Union
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
            At NikahWed, we believe that marriage is not just a union of two
            individuals, but a sacred bond guided by faith, trust, and shared
            values. Our platform is designed to bring together Muslim families
            who seek a partner with strong religious values, cultural
            compatibility, and shared aspirations for a peaceful, prosperous
            life.
            <br />
            <br />
            Whether you're looking for someone with a similar educational
            background, profession, or family values, NikahWed offers
            personalized matchmaking services to meet your needs. Every profile
            is verified and curated with care to ensure trust and safety.
            <br />
            <br />
            Our mission is to guide your journey towards Nikah in a way that
            blends modern convenience with traditional values.
          </p>
          <p className="text-gray-600 mb-3 mt-3">Still have questions?</p>
          <Link
            to="/contact"
            className="bg-green-500 text-white text-base px-5 py-2 rounded-full font-semibold 
             flex items-center justify-center gap-2 
             transition-all duration-300 ease-in-out 
             hover:scale-95 hover:bg-green-600 
             w-fit mx-auto mt-7"
          >
            <span>Contact Us</span>
            <span className="w-8 h-8 rounded-full bg-white transition"></span>
          </Link>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={assets.hero4}
            alt="NikahWed Introduction"
            className="w-full rounded-2xl border-4 border-emerald-300 shadow-lg hover:scale-105 transform transition-transform duration-300"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-emerald-50 hover:bg-emerald-100 transition-all duration-300 p-6 rounded-xl shadow-sm hover:shadow-md text-center "
          >
            {feature.icon}
            <h3 className="text-emerald-800 font-semibold text-lg mb-2 ">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Footer Message */}
      <p className="text-center text-emerald-700 text-base sm:text-lg font-medium">
        Your journey towards a blessed union starts with{" "}
        <strong>NikahWed</strong>. We're here to help you find your true match
        with faith, trust, and integrity.
      </p>
    </div>
  );
};

export default About;
