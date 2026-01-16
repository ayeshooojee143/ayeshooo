import { useEffect, useState } from "react";
import Header from "../../../../layout/header/Header";

const HeroSection = () => {
  const fullText = "Welcome to Your Dream Home";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 100;
    let timeout;

    const typeLetter = () => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1)); // <- safe slicing
        currentIndex++;
        timeout = setTimeout(typeLetter, typingSpeed);
      }
    };

    typeLetter();

    return () => clearTimeout(timeout); // cleanup
  }, [fullText]);

  return (
    <div className="relative h-screen overflow-hidden">
      <Header />

      <video
        src="/assets/video 1.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-blue-950/20" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <span className="mb-3 font-semibold lg:mt-20 text-white">
          Our About
        </span>

        <h1 className="text-5xl md:text-6xl font-bold max-w-3xl text-white drop-shadow-[0_0_20px_rgba(255,165,0,0.8)]">
          {typedText}
          <span className="blinking-cursor">|</span>
        </h1>

        <p className="mt-6 max-w-2xl text-white drop-shadow-[0_0_20px_rgba(255,165,0,0.8)]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
        </p>

        <button className="relative mt-8 px-8 py-4 rounded-2xl font-semibold bg-orange-600 overflow-hidden group hidden sm:block">
          <span className="absolute inset-0 bg-blue-950 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
          <span className="relative z-10 text-white group-hover:text-white transition-colors duration-300">
            Make An Enquiry
          </span>
        </button>
      </div>

      <style jsx>{`
        .blinking-cursor {
          font-weight: 100;
          font-size: 2rem;
          color: #ff9900;
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;