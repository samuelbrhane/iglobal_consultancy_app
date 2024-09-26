"use client";
import React from "react";
import { delay, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const ChooseUs: React.FC = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  return (
    <section className="px-8 md:px-16 lg:px-24 opacity-95 pb-12">
      <div className="container mx-auto p-8 shadow-custom lg:p-20 bg-white -mt-16 z-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            ref={ref}
            className="space-y-6"
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
          >
            <h2 className="text-3xl font-bold text-[#9eaf2b] font-[Lora]">
              Why You Should Choose Us?
            </h2>
            <h3 className="text-2xl font-semibold">Many Benefits</h3>
            <p>
              At iGlobal Visa Consultancy, we provide top-quality services
              tailored to meet your needs. Whether it's Educational, Tourism, or
              Family Visa applications, we ensure a smooth and professional
              experience.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-[#9eaf2b]"
                />
                <span>Fast Visa Processing</span>
              </li>
              <li className="flex items-center space-x-2">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-[#9eaf2b]"
                />
                <span>24 Hours Online Response</span>
              </li>
              <li className="flex items-center space-x-2">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-[#9eaf2b]"
                />
                <span>Money back Grantee</span>
              </li>
              <li className="flex items-center space-x-2">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-[#9eaf2b]"
                />
                <span>High success rate </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="w-full h-full"
            ref={ref}
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
          >
            <Image
              src="/visa.jpg"
              alt="Man with airplane tickets and passport"
              width={1920}
              height={900}
              className="rounded-lg object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
