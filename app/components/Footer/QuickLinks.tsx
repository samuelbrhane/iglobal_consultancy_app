"use client";

import React from "react";
import { motion } from "framer-motion";

const QuickLinks: React.FC = () => {
  // Function to handle smooth scrolling
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="flex lg:justify-center"
    >
      <div>
        <h3 className="relative text-2xl font-bold pb-1 inline-block text-[#9eaf2b] font-[Lora]">
          Quick Links
        </h3>
        <div className="h-1 w-12 rounded bg-blue-500 mb-4"></div>

        <ul className="space-y-4">
          <li>
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "home")}
              className="text-white hover:text-blue-600 transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => handleLinkClick(e, "about")}
              className="text-white hover:text-blue-600 transition-colors duration-300"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={(e) => handleLinkClick(e, "services")}
              className="text-white hover:text-blue-600 transition-colors duration-300"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#countries"
              onClick={(e) => handleLinkClick(e, "countries")}
              className="text-white hover:text-blue-600 transition-colors duration-300"
            >
              Countries
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              onClick={(e) => handleLinkClick(e, "testimonials")}
              className="text-white hover:text-blue-600 transition-colors duration-300"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "contact")}
              className="text-white hover:text-blue-600 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default QuickLinks;
