// src/components/Services.jsx
import {
  FaSearch,
  FaShieldAlt,
  FaComments,
  FaUsers,
  FaCrown,
  FaGem,
} from "react-icons/fa";

const services = [
  {
    icon: <FaSearch />,
    title: "Smart Matching",
    description:
      "Our advanced algorithm finds compatible matches based on your preferences, values, and Islamic principles.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Verified Profiles",
    description:
      "All profiles are thoroughly verified to ensure authenticity and safety for our community members.",
  },
  {
    icon: <FaComments />,
    title: "Secure Communication",
    description:
      "Connect with potential matches through our secure messaging system with privacy controls.",
  },
  {
    icon: <FaUsers />,
    title: "Family Involvement",
    description:
      "Options for family members to be involved in the process, respecting traditional Islamic values.",
  },
  {
    icon: <FaCrown />,
    title: "Premium Matching",
    description:
      "Personalized matchmaking services with dedicated support for serious marriage seekers.",
  },
  {
    icon: <FaGem />,
    title: "Marriage Guidance",
    description:
      "Access to Islamic marriage counselors and guidance throughout your journey.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Services Header */}
        <h2 className="text-4xl font-extrabold text-center text-green-700 mb-8">
          Our Services
        </h2>
        <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
          Comprehensive matrimonial services designed to help you find your
          ideal life partner while maintaining Islamic values and traditions.
        </p>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:translate-y-2 hover:scale-105"
            >
              <div className="text-5xl text-green-500 mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-lg">{service.description}</p>
            </div>
          ))}
        </div>
        {/* Quote Section */}
        <div className="text-center mb-12">
          <p className="text-xl text-green-700 font-semibold italic lg:mt-20 mt-14">
            "And among His signs is that He created for you from yourselves
            mates that you may find tranquility in them; and He placed between
            you affection and mercy. Indeed, in that are signs for a people who
            give thought." — Surah Ar-Rum [30:21]
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
