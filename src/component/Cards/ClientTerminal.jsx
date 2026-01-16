import { motion } from "framer-motion";
function ClientTerminal({ clientName, Desise, src, delay }) {
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
                }} className="w-full">
                <img className="h-20 rounded-full w-20 ms-8 " src={src} alt="" />
                <div className="bg-blue-50 px-8 py-9 -mt-7 rounded-3xl">
                    <p className="text-blue-950">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui facere nesciunt pariatur nobis mollitia maxime quaerat cupiditate in culpa dicta quia perferendis odit totam ad repudiandae eaque corporis, unde accusamus.</p>
                    <h5 className="text-xl font-semibold text-blue-600 pt-3 ">{clientName}</h5>
                    <p className="text-blue-950 leading-none ">{Desise}</p>
                </div>
            </motion.div>
        </>
    )
}
export default ClientTerminal;