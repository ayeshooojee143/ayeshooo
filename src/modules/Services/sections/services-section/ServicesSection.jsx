import React from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaPercentage,
  FaUserTie,
  FaBuilding,
  FaDollarSign,
  FaFileContract,
} from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    title: "Property Management",
    desc: "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
    icon: <FaHome />,
    direction: "left",
  },
  {
    id: 2,
    title: "Mortgage Service",
    desc: "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
    icon: <FaPercentage />,
    direction: "bottom",
  },
  {
    id: 3,
    title: "Consulting Service",
    desc: "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
    icon: <FaUserTie />,
    direction: "right",
  },
  {
    id: 4,
    title: "Home Buying",
    desc: "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
    icon: <FaBuilding />,
    direction: "left",
  },
  {
    id: 5,
    title: "Home Selling",
    desc: "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
    icon: <FaDollarSign />,
    direction: "bottom",
  },
  {
    id: 6,
    title: "Escrow Services",
    desc: "over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
    icon: <FaFileContract />,
    direction: "right",
  },
];


const getAnimation = (direction) => {
  if (direction === "left") {
    return { hidden: { x: -80, opacity: 0 }, visible: { x: 0, opacity: 1 } };
  }
  if (direction === "right") {
    return { hidden: { x: 80, opacity: 0 }, visible: { x: 0, opacity: 1 } };
  }
  return { hidden: { y: 80, opacity: 0 }, visible: { y: 0, opacity: 1 } };
};

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-100 mt-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="inline-block px-4 py-1 mb-4 text-sm rounded-full bg-blue-950 text-white">
          Apartment Sketch
        </p>

        <h2 className="text-4xl font-bold mb-12 text-blue-950">
          Apartments Plan
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 rounded-lg">
          {servicesData.map((item, index) => (
            <motion.div
              key={item.id}
              variants={getAnimation(item.direction)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-md shadow-sm hover:shadow-lg transition"
            >
              
              <motion.div
                whileHover={{ scale: 1.25, rotate: 12 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex justify-center mb-6 text-orange-500 text-5xl"
              >
                {item.icon}
              </motion.div>

              <h3 className="text-xl font-bold mb-4 text-blue-950">
                {item.title}
              </h3>

              <p className="text-blue-950 text-sm leading-relaxed font-semibold">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;
