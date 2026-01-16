import { motion } from "framer-motion";
import ButtonAll from "../buttons/ButtonAll";




function OpeningTime() {
    const getAnimation = (delay = 0) => ({
        hidden: { opacity: 0, y: 120 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: delay,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    });

    return (
        <>
            <motion.div
                variants={getAnimation(1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                className=" px-6 bg-lime-600 py-9 mt-12 rounded-3xl"
            >
                <ButtonAll size="py-3 px-8 mx-auto" text="Opening Hours" type='bluewhite'/>
                <p className="text-center text-blue-50 pt-4 leading-snug">
                    Lorem ipsum dolor sit amet consectet adipisicing elit. Natus corrupti
                </p>
                <p className="text-center text-blue-50 pt-3">Mon–Fri: 8:00AM – 9:00PM</p>
                <p className="text-center text-blue-50 pt-3">Sat: 8:00AM – 7:00PM</p>
                <p className="text-center text-blue-50 pt-3">Sun: 9:00AM – 5:00PM</p>
                <p className="text-center text-blue-50 pt-3">24/7 Emergency Care</p>
            </motion.div>
        </>
    )
}

export default OpeningTime
