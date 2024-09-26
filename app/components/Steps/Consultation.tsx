"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const Consultation: React.FC = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between py-16 px-8 md:px-16 lg:px-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 ">
        <div className="absolute z-30 bg-black opacity-70 inset-0"></div>
      </div>

      <div className="relative z-10 w-full lg:w-1/2 flex justify-center md:mr-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          <Image
            src="/consultation.avif"
            alt="Consultation"
            width={800}
            height={534}
            className="rounded-lg object-cover"
          />
        </motion.div>
      </div>

      <div className="relative z-10 w-full lg:w-1/2 mt-8 lg:mt-0 text-white flex flex-col items-center lg:items-start text-center lg:text-left">
        <motion.h3
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Expert Guidance You Can Trust
        </motion.h3>
        <motion.h2
          className="text-4xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          FREE <span className="text-[#9eaf2b]">CONSULTATION</span>
        </motion.h2>
        <motion.p
          className="text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Start your journey today with a free consultation. Our expert team is
          ready to guide you through every step of the visa process, ensuring a
          smooth and stress-free experience.
        </motion.p>
      </div>
    </section>
  );
};

export default Consultation;
