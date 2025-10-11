import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [responseMessage, setResponseMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    LookingFor: "",
    country: "",
    keyword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2mlv9ve", // EmailJS service ID
        "template_ogep3i2", // EmailJS template ID
        e.target,
        "TzeqKMGKnUOT1YOGf" // EmailJS public key
      )
      .then(
        (result) => {
          setResponseMessage("Thank you for your submission!");
          setFormData({
            name: "",
            phone: "",
            email: "",
            LookingFor: "",
            country: "",
            keyword: "",
          });
        },
        (error) => {
          setResponseMessage("Error submitting form. Please try again.");
        }
      );
  };

  return (
    <div className="bg-gradient-to-b from-yellow-50 to-green-50 py-14 px-4 sm:px-6 lg:px-8  flex items-center justify-center flex-col mt-0">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center text-green-800 mb-4 font-extrabold italic">
        Get Started Today
      </h2>
      <p className="text-center text-green-700 p-1 text-base/loose lg:text-lg mb-10 lg:w-1/2">
        Fill out the form below and our team will get in touch with you to help
        you begin your journey towards finding your perfect life partner.
      </p>
      <div className="bg-white rounded-lg shadow-md w-full max-w-5xl p-10 ">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-green-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                placeholder="Enter your full name"
                className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:ring-green-500 focus:border-green-500 p-2 border-1  focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-green-700">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
                placeholder="Enter your phone number"
                className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:ring-green-500 focus:border-green-500 p-2 border-1 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-green-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                placeholder="Enter your email"
                className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:ring-green-500 focus:border-green-500 p-2 border-1 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-green-700">
                Country
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
                required
                className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:ring-green-500 focus:border-green-500 p-2 border-1 focus:outline-none"
              >
                <option value="" disabled>
                  Select your country
                </option>
                <option value="India">India</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran">Iran</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Qatar">Qatar</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Guinea">Guinea</option>
                <option value="Morocco">Morocco</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-green-700">
              Looking For
            </label>
            <select
              name="LookingFor"
              value={formData.LookingFor}
              onChange={(e) =>
                setFormData({ ...formData, LookingFor: e.target.value })
              }
              required
              className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:ring-green-500 focus:border-green-500 p-2 border-1 focus:outline-none  "
            >
              <option value="">Select preference</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-green-700">
              Message
            </label>
            <textarea
              name="keyword"
              value={formData.keyword}
              onChange={(e) =>
                setFormData({ ...formData, keyword: e.target.value })
              }
              placeholder="Tell us about yourself and what you're looking for..."
              rows="4"
              className="mt-1 block w-full rounded-md border-green-300 shadow-sm focus:ring-green-500 focus:border-green-500 p-2 border-1 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
          >
            Submit Application
          </button>

          {responseMessage && (
            <p className="text-center text-sm mt-4 text-gray-700">
              {responseMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
