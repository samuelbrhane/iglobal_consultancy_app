"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { links } from "../../../utils/links";
import { FaBars, FaTimes } from "react-icons/fa";

interface LinkType {
  id: number;
  name: string;
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  // Function to handle smooth scrolling
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const target = document.getElementById(id); // Using id for targeting sections
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false); // Close the sidebar on mobile after clicking a link
  };

  return (
    <section className="z-50">
      <header className="flex w-full items-center justify-between bg-[#ffffff] py-[14px] shadow px-8 md:px-16 lg:px-24">
        <div>
          <Image
            src="/main_logo.png"
            alt="logo"
            width={100}
            height={100}
            className="w-24 h-[60px] lg:w-28 lg:h-[90px]"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(true)} className="text-3xl">
            <FaBars />
          </button>
        </div>

        {/* Large Screen Links */}
        <div className="hidden lg:flex items-center justify-center gap-12">
          {links.map((link: LinkType) => (
            <a
              href={`#${link.name.toLowerCase()}`} // Linking to sections by id
              key={link.id}
              onClick={(e) => handleLinkClick(e, link.name.toLowerCase())}
              className="font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300 text-md font-[Lora]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Apply Now Button for Large Screen */}
        <div className="hidden lg:block py-2 px-4 text-white">
          <a href="https://apply.iglobalvisa.com/" rel="noopener noreferrer">
            <button className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300 font-[Roboto]">
              APPLY NOW
            </button>
          </a>
        </div>
      </header>

      {/* Sidebar for Small Screen */}
      <div
        className={`fixed z-10 top-0 right-0 h-full w-52 flex-col items-center bg-[#08030a] transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="text-3xl text-white mt-4 mr-4 ml-2 self-start"
        >
          <FaTimes />
        </button>

        <div className="pt-2">
          {links.map((link: LinkType) => (
            <a
              href={`#${link.name.toLowerCase()}`}
              key={link.id}
              onClick={(e) => handleLinkClick(e, link.name.toLowerCase())}
              className="block py-2 px-4 text-white hover:bg-gray-200 hover:text-gray-900 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <div className="block py-2 px-4 text-white hover:bg-gray-200 mt-2">
            <a href="https://apply.iglobalvisa.com/" rel="noopener noreferrer">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 font-[Roboto]">
                APPLY NOW
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
