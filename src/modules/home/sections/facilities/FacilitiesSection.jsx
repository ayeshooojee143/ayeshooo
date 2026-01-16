import React, { useEffect, useRef, useState } from "react";
import { facilitiesList } from "./facilitiesList.jsx";
import { FaArrowRight } from "react-icons/fa";

function FacilitiesSection() {
  const cardRefs = useRef([]);
  const [showCards, setShowCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowCards((prev) => [
              ...new Set([...prev, entry.target.dataset.index]),
            ]);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((card) => card && observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#f8f9ff] py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="inline-block px-4 py-1 mb-4 text-sm rounded-full bg-blue-950 text-white">
          Our Aminities
        </p>

        <h2 className="text-5xl font-bold mb-12 text-blue-950">
          Building Aminities
        </h2>

        {/* GRID — unchanged */}
        <div className="grid gap-6 sm:grid-cols-2 ms-8  md:grid-cols-3 lg:grid-cols-4  justify-items-center">
          {facilitiesList.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                data-index={index}
                className={`bg-white border-2  h-60 w-64 p-8 rounded-2xl text-center relative group shadow-sm hover:shadow-xl transition-all duration-700
                ${
                  showCards.includes(index.toString())
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-16"
                }`}
              >
                {/* Main Icon */}
                <div className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-orange-100 text-orange-600 text-3xl mb-4">
                  <Icon />
                </div>

                {/* Title */}
                <h2 className="font-bold text-lg text-blue-950 mt-7">
                  {item.title}
                </h2>

                {/* Arrow Icon */}
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md text-gray-600 group-hover:bg-orange-500 group-hover:text-white transition">
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FacilitiesSection;
