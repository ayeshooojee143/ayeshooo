import React from "react";
import { motion } from "framer-motion";

/* COUNTER */
const Counter = ({ end }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return <span>{count}+</span>;
};

/* Animation variants */
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const TrustedAdvisors = () => {
  return (
    <section className="bg-white container mx-auto py-16 overflow-hidden">
      <div className="flex flex-wrap w-full px-8">
        {/* LEFT CONTENT - 50% */}
        <motion.div
          className="w-full lg:w-1/2 pr-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-8">
            Your Trusted Real <br /> Estate Advisors
          </h2>

          {/* COUNTERS */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { end: 30, label: "Satisfied Customer", bg: "bg-gray-100", textColor: "text-orange-600" },
              { end: 5000, label: "Award Winning", bg: "bg-orange-600 text-white", textColor: "text-white" },
              { end: 7, label: "Years of Experience", bg: "bg-gray-100", textColor: "text-orange-600" },
              { end: 33, label: "Projects Delivered", bg: "bg-gray-100", textColor: "text-orange-600" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`${item.bg} rounded-xl p-5`}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.2 * i }}
              >
                <h3 className={`text-2xl font-bold ${item.textColor}`}>
                  <Counter end={item.end} />
                </h3>
                <p className={`text-lg font-bold ${item.textColor} ${item.bg.includes("gray") ? "" : "opacity-90"}`}>
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGES - 50% */}
        <motion.div
          className="w-full lg:w-1/2 pl-8 mt-10 lg:mt-0 relative"
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          {/* TOP IMAGE */}
          <motion.div
            className="w-full h-36 rounded-xl mb-6"
            variants={zoomIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/assets/home img 10.jpg"
              alt="Building"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>

          {/* BADGE */}
          <motion.div
            className="absolute left-1/2 top-32
              w-16 h-16 rounded-full bg-orange-600 text-white
              flex items-center justify-center font-bold
              shadow-glow z-10"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          >
            20+
          </motion.div>

          {/* BOTTOM IMAGES */}
          <div className="flex gap-3 justify-between">
            <motion.div
              className="h-40 w-40 rounded-xl"
              variants={zoomIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img
                src="/assets/faimly img.jpg"
                alt="Family"
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>

            <motion.div
              className="h-52 w-44 rounded-xl"
              variants={zoomIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <img
                src="/assets/family img 2.avif"
                alt="Family"
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>

            <motion.div
              className="h-40 w-40 rounded-xl"
              variants={zoomIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <img
                src="/assets/faimly img.jpg"
                alt="Family"
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedAdvisors;
