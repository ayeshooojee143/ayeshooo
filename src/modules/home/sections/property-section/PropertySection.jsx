import React from "react";
import { FaBed, FaBath, FaCar, FaRulerCombined } from "react-icons/fa";
import { motion } from "framer-motion";

function PropertySection() {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-[#ffffff] to-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT (slide from left) */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1 mb-4 text-sm rounded-full bg-blue-950 text-white">
            About Us
          </span>

          <h2 className="text-4xl font-bold text-blue-950 mb-4">
            Today Sells Properties
          </h2>

          <p className="text-blue-950 mb-6 font-medium">
            Houzez allow you to design unlimited panels and real estate <br />
            custom forms to capture leads and keep record of all information
          </p>

          {/* LIST */}
          <ul className="space-y-3 mb-8">
            {[
              "Live Music Concerts at Luviana",
              "Our Secret Island Boat Tour is Just for You",
              "Live Music Concerts at Luviana",
              "Live Music Concerts at Luviana"
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-blue-950 font-medium"
              >
                <span className="w-5 h-[2px] bg-orange-600"></span>
                {item}
              </li>
            ))}
          </ul>

          {/* ICON INFO */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t pt-6">
            <Info icon={<FaBed />} value="3" label="Bedrooms" />
            <Info icon={<FaBath />} value="2" label="Bathrooms" />
            <Info icon={<FaCar />} value="2" label="Car Parking" />
            <Info icon={<FaRulerCombined />} value="3450" label="Square Ft" />
          </div>

          {/* SMALL IMAGES */}
          <div className="flex flex-wrap gap-4 mt-8">
            <img src="/assets/home img 2.jfif" className="w-40 h-30 object-cover rounded-lg transition-transform" />
            <img src="/assets/home img 3.jfif" className="w-40 h-30 object-cover rounded-lg" />
            <img src="/assets/imge 1.png" className="w-40 h-30 object-cover rounded-lg" />
          </div>
        </motion.div>

        {/* RIGHT IMAGE (fade up) */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <img
            src="/assets/homes imeges.png"
            className="w-full h-[530px] object-cover rounded-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}

const Info = ({ icon, value, label }) => {
  return (
    <div className="flex items-center gap-2 text-blue-950">
      <div className="text-orange-600 text-xl">{icon}</div>
      <div>
        <h4 className="font-semibold">{value}</h4>
        <p className="text-sm font-medium">{label}</p>
      </div>
    </div>
  );
};

export default PropertySection;
