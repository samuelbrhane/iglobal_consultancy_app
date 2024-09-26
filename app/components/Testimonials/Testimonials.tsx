"use client";

import React, { useState, useEffect } from "react";
import { testimonials } from "../../../utils/testimonials";
import TestimonialCard from "./TestimonialCard";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Set up the interval to update the testimonial index
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // 5 seconds interval

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []); // This effect should run only once when the component mounts

  // Set up screen size listener to adjust animations
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint
    };

    handleResize(); // Check screen size on mount
    window.addEventListener("resize", handleResize); // Listen for resize events

    return () => window.removeEventListener("resize", handleResize); // Clean up event listener on unmount
  }, []); // This effect should run only once when the component mounts

  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-2 py-16 px-8 md:px-16 lg:px-24 justify-center items-center"
      id="testimonials"
    >
      {/* Left Side - Testimonial Card */}
      <div className="w-full z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: isLargeScreen ? -50 : 0 }}
            animate={{ opacity: 1, x: isLargeScreen ? 50 : 0 }}
            exit={{ opacity: 0, x: isLargeScreen ? 20 : 50 }}
            transition={{ duration: 0.8 }}
            className="h-[430px] md:h-[400px]"
          >
            <TestimonialCard testimonial={testimonials[currentIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right Side - Full-Length Image */}
      <div className="relative w-full h-full hidden lg:block">
        <Image
          src="/new4.webp"
          alt="Testimonial Background"
          width={550}
          height={400}
          objectFit="cover"
          className="h-[90vh] w-full -mr-20"
        />
      </div>
    </section>
  );
};

export default TestimonialSection;
