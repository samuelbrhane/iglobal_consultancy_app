"use client";

import React from "react";
import { motion } from "framer-motion";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex lg:justify-center"
    >
      <div>
        <h3 className="relative text-2xl font-bold pb-1 inline-block text-[#9eaf2b] font-[Lora]">
          Contact Information
        </h3>
        <div className="h-1 w-12 rounded bg-blue-500 mb-4"></div>
        <p className="mb-3">
          <FontAwesomeIcon icon={faPhone} className="mr-2" /> ETH: +251 91289
          1441
        </p>
        <p className="mb-3 flex items-start">
          <FontAwesomeIcon icon={faPhone} className="mr-2 mt-1" />
          <span className="flex gap-2">
            <span>Italy: </span>
            <span>
              +39 3898 707547 <br />
              +39 3513 873276
            </span>
          </span>
          <br />
        </p>
        <p className="mb-3">
          <FontAwesomeIcon icon={faPhone} className="mr-2" /> UK: +44 7775
          729093
        </p>
        <p className="mb-3">
          <FontAwesomeIcon icon={faPhone} className="mr-2" /> Germany: +49 123
          456 7890
        </p>

        <p className="mb-3">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />{" "}
          info@iglobalvisa.com
        </p>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
