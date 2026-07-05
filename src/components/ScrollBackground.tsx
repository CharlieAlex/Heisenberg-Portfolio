import React, { useEffect, useRef } from "react";
import "../assets/styles/ScrollBackground.scss";

export default function ScrollBackground() {
  const gridRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let prevY = window.scrollY;
    let velocity = 0;
    let frameId: number;

    const tick = () => {
      const y = window.scrollY;
      velocity += (y - prevY - velocity) * 0.35;
      prevY = y;

      if (gridRef.current) {
        gridRef.current.style.transform = `translate3d(0, ${y * 0.06}px, 0)`;
      }
      if (spotlightRef.current) {
        const speed = Math.min(Math.abs(velocity) / 40, 1);
        spotlightRef.current.style.opacity = String(0.25 + speed * 0.55);
        spotlightRef.current.style.transform = `scale(${1 + speed * 0.35})`;
      }
      frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="scroll-background" aria-hidden="true">
      <div className="scroll-background-grid" ref={gridRef} />
      <div className="scroll-background-spotlight" ref={spotlightRef} />
    </div>
  );
}
