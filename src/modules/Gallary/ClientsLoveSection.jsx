import React, { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "James Anderson",
    text: "The team helped me sell my house at the best market price within just two weeks. Very professional and trustworthy service.",
    img: "/assets/team 2.jfif",
  },
  {
    id: 2,
    name: "Michael Thompson",
    text: "I found my dream home through this platform. Their guidance and market knowledge made the process stress-free.",
    img: "/assets/team 3.jfif",
  },
  {
    id: 3,
    name: "Robert Williams",
    text: "Excellent real estate consultancy! Transparent dealings and genuine property options. Highly recommended.",
    img: "/assets/team 5.jfif",
  },
];

// Custom hook to detect if element is in viewport
const useInView = (options) => {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      options
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);

  return [ref, inView];
};

const ClientsLoveSection = () => {
  const [leftRef, leftInView] = useInView({ threshold: 0.2 });
  const [cardsRef, cardsInView] = useInView({ threshold: 0.2 });

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div
          ref={leftRef}
          className={`text-blue-950 transition-all duration-700 ease-out ${
            leftInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold mb-4 text-blue-950">
            Clients Love Our Properties
          </h2>

          <p className="text-blue-950 max-w-md mb-8 font-semibold">
            We help buyers, sellers, and investors make smart real estate decisions
            with trusted advice, verified listings, and complete transparency.
          </p>

          {/* PARTNER / TRUST TEXT */}
          <div className="flex items-center gap-6 mb-8 opacity-90">
            <span className="font-semibold text-lg text-blue-950">Trusted Agents</span>
            <span className="font-semibold text-lg text-blue-950">Verified Listings</span>
            <span className="font-semibold text-lg text-blue-950">Market Experts</span>
          </div>

          {/* BUTTON */}
          <button
            className="relative mt-8 px-8 py-4 rounded-2xl font-semibold bg-orange-600 overflow-hidden group
            transition-all duration-500 hover:bg-orange-700"
          >
            <span className="relative z-10 text-white">Make An Enquiry</span>
          </button>
        </div>

        {/* RIGHT TESTIMONIALS */}
        <div
          ref={cardsRef}
          className="flex flex-col gap-6"
        >
          {testimonials.map((item, i) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl p-6 shadow-lg flex gap-4 items-start transform transition-all duration-700 ease-out
              ${cardsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
              style={{ transitionDelay: `${i * 150}ms` }} // stagger effect
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-2xl text-blue-950">
                    {item.name}
                  </h4>
                  <span className="text-indigo-500 text-4xl leading-none">“</span>
                </div>

                <p className="text-blue-950 text-sm mt-2">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClientsLoveSection;
