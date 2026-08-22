"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const galleryItems = [
    {
        id: 1,
        src: "/images/mp1.jpg",
        title: "Precision Polish",
        subtitle: "Flawless mirror finish that turns heads",
    },
    {
        id: 2,
        src: "/images/mp8.jpg",
        title: "Ceramic Coating",
        subtitle: "Ultimate protection and hydrophobic shine",
    },
    {
        id: 3,
        src: "/images/footerX.jpg",
        title: "The Finish",
        subtitle: "Experience the ultimate perfection in automotive detailing.",
        isBrand: true,
    },
    {
        id: 4,
        src: "/images/mp3.jpg",
        title: "Interior Restoration",
        subtitle: "Luxurious detail in every stitch and surface",
    },
    {
        id: 5,
        src: "/images/mp9.jpg",
        title: "Paint Correction",
        subtitle: "Restoring the original glory of your vehicle",
    }
];

export default function ImageBanner() {
    // Default to the center image (footerX.jpg) which is index 2
    const [hoveredIndex, setHoveredIndex] = useState<number>(2);

    return (
        <section className="relative w-full bg-black py-16 md:py-24 overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-4 md:px-8">
                <div className="text-center mb-10 md:mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-wider uppercase"
                    >
                        Our <span className="text-[#ff1744]">Masterpieces</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-zinc-400 max-w-2xl mx-auto text-lg"
                    >
                        Interact with our curated gallery of automotive excellence.
                    </motion.p>
                </div>
                
                {/* Animated Accordion Gallery */}
                <div 
                    className="flex flex-col md:flex-row gap-2 md:gap-4 h-[75vh] md:h-[65vh] w-full"
                    onMouseLeave={() => setHoveredIndex(2)} // Revert to brand image when mouse leaves container
                >
                    {galleryItems.map((item, index) => {
                        const isActive = hoveredIndex === index;
                        
                        return (
                            <div 
                                key={item.id}
                                className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                                    isActive 
                                        ? "flex-[4] md:flex-[5] shadow-[0_0_30px_rgba(220,38,38,0.2)] border-red-900/50 z-10" 
                                        : "flex-1 border-white/10 z-0"
                                } border`}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onClick={() => setHoveredIndex(index)}
                            >
                                {/* Background Image */}
                                <img 
                                    src={item.src} 
                                    alt={item.title} 
                                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ${isActive ? 'scale-105' : 'scale-100'}`}
                                />
                                
                                {/* Overlay Gradient (minimal gradient only at the very bottom for text readability) */}
                                <div className={`absolute inset-0 transition-all duration-700 ${isActive ? 'bg-gradient-to-t from-black/80 to-transparent to-40%' : 'bg-transparent'}`}></div>
                                
                                {/* Text Content */}
                                {!item.isBrand && (
                                    <div className={`absolute bottom-0 left-0 p-6 md:p-8 w-full flex flex-col justify-end h-full transition-all duration-700 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'}`}>
                                        <h3 className="font-orbitron font-bold text-white mb-2 uppercase whitespace-nowrap drop-shadow-md text-xl md:text-3xl">
                                            {item.title}
                                        </h3>
                                        <p className="text-zinc-300 text-sm md:text-base font-light w-full max-w-lg md:whitespace-nowrap overflow-hidden text-ellipsis">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                )}
                                
                                {/* Vertical Text for inactive state (Optional, looks cool on desktop) */}
                                {!item.isBrand && (
                                    <div className={`absolute inset-0 hidden md:flex items-center justify-center transition-opacity duration-700 pointer-events-none ${isActive ? 'opacity-0' : 'opacity-100'}`}>
                                        <h4 className="text-white font-orbitron text-xl font-bold tracking-widest uppercase -rotate-90 whitespace-nowrap">
                                            {item.title}
                                        </h4>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
