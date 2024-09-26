"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  faFacebookF,
  faTiktok,
  faTelegramPlane,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterAbout = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex lg:justify-center"
    >
      <div className="">
        <h3 className="relative text-2xl font-bold pb-1 inline-block text-[#9eaf2b] font-[Lora]">
          iGlobal Visa Consultancy
        </h3>
        <div className="h-1 w-12 rounded bg-blue-500 mb-4"></div>

        <p className="mb-4">
          IGlobal Visa Consultancy is a global firm specializing in expert visa
          and immigration guidance. We help individuals and businesses navigate
          international expansion smoothly and efficiently.
        </p>
        <div className="flex space-x-8">
          <a
            href="https://facebook.com/IGlobalVisa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9eaf2b] hover:text-blue-500"
          >
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </a>
          <a
            href="https://www.tiktok.com/@iglobalvisa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9eaf2b] hover:text-blue-500"
          >
            <FontAwesomeIcon icon={faTiktok} size="lg" />
          </a>
          <a
            href="https://chat.whatsapp.com/C5DM6uw0m29ABO3zAZjLjR"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9eaf2b] hover:text-blue-500"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
          </a>
          <a
            href="https://t.me/Iglobal_visa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9eaf2b] hover:text-blue-500"
          >
            <FontAwesomeIcon icon={faTelegramPlane} size="lg" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default FooterAbout;
