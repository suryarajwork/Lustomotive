"use client";

import { motion } from "framer-motion";
import { Award, Target, Users, ShieldCheck, Brush, Lightbulb, Heart, Leaf } from "lucide-react";



export default function Features() {
    const features = [
        {
            icon: <Award className="w-8 h-8 text-red-500" />,
            title: "Premium Quality",
            description: "We use only the finest products and techniques to ensure your vehicle receives the best care possible. Every step is calibrated to perfection.",
        },
        {
            icon: <Users className="w-8 h-8 text-red-500" />,
            title: "Expert Craftsmanship",
            description: "Our certified professionals bring years of hands-on experience in high-end automotive detailing from The Detailing Mafia's proven standards.",
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-red-500" />,
            title: "Advanced Protection",
            description: "State-of-the-art PPF, ceramic coatings, and paint protection solutions that lock in your car's value for years to come.",
        },
        {
            icon: <Target className="w-8 h-8 text-red-500" />,
            title: "Attention to Detail",
            description: "Every inch of your vehicle is meticulously cared for with precision, dedication, and a relentless pursuit of perfection.",
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
                            Four reasons why Panagarh trusts Lustomotive above all others for their prized vehicles.
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


            {/* Our Vision */}
            <div id="vision" className="scroll-mt-28 w-full max-w-[1920px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 border-t border-neutral-900 pt-12 md:pt-16 mt-12 md:mt-16">
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

            {/* Our Valued Partners */}
            <div id="collabs" className="scroll-mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-neutral-900 pt-12 md:pt-16 mt-12 md:mt-16">
                <motion.div
                    className="text-center mb-16"
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

                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-12 mt-8">
                    {["3M Automotive", "The Detailing Mafia", "XPEL", "Modesta", "CarPro", "Gyeon", "Koch Chemie", "Gtechnic"].map((partner, index) => (
                        <motion.div
                            key={index}
                            className="relative flex items-center justify-center min-w-[140px] md:min-w-[160px] group px-6 md:px-0 py-4 md:py-2 bg-neutral-900/40 md:bg-transparent border border-white/5 md:border-transparent rounded-lg md:rounded-none transition-all duration-300"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: index * 0.05 }}
                        >
                            <span className="font-orbitron font-bold md:font-black text-gray-400 md:text-gray-500 group-hover:text-[#ff1744] md:group-hover:text-white md:group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] transition-all duration-500 uppercase tracking-wider md:tracking-widest text-sm md:text-base text-center relative z-10">
                                {partner}
                            </span>
                            <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#ff1744] group-hover:w-full transition-all duration-500 shadow-[0_0_10px_rgba(255,23,68,0.8)]"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
