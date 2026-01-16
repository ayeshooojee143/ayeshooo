import React from "react";
import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const CommitmentSection = () => {
  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-blue-950"
        >
          <button className="py-1 px-2 bg-blue-950 text-white rounded-3xl mb-3">
            Our Commitment
          </button>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            Because a home can <br /> change everything
          </h2>

          <p className="text-blue-950 font-semibold mb-10 max-w-xl">
            Quam gravida fusce conubia luctus parturient amet eros senectus
            venenatis. Blandit consectetur interdum condimentum si velit.
            Morbi est luctus nascetur per dolor.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="shadow-xl border-2 bg-gray-50 p-3">
              <h4 className="text-lg font-semibold mb-2">Our Vision</h4>
              <p className="text-blue-950 font-semibold text-sm">
                Phasellus magnis consequat mattis as condimentum massa
                vulputate erat fames urna.
              </p>
            </div>

            <div className="shadow-xl border-2 bg-gray-50 p-3">
              <h4 className="text-lg font-semibold mb-2">Our Mission</h4>
              <p className="text-blue-950 font-semibold text-sm">
                Phasellus magnis consequat mattis as condimentum massa
                vulputate erat fames urna.
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <img
            src="/assets/img 1.png"
            alt="Home discussion"
            className="rounded-lg w-full object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default CommitmentSection;
