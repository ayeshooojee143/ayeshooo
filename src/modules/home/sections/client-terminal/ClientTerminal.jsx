"use client";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ClientReview from "./ClientReview";

const cards = [
  { name: "Jacob William", role: "Selling Agent", image: "/assets/cleint1.jpg" },
  { name: "John Smith", role: "Marketing Head", image: "/assets/client3.jfif" },
  { name: "Sara Khan", role: "Designer", image: "/assets/cleint2.jpeg" },
  { name: "Alex John", role: "Developer", image: "/assets/client4.jfif" },
  { name: "Emma Watson", role: "HR Manager", image: "/assets/client5.jfif" },
  { name: "David Lee", role: "CEO", image: "/assets/client3.jfif" },
];

function ClientTerminal() {

  // ✅ RESPONSIVE CARD COUNT
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
    ...cards.slice(-cardsToShow),
    ...cards,
    ...cards.slice(0, cardsToShow),
  ];

  const [index, setIndex] = useState(cardsToShow);
  const [animate, setAnimate] = useState(true);

  const nextSlide = () => setIndex((prev) => prev + 1);
  const prevSlide = () => setIndex((prev) => prev - 1);

  useEffect(() => {
    if (index === cards.length + cardsToShow) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(cardsToShow);
      }, 500);
    }

    if (index === 0) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(cards.length);
      }, 500);
    }
  }, [index, cardsToShow]);

  useEffect(() => {
    if (!animate) requestAnimationFrame(() => setAnimate(true));
  }, [animate]);

  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-20 py-16 relative">

      <button className="bg-blue-950 text-white py-1 px-4 mx-auto block rounded-3xl text-sm sm:text-base">
        Our Testimonial
      </button>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-blue-950 font-bold text-center mt-4">
        Clients Feedback
      </h2>

      {/* SLIDER WRAPPER */}
      <div className="relative mt-10 overflow-hidden group py-3">

        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          className="
            absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-10
            bg-white shadow-lg p-3 rounded-full
            opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition
          "
        >
          <ChevronLeft />
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
                className="flex-shrink-0 px-3"
                style={{ width: `${cardWidth}%` }}
              >
                <div
                  className="
                    transition-all duration-300
                    hover:-translate-y-4
                    hover:scale-105
                    hover:shadow-2xl
                  "
                >
                  <ClientReview
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nostrum molestias perferendis modi."
                    name={item.name}
                    role={item.role}
                    avatar={item.image}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          className="
            absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-10
            bg-white shadow-lg p-3 rounded-full
            opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition
          "
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

export default ClientTerminal;
