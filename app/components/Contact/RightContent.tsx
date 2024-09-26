"use client";

import React from "react";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

const RightContent: React.FC = () => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-center text-black">
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl lg:text-4xl font-bold text-[#9eaf2b] font-[Lora]">
          Contact Us
        </h2>
        <p className="text-lg mt-4">
          Send us your request by filling the following Form and we will get
          back to you shortly.
        </p>
      </motion.div>
      <ContactForm />
    </div>
  );
};

export default RightContent;
