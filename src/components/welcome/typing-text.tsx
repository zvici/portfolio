"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import data from "@/data/data.json";
import { getGreeting } from "@/utils/getGreeting";

export default function TypingText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !bubbleRef.current) return;
    const letters = containerRef.current.querySelectorAll(".letter");
    gsap.fromTo(
      letters,
      { opacity: 0, y: 50, rotationX: 90, scale: 0.5 },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        scale: 1,
        stagger: 0.1,
        ease: "elastic.out(1, 0.5)",
        duration: 0.8,
      }
    );

    const bubble = bubbleRef.current;
    gsap.fromTo(
      bubble,
      {
        opacity: 0,
        rotateX: 90,
        transformOrigin: "bottom center",
        y: 30,
      },
      {
        opacity: 1,
        rotateX: 0,
        y: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        delay: 1.2,
      }
    );
  }, []);

  return (
    <div className="relative font-bold text-white w-fit">
      <div ref={containerRef} className="flex overflow-hidden">
        {data.name.split("").map((char, index) => (
          <div key={index} className="text-9xl max-sm:text-5xl letter">
            {char === " " ? "\u00A0" : char}
          </div>
        ))}
      </div>
      <div
        ref={bubbleRef}
        className="absolute right-0 top-0 rounded-full bg-green-500 px-4 py-3 text-lg font-bold leading-none text-gray-900 translate-x-full"
      >
        <span className="inline-block">{getGreeting()}</span>
        <svg
          viewBox="0 0 22 18"
          fill="none"
          className="absolute -bottom-[9px] left-[7px] w-5 text-green-500"
        >
          <path
            d="M20.9991 8C17.4991 12.5 13.4991 16 7.69476 17.4776C8.49908 10.5 6.99908 8 0.939453 3.39334L1.79694 0L21.1874 4.8999L20.9991 8Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}
