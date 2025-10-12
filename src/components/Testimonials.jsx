import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import assets from "../assets/assets";

const testimonialsData = [
  {
    name: "Layla & Khalid",
    location: "Manchester, UK",
    testimonial:
      "NikahWed’s approach to Islamic matrimony is unparalleled. The platform respects our values while providing modern, secure tools for finding the right partner. We're blessed to have found each other here.",
    imgUrl: assets.Test1,
    rating: 5,
  },
  {
    name: "Aisha & Tariq",
    location: "Melbourne, Australia",
    testimonial:
      "The family involvement feature made our families comfortable from the beginning. NikahWed understands the importance of family in Islamic marriage and facilitates meaningful connections.",
    imgUrl: assets.Test2, // Add your image URL here
    rating: 5,
  },
  // Add more testimonials here
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(
        (prevIndex) => (prevIndex + 2) % testimonialsData.length
      ); // Increment by 2 to show two testimonials
    }, 4000); // Change testimonial every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Get the first testimonial in the current pair
  const firstTestimonial = testimonialsData[currentTestimonial];
  // Get the second testimonial in the current pair, ensure it loops correctly
  const secondTestimonial =
    testimonialsData[(currentTestimonial + 1) % testimonialsData.length];

  // Render rating stars
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`text-yellow-400 ${index < rating ? "text-yellow-500" : ""}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="bg-[#FFFBEC] lg:py-20 py-16">
      <div className="flex flex-col items-center justify-center mb-12 ">
        <h1 className=" text-3xl md:text-xl text-green-700 px-4  text-center italic mb-3">
          Success Stories & Trust Metrics
        </h1>
        <div className="w-1/2 flex item-center justify-center h-1 bg-green-700 mb-4"></div>
        <p className="text-lg text-gray-600 md:w-1/2 p-2 text-center italic ">
          Real testimonials from couples who found their perfect match, backed
          by transparent metrics that demonstrate our commitment to successful
          Islamic matrimony.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center ">
        <div className="w-full md:w-1/2 p-4">
          <div className="flex items-center justify-center flex-col gap-10 max-lg:mb-10">
            {/* Displaying first testimonial */}
            <div className="bg-white shadow-lg p-6 rounded-2xl max-w-xl mx-auto space-y-4 border border-green-200 border-l-8 flex items-center justify-between flex-col lg:flex-row">
              <div className="h-full w-full mb-4 lg:mb-0">
                <img
                  src={firstTestimonial.imgUrl}
                  alt={firstTestimonial.name}
                  className="w-24 h-24 lg:w-20 lg:h-20 rounded-xl p-1 border-1 border-green-200 mx-auto lg:mx-0"
                />
              </div>
              <div className="text-center lg:text-left">
                <p className="text-gray-700 text-base mb-3">
                  {firstTestimonial.testimonial}
                </p>

                {/* Rating */}
                <div className="flex space-x-1 text-xl rounded-3xl mb-2 justify-center lg:justify-start">
                  {renderStars(firstTestimonial.rating)}
                </div>
                <div>
                  <p className="font-semibold text-xl text-green-700">
                    {firstTestimonial.name}
                  </p>
                  <p className="text-sm text-gray-500 ">
                    {firstTestimonial.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Displaying second testimonial */}
            <div className="bg-white shadow-lg p-6 rounded-2xl max-w-xl mx-auto space-y-4 border border-l-8 border-green-200 flex items-center justify-between flex-col lg:flex-row">
              <div className="h-full w-full mb-4 lg:mb-0">
                <img
                  src={secondTestimonial.imgUrl}
                  alt={secondTestimonial.name}
                  className="w-24 h-24 md:w-20 lg:h-20 rounded-xl p-1 border-1 border-green-200 mx-auto lg:mx-0"
                />
              </div>
              <div className="text-center lg:text-left">
                <p className="text-gray-700 text-base mb-3">
                  {secondTestimonial.testimonial}
                </p>

                {/* Rating */}
                <div className="flex space-x-1 text-xl rounded-3xl mb-2 justify-center lg:justify-start">
                  {renderStars(secondTestimonial.rating)}
                </div>
                <div>
                  <p className="font-semibold text-xl text-green-700">
                    {secondTestimonial.name}
                  </p>
                  <p className="text-sm text-gray-500 ">
                    {secondTestimonial.location}
                  </p>
                </div>
              </div>
            </div>
            <Link
              to="/testimonials"
              className="inline-block bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-400 hover:scale-95 mt-4 transition transform"
            >
              Read More Success Stories
            </Link>
          </div>
        </div>

        {/* Right Side Large Card */}
        <div className="bg-[#00682a] text-white p-6 rounded-xl max-w-md space-y-6 my-16 md:my-0 md:ml-6 ">
          <h2 className="text-center font-semibold italic text-xl">
            Why Muslims Trust NikahWed
          </h2>

          {/* Stats */}
          <div className="space-y-4">
            <div className="bg-green-700/60 backdrop-blur-3xl p-4 rounded-lg shadow-md border-2 border-white">
              <p className="text-xl font-bold">
                3,500+{" "}
                <span className="text-sm font-normal">
                  Successful Marriages
                </span>
              </p>
              <p className="text-sm">Verified couples who found love</p>
            </div>

            <div className="bg-green-700/60 backdrop-blur-3xl p-4 rounded-lg shadow-md">
              <p className="text-xl font-bold">
                65+ <span className="text-sm font-normal">Countries</span>
              </p>
              <p className="text-sm">Global Muslim community</p>
            </div>

            <div className="bg-green-700/60 backdrop-blur-3xl p-4 rounded-lg shadow-md">
              <p className="text-xl font-bold">
                98%{" "}
                <span className="text-sm font-normal">Verification Rate</span>
              </p>
              <p className="text-sm">Authentic profiles guaranteed</p>
            </div>

            <div className="bg-green-700/60 backdrop-blur-3xl p-4 rounded-lg shadow-md">
              <p className="text-xl font-bold">
                4.9/5 <span className="text-sm font-normal">User Rating</span>
              </p>
              <p className="text-sm">Average satisfaction score</p>
            </div>

            <div className="bg-green-700/60 backdrop-blur-3xl p-4 rounded-lg shadow-md">
              <p className="text-xl font-bold">
                6 Months{" "}
                <span className="text-sm font-normal">Average Time</span>
              </p>
              <p className="text-sm">To find the perfect match</p>
            </div>

            <div className="bg-green-700/60 backdrop-blur-3xl p-4 rounded-lg shadow-md">
              <p className="text-xl font-bold">
                25K+ <span className="text-sm font-normal">Active Members</span>
              </p>
              <p className="text-sm">Serious marriage-minded Muslims</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-green-700/60 backdrop-blur-3xl p-4 rounded-lg text-center space-y-2 shadow-md">
            <p className="font-medium">Ready to Join Them?</p>
            <p className="text-sm/tight mb-6">
              Start your journey with confidence knowing you're joining
              thousands of successful couples
            </p>
            <Link
              to="/register"
              className="bg-white text-green-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 hover:scale-95  transition"
            >
              {" "}
              Create Your Profile Today{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
