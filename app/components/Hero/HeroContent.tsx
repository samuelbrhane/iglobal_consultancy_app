"use client";
import React from "react";
import HeroCard from "./HeroCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  faHandsHelping,
  faGraduationCap,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

const HeroContent: React.FC = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, staggerChildren: 0.3 },
    },
  };

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 mt-4 md:-mt-12 px-4 md:px-6 lg:px-12"
      ref={ref}
    >
      {[
        {
          icon: faHandsHelping,
          title: "Request Our Services",
          subtitle:
            "Easily complete your visa application service request online.",
        },
        {
          icon: faGraduationCap,
          title: "Education Applications",
          subtitle:
            "We assist you in applying to top colleges and universities globally.",
        },
        {
          icon: faUserTie,
          title: "Immigration Consulting",
          subtitle:
            "Receive expert immigration advice from our experienced consultants.",
        },
      ].map((card, index) => (
        <motion.div
          key={index}
          initial="hidden"
          animate={controls}
          variants={cardVariants}
        >
          <HeroCard
            icon={card.icon}
            title={card.title}
            subtitle={card.subtitle}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default HeroContent;
