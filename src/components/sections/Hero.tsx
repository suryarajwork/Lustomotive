"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const VIDEOS = [
  "/videos/13643290_1080_1920_30fps.mp4",
  "/videos/13643294_1080_1920_30fps.mp4",
  "/videos/13643295_1080_1920_30fps.mp4",
  "/videos/13643311_1080_1920_30fps.mp4",
  "/videos/14974357_3840_2160_25fps.mp4",
  "/videos/6157968-hd_1920_1080_30fps.mp4",
  "/videos/6158070-hd_1920_1080_30fps.mp4",
  "/videos/6158072-hd_1920_1080_30fps.mp4",
  "/videos/6158119-hd_1920_1080_30fps.mp4",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % VIDEOS.length);
    }, 5000); // 5 seconds per slide
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Efficiently pause inactive videos and play the active one
  useEffect(() => {
    videoRefs.current.forEach((video, idx) => {
      if (!video) return;
      if (idx === currentIndex) {
        video.currentTime = 0;
        video.play().catch(() => { });
      } else {
        video.pause();
      }
    });
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % VIDEOS.length);
    startTimer();
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + VIDEOS.length) % VIDEOS.length);
    startTimer();
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    startTimer();
  };

  const getVariant = (index: number) => {
    const length = VIDEOS.length;
    let diff = index - currentIndex;

    if (diff < -length / 2) diff += length;
    if (diff > length / 2) diff -= length;

    if (diff === 0) return "center";
    if (diff < 0) return "left"; // Any previous video goes left
    if (diff > 0) return "right"; // Any next video goes right
    return "right";
  };

  const variants = {
    center: {
      x: "0%",
      zIndex: 10,
      opacity: 1,
    },
    left: {
      x: "-100%",
      zIndex: 5,
      opacity: 1,
    },
    right: {
      x: "100%",
      zIndex: 5,
      opacity: 1,
    },
  };

  return (
    <section className="relative w-full h-[100dvh] bg-black overflow-hidden flex flex-col items-center justify-center">

      {/* Full Screen Slider Container */}
      <div className="absolute inset-0 w-full h-full">
        {VIDEOS.map((video, index) => {
          const isActive = currentIndex === index;

          return (
            <motion.div
              key={video}
              className="absolute inset-0 w-full h-full"
              initial={false}
              animate={getVariant(index)}
              variants={variants}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            >
              <video
                ref={(el) => {
                  if (el) videoRefs.current[index] = el;
                }}
                src={video}
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
            </motion.div>
          );
        })}
      </div>

      {/* Hero Title Overlay - Centered and Responsive */}
      <div className="absolute z-40 flex flex-col items-center justify-center text-center px-6 w-full h-full pointer-events-none">

        <style>{`
          @keyframes slide-gold {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          @keyframes scroll-down {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
          }
        `}</style>

        <div className="relative mb-4 sm:mb-6 mt-10 sm:mt-0">
          <span className="text-[#ff1744] font-orbitron font-bold tracking-[0.15em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm md:text-lg drop-shadow-lg">
            West Bengal's #1 Auto Solution
          </span>
          <div className="absolute -bottom-1.5 sm:-bottom-2.5 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent overflow-hidden">
            <div
              className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-80"
              style={{ animation: "slide-gold 2.5s ease-in-out infinite" }}
            />
          </div>
        </div>

        <h1 className="font-orbitron text-[clamp(1.5rem,8vw,3rem)] min-[600px]:text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black text-white uppercase tracking-wider sm:tracking-widest drop-shadow-[0_0_30px_rgba(255,23,68,0.7)] leading-tight sm:leading-none max-w-full w-full">
          Lustomotive
        </h1>
        <h2 className="text-gray-100 mt-2 sm:mt-5 tracking-widest sm:tracking-[0.4em] md:tracking-[0.6em] text-xs sm:text-sm md:text-xl lg:text-2xl uppercase font-semibold drop-shadow-lg text-balance">
          Lust for your Automotive
        </h2>
      </div>

      {/* Bottom Description & Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-8 z-50 flex flex-col items-center text-center px-6 w-full pointer-events-none">
        <p className="text-gray-300 mb-6 text-[clamp(0.85rem,2.5vw,1.1rem)] font-light max-w-2xl text-balance drop-shadow-md leading-relaxed hidden sm:block">
          Experience premium detailing, advanced ceramic coating, and meticulous restoration. We bring unparalleled shine and ultimate protection to your vehicle.
        </p>
        <p className="text-gray-300 mb-6 text-[clamp(0.8rem,4vw,1rem)] font-light max-w-sm text-balance drop-shadow-md leading-relaxed sm:hidden">
          Premium detailing & ceramic coating for the ultimate shine and protection.
        </p>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-white/60 text-[0.65rem] tracking-[0.3em] uppercase font-bold">Scroll to Explore</span>
          <div className="w-[2px] h-12 sm:h-16 bg-white/10 relative overflow-hidden">
            <div
              className="w-full h-full bg-[#ff1744] absolute top-0 left-0"
              style={{ animation: "scroll-down 2s cubic-bezier(0.77, 0, 0.175, 1) infinite" }}
            />
          </div>
        </div>
      </div>

      {/* Navigation Arrows (Hidden on very small mobile to save space, but visible on tablets/desktops) */}
      <button
        onClick={goToPrev}
        className="absolute left-4 md:left-10 z-50 p-2 rounded-full bg-black/20 hover:bg-black/50 text-white backdrop-blur-sm border border-white/10 transition-all hidden sm:block"
      >
        <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 md:right-10 z-50 p-2 rounded-full bg-black/20 hover:bg-black/50 text-white backdrop-blur-sm border border-white/10 transition-all hidden sm:block"
      >
        <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
      </button>
    </section>
  );
}
