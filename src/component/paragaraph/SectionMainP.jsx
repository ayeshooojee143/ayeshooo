import { motion } from "framer-motion";

function SectionMainP({text, delay,className}) {
  return (
    <>
      <motion.p initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 1,
          delay: delay,
          ease: [0.22, 1, 0.36, 1]
        }}
        className={`  ${className ? className : 'to-blue-950 text-lg text-justify'}`}>{text}</motion.p>
    </>
  )
}

export default SectionMainP
