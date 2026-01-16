import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ContactSection = () => {
  return (
    <section className="bg-white py-16">
      {/* Use grid: single column on small screens, two columns on lg */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full px-8">

        {/* LEFT SIDE — FORM */}
        <motion.div
          className="w-full"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
            Get in Touch
          </h2>

          <form className="bg-gray-50 rounded-2xl p-8 shadow-lg space-y-5">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-xl border px-4 py-3
              focus:ring-2 focus:ring-orange-500 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border px-4 py-3
              focus:ring-2 focus:ring-orange-500 outline-none"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full rounded-xl border px-4 py-3
              focus:ring-2 focus:ring-orange-500 outline-none"
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full rounded-xl border px-4 py-3
              focus:ring-2 focus:ring-orange-500 outline-none"
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full rounded-xl border px-4 py-3
              focus:ring-2 focus:ring-orange-500 outline-none resize-none"
            />

            <button
              type="submit"
              className="w-full bg-orange-600 text-white font-bold py-3
              rounded-xl hover:bg-orange-700 transition"
            >
              Submit Message
            </button>
          </form>
        </motion.div>

        {/* RIGHT SIDE — MAP BOX */}
        <motion.div 
          className="w-full"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-gray-50 rounded-2xl shadow-lg p-6 h-full">

            {/* Heading */}
            <h3 className="text-2xl font-bold text-blue-950 mb-4">
              Our Location
            </h3>

            {/* Map */}
            <div className="w-full h-72 rounded-xl overflow-hidden mb-6">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=Dubai&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

            {/* Location Button with Icon */}
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2
              bg-orange-600 text-white font-bold
              py-3 rounded-xl hover:bg-orange-700 transition"
            >
              <MapPin size={20} />
              View Location
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;
