"use client";
import React from "react";
import { motion } from "framer-motion";

const Success: React.FC = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover py-40 px-8 md:px-16 lg:px-24"
      style={{ backgroundImage: `url('/visa2.jpg')` }}
    >
      <div className="absolute inset-0 bg-black opacity-50 "></div>
      <div className="relative container mx-auto px-4 gap-8 text-white">
        <div className="lg:w-[60%]">
          {/* Animate the first headline */}
          <motion.h1
            className="text-3xl mb-4 font-bold text-[#9eaf2b] font-[Lora]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            Exceptional Service!
          </motion.h1>

          {/* Animate the second headline */}
          <motion.h1
            className="text-xl lg:text-[45px] mb-4 border-l-[10px] border-[#9eaf2b] pl-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
          >
            We Provide Outstanding Support{" "}
            <span className="block font-semibold py-3">
              With Competitive Rates!
            </span>
          </motion.h1>

          {/* Animate the paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
          >
            Turn your dreams into reality with our expert guidance. Whether
            you're aiming to study abroad or need assistance with immigration,
            we provide comprehensive support for your global aspirations.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Success;
