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
      className="bg-white py-12 opacity-[0.96] px-8 md:px-16 lg:px-24 "
      id="services"
    >
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-4xl font-bold text-[#9eaf2b] font-[Lora]">
            Our Services
          </h2>
          <h2 className="text-xl font-bold mt-4 ">
            Visa Services Offered by{" "}
            <span className="text-blue-500">iGlobal Visa Consultancy</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ServiceCard
              icon={faBriefcase}
              title="Work Visa"
              description="Work visas allow individuals to reside and work in another country for the duration of their job, according to specific country requirements."
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
              description="Study visas permit individuals to live and study abroad at recognized educational institutions for the duration of their academic program."
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
              description="Tourist visas grant temporary access for leisure travel, tourism, or short-term family visits in a foreign country."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ServiceCard
              icon={faUserFriends}
              title="Family Visa"
              description="Family visas allow relatives of individuals legally residing abroad to join them and live together in the host country."
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
              description="Diplomatic visas are issued to government officials and diplomats for international travel related to official business."
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
              description="Receive expert advice on immigration processes, legal requirements, and documentation from our professional consultants."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
