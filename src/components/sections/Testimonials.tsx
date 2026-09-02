"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Testimonials() {
    const reviews = [
        {
            name: "R. Singh",
            location: "Panagarh, West Bengal",
            text: "The service at Lustomotive was exceptional. My car looks brand new! The attention to detail is truly unmatched.",
            initial: "RS"
        },
        {
            name: "A. Das",
            location: "Durgapur, West Bengal",
            text: "I got a ceramic coating for my SUV and the results are incredible. Water beads right off and the shine is perfect. Highly recommended!",
            initial: "AD"
        },
        {
            name: "S. Kumar",
            location: "Asansol, West Bengal",
            text: "Professional and friendly staff. They took the time to explain the entire process. The quality of work is top-notch.",
            initial: "SK"
        },
        {
            name: "M. Banerjee",
            location: "Bardhaman, West Bengal",
            text: "The paint correction work they did on my vintage car was phenomenal. It's like I'm driving a brand new classic!",
            initial: "MB"
        },
        {
            name: "P. Ghosh",
            location: "Panagarh, West Bengal",
            text: "Got the full PPF wrap on my new Creta and the finish is flawless. The team was super skilled and thorough throughout the job.",
            initial: "PG"
        },
        {
            name: "T. Mukherjee",
            location: "Durgapur, West Bengal",
            text: "Booked the interior detailing package and I was blown away. The cabin smells fresh and looks showroom perfect. Worth every rupee!",
            initial: "TM"
        },
        {
            name: "S. Chatterjee",
            location: "Panagarh, West Bengal",
            text: "My Swift looks like it just rolled out of the showroom. Lustomotive's team went above and beyond. Highly professional service!",
            initial: "SC"
        },
        {
            name: "A. Khan",
            location: "Bardhaman, West Bengal",
            text: "Absolutely brilliant work on the paint correction for my Fortuner. Swirl marks gone completely. The team knows their craft perfectly.",
            initial: "AK"
        },
        {
            name: "N. Paul",
            location: "Asansol, West Bengal",
            text: "Top-tier detailing experience. The staff is knowledgeable and the results speak for themselves. Best studio in West Bengal!",
            initial: "NP"
        }
    ];

    return (
        <section id="testimonials" className="scroll-mt-28 pt-32 md:pt-40 pb-12 md:pb-16 bg-black overflow-hidden relative">
            <div 
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: "url('/images/strive.png')",
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            ></div>
            <div className="w-full mx-auto relative z-10">
                <SectionHeader
                    tag="Real Stories"
                    titlePart1="What Our"
                    titlePart2="Clients Say"
                    description="Hear from our satisfied customers about their experience"
                />

                <div className="flex overflow-hidden pt-12 pb-16 relative w-full">
                    <style>{`
                        @keyframes testimonials-marquee {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                        }
                        .animate-testimonials-marquee {
                            animation: testimonials-marquee 45s linear infinite;
                        }
                        .animate-testimonials-marquee:hover {
                            animation-play-state: paused;
                        }
                    `}</style>
                    <div className="flex w-max animate-testimonials-marquee">
                        {[0, 1].map((setIndex) => (
                            <div key={setIndex} className="flex gap-6 pr-6 w-max">
                                {reviews.map((review, idx) => (
                                    <div
                                        key={`${setIndex}-${idx}`}
                                        className="flex flex-col h-full glass-card shrink-0 w-[300px] md:w-[400px] p-8 rounded-2xl relative border border-white/5 hover:border-red-600/50 hover:bg-black hover:scale-105 hover:-translate-y-4 hover:z-20 hover:shadow-[0_20px_50px_rgba(255,23,68,0.3)] transition-all duration-300 group"
                                    >
                                        <div className="absolute top-2 right-4 text-red-600/10 font-serif text-8xl leading-none select-none group-hover:text-red-600/20 transition-colors">&quot;</div>

                                        <div className="flex text-red-500 mb-6 gap-1 relative z-10">
                                            {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                        </div>

                                        <p className="text-gray-300 font-light leading-relaxed mb-8 text-[0.9rem] relative z-10 flex-grow min-h-[7rem] mix-blend-screen">&quot;{review.text}&quot;</p>

                                        <div className="flex items-center relative z-10">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-red-900 flex items-center justify-center font-bold text-white uppercase border-2 border-red-900 shadow-md shadow-red-500/30 mr-4 flex-shrink-0">
                                                {review.initial}
                                            </div>
                                            <div>
                                                <h4 className="text-white font-orbitron font-bold tracking-widest drop-shadow-[0_0_8px_rgba(255,23,68,0.5)]">{review.name}</h4>
                                                <p className="text-neutral-500 text-xs mt-0.5">{review.location}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
