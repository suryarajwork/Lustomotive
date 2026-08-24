"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Keep loader for a short time to allow initial assets and layout to render smoothly
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1, backgroundColor: "rgba(5, 5, 5, 1)" }}
          animate={{ backgroundColor: "rgba(5, 5, 5, 0.3)" }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] backdrop-blur-md md:backdrop-blur-2xl flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background Ambient Glow (Optimized for Mobile) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[300px] md:h-[300px] bg-[radial-gradient(circle,_rgba(255,23,68,0.25)_0%,_transparent_70%)] rounded-full pointer-events-none"></div>

          {/* Loader container */}
          <div className="relative flex items-center justify-center">
            {/* Outer Spinning Ring */}
            <div className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full border border-white/5 border-t-[#ff1744] shadow-[0_0_20px_rgba(255,23,68,0.3)] animate-spin-slow" />
            {/* Inner Spinning Ring */}
            <div className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/5 border-b-[#ff1744] border-l-[#ff1744]/30 animate-spin-slow-reverse" />

            {/* Center Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-black rounded-full shadow-[0_0_30px_rgba(255,23,68,0.5)] z-10 p-2"
            >
              <Image
                src="/images/Loader_logo.png"
                alt="Loading..."
                fill
                className="object-contain p-2 rounded-full drop-shadow-[0_0_10px_rgba(255,23,68,0.8)]"
              />
            </motion.div>
          </div>

          {/* Loading Text */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-14 flex flex-col items-center"
          >
            <div className="text-white font-orbitron font-bold tracking-[0.3em] sm:tracking-[0.5em] text-xs sm:text-sm uppercase flex items-center">
              <span className="text-[#ff1744] drop-shadow-[0_0_8px_rgba(255,23,68,0.8)] text-sm sm:text-base mr-1">L</span>
              <span className="text-gray-300">USTOMOTIVE</span>

              {/* Pulsing dots */}
              <span className="flex gap-1 ml-2 text-[#ff1744]">
                <span className="animate-dot-1">.</span>
                <span className="animate-dot-2">.</span>
                <span className="animate-dot-3">.</span>
              </span>
            </div>

            {/* Progress line */}
            <div className="w-48 sm:w-64 h-[1.5px] bg-white/5 mt-5 rounded-full overflow-hidden relative">
              <div className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-[#ff1744] to-transparent shadow-[0_0_10px_rgba(255,23,68,1)] animate-slide-right" />
            </div>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
