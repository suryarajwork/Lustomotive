"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Tag } from "lucide-react";
import AdmitOneTicket from "@/components/ui/admit-one-ticket";

export default function Offers() {
    const packages = [
        {
            name: "PPF PROTECTION SPECIAL",
            badge: "LIMITED TIME",
            badgeExtra: "5 Years Warranty",
            prices: [
                { name: "CAR PPF", price: "₹59,999/-" },
                { name: "BIKE PPF", price: "₹9,999/-" },
            ],
            features: [],
            popular: false,
        },
        {
            name: "CERAMIC COATING SPECIAL",
            badge: "LIMITED TIME",
            badgeExtra: "1 Year Warranty",
            prices: [
                { name: "CAR CC", price: "₹7,999/-" },
                { name: "BIKE CC", price: "₹4,499/-" },
            ],
            features: [],
            popular: true,
        },
        {
            name: "PREMIUM WASH SPECIAL",
            badge: "LIMITED TIME",
            prices: [
                { name: "CAR WASH", price: "₹499/-" },
                { name: "BIKE WASH", price: "₹399/-" },
            ],
            features: [],
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
                            <motion.a
                                href={`https://wa.me/919475414545?text=${encodeURIComponent(`Hi Lustomotive Team!\n\nI’d like to book an appointment for the ${pkg.name} special offer package.\n\nPlease let me know the available slots and the next steps to confirm my booking.\n\nThank you!`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={pkg.name}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, margin: "-50px" }}
                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                className="relative group cursor-pointer shrink-0 block"
                            >
                                {/* Glowing effect for popular items behind the ticket */}
                                {/* {pkg.popular && (
                                    <div className="absolute inset-0 bg-[#ff1744]/20 blur-[40px] -z-10 rounded-full group-hover:bg-[#ff1744]/40 transition-colors duration-500" />
                                )} */}

                                <AdmitOneTicket
                                    name={pkg.name}
                                    event={pkg.badge}
                                    badgeExtra={pkg.badgeExtra}
                                    // stubText="ENQUIRE NOW"
                                    watermark="LUSTOMOTIVE"
                                    width={ticketWidth}
                                    tilt={isMobile ? false : { scale: 1.05, maxTilt: 12, glare: 0.2 }}
                                    disableShader={isMobile}
                                >
                                    <div className="flex flex-col gap-1.5 md:gap-2" style={{ width: '100%', paddingRight: '20px' }}>
                                        {/* Price Section directly below header */}
                                        <div className="flex flex-col gap-0.5 md:gap-1 mt-4 md:mt-6 mb-1.5 md:mb-4">
                                            <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-300 tracking-wide drop-shadow-md pl-1.5 md:pl-2" style={{ textShadow: "0px 1px 3px rgba(0,0,0,0.8)" }}>
                                                Starting at
                                            </span>
                                            <div className="flex flex-col gap-1.5 md:gap-2">
                                                {pkg.prices.map((item, i) => (
                                                    <div key={i} className="flex items-center justify-between bg-black/40 border border-white/10 rounded-full pl-1 pr-2.5 py-1 md:pl-1.5 md:pr-4 md:py-1.5 hover:border-[#ff1744]/50 hover:bg-[#ff1744]/10 transition-all duration-300 group shadow-[0_4px_12px_rgba(0,0,0,0.5)] cursor-default">
                                                        <div className="bg-white/10 group-hover:bg-[#ff1744] text-gray-300 group-hover:text-white font-bold text-[7.5px] sm:text-[9px] md:text-[11px] uppercase tracking-wider px-2.5 py-1 md:px-3 md:py-1.5 rounded-full transition-colors drop-shadow-sm truncate mr-1.5 md:mr-2 max-w-[60%]">
                                                            {item.name}
                                                        </div>
                                                        <span className="text-green-400 group-hover:text-green-300 font-bold text-[11px] sm:text-[13px] md:text-[16px] transition-colors drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] whitespace-nowrap">
                                                            {item.price}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {pkg.features && pkg.features.length > 0 && (
                                            <ul className="flex flex-col gap-y-1.5 md:gap-y-2 mb-2 md:mb-3">
                                                {pkg.features.map((feature, i) => (
                                                    <li key={i} className="flex items-center text-white overflow-hidden">
                                                        <CheckCircle2 className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#ff1744] shrink-0 mr-1.5 drop-shadow-sm" />
                                                        <span className="font-medium text-[10px] sm:text-[11px] md:text-[13px] truncate leading-none drop-shadow-md" style={{ textShadow: "0px 1px 3px rgba(0,0,0,0.8)" }}>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </AdmitOneTicket>
                            </motion.a>
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
                        href="https://wa.me/919475414545?text=Hi%20Lustomotive%20Team!%0A%0AI%E2%80%99d%20like%20to%20book%20an%20appointment%20for%20my%20vehicle.%0A%0APlease%20let%20me%20know%20the%20available%20slots%20and%20the%20details%20you%20need%20from%20me.%0A%0AThank%20you!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex justify-center items-center w-[90%] sm:w-auto max-w-sm sm:max-w-none text-white border border-[#ff1744] bg-[#ff1744]/5 hover:bg-[#ff1744]/20 uppercase font-bold text-[11px] sm:text-xs md:text-sm tracking-[0.15em] sm:tracking-[0.2em] py-3 sm:py-3.5 md:py-4 px-4 sm:px-8 md:px-10 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,23,68,0.3)] hover:shadow-[0_0_30px_rgba(255,23,68,0.6)] group"
                    >
                        <Tag className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:-rotate-12 transition-transform shrink-0" />
                        <span className="whitespace-nowrap">Unlock Exclusive Deals</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
