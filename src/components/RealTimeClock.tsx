"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function RealTimeClock() {
    const [time, setTime] = useState({ h: "00", m: "00", s: "00", ampm: "AM" });
    const [mounted, setMounted] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
        const updateTime = () => {
            const now = new Date();
            let hours = now.getHours();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12;

            setTime({
                h: hours.toString().padStart(2, '0'),
                m: now.getMinutes().toString().padStart(2, '0'),
                s: now.getSeconds().toString().padStart(2, '0'),
                ampm: ampm
            });
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex flex-col items-center justify-center pb-16 pt-8 md:pb-24 md:pt-12 bg-[#050505] relative z-20 border-b border-neutral-900 border-t-0 overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(255,23,68,0.06)_0%,transparent_70%)] pointer-events-none z-0"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                className="text-center relative z-10 w-full max-w-6xl mx-auto px-4"
            >
                {/* Clean, Sporty Chronograph Style Text Clock */}
                <div className="flex flex-row items-center justify-center gap-1 sm:gap-2 mb-2 sm:mb-4 mt-2 select-none w-full whitespace-nowrap overflow-hidden">
                    {/* Time Digits */}
                    <div className="font-orbitron italic font-black text-[2.5rem] min-[400px]:text-[3rem] sm:text-7xl md:text-8xl lg:text-[9rem] tracking-tighter text-white tabular-nums leading-none flex items-center justify-center">
                        <span className="w-auto">{time.h}</span>
                        <span className="text-[#ff1744] drop-shadow-[0_0_15px_rgba(255,23,68,0.5)] mx-0.5 sm:mx-1 md:mx-4">:</span>
                        <span className="w-auto">{time.m}</span>
                        <span className="text-[#ff1744] drop-shadow-[0_0_15px_rgba(255,23,68,0.5)] mx-0.5 sm:mx-1 md:mx-4">:</span>
                        <span className="w-auto">{time.s}</span>
                    </div>

                    {/* AM/PM Indicator */}
                    <div className="font-orbitron italic font-black text-[2.5rem] min-[400px]:text-[3rem] sm:text-7xl md:text-8xl lg:text-[9rem] tracking-tighter text-[#ff1744] ml-1 sm:ml-2">
                        {time.ampm}
                    </div>
                </div>

                {/* The Tagline */}
                <div className="flex items-center justify-center gap-2 sm:gap-4 mt-2 group cursor-default w-full overflow-hidden">
                    {/* Glowing lines beside tagline */}
                    <div className="flex-grow h-[1.5px] sm:h-[2px] bg-gradient-to-r from-transparent to-[#ff1744]/70 group-hover:to-[#ff1744] transition-colors duration-500 max-w-[40px] sm:max-w-[100px]"></div>

                    <p className="shrink-0 font-orbitron italic text-[0.5rem] min-[400px]:text-[0.6rem] sm:text-lg md:text-xl lg:text-2xl text-white font-black tracking-widest sm:tracking-[0.1em] lg:tracking-[0.15em] select-none uppercase transition-opacity duration-500 whitespace-nowrap flex items-center justify-center gap-1 sm:gap-2">
                        <span className="text-gray-600 font-light group-hover:text-gray-400 transition-colors duration-500">Don’t Wait for the Perfect Time. </span>
                        <span className="text-[#ff1744] drop-shadow-[0_0_10px_rgba(255,23,68,0.4)] group-hover:drop-shadow-[0_0_20px_rgba(255,23,68,0.8)] transition-all duration-500">Make It Now!</span>
                    </p>

                    <div className="flex-grow h-[1.5px] sm:h-[2px] bg-gradient-to-l from-transparent to-[#ff1744]/70 group-hover:to-[#ff1744] transition-colors duration-500 max-w-[40px] sm:max-w-[100px]"></div>
                </div>

                {/* Book Your Slot Button */}
                <div className="mt-8 sm:mt-12 flex justify-center w-full">
                    <a
                        href="https://wa.me/918340129864?text=Hi%20Lustomotive%20Team!%0A%0AI%E2%80%99d%20like%20to%20book%20an%20appointment%20for%20my%20vehicle.%0A%0APlease%20let%20me%20know%20the%20available%20slots%20and%20the%20details%20you%20need%20from%20me.%0A%0AThank%20you!"
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className={`relative isolate inline-flex items-center justify-center px-6 py-3 sm:px-10 sm:py-4 rounded-full gap-2 transition-all duration-300 cursor-pointer ${isHovered
                                ? 'bg-[#ff1744] border-[#ff1744] scale-[1.05] border shadow-[0_0_30px_rgba(255,23,68,0.8)]'
                                : 'bg-black border-white/10 border shadow-[0_0_15px_rgba(255,23,68,0.3)]'
                            }`}
                        style={{ pointerEvents: 'auto' }}
                    >
                        {/* Glowing Background that pulses on hover */}
                        <div className={`absolute -inset-1 bg-gradient-to-r from-red-600 to-[#ff1744] rounded-full -z-10 transition-all duration-500 ${isHovered ? 'opacity-100 blur-lg animate-pulse' : 'opacity-0 blur-md'
                            }`}></div>

                        <span className="text-white font-orbitron font-bold tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm uppercase drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]">
                            Book Your Slot
                        </span>

                        {/* Blinking dot */}
                        <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ml-1 sm:ml-2 ${isHovered
                                ? 'bg-white shadow-[0_0_10px_white]'
                                : 'bg-[#ff1744] animate-ping shadow-[0_0_5px_rgba(255,23,68,0.5)]'
                            }`}></div>
                    </a>
                </div>
            </motion.div>
        </div>
    );
}
