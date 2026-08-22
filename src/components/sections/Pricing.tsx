"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Tag } from "lucide-react";
import AdmitOneTicket from "@/components/ui/admit-one-ticket";

export default function Offers() {
    const packages = [
        {
            name: "Complete Detailing Package",
            badge: "Popular",
            oldPrice: "15,000",
            price: "12,500",
            description: "Complete interior and exterior rejuvenation.",
            features: [
                "Full exterior wash and wax",
                "Interior deep cleaning",
                "Paint decontamination",
                "Leather conditioning",
                // "Engine bay cleaning",
            ],
            popular: false,
        },
        {
            name: "Ceramic Coating Special",
            badge: "Best Value",
            oldPrice: "35,000",
            price: "29,999",
            description: "Ultimate scratch protection and ceramic finish.",
            features: [
                "3-year ceramic coating",
                "Paint correction (2-step)",
                "Glass treatment",
                "Wheel protection",
                // "Interior protection",
            ],
            popular: true,
        },
        {
            name: "Maintenance Package",
            badge: "New",
            oldPrice: "8,000",
            price: "6,500",
            description: "Regular protection to maintain your vehicle.",
            features: [
                "Full exterior wash",
                "Interior vacuum & wipe down",
                "Tire dressing",
                "Window cleaning",
                // "Dashboard polishing",
            ],
            popular: false,
        },
    ];

    const [ticketWidth, setTicketWidth] = useState(400);
    const [isMobile, setIsMobile] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const handleResize = () => {
            let screenW = window.innerWidth;
            setIsMobile(screenW < 768);
            // The container has max-w-[1920px], so the available width never exceeds 1920px.
            if (screenW > 1920) {
                screenW = 1920;
            }

            // Calculate exact width to fill the screen perfectly minus padding and gaps
            if (screenW >= 1024) {
                // 3 items in a row
                // lg:px-8 (32px * 2 = 64px) + md:gap-12 (48px * 2 = 96px) = 160px total empty space
                setTicketWidth(Math.floor((screenW - 180) / 3));
            } else if (screenW >= 768) {
                // 2 items in a row
                // sm:px-6 (24px * 2 = 48px) + md:gap-12 (48px * 1 = 48px) = 96px total empty space
                setTicketWidth(Math.floor((screenW - 100) / 2));
            } else {
                // 1 item full width with minor gaps
                // px-4 (16px * 2 = 32px)
                setTicketWidth(screenW - 32);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="offers" className="py-12 md:py-16 bg-[#050505] relative z-20 border-y border-neutral-900 overflow-hidden">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-orbitron font-bold tracking-widest text-white mb-4 drop-shadow-[0_0_15px_rgba(255,23,68,0.5)]">
                        Special <span className="text-[#ff1744]">Offers</span>
                    </h2>
                    <p className="text-gray-400 font-light text-sm">Exclusive deals and packages for your vehicle care needs</p>
                </motion.div>
            </div>

            {/* Responsive cards container */}
            <div className="w-full">
                <div className="flex flex-col md:flex-row flex-wrap gap-8 md:gap-12 pb-12 pt-4 px-4 sm:px-6 lg:px-8 items-center justify-center mx-auto max-w-[1920px]">
                    {packages.map((pkg, idx) => {
                        const scale = ticketWidth / 741;

                        return (
                            <motion.div
                                key={pkg.name}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, margin: "-50px" }}
                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                className="relative group cursor-pointer shrink-0"
                            >
                                {/* Glowing effect for popular items behind the ticket */}
                                {/* {pkg.popular && (
                                    <div className="absolute inset-0 bg-[#ff1744]/20 blur-[40px] -z-10 rounded-full group-hover:bg-[#ff1744]/40 transition-colors duration-500" />
                                )} */}

                                    <AdmitOneTicket
                                        name={pkg.name}
                                        event={pkg.badge}
                                        // stubText="ENQUIRE NOW"
                                        watermark="LUSTOMOTIVE"
                                        width={ticketWidth}
                                        tilt={isMobile ? false : { scale: 1.05, maxTilt: 12, glare: 0.2 }}
                                        disableShader={isMobile}
                                    >
                                    <div className="flex flex-col gap-1.5 md:gap-2" style={{ width: '100%', paddingRight: '20px' }}>
                                        {/* Price Section directly below header */}
                                        <div className="flex items-baseline gap-2 mb-1 md:mb-5">
                                            <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#ff1744] drop-shadow-md" style={{ textShadow: "0px 1px 3px rgba(0,0,0,0.8)" }}>₹{pkg.price}</span>
                                            <span className="text-[10px] sm:text-xs text-gray-300 line-through drop-shadow-sm" style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.8)" }}>₹{pkg.oldPrice}</span>
                                        </div>

                                        <p className="text-gray-300 font-medium text-[11px] sm:text-[12px] md:text-sm mb-2 md:mb-3 line-clamp-1 drop-shadow-md">{pkg.description}</p>
                                        <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 md:gap-y-2">
                                            {pkg.features.map((feature, i) => (
                                                <li key={i} className="flex items-center text-white overflow-hidden">
                                                    <CheckCircle2 className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#ff1744] shrink-0 mr-1.5 drop-shadow-sm" />
                                                    <span className="font-medium text-[9px] sm:text-[10px] md:text-[11.5px] truncate leading-none drop-shadow-md" style={{ textShadow: "0px 1px 3px rgba(0,0,0,0.8)" }}>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </AdmitOneTicket>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="mt-4 md:mt-8 text-center max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="flex items-center justify-center flex-wrap text-gray-300 mb-8 font-light text-base md:text-lg">
                        <Tag className="w-5 h-5 text-[#ff1744] mr-2 shrink-0 drop-shadow-[0_0_8px_rgba(255,23,68,0.7)]" />
                        <strong className="text-[#ff1744] font-bold uppercase tracking-widest drop-shadow-[0_0_10px_rgba(255,23,68,0.4)] mr-2">
                            Limited Time Offers
                        </strong>
                        <span className="text-gray-400">- Book your slot today and get an extra 10% discount!</span>
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center text-white border border-[#ff1744] bg-[#ff1744]/5 hover:bg-[#ff1744]/20 uppercase font-bold text-sm tracking-[0.2em] py-4 px-10 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,23,68,0.3)] hover:shadow-[0_0_30px_rgba(255,23,68,0.6)] group"
                    >
                        <Tag className="w-5 h-5 mr-3 group-hover:-rotate-12 transition-transform" /> Unlock Exclusive Deals
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
