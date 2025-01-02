"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#8B0000]/50 bg-transparent backdrop-blur-md z-50 px-6 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between">
        {/* Logo Section */}
        <a
          href="#about-me"
          className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-red-500 via-orange-500 to-orange-500 bg-clip-text text-3xl md:text-4xl font-extrabold text-transparent text-center select-auto"
        >
          Keycean
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#about"
            className="text-gray-500 hover:text-[#FFFF] transition duration-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-500 hover:text-[#FFFF] transition duration-300"
          >
            Contact
          </a>
     <a
  href="/public/RESUME.pdf" // Update with your PDF file path
  target="_blank"
  rel="noopener noreferrer"
  className="py-1 px-6 rounded-lg bg-[#8B0000] text-white font-medium transition-transform duration-300 transform hover:scale-105"
  style={{
    boxShadow:
      "0px 2px 2px 2px rgb(139, 0, 0), 0px 0px 20px 4px rgb(255, 69, 0), 0px 0px 40px 6px rgb(255, 99, 71)",
  }}
>
  Résumé
</a>

        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden flex flex-col gap-1 items-center focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div
            className={`h-[3px] w-8 bg-gray-200 transition-transform duration-300 ${
              menuOpen ? "transform rotate-45 translate-y-[8px]" : ""
            }`}
          />
          <div
            className={`h-[3px] w-8 bg-gray-200 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <div
            className={`h-[3px] w-8 bg-gray-200 transition-transform duration-300 ${
              menuOpen ? "transform -rotate-45 -translate-y-[8px]" : ""
            }`}
          />
        </button>
      </div>  

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 bg-[#030014] shadow-lg shadow-[#2A0E61]/50 rounded-lg mt-4 py-4 px-6">
          <a
            href="#about"
            className="text-gray-200 hover:text-[#FFFF] transition duration-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-200 hover:text-[#FFFF] transition duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-200 hover:text-[#FFFF] transition duration-300"
          >
            Contact
          </a>
          <a href="#resume" className="py-2 px-6 rounded-lg bg-[#FFFF] text-white font-medium transition-transform duration-300 transform hover:scale-105"
           style={{ boxShadow: "0px 2px 2px 2px rgb(163,98,250), 0px 0px 20px 4px rgb(103,52,232), 0px 0px 40px 6px rgb(63,32,143)", }} > Résumé </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
