import React from "react";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import assets from "../assets/assets";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
const faqs = [
  {
    question: "How does NikahWeds ensure Islamic compliance?",
    answer:
      "NikahWeds is built on Islamic principles, ensuring all interactions respect halal boundaries, with optional family involvement and strict privacy measures.",
  },
  {
    question: "What safety measures do you have in place?",
    answer:
      "We verify profiles, offer privacy controls, and have a dedicated moderation team to ensure a safe and respectful environment for all users.",
  },
  {
    question: "How do you match compatible partners?",
    answer:
      "We use a combination of Islamic values, user preferences, and compatibility algorithms to help you find the most suitable matches.",
  },
  {
    question: "Is there family involvement in the process?",
    answer:
      "Yes, NikahWeds encourages family involvement and provides features that make it easy to include your wali or family members.",
  },
  {
    question: "What are your success rates?",
    answer:
      "Alhamdulillah, we have helped many Muslims find suitable partners for marriage. Success depends on honesty, sincerity, and compatibility.",
  },
  {
    question: "Do you serve Muslims worldwide?",
    answer:
      "Yes, NikahWeds is available globally, connecting Muslims from all regions while respecting cultural and religious diversity.",
  },
];
const AboutUs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="space-y-12">
      {/* Our Islamic Foundation Section */}
      <div className="relative w-full  bg-gradient-to-t from-green-600 to-cream-300">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${assets.hero1})` }}
        ></div>

        {/* Content */}

        <div className="relative z-10 text-white px-6 py-10 sm:py-16 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white font-bold   backdrop-blur-3xl  py-2 px-6 rounded-md text-xl/loose  flex item-center justify-center mb-4">
              Guided by Islamic Values
            </h2>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 mx-auto">
              Our Islamic Foundation
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed">
              NikahWed is built upon the unshakeable foundation of Islamic
              principles, community trust, and the sacred intention of helping
              Muslims find their life partners through the blessed path ordained
              by Allah (SWT).
            </p>
          </div>
        </div>
      </div>

      {/* Our Sacred Mission Section */}
      <div className="px-4 py-12 lg:py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto flex flex-col gap-11 md:flex-row items-center space-y-8 md:space-y-0">
          {/* Left Text Section */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-green-600 mb-4">
              Our Sacred Mission
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              At <strong className="text-green-800">NikahWed</strong>, we
              understand that marriage is not merely a union of two individuals,
              but a <strong className="text-green-800">sacred covenant</strong>{" "}
              blessed by Allah (SWT). Our platform serves as a bridge,
              connecting Muslim hearts across the world while ensuring that
              every interaction honors Islamic values and family traditions.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              We believe that marriage is more than companionship — it’s a
              journey rooted in{" "}
              <strong className="text-green-800">
                faith, trust, and shared values
              </strong>
              . In a world where meaningful, halal connections are increasingly
              difficult to find, NikahWed provides a safe, respectful, and
              spiritually aligned environment for those seeking a partner.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              NikahWed was not built as just another matchmaking site — it was
              born from a vision to create a{" "}
              <strong className="text-green-800">
                trustworthy and dignified space
              </strong>{" "}
              for Muslims committed to building a future together. Every detail
              of our platform reflects our intention to support serious seekers
              who value Deen, family, and compatibility.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              We’ve combined{" "}
              <strong className="text-green-800">modern technology</strong> with
              the timeless guidance of our Islamic traditions to make your
              journey toward Nikah both accessible and spiritually fulfilling.
              Every profile is verified, every match is intentional, and every
              connection is made with the hope of forming a bond filled with{" "}
              <strong className="text-green-800">
                sakinah, love, and mercy
              </strong>
              .
            </p>
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2 w-full">
            <img
              className="w-full rounded-lg shadow-xl"
              src={assets.hero1}
              alt="Couple in a wedding"
            />
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-16 px-4 py-6 bg-green-100 rounded-lg shadow-lg">
          <blockquote className="text-xl text-center font-semibold text-green-700 italic backdrop-blur-3xl">
            "And among His signs is that He created for you mates from among
            yourselves, that you may dwell in tranquility with them, and He has
            put love and mercy between your hearts."
            <br />
            <span className="block mt-4 text-sm text-green-600">
              — Holy Quran, Surah Ar-Rum 30:21
            </span>
          </blockquote>
        </div>
        <div className="bg-green-600 text-white rounded-2xl shadow-lg px-6 py-10 md:px-10 md:py-14 relative overflow-hidden m-14">
          {/* Decorative Top Left Circle */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-green-500 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>

          {/* Decorative Top Right Circle */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-green-500 rounded-full opacity-20 translate-x-1/2 -translate-y-1/2"></div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 relative z-10">
            {/* Left Side Content */}
            <div className="space-y-8 max-w-xl">
              <h2 className="text-xl md:text-2xl font-bold">Our Core Values</h2>

              {/* Islamic Foundation */}
              <div className="flex items-start gap-4">
                <span className="w-3 h-3 mt-1.5 bg-white rounded-full"></span>
                <div>
                  <h3 className="font-semibold text-lg">Islamic Foundation</h3>
                  <p className="text-sm md:text-base text-white/90">
                    Every feature built on authentic Islamic principles
                  </p>
                </div>
              </div>

              {/* Community First */}
              <div className="flex items-start gap-4">
                <span className="w-3 h-3 mt-1.5 bg-white rounded-full"></span>
                <div>
                  <h3 className="font-semibold text-lg">Community First</h3>
                  <p className="text-sm md:text-base text-white/90">
                    Prioritizing the needs of the Muslim community
                  </p>
                </div>
              </div>

              {/* Trust & Safety */}
              <div className="flex items-start gap-4">
                <span className="w-3 h-3 mt-1.5 bg-white rounded-full"></span>
                <div>
                  <h3 className="font-semibold text-lg">Trust & Safety</h3>
                  <p className="text-sm md:text-base text-white/90">
                    Maintaining the highest standards of security
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: Circle with Heart & Quote */}
            <div className="flex flex-col items-center justify-center text-center max-w-xs mx-auto">
              <div className="w-28 h-28 md:w-36 md:h-36 bg-white rounded-full flex items-center justify-center shadow-md">
                <FaHeart className="text-green-600 text-5xl md:text-6xl" />
              </div>
              <p className="mt-4 italic text-sm md:text-base text-white/90">
                "Serving the Muslim community with love, respect, and Islamic
                values"
              </p>
            </div>
          </div>
        </div>
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 mb-10">
              Get answers to common questions about our Islamic matrimonial
              platform
            </p>

            {/* FAQ List */}
            <div className="space-y-4 text-left">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center px-6 py-4 text-gray-800 font-medium focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <FaChevronDown
                      className={`transform transition-transform duration-300 ${
                        openIndex === index
                          ? "rotate-180 text-green-600"
                          : "text-gray-400"
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-4 text-gray-600">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Support Button */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-3">Still have questions?</p>
              <Link
                to="/contact"
                className="bg-green-500 mx-auto text-white text-base px-3 py-2 w-3/4 lg:w-1/4 rounded-full font-semibold  hover:scale-95 mt-7  flex items-center justify-center gap-5 hover:flex-row-reverse transition-all duration-500"
              >
                <span>Contact Us</span>
                <span className="w-12 h-12 rounded-full bg-white transition"></span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
