"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gauge, Car, Droplets, Shield, SprayCan, Wrench, X } from "lucide-react";
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

    const [selectedService, setSelectedService] = useState<any | null>(null);
    const [isBtnHovered, setIsBtnHovered] = useState(false);

    // Disable body scroll when modal is open
    useEffect(() => {
        if (selectedService) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; }
    }, [selectedService]);

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
            <div className="max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-16">
                    {services.map((service, idx) => (
                        <motion.div
                            key={service.id}
                            className="min-h-[16rem] h-full"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                        >
                            <div 
                                className="relative h-full rounded-[1.25rem] border border-white/5 p-2 md:rounded-[1.5rem] md:p-3 hover:-translate-y-2 transition-transform duration-500 ease-out group/container cursor-pointer"
                                onClick={() => setSelectedService(service)}
                            >
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

            {/* Service Details Modal */}
            <AnimatePresence>
                {selectedService && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/80 backdrop-blur-md"
                        onClick={() => setSelectedService(null)}
                    >
                        <motion.div 
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="relative w-full max-w-5xl bg-[#050505] border border-white/10 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-[0_0_50px_rgba(255,23,68,0.15)]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button 
                                onClick={() => setSelectedService(null)}
                                className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-[#ff1744] rounded-full border border-white/10 text-white transition-colors cursor-pointer"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            
                            <div className="w-full md:w-3/5 h-[35vh] md:h-[60vh] relative overflow-hidden bg-black">
                                <img 
                                    src={selectedService.image}
                                    alt={selectedService.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent md:hidden"></div>
                                <div className="absolute inset-0 bg-gradient-to-l from-[#050505] to-transparent hidden md:block"></div>
                            </div>
                            
                            <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center relative bg-[#050505]">
                                <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                                    {selectedService.icon}
                                </div>
                                <div className="text-[#ff1744] mb-6">
                                    {selectedService.icon}
                                </div>
                                <h3 className="text-2xl md:text-4xl font-orbitron font-bold text-white mb-6 uppercase tracking-widest drop-shadow-md">
                                    {selectedService.title}
                                </h3>
                                <p className="text-gray-300 font-light leading-relaxed text-lg mb-8">
                                    {selectedService.description}
                                </p>
                                
                                <button 
                                    onMouseEnter={() => setIsBtnHovered(true)}
                                    onMouseLeave={() => setIsBtnHovered(false)}
                                    onClick={() => {
                                        setSelectedService(null);
                                        setTimeout(() => {
                                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                        }, 300);
                                    }}
                                    className="mt-auto px-8 py-4 border border-[#ff1744] font-orbitron font-bold uppercase tracking-wider rounded-lg transition-all duration-300 w-full cursor-pointer"
                                    style={{
                                        backgroundColor: isBtnHovered ? '#ff1744' : 'transparent',
                                        color: isBtnHovered ? 'white' : '#ff1744',
                                        transform: isBtnHovered ? 'scale(1.02)' : 'scale(1)',
                                        boxShadow: isBtnHovered ? '0 0 20px rgba(255,23,68,0.4)' : 'none',
                                    }}
                                >
                                    Book This Service
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
