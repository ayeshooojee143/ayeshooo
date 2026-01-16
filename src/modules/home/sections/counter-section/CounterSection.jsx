import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaHome, FaBuilding, FaTools, FaCouch } from "react-icons/fa";

/* ================= DATA ================= */

const counters = [
  {
    icon: <FaHome size={40} className="text-orange-600" />,
    value: 560,
    label: "Total Area Sq",
    suffix: "+",
  },
  {
    icon: <FaBuilding size={40} className="text-orange-600" />,
    value: 197000,
    label: "Apartments Sold",
    suffix: "+",
  },
  {
    icon: <FaTools size={40} className="text-orange-600" />,
    value: 268,
    label: "Total Constructions",
    suffix: "+",
  },
  {
    icon: <FaCouch size={40} className="text-orange-600" />,
    value: 340,
    label: "Apartio Rooms",
    suffix: "+",
  },
];

/* ================= COUNTER BOX ================= */

const CounterBox = ({ icon, value, label, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500;
    const increment = value / (duration / 20);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center gap-3"
    >
      {icon}

      <h2 className="text-3xl md:text-4xl font-bold text-blue-950">
        {count.toLocaleString()}
        {suffix}
      </h2>

      <p className="text-blue-950 text-sm font-medium md:text-base">
        {label}
      </p>
    </motion.div>
  );
};

/* ================= MAIN SECTION ================= */

export default function CounterSection() {
  return (
    <section className="bg-gray-50 py-20 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-10">
        {counters.map((item, index) => (
          <CounterBox key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
