import React from "react";
import { ContactInfo, FooterAbout, Gallery, QuickLinks } from "../Footer";

const Footer = () => {
  return (
    <div className="px-8 md:px-16 lg:px-24 bg-[#f8fbe9af]">
      <div
        className="relative bg-cover bg-center py-12 px-4 md:px-8"
        style={{ backgroundImage: `url('/2.jpg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-90"></div>
        <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
          <FooterAbout />
          <ContactInfo />
          <QuickLinks />
          <Gallery />
        </div>
        <div className="relative z-10 text-gray-300 mt-8 text-xs md:text-sm">
          <p>&copy; All rights reserved, iGlobal Visa Consultancy.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
