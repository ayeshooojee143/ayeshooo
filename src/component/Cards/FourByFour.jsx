import { motion } from "framer-motion";

function FourByFour({
  className,
  count,
  textHead,
  icon,
  pText,
  btnText,
  btnClass,
  delay = 0
}) {
  

  return (
    <motion.div
      initial={{ opacity: 0, y: 120 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 1,
        delay: delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={`shadow-2xl border-2 w-11/12 mx-auto md:mx-0 mt-4 md:mt-0 md:w-2/4 lg:w-1/4 
      rounded-3xl p-5 ${className}`}
    >
      <div className="flex items-center pe-28 md:pe-0 gap-3"> 
        <h6 className={`bg-lime-600 h-10 w-10 flex justify-center items-center rounded-3xl text-white text-xl`}>
          {count}
        </h6>

        <h2 className="text-xl pe-3 leading-none font-semibold text-blue-900">
          {textHead}
        </h2>
      </div>

      <div className="text-9xl text-lime-600 pt-4 ps-2">
        {icon}
      </div>

      <p className="text-base text-gray-900 pt-2">{pText}</p>

      <button className={`py-3 mt-1 font-semibold ${btnClass || ''}`}>
        {btnText}
      </button>
    </motion.div>
  );
}

export default FourByFour;
