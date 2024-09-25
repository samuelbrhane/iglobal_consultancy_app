"use client";
import React from "react";
import { StepCard } from ".";
import {
  faFile,
  faCreditCard,
  faFileAlt,
  faClipboard,
  faEdit,
  faFolderOpen,
  faMoneyCheckAlt,
  faPassport,
} from "@fortawesome/free-solid-svg-icons";

const HowWeWork: React.FC = () => {
  return (
    <section className="px-4 md:px-6 lg:px-12 py-8 md:py-12 lg:py-16 opacity-[0.96] bg-white">
      <div className="container mx-auto grid lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#9eaf2b] font-[Lora]">
            How We Work
          </h2>
          <h3 className="text-2xl font-semibold mb-4 lg:leading-[60px]">
            Simple Steps to Apply for Your Visa Online
          </h3>
          <p className="text-gray-700 mb-4">
            Our process is straightforward and user-friendly. From the initial
            consultation to document submission, we guide you through every step
            with ease and clarity.
          </p>
          <p className="text-gray-700 mb-8">
            You can start by filling out your visa application online. Our team
            will review and assist in ensuring everything is in order, providing
            expert advice to maximize your success.
          </p>
          <a href="https://apply.iglobalvisa.com/" rel="noopener noreferrer">
            <button className="bg-blue-500 text-white px-6 py-3 font-semibold rounded-md uppercase">
              Apply Now
            </button>
          </a>
        </div>

        <div className="space-y-8">
          <StepCard
            icon={faEdit}
            title="Fill Out the Application Form"
            description="Complete the online form with your personal and travel details to begin the visa process."
            delay={0.1}
          />
          <StepCard
            icon={faFolderOpen}
            title="Submit Required Documents"
            description="Upload all necessary documents, including identification, travel plans, and any additional information."
            delay={0.2}
          />
          <StepCard
            icon={faMoneyCheckAlt}
            title="Make Payment for Your Application"
            description="Proceed with the payment to complete your visa application process."
            delay={0.3}
          />
          <StepCard
            icon={faPassport}
            title="Receive Your Visa"
            description="Once approved, receive your visa and get ready to travel to your destination!"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
