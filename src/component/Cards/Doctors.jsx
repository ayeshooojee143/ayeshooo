import Botton from "../buttons/Botton";
import BottonIcon from "../buttons/BottonIcon";
import { motion } from "framer-motion";

function Doctors({ name, tagline, src, btnText, btnColor, icon, iconTwo, iconClass,delay }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                    duration: 1,
                    delay: delay,
                    ease: [0.22, 1, 0.36, 1]
                }} className="w-full bg-blue-50 rounded-3xl p-5">
        <h2 className="text-blue-900 font-bold text-3xl ">{name}</h2>
        <p className="text-blue-950 ps-1">{tagline}</p>
        <div className="p-3 my-4 border border-blue-950 rounded-full overflow-hidden">
          <img
            className="rounded-full w-full ease-in-out duration-500 hover:scale-110 "
            src={src}
            alt="my doctors"
          />
        </div>
        <div className="flex justify-between px-3">
          <Botton text={btnText} bgColor={btnColor} />
          <div className="flex gap-2">
            <BottonIcon icon={icon} iconClass={iconClass} />
            <BottonIcon icon={iconTwo} iconClass={iconClass} />
          </div>
        </div>
      </motion.div>
    </>
  );
}
export default Doctors;
