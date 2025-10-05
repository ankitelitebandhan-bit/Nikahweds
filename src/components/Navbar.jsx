import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHeart, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const linkStyle = ({ isActive }) =>
    `block px-4 py-2 transition-colors duration-300 text-sm font-medium ${
      isActive ? "text-green-700" : "text-gray-700 hover:text-green-600"
    }`;

  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center text-green-700 font-semibold text-lg"
        >
          <FaHeart className="mr-2" />
          Nikkah Weds
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center">
          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkStyle}>
            About Us
          </NavLink>
          <NavLink to="/testimonials" className={linkStyle}>
            Testimonials
          </NavLink>
          <NavLink to="/contact" className={linkStyle}>
            Contact
          </NavLink>
          <NavLink to="/login">
            <span className="ml-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition">
              Login
            </span>
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-green-700">
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 py-2 space-y-2">
          <NavLink to="/" className={linkStyle} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkStyle} onClick={closeMenu}>
            About Us
          </NavLink>
          <NavLink to="/testimonials" className={linkStyle} onClick={closeMenu}>
            Testimonials
          </NavLink>
          <NavLink to="/contact" className={linkStyle} onClick={closeMenu}>
            Contact
          </NavLink>
          <NavLink to="/login" onClick={closeMenu}>
            <span className="block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition w-fit">
              Login
            </span>
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
