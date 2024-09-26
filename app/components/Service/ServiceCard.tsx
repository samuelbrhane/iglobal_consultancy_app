import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type ServiceCardProps = {
  icon: IconDefinition;
  title: string;
  description: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="text-center p-6 md:p-6 lg:p-8 border rounded-lg shadow-lg h-full">
      <div className="mb-4">
        <FontAwesomeIcon icon={icon} className="text-4xl text-blue-500" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-[#9eaf2b]">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
    </div>
  );
};

export default ServiceCard;
