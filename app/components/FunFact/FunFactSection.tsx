"use client";
import React from "react";
import {
  faUser,
  faGlobe,
  faUsers,
  faUniversity,
  faSmile,
  faMapMarkedAlt,
  faGraduationCap,
  faSchool,
  faChild,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import FunFact from "./FunFact";

const FunFactSection: React.FC = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover py-48"
      style={{ backgroundImage: `url('/visa2.webp')` }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>{" "}
      <div className="relative container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FunFact icon={faSmile} value={1200} label="Satisfied Clients" />{" "}
        <FunFact icon={faMapMarkedAlt} value={70} label="Countries" />{" "}
        <FunFact icon={faBookOpen} value={750} label="Happy Students" />{" "}
        <FunFact icon={faSchool} value={140} label="Universities" />{" "}
      </div>
    </section>
  );
};

export default FunFactSection;
