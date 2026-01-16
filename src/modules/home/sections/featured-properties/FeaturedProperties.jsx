import { useState, useEffect } from "react";
import { properties } from "./PropetyData";
import PropertyCard from "./PropertyCard";
import { motion } from "framer-motion";

const FeaturedProperties = () => {
  const [cardsPerView, setCardsPerView] = useState(3);
  const [index, setIndex] = useState(0); // Slider index

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, properties.length - cardsPerView);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 overflow-hidden">
        <button className="block mx-auto bg-blue-950 py-1 px-4 text-white rounded-full">
          Properties
        </button>
        <h2 className="text-4xl text-blue-950 text-center font-bold pt-5 pb-10">
          Featured Listings
        </h2>

        {/* Slider */}
        <div
          className="flex gap-6 transition-transform duration-500"
          style={{
            transform: `translateX(-${(index * 100) / cardsPerView}%)`,
          }}
        >
          {properties.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-3 relative group"
            >
              {/* Original PropertyCard */}
              <PropertyCard item={item} />

              {/* Hover Layer on Image */}
              <motion.div
               
              >
                <p className="text-white font-semibold text-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {item.title}
                </p>
              </motion.div>

              {/* Marquee Tags Below Image */}
              <div className="overflow-hidden mt-2">
                <div className="whitespace-nowrap animate-marquee">
                  {(item.tags || []).map((tag, i) => (
                    <span
                      key={i}
                      className="inline-block mr-4 px-3 py-1 bg-orange-500 text-white rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                  {(item.tags || []).map((tag, i) => (
                    <span
                      key={i + 100}
                      className="inline-block mr-4 px-3 py-1 bg-orange-500 text-white rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                index === i ? "bg-orange-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Marquee Animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: inline-block;
            animation: marquee 10s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default FeaturedProperties;
