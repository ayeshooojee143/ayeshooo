import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ---------- Number ---------- */
function Number({ mv, number, height }) {
  const y = useTransform(mv, latest => {
    const placeValue = latest % 10;
    let offset = (10 + number - placeValue) % 10;
    let memo = offset * height;
    if (offset > 5) memo -= 10 * height;
    return memo;
  });

  return (
    <motion.span
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        y
      }}
    >
      {number}
    </motion.span>
  );
}

/* ---------- Digit ---------- */
function Digit({ place, value, height }) {
  const rounded = Math.floor(value / place);
  const animatedValue = useSpring(0, { stiffness: 120, damping: 20 });

  useEffect(() => {
    animatedValue.set(rounded);
  }, [rounded, animatedValue]);

  return (
    <div
      style={{
        height,
        position: "relative",
        width: "1ch",
        overflow: "hidden",
        fontVariantNumeric: "tabular-nums"
      }}
    >
      {Array.from({ length: 10 }, (_, i) => (
        <Number key={i} mv={animatedValue} number={i} height={height} />
      ))}
    </div>
  );
}

/* ---------- Counter ---------- */
export default function Counter({
  value,
  fontSize = 80,
  places = [100, 10, 1]
}) {
  const height = fontSize;
  const ref = useRef(null);
  const [start, setStart] = useState(false);

  /* Scroll detection */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="text-blue-400 text-center justify-center ms-5"
        style={{
          fontSize,
          display: "flex",
          gap: 2,
          lineHeight: 1,
          fontWeight: "bold"
        }}
      >
        {places.map(place => (
          <Digit
            key={place}
            place={place}
            value={start ? value : ""} 
            height={height}
          />
        ))}

        {/* PLUS SIGN */}
        <span style={{ marginLeft: -8 }}>+</span>
      </div>
    </div>
  );
}
