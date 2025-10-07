import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const placeholderImg = "https://i.pravatar.cc/150?img=";

const testimonials = [
  {
    name: "Ahmed & Fatima",
    location: "London, UK",
    review:
      "NikahWed made our journey to find each other so smooth and blessed. The platform’s commitment to Islamic values while providing modern tools was exactly what we needed.",
    badge: "Verified",
    badgeColor: "green",
    duration: "6 months",
    married: "March 2024",
    image: `${placeholderImg}1`,
    rating: 5,
  },
  {
    name: "Omar & Aisha",
    location: "Toronto, Canada",
    review:
      "Alhamdulillah, we found each other through NikahWed. The family involvement features made it comfortable for both our families.",
    badge: "Family Verified",
    badgeColor: "teal",
    duration: "4 months",
    married: "January 2024",
    image: `${placeholderImg}2`,
    rating: 5,
  },
  {
    name: "Yusuf & Khadija",
    location: "Birmingham, UK",
    review:
      "The verification process gave us confidence in every connection. Compatibility matching helped us focus on the right profiles from the start.",
    badge: "Verified",
    badgeColor: "green",
    duration: "8 months",
    married: "September 2023",
    image: `${placeholderImg}3`,
    rating: 5,
  },
  {
    name: "Ibrahim & Zahra",
    location: "Manchester, UK",
    review:
      "From our first conversation to our nikah ceremony, NikahWed was there every step.",
    badge: "Premium Member",
    badgeColor: "emerald",
    duration: "5 months",
    married: "November 2023",
    image: `${placeholderImg}4`,
    rating: 5,
  },
  {
    name: "Hassan & Mariam",
    location: "Sydney, Australia",
    review:
      "NikahWed’s international reach and cultural sensitivity made our long-distance relationship flourish until we could be together.",
    badge: "International",
    badgeColor: "cyan",
    duration: "7 months",
    married: "December 2023",
    image: `${placeholderImg}5`,
    rating: 5,
  },
  {
    name: "Ali & Safiya",
    location: "Dubai, UAE",
    review:
      "The detailed profiles and compatibility matching helped us understand each other’s values before meeting.",
    badge: "Verified",
    badgeColor: "green",
    duration: "3 months",
    married: "February 2024",
    image: `${placeholderImg}6`,
    rating: 5,
  },
  {
    name: "Sami & Noor",
    location: "Chicago, USA",
    review:
      "NikahWed respected our Islamic values while providing us a secure and professional matchmaking experience.",
    badge: "Verified",
    badgeColor: "green",
    duration: "9 months",
    married: "August 2023",
    image: `${placeholderImg}7`,
    rating: 5,
  },
  {
    name: "Bilal & Amina",
    location: "Paris, France",
    review:
      "Finding someone who shares your deen and values was made possible thanks to NikahWed.",
    badge: "Verified",
    badgeColor: "green",
    duration: "6 months",
    married: "June 2023",
    image: `${placeholderImg}8`,
    rating: 5,
  },
  {
    name: "Zayd & Sumayya",
    location: "Istanbul, Türkiye",
    review:
      "May Allah bless NikahWed for helping us meet. Everything was done in a halal and respectful way.",
    badge: "Verified",
    badgeColor: "green",
    duration: "4 months",
    married: "May 2024",
    image: `${placeholderImg}9`,
    rating: 5,
  },
  {
    name: "Ismail & Layla",
    location: "Kuala Lumpur, Malaysia",
    review:
      "From connection to nikah, NikahWed felt like a guided journey based on faith and values.",
    badge: "Verified",
    badgeColor: "green",
    duration: "6 months",
    married: "October 2023",
    image: `${placeholderImg}10`,
    rating: 5,
  },
  {
    name: "Usman & Huda",
    location: "Jeddah, Saudi Arabia",
    review:
      "NikahWed maintained modesty and Islamic etiquette throughout the process. We’re so grateful.",
    badge: "Verified",
    badgeColor: "green",
    duration: "5 months",
    married: "July 2023",
    image: `${placeholderImg}11`,
    rating: 5,
  },
  {
    name: "Ayaan & Hana",
    location: "Berlin, Germany",
    review:
      "Cross-border love made halal — thank you NikahWed for making it happen in such a respectful and sincere way.",
    badge: "International",
    badgeColor: "cyan",
    duration: "8 months",
    married: "April 2024",
    image: `${placeholderImg}12`,
    rating: 5,
  },
];

const TestimonialsPage = () => {
  return (
    <section className="bg-[#fdfcf7] py-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-green-800 text-center mb-4">
          Nikah Success Stories 💚
        </h2>

        <p className="max-w-3xl mx-auto text-center text-green-700 mb-12 text-lg leading-relaxed px-4">
          At NikahWed, we believe every union blessed by Allah is a sacred
          journey. These success stories reflect the beautiful connections built
          on faith, respect, and shared values. May these stories inspire you on
          your own path to finding love and companionship.
        </p>

        {/* Masonry Grid */}
        <div
          className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8
          [&>div]:break-inside-avoid"
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`bg-white border border-gray-100 rounded-lg p-6 shadow-md
              hover:shadow-xl transition duration-300
              flex flex-col
              `}
              style={{
                minHeight:
                  index % 3 === 0
                    ? "360px"
                    : index % 3 === 1
                    ? "320px"
                    : "280px",
                // Different heights to add visual variation
              }}
            >
              <FaQuoteLeft className="text-green-400 text-2xl mb-4 flex-shrink-0" />
              <p className="text-gray-700 italic mb-4 text-sm leading-relaxed flex-grow">
                {item.review}
              </p>

              <div className="flex mb-4 text-yellow-500">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <div className="flex items-center gap-4 mb-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover border border-green-300"
                />
                <div>
                  <h4 className="font-semibold text-green-700 text-sm">
                    {item.name}
                  </h4>
                  <p className="text-gray-500 text-xs">{item.location}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 mb-2 text-xs">
                <span
                  className={`bg-${item.badgeColor}-100 text-${item.badgeColor}-700 px-2 py-1 rounded-full font-medium`}
                >
                  {item.badge}
                </span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full font-medium">
                  {item.duration}
                </span>
              </div>

              <p className="text-green-600 text-sm font-medium mt-auto">
                Married: {item.married}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPage;
