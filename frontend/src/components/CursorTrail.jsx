import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const dotsRef = useRef([]);
  const DOTS = 5;

  useEffect(() => {
    if ("ontouchstart" in window) return;

    const positions = Array(DOTS).fill({ x: 0, y: 0 });
    let mouse = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const animate = () => {
      positions.forEach((pos, i) => {
        const target = i === 0 ? mouse : positions[i - 1];
        pos.x += (target.x - pos.x) * 0.2;
        pos.y += (target.y - pos.y) * 0.2;

        const dot = dotsRef.current[i];
        if (dot) {
          dot.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
        }
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {Array.from({ length: DOTS }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (dotsRef.current[i] = el)}
          className="pointer-events fixed z-9999 border border-white rounded-full bg-transparent"
          style={{
            width: `${50 - i * 1}px`,
            height: `${50 - i * 1}px`,
            opacity: 1 - i * 0.5, // fade tail
            transform: "translate3d(0,0,0)",
            transition: "background-color 0.2s",
          }}
        />
      ))}
    </>
  );
}
