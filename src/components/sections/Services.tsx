"use client";

import { motion } from "framer-motion";
import { Gauge, Car, Droplets, Shield, SprayCan, Wrench } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function Services() {
    const services = [
        {
            id: "showroom",
            title: "Showroom Finish",
            description: "Perfect shine and protection that brings back the showroom look to your vehicle.",
            icon: <Car className="w-10 h-10 text-[#ff1744] mb-4" />,
            image: "/images/Image1.jpeg",
        },
        {
            id: "correction",
            title: "Paint Correction",
            description: "Professional paint restoration to remove swirls, scratches, and oxidation.",
            icon: <SprayCan className="w-10 h-10 text-[#ff1744] mb-4" />,
            image: "/images/Image2.jpeg",
        },
        {
            id: "ceramic",
            title: "Ceramic Coating",
            description: "Advanced protection that keeps your car looking new for years to come.",
            icon: <Droplets className="w-10 h-10 text-[#ff1744] mb-4" />,
            image: "/images/Image3.jpeg",
        },
        {
            id: "ppf",
            title: "PPF Installation",
            description: "Invisible shield that protects your paint from rock chips and scratches.",
            icon: <Shield className="w-10 h-10 text-[#ff1744] mb-4" />,
            image: "/images/Image4.jpeg",
        },
        {
            id: "interior",
            title: "Interior Detailing",
            description: "Complete interior restoration and deep cleaning for a fresh, like-new cabin.",
            icon: <Gauge className="w-10 h-10 text-[#ff1744] mb-4" />,
            image: "/images/Image5.jpeg",
        },
        {
            id: "maintenance",
            title: "Maintenance",
            description: "Witness the remarkable difference our continuous detailing services can make.",
            icon: <Wrench className="w-10 h-10 text-[#ff1744] mb-4" />,
            image: "/images/Image6.jpg",
        },
    ];

    return (
        <section id="services" className="py-12 md:py-16 bg-black relative border-t border-black">
            <style>{`
                .service-card .service-image {
                    opacity: 0;
                    transform: scale(1.1);
                    transition: all 0.7s ease-in-out;
                }
                .service-card:hover .service-image {
                    opacity: 1;
                    transform: scale(1);
                }
                .service-card .service-text {
                    opacity: 1;
                    transition: opacity 0.4s ease-in-out;
                }
                .service-card:hover .service-text {
                    opacity: 0;
                }
            `}</style>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-orbitron font-bold tracking-widest text-white mb-4 drop-shadow-[0_0_15px_rgba(255,23,68,0.5)]">
                        Our <span className="text-[#ff1744]">Services</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto uppercase tracking-widest text-sm">
                        Premium automotive detailing solutions for your vehicle
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={service.id}
                            className="min-h-[16rem] h-full"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                        >
                            <div className="relative h-full rounded-[1.25rem] border border-white/5 p-2 md:rounded-[1.5rem] md:p-3 hover:-translate-y-2 transition-transform duration-500 ease-out group/container cursor-default">
                                <GlowingEffect
                                    spread={40}
                                    glow={true}
                                    disabled={false}
                                    proximity={64}
                                    inactiveZone={0.01}
                                    borderWidth={3}
                                />
                                <div className="service-card relative flex h-full flex-col overflow-hidden rounded-xl bg-[#0a0a0a] p-6 shadow-sm md:p-8 hover:bg-[#111111] transition-colors z-10 border border-white/5">
                                    
                                    {/* Image Layer (Fades In via CSS) */}
                                    <div className="service-image absolute inset-0 z-30 pointer-events-none overflow-hidden rounded-xl">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                        {/* Gradient and Title overlay on image */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-8">
                                            <h3 className="text-lg md:text-xl font-orbitron font-bold text-white tracking-widest uppercase drop-shadow-[0_0_15px_rgba(255,23,68,0.8)]">
                                                {service.title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Text Content (Fades Out via CSS) */}
                                    <div className="service-text flex flex-col h-full relative z-20">
                                        <div className="absolute top-0 right-0 p-2 transform translate-x-10 -translate-y-10 opacity-5">
                                            {service.icon}
                                        </div>
                                        <div className="text-[#ff1744] mb-4">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl font-orbitron font-bold text-white mb-3 tracking-widest uppercase drop-shadow-[0_0_10px_rgba(255,23,68,0.5)]">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-400 font-light leading-relaxed flex-grow">
                                            {service.description}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
