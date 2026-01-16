import React, { useState, useEffect } from "react";

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

const ClientsLoveSection = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 200); // Delay animation 200ms
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="text-blue-950">
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

          {/* BUTTON WITH ANIMATION & HOVER */}
          <button
            className={`relative mt-8 px-8 py-4 rounded-2xl font-semibold bg-orange-600 overflow-hidden group
            transition-all duration-700
            ${showText ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
            hidden sm:block`}
          >
            {/* Hover Background */}
            <span
              className="absolute inset-0 bg-blue-950 transform -translate-x-full group-hover:translate-x-0
              transition-transform duration-300 ease-out"
            ></span>

            {/* Button Text */}
            <span className="relative z-10 text-white group-hover:text-white transition-colors duration-300">
              Make An Enquiry
            </span>
          </button>
        </div>

        {/* RIGHT TESTIMONIALS */}
        <div className="flex flex-col gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-6 shadow-lg flex gap-4 items-start"
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
