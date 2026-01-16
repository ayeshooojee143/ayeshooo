import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SectionHeading({ text, secText, className, secClass,br }) {
  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const letters = headingRef.current.querySelectorAll(".char");

      gsap.fromTo(
        letters,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.05,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    }, headingRef);

    return () => ctx.revert(); 
  }, []);

  
  const splitText = (value) =>
    value.split(" ").map((word, i) => (
      <span
        key={i}
        className="inline-block whitespace-nowrap mr-2"
      >
        {word.split("").map((char, j) => (
          <span key={j} className="char inline-block">
            {char}
          </span>
        ))}
      </span>
    ));

  return (
    <h2
      ref={headingRef}
      className={`text-4xl lg:text-5xl font-bold text-blue-900 leading-tight ${
        className || ""
      }`}
    >
      {splitText(text)}
      {br ? <br className="hidden md:block" /> : " "}
      <span className={` ${secClass ? secClass:"text-lime-600"}`}>
        {splitText(secText)}
      </span>
    </h2>
  );
}

export default SectionHeading;
