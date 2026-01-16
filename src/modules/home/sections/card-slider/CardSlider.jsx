"use client";
import { useEffect, useState } from "react";
import CardData from "./CardData";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CardSlider = () => {

  // RESPONSIVE CARDS COUNT
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) setCardsToShow(1);
      else if (window.innerWidth < 1024) setCardsToShow(2);
      else setCardsToShow(3);
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const cardWidth = 100 / cardsToShow;

  const sliderData = [
    ...CardData.slice(-cardsToShow),
    ...CardData,
    ...CardData.slice(0, cardsToShow),
  ];

  const [index, setIndex] = useState(cardsToShow);
  const [animate, setAnimate] = useState(true);

  const next = () => setIndex((prev) => prev + 1);
  const prev = () => setIndex((prev) => prev - 1);

  useEffect(() => {
    if (index === CardData.length + cardsToShow) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(cardsToShow);
      }, 500);
    }

    if (index === 0) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(CardData.length);
      }, 500);
    }
  }, [index, cardsToShow]);

  useEffect(() => {
    if (!animate) requestAnimationFrame(() => setAnimate(true));
  }, [animate]);

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 relative group">

        <p className="w-28 text-center py-1 mb-4 text-sm rounded-full mx-auto bg-blue-950 text-white">
          News & Blogs
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-blue-950 text-center">
          Latest News Feeds
        </h2>

        {/* LEFT ARROW */}
        <button
          onClick={prev}
          className="
            absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 mt-16
            w-11 h-11 bg-white rounded-full shadow-lg
            flex items-center justify-center
            opacity-100 lg:opacity-0 lg:group-hover:opacity-100
            transition z-20
          "
        >
          <FaArrowLeft />
        </button>

        {/* SLIDER */}
        <div className="overflow-hidden">
          <div
            className={`flex ${
              animate ? "transition-transform duration-500 ease-in-out" : ""
            }`}
            style={{
              transform: `translateX(-${index * cardWidth}%)`,
            }}
          >
            {sliderData.map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-3 sm:px-4"
                style={{ width: `${cardWidth}%` }}
              >
                <div
                  className="
                    bg-white border rounded-xl overflow-hidden
                    transition-all duration-300
                    hover:-translate-y-4
                    hover:shadow-2xl
                  "
                >
                  <div className="h-48 sm:h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                        w-full h-full object-cover
                        transition-transform duration-500
                        hover:scale-110
                      "
                    />
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="text-base sm:text-lg font-semibold mb-4">
                      {item.title}
                    </h3>

                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{item.date}</span>
                      <span className="text-orange-500 font-semibold cursor-pointer hover:underline">
                        READ MORE
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          className="
            absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 mt-16
            w-11 h-11 bg-white rounded-full shadow-lg
            flex items-center justify-center
            opacity-100 lg:opacity-0 lg:group-hover:opacity-100
            transition z-20
          "
        >
          <FaArrowRight />
        </button>

      </div>
    </section>
  );
};

export default CardSlider;
