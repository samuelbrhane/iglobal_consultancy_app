"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

type FunFactProps = {
  icon: IconDefinition;
  value: number;
  label: string;
};

const FunFact: React.FC<FunFactProps> = ({ icon, value, label }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    let start = 0;
    if (inView) {
      setCount(0);

      const increment = value / 200;
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 10);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <motion.div
      className="text-center p-6 bg-white bg-opacity-85 rounded-lg shadow-lg"
      ref={ref}
    >
      <div className="mb-4">
        <FontAwesomeIcon icon={icon} className="text-4xl text-blue-600" />
      </div>
      <div className="text-3xl font-bold text-[#9eaf2b]">
        {count.toLocaleString()}
        <span className="text-xl">+</span>
      </div>
      <h3 className="text-lg font-semibold mt-2 ">{label}</h3>
    </motion.div>
  );
};

export default FunFact;
