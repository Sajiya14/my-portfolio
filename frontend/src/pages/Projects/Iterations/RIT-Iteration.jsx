import React, { useState, useEffect } from "react";
import I1 from "../../../assets/diagrams/RIT/iteration 1.png";
import I2 from "../../../assets/diagrams/RIT/iteration 2.png";

const originalImages = [I1, I2];

// Clone first and last
const images = [
  originalImages[originalImages.length - 1],
  ...originalImages,
  originalImages[0],
];

export default function IterationSlider() {
  const [current, setCurrent] = useState(1);
  const [transition, setTransition] = useState(true);

  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrent((prev) => prev - 1);
  };

  useEffect(() => {
    if (current === images.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(1);
      }, 500);
    }

    if (current === 0) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(images.length - 2);
      }, 500);
    }
  }, [current]);

  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => {
        setTransition(true);
      });
    }
  }, [transition]);

  const realIndex =
  current === 0
    ? originalImages.length - 1
    : current === images.length - 1
    ? 0
    : current - 1;

  return (
    <div className="relative overflow-hidden rounded-4xl max-w-2xl mx-auto">
      <div
        className="flex"
        style={{
          transform: `translateX(-${current * 100}%)`,
          transition: transition ? "transform 500ms ease" : "none",
        }}
      >
        {images.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index}`}
            className="w-full h-full shrink-0 object-cover"
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full cursor-pointer"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full cursor-pointer"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {originalImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index + 1)}
            className={`w-3 h-3 rounded-full border-gray-500 transition-all duration-300 cursor-pointer ${
              realIndex === index
                ? "bg-yellow-500 scale-125"
                : "bg-white/50 border  hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}