// ServicesSection.jsx
import React from "react";
import { FaHome, FaHandshake, FaClock, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion"; // Framer Motion import

const servicesData = [
  {
    id: 1,
    title: "Affordable Property Taxes",
    description:
      "We help you find a new home by offering a smart real estate experience",
    icon: <FaHome size={35} />,
    bgColor: "bg-indigo-600",
    textColor: "text-white",
  },
  {
    id: 2,
    title: "Guaranteed Quality Homes",
    description:
      "We help you find a new home by offering a smart real estate experience",
    icon: <FaHandshake size={35} />,
    bgColor: "bg-gray-100",
    textColor: "text-blue-950",
  },
  {
    id: 3,
    title: "Fast and Easy Process",
    description:
      "We help you find a new home by offering a smart real estate experience",
    icon: <FaClock size={35} />,
    bgColor: "bg-gray-100",
    textColor: "text-blue-950",
  },
  {
    id: 4,
    title: "Property Insurance",
    description:
      "We help you find a new home by offering a smart real estate experience",
    icon: <FaShieldAlt size={35} />,
    bgColor: "bg-gray-100",
    textColor: "text-blue-950",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-blue-950 mb-2">Our Services</h2>
        <p className="text-blue-950 mb-10 font-semibold">
          Enhance your property listings and videos with accurate and engaging
          subtitles.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: 100 }} // Right se start
              whileInView={{ opacity: 1, x: 0 }} // Center par slide
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 14,
                delay: index * 0.2, // stagger effect
              }}
              viewport={{ once: true, amount: 0.3 }}
              className={`${service.id === 1
                ? "bg-orange-600 text-white"
                : `${service.bgColor} ${service.textColor}`
                } p-6 border rounded-lg shadow-md flex items-start gap-4 w-full sm:w-96 hover:scale-105 transition-transform duration-300`}
            >
              <div className="mt-1 text-orange-600">{service.icon}</div>
              <div className="text-left">
                <h3 className="font-semibold text-lg mb-1">{service.title}</h3>
                <p className="text-sm font-bold">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.button
          className="relative flex items-center mx-auto gap-2 px-6 py-3 mt-5 rounded-xl font-semibold bg-orange-600 text-white overflow-hidden group"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Hover Background */}
          <span className="absolute inset-0 bg-blue-950 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
          {/* Button Content */}
          <span className="relative z-10  group-hover:text-white transition-colors duration-300 flex items-center gap-2">
            Explore →
          </span>

        </motion.button>

        <button >




        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
