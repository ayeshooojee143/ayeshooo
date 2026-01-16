import React from "react";
import { TeamData } from "./TeamData";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const TeamSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="inline-block px-4 py-1 mb-4 text-sm rounded-full bg-blue-950 text-white">
          Our Team
        </p>
        <h2 className="text-5xl font-bold mb-12 text-blue-950">Our Team</h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TeamData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white border shadow-lg rounded-md overflow-hidden text-center relative group"
            >
              {/* Image */}
              <div className="overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Social Icons Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, idx) => (
                    <div
                      key={idx}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-950 
                                 cursor-pointer hover:bg-orange-500 hover:text-white transition transform hover:scale-110"
                    >
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="py-6">
                <h3 className="text-xl font-bold text-blue-950">{item.name}</h3>
                <p className="text-orange-500 font-medium mt-1">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
