import React, { useEffect, useRef } from "react";
import { services } from "./ServiceData";
import ServiceCard from "./ServiceCard";
import { motion, useAnimation, useInView } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <div className="py-16 bg-gray-200 text-center">
      <p className="inline-block px-4 py-1 mb-4 text-sm rounded-full bg-blue-950 text-white">
        Our Services
      </p>

      <h2 className="text-4xl font-bold mb-12 text-blue-950">Our Main Focus</h2>

      {/* Container for scroll trigger */}
      <div
        ref={ref}
        className="flex flex-col md:flex-row justify-center items-center gap-8 text-blue-950"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            transition={{ delay: index * 0.25 }} // 🔹 smooth one-by-one
            whileHover={{ scale: 1.05 }} // hover animation same as before
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
