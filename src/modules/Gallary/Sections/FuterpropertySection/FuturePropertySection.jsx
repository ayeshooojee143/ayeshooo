import React, { useState, useEffect, useRef } from "react";

const properties = [
  { id: 1, title: "Modern Family House", location: "New York", price: "$250,000", img: "/assets/exterior2.jpg" },
  { id: 2, title: "Luxury Villa", location: "Los Angeles", price: "$450,000", img: "/assets/home img 2.jfif" },
  { id: 3, title: "Apartment View", location: "Chicago", price: "$180,000", img: "/assets/home img 3.jfif" },
  { id: 4, title: "Classic House", location: "Florida", price: "$320,000", img: "/assets/exterior1.jpg" },
  { id: 5, title: "Premium Villa", location: "California", price: "$520,000", img: "/assets/home img 5.jfif" },
];

const FeaturedPropertiesSlider = () => {
  const [paused, setPaused] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      if (sliderRef.current) {
        const cardWidth = sliderRef.current.children[0].offsetWidth + 24; // card width + gap
        sliderRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });

        // Loop back
        if (
          sliderRef.current.scrollLeft + sliderRef.current.offsetWidth >=
          sliderRef.current.scrollWidth
        ) {
          sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <h2 className="text-4xl font-bold text-center text-blue-950">
          Featured Properties
        </h2>
      </div>

      <div
        className="overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE 10+
          }}
        >
          {[...properties, ...properties].map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[calc(24%-0.76rem)] snap-start bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
              style={{
                WebkitOverflowScrolling: "touch",
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-48 w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-blue-950">{item.title}</h3>
                <p className="text-sm text-blue-950">{item.location}</p>
                <p className="text-orange-600 font-bold mt-2">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPropertiesSlider;
