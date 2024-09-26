"use client";
import React from "react";
import { motion } from "framer-motion";
import { CountryCard } from ".";

const FavoriteDestinations: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden bg-white opacity-90 px-8 md:px-16 lg:px-24"
      id="countries"
    >
      <div className="absolute inset-0 bg-white opacity-40"></div>
      <div className="relative container mx-auto">
        <div className="text-center mb-8">
          <h5 className="text-2xl lg:text-4xl font-bold text-[#9eaf2b] font-[Lora]">
            Favorite Destination
          </h5>
          <motion.h2
            className="text-xl font-bold mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            For The Immigration{" "}
            <span className="text-blue-500">Choose Your Country</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          <CountryCard
            imageSrc="/canada1.avif"
            countryName="Canada"
            description="Canada is famous for its inclusive society, top-ranked universities, and natural beauty."
            delay={0.1}
          />
          <CountryCard
            imageSrc="/australia.webp"
            countryName="Australia"
            description="Australia boasts world-leading education, a welcoming community, and stunning landscapes."
            delay={0.2}
          />
          <CountryCard
            imageSrc="/usa.jpg"
            countryName="United States"
            description="The United States offers cutting-edge innovation, diverse culture, and endless opportunities."
            delay={0.3}
          />
          <CountryCard
            imageSrc="/italy.jpg"
            countryName="Italy"
            description="Italy combines rich history, exceptional cuisine, and top-tier education in a beautiful setting."
            delay={0.4}
          />
          <CountryCard
            imageSrc="/germany.jpg"
            countryName="Germany"
            description="Germany is known for its world-class engineering, research opportunities, and vibrant cities."
            delay={0.1}
          />
          <CountryCard
            imageSrc="/uk1.jpg"
            countryName="United Kingdom"
            description="The UK is renowned for its prestigious institutions, global influence, and rich cultural heritage."
            delay={0.2}
          />
          <CountryCard
            imageSrc="/china.jpg"
            countryName="China"
            description="China's booming economy, unique traditions, and academic excellence make it a global leader."
            delay={0.3}
          />
          <CountryCard
            imageSrc="/russia.jpg"
            countryName="Russian Federation"
            description="Russia offers deep cultural roots, leading scientific research, and diverse educational programs."
            delay={0.4}
          />
        </div>

        <div className="text-center mt-8">
          <motion.h2
            className="text-lg font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Would you like to speak with one of our consultants?{" "}
            <span className="text-blue-500">Explore All Countries.</span>
          </motion.h2>
        </div>
      </div>
    </section>
  );
};

export default FavoriteDestinations;
