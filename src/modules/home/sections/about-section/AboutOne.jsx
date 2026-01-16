import { AiOutlineHome } from "react-icons/ai";
import { IoTimeOutline } from "react-icons/io5";
import { LuHandHeart } from "react-icons/lu";
import { PiMountainsLight } from "react-icons/pi";
import { motion } from "framer-motion";
import PlayBtn from "../../../../component/buttons/PlayBtn";

function AboutOne() {
  return (
    <div className="pt-20 container overflow-hidden mx-auto">
      <div className="lg:flex gap-10 py-10">

        {/* LEFT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full lg:w-6/12 relative"
        >
          <div className="relative z-10">
            <img
              className="block mx-auto"
              src="/assets/about-img-2.png"
              alt="About"
            />
          </div>

          {/* Video (NO animation) */}
          <div className="-mt-72 md:ms-28 lg:ms-0 flex justify-center items-center h-52 overflow-hidden w-80 my-bg relative z-20">
            <PlayBtn videoUrl="https://youtu.be/oz7wmF51Gwk?si=AuwEjKnV9wqjYBBS&autoplay=1" />
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full px-3 md:px-6 lg:px-0 lg:w-6/12 pt-6 md:mt-16 lg:mt-0"
        >
          <button className="text-white py-1 px-3 rounded-3xl bg-blue-950">
            About Us
          </button>

          <h2 className="text-5xl font-bold text-blue-950 pt-4 leading-tight">
            The Leading Real Estate Rental Marketplace.
          </h2>

          <p className="text-lg text-blue-950/90 font-semibold pt-4">
            Over 39,000 people work for us in more than 70 countries all over the
            world. This breadth of global coverage, combined with specialist services.
          </p>

          {/* FEATURES */}
          <div className="flex gap-7 pt-10">
            <Feature icon={<AiOutlineHome />} text="Smart Home Design" />
            <Feature icon={<PiMountainsLight />} text="Beautiful Scene Around" />
          </div>

          <div className="flex gap-7 pt-2">
            <Feature icon={<LuHandHeart />} text="Exceptional Lifestyle" />
            <Feature icon={<IoTimeOutline />} text="Complete 24/7 Security" />
          </div>

          <div className="bg-orange-100 py-5 border-l-4 ps-5 border-orange-600 mt-7">
            <p>"Enimad minim veniam quis nostrud exercitation</p>
            <p className="ps-2">
              ullamco laboris. Lorem ipsum dolor sit amet"
            </p>
          </div>

          {/* BUTTON */}
          <button className="relative flex items-center gap-2 px-6 py-3 mt-5 rounded-xl font-semibold bg-orange-600 text-white overflow-hidden group transition-transform duration-300 hover:scale-105">
            <span className="absolute inset-0 bg-blue-950 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            <span className="relative z-10 transition-colors duration-300">
              OUR SERVICES
            </span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}

/* FEATURE COMPONENT (SQUARE ICONS) */
const Feature = ({ icon, text }) => (
  <div className="flex items-center gap-2 group cursor-pointer">
    <div
      className="bg-orange-100 flex justify-center items-center
      h-14 lg:h-16 w-20
      transition-all duration-300
      group-hover:scale-110"
    >
      <span className="text-3xl text-orange-600">{icon}</span>
    </div>
    <h3 className="text-lg text-blue-950 font-medium">
      {text}
    </h3>
  </div>
);

export default AboutOne;
