import { useState } from "react";
import { tabs, deluxeData } from "./Data";
import { motion } from "framer-motion";

const DeluxeSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="w-full py-16 bg-white text-center">
      <p className="inline-block px-4 py-1 mb-4 text-sm rounded-full bg-blue-950 text-white">
        Apartment Sketch
      </p>

      <h2 className="text-4xl font-bold mb-12 text-blue-950">
        Apartments Plan
      </h2>

      {/* TABS */}
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-lg font-medium relative ${
              activeTab === tab
                ? "text-orange-600 after:absolute after:left-0 after:-bottom-2 after:w-full after:h-[2px] after:bg-orange-500"
                : "text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2  items-center">

        {/* LEFT CONTENT — animation repeat on tab click */}
        <motion.div
          key={activeTab}   // ⭐ ONLY CHANGE (animation reset)
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-orange-600 text-white p-10 w-full md:w-[500px] min-h-[520px] rounded-md"
        >
          <h2 className="text-3xl font-bold mb-4">
            {deluxeData.title}
          </h2>

          <p className="text-lg mb-8">
            {deluxeData.description}
          </p>

          <div className="space-y-4">
            {deluxeData.details.map((item, index) => (
              <div
                key={index}
                className="flex justify-between border-b border-white/50 pb-2 text-sm"
              >
                <span className="font-semibold text-lg">{item.label}</span>
                <span className="font-semibold text-lg">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE — animation repeat on tab click */}
        <motion.div
          key={activeTab + "-image"} // ⭐ ONLY CHANGE
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex justify-center"
        >
          <img
            src="/assets/dayagram img.png"
            alt="Floor Plan"
            className="w-full max-w-md h-auto object-contain"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default DeluxeSection;
