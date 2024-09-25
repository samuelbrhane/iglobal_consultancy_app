"use client";
import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import {
  faBriefcase,
  faGraduationCap,
  faUsers,
  faUserFriends,
  faSuitcaseRolling,
  faPlaneDeparture,
  faHandshake,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

const ServicesSection: React.FC = () => {
  return (
    <section
      className="bg-white py-12 opacity-[0.96] px-4 md:px-6 lg:px-12 "
      id="services"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-4xl font-bold text-[#9eaf2b] font-[Lora]">
            Our Services
          </h2>
          <h2 className="text-xl font-bold mt-4 ">
            Visa Services Offered by{" "}
            <span className="text-blue-500">iGlobal Visa Consultancy</span>
          </h2>
          {/* <p className="text-lg mt-2">
            Explore our range of visa services and choose the one that best
            suits your needs.
          </p> */}
        </div>

        {/* First row of cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ServiceCard
              icon={faBriefcase}
              title="Work Visa"
              description="For individuals seeking employment abroad, these visas allow you to work and reside in the host country for the duration of your job."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ServiceCard
              icon={faGraduationCap}
              title="Study Visa"
              description="If you want to study at an educational institution abroad, a study visa permits you to live and study in the host country throughout your course duration."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ServiceCard
              icon={faPlaneDeparture}
              title="Tourist Visa"
              description="Tourist visas allow for temporary travel to a foreign country for leisure, tourism, or family visits."
            />
          </motion.div>
        </div>

        {/* Second row of cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ServiceCard
              icon={faUserFriends}
              title="Family Visa"
              description="These visas are for family members of individuals legally residing abroad, allowing them to live together with their relative."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <ServiceCard
              icon={faHandshake}
              title="Diplomatic Visa"
              description="Issued to government officials and diplomats traveling on official business, providing privileges and immunities."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <ServiceCard
              icon={faComments}
              title="Immigration Consultation"
              description="iGlobal Visa offers professional advice for those looking to immigrate, guiding you through legalities and documentation."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
