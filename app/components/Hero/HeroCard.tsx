import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type HeroCardProps = {
  title: string;
  subtitle: string;
  icon: IconDefinition;
};

const HeroCard: React.FC<HeroCardProps> = ({ title, subtitle, icon }) => {
  return (
    <div className="flex justify-center h-full">
      <div className="bg-white shadow px-6 py-8 text-center border-l-4 border-[#9eaf2b] rounded-md">
        <div className="mb-4 text-blue-500 text-center flex justify-center">
          <FontAwesomeIcon icon={icon} className="w-20 h-20" />
        </div>
        <h1 className="text-xl font-bold mb-2 text-[#9eaf2b]">{title}</h1>
        <p className="text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
};

export default HeroCard;
