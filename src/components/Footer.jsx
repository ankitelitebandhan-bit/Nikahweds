import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#014e26] text-white py-12 px-6 md:px-12 lg:px-20">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {/* Brand + About */}
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            NikahWed.com
          </h1>

          {/* Updated Muslim-Specific Text */}
          <p className="text-base leading-relaxed italic text-green-100">
            At <span className="font-semibold not-italic">NikahWed</span>,
            matchmaking is more than a service — it's our <em>amanah</em>.
            Rooted in Islamic values, we strive to unite Muslim hearts in sacred
            companionship, celebrating every nikah we help bring to life.
          </p>

          <p className="text-base leading-relaxed text-green-100">
            With a personalized and faith-centered approach, we make your search
            for a righteous partner easier and more meaningful. Our foundation
            is built on trust, modesty, and a beautiful balance of Islamic
            tradition and modern understanding.
          </p>

          <p className="text-base italic font-medium text-green-100">
            Your happiness is our true success.
          </p>

          {/* Contact Section */}
          <div className="mt-8 bg-green-800 bg-opacity-30 p-4 rounded-md space-y-3">
            <p className="italic font-medium text-green-100">Reach Out to Us</p>
            <p className="flex items-center space-x-2 text-green-100 text-sm md:text-base">
              <FaEnvelope />
              <a
                href="mailto:Care@Nikahwed.com"
                className="underline hover:text-green-300"
              >
                Care@Nikahwed.com
              </a>
            </p>
            <p className="flex items-center space-x-2 text-green-100 text-sm md:text-base">
              <FaPhone />
              <span>+91 8800541031</span>
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-green-100">
            Quick Links
          </h2>
          <ul className="space-y-2 text-base">
            <li>
              <Link to="/" className="hover:underline text-green-100">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline text-green-100">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline text-green-100">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:underline text-green-100">
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="hover:underline text-green-100"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:underline text-green-100">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-green-100">
            Our Social Links
          </h2>
          <div className="flex gap-5 text-2xl">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-gray-300 text-green-100"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-gray-300 text-green-100"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-gray-300 text-green-100"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-12 border-t border-green-700 pt-4 text-center text-sm text-gray-300">
        NikahWed.Com ©2025. All Rights Reserved
      </div>
    </footer>
  );
}
