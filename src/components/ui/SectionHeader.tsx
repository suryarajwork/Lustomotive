import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
    tag: string;
    titlePart1: string;
    titlePart2: string;
    description: string;
    align?: 'center' | 'left';
}

export default function SectionHeader({
    tag,
    titlePart1,
    titlePart2,
    description,
    align = 'center'
}: SectionHeaderProps) {
    return (
        <motion.div
            className={`flex flex-col relative z-10 w-full mb-12 md:mb-16 ${align === 'center' ? 'items-center text-center px-4' : 'items-start text-left'}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8 }}
        >
            <p className="text-red-600 text-xs font-semibold tracking-[0.4em] uppercase mb-3">
                {tag}
            </p>
            
            <div className={`flex flex-col ${align === 'center' ? 'items-center' : 'items-start'}`}>
                <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold tracking-widest text-white leading-tight drop-shadow-[0_0_15px_rgba(255,23,68,0.5)] mb-0 flex flex-row flex-wrap gap-x-3 gap-y-1 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
                    <span>{titlePart1}</span>
                    <span className="text-[#ff1744]">{titlePart2}</span>
                </h2>
                
                <div className={`mt-1 md:mt-2 mb-4 w-full h-[2px] rounded-full ${align === 'center' ? 'mx-auto bg-gradient-to-r from-transparent via-red-600 to-transparent' : 'bg-gradient-to-r from-red-600 to-transparent'}`}></div>
            </div>
            
            <p className="text-gray-500 text-sm md:text-base max-w-xl leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
}
