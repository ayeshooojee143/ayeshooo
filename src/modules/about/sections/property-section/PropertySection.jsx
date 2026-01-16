import { motion } from "framer-motion";

const PropertySection = () => {
  const properties = [
    {
      title: "Skyper Pool Apartment",
      price: "PKR 45,000,000",
      img: "./assets/skyper.jfif",
    },
    {
      title: "Cedar Residence",
      price: "PKR 72,000,000",
      img: "./assets/carder.jpg",
    },
    {
      title: "Lakeside Apartment",
      price: "PKR 38,000,000",
      img: "./assets/lonch.jpg",
    },
    {
      title: "Modern Tower",
      price: "PKR 90,000,000",
      img: "./assets/tower.jfif",
    },
  ];

  /* PARENT (STAGGER) */
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  /* CARD ANIMATION */
  const cardVariant = {
    hidden: {
      opacity: 0,
      scale: 0.85,
      y: 40,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-14">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:justify-between md:items-center mb-10"
        >
          <h2 className="text-3xl font-bold leading-snug text-blue-950">
            Discover Your Perfect <br /> Property Match
          </h2>
          <p className="text-blue-950 max-w-md mt-4 md:mt-0 font-semibold">
            Find Your Dream Home & Invest Smarter with Real Estate Opportunities
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {properties.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-52 object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                />

                <span className="absolute top-4 left-4 bg-blue-950 text-white text-xs px-3 py-1 rounded-full">
                  HOT
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg mb-2 text-blue-950 font-bold">
                  {item.title}
                </h3>

                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span className="font-medium text-orange-600">
                    {item.price}
                  </span>
                  <span className="text-orange-600">
                    3 Beds • 2 Baths
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default PropertySection;
