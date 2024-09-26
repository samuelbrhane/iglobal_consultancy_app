"use client";

import React from "react";
import RightContent from "./RightContent";
import LeftContent from "./LeftContent";

const ContactSection: React.FC = () => {
  return (
    <section
      className="relative text-white py-4 md:py-12 lg:py-16 px-8 md:px-16 lg:px-24 bg-white opacity-[0.96]"
      id="contact"
    >
      <div className="container mx-auto flex flex-col lg:flex-row h-full gap-12 ">
        <LeftContent />
        <RightContent />
      </div>
    </section>
  );
};

export default ContactSection;
