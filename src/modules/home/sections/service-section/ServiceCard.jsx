// File: src/components/ServicesSection/ServiceCard.jsx
import React from "react";
import "./Services.css";

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card-3d service-card bg-white p-10 w-80 rounded-lg border border-gray-100">
      <div className="mb-4">
        <img
          src={service.img}
          alt={service.title}
          className="mx-auto w-30 h-30"
        />
      </div>

      <h1 className="text-3xl font-bold mb-2">
        {service.title}
      </h1>

      <p className="text-gray-600 mb-4 font-medium">
        {service.description}
      </p>

      <span className={`font-medium ${service.linkColor}`}>
        {service.link}
      </span>
    </div>
  );
};

export default ServiceCard;
