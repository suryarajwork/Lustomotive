"use client";

import { motion } from "framer-motion";
import { Award, Target, Users, ShieldCheck, Brush, Lightbulb, Heart, Leaf } from "lucide-react";



export default function Features() {
    const features = [
        {
            icon: <Award className="w-8 h-8 text-red-500" />,
            title: "COMPLETE AUTO SOLUTIONS",
            description: "From detailing and maintenance to mechanical repairs, diagnostics, and customization, we bring your vehicle's essential services together under one roof.",
        },
        {
            icon: <Users className="w-8 h-8 text-red-500" />,
            title: "QUALITY YOU CAN TRUST",
            description: "We use quality products, modern tools, and proven techniques to deliver reliable results while treating every vehicle with the care it deserves.",
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-red-500" />,
            title: "EXPERT SERVICE",
            description: "Our skilled professionals combine hands-on experience with attention to detail to ensure every service is performed with precision and professionalism.",
        },
        {
            icon: <Target className="w-8 h-8 text-red-500" />,
            title: "CUSTOMER-FIRST APPROACH",
            description: "Transparent service, honest recommendations, and a hassle-free experience. We focus on solving the right problem—not selling you unnecessary services.",
        },
    ];

    return (
        <section id="features" className="scroll-mt-28 pb-12 md:pb-16 bg-[#0a0a0a]">

            {/* Why Choose Us */}
            {/* Why Choose Us */}
            <div id="why-choose-us" className="scroll-mt-28 max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 pt-16 md:pt-20">
                <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16 xl:gap-24">

                    {/* Left Side: Sticky Header */}
                    <motion.div
                        className="w-full lg:w-1/2 xl:w-[45%] text-center lg:text-left lg:sticky lg:top-32 shrink-0"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-red-600 text-xs font-semibold tracking-[0.4em] uppercase mb-3">The Lustomotive Edge</p>
                        <h2 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-5xl xl:text-[4rem] font-orbitron font-bold tracking-widest text-white leading-none drop-shadow-[0_0_15px_rgba(255,23,68,0.5)] mb-2 flex flex-col gap-2">
                            <span className="whitespace-nowrap">Why Choose</span>
                            <span className="text-[#ff1744]">Us?</span>
                        </h2>
                        <div className="mx-auto lg:mx-0 mt-5 mb-5 w-16 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent lg:bg-gradient-to-r lg:from-red-600 lg:to-transparent rounded-full"></div>
                        <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Complete automotive care, built around your vehicle.
                        </p>
                    </motion.div>

                    {/* Right Side: Features List */}
                    <div className="w-full lg:w-1/2 xl:w-[55%] flex flex-col">
                        <style>{`
                            .stroke-text {
                                color: transparent;
                                -webkit-text-stroke: 1px rgba(255, 23, 68, 0.4);
                            }
                            .group:hover .stroke-text {
                                -webkit-text-stroke: 1px rgba(255, 23, 68, 1);
                                text-shadow: 0 0 15px rgba(255, 23, 68, 0.3);
                            }
                        `}</style>
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="group relative flex flex-col md:flex-row items-start md:items-center py-10 md:py-12 lg:py-14 border-b border-white/10 last:border-none first:pt-0 lg:first:pt-4"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                            >
                                {/* Subtle hover background highlight - no boxes */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff1744]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none -z-10"></div>

                                {/* Left Side: Number, Title */}
                                <div className="flex items-center gap-6 md:gap-8 w-full md:w-[55%]">
                                    <span className="text-5xl md:text-6xl font-orbitron font-black stroke-text transition-all duration-700">
                                        0{index + 1}
                                    </span>

                                    <h3 className="text-xl md:text-2xl font-orbitron font-bold text-white tracking-widest uppercase group-hover:translate-x-3 transition-transform duration-700 md:ml-4">
                                        {feature.title}
                                    </h3>
                                </div>

                                {/* Right Side: Description */}
                                <div className="w-full md:w-[45%] mt-4 md:mt-0 md:pl-8">
                                    <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light group-hover:text-gray-200 transition-colors duration-700 text-justify">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>


            {/* Our Valued Partners */}
            <div id="collabs" className="scroll-mt-28 w-full pt-24 md:pt-32 pb-20 md:pb-28 mt-12 md:mt-16 relative">
                <div
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                        backgroundImage: "url('/images/partners.png')",
                        backgroundSize: "100% 100%",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                ></div>

                <motion.div
                    className="text-center mb-12 md:mb-16 px-4 relative z-10"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-red-600 text-xs font-semibold tracking-[0.4em] uppercase mb-3">Premium Alliances</p>
                    <h2 className="text-3xl md:text-5xl font-orbitron font-bold tracking-widest text-white leading-tight drop-shadow-[0_0_15px_rgba(255,23,68,0.5)] mb-2">
                        Our Valued <span className="text-[#ff1744]">Partners</span>
                    </h2>
                    <div className="mx-auto mt-5 mb-5 w-16 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full"></div>
                    <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                        We collaborate with industry-leading brands to bring you the finest automotive care products and services available.
                    </p>
                </motion.div>

                <div className="relative w-full overflow-hidden group bg-transparent py-8 md:py-12 z-10">
                    <style>{`
                        @keyframes marquee {
                            0% { transform: translateX(-50%); }
                            100% { transform: translateX(0); }
                        }
                        .animate-partners-marquee {
                            animation: marquee 35s linear infinite;
                        }
                    `}</style>

                    {/* Gradient Masks */}
                    <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>

                    {(() => {
                        const partners = ["3M Automotive", "The Detailing Mafia", "XPEL", "Modesta", "CarPro", "Gyeon", "Koch Chemie", "Gtechnic"];
                        return (
                            <div className="flex w-max animate-partners-marquee items-center">
                                {[...partners, ...partners].map((partner, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-center px-10 md:px-20"
                                    >
                                        <span className="font-orbitron font-bold md:font-black text-gray-500 hover:text-[#ff1744] md:hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,23,68,0.8)] md:hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] transition-all duration-500 uppercase tracking-wider md:tracking-widest text-sm md:text-xl text-center cursor-default whitespace-nowrap">
                                            {partner}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        );
                    })()}
                </div>
            </div>

            {/* Our Vision */}
            <div id="vision" className="scroll-mt-28 w-full max-w-[1920px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 pt-12 md:pt-16">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-red-600 text-xs font-semibold tracking-[0.4em] uppercase mb-3">Our Vision</p>
                    <h2 className="text-4xl md:text-6xl font-orbitron font-bold tracking-widest text-white leading-tight drop-shadow-[0_0_15px_rgba(255,23,68,0.5)] mb-2">
                        What Do We <span className="text-[#ff1744]">Strive For?</span>
                    </h2>
                    <div className="mx-auto mt-5 mb-5 w-16 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full"></div>
                    <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                        Our commitment to excellence and customer satisfaction
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mt-8">
                    {[
                        {
                            icon: <Brush className="w-8 h-8 md:w-10 md:h-10 transition-colors duration-500" />,
                            title: "Excellence in Every Detail",
                            description: "We strive to deliver perfection in every service, ensuring your vehicle looks and feels like new."
                        },
                        {
                            icon: <Lightbulb className="w-8 h-8 md:w-10 md:h-10 transition-colors duration-500" />,
                            title: "Innovation & Technology",
                            description: "Constantly evolving with the latest automotive care technologies and techniques."
                        },
                        {
                            icon: <Heart className="w-8 h-8 md:w-10 md:h-10 transition-colors duration-500" />,
                            title: "Customer Satisfaction",
                            description: "Your satisfaction is our priority. We go above and beyond to exceed your expectations."
                        },
                        {
                            icon: <Leaf className="w-8 h-8 md:w-10 md:h-10 transition-colors duration-500" />,
                            title: "Sustainable Practices",
                            description: "Committed to eco-friendly detailing solutions that protect both your vehicle and the environment."
                        }
                    ].map((vision, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center text-center relative z-10 py-6 sm:py-8"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                        >
                            <div className="flex-shrink-0 flex items-center justify-center w-auto h-auto mb-6 relative">
                                {/* Static icon wrapper */}
                                <div className="text-[#ff1744] z-10 filter">
                                    {vision.icon}
                                </div>
                            </div>
                            <h3 className="uppercase text-lg font-orbitron font-bold text-white tracking-widest drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] mb-4">{vision.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {vision.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
