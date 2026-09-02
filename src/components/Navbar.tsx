"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Mail, Tag } from "lucide-react";
import { FaInstagram, FaWhatsapp, FaLocationDot } from "react-icons/fa6";

import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const hero = document.getElementById("hero-section");
            if (hero) {
                // The next section starts coming into view exactly when we've scrolled past the hero's height minus one viewport
                // We add a tiny buffer (10px) to ensure it flips right as the next element bumps in
                setScrolled(window.scrollY > hero.offsetHeight - window.innerHeight + 10);
            } else {
                setScrolled(window.scrollY > 10);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Disable body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; }
    }, [isOpen]);

    const navLinks = [
        { name: "About Us", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Pricing", href: "#offers" },
        { name: "Why Choose Us", href: "#why-choose-us" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
            <header className="fixed top-0 inset-x-0 max-w-[100vw] overflow-x-hidden z-[100] transition-all duration-300">
                {/* Top Contact Bar */}
                <div className={`hidden lg:block transition-all duration-300 overflow-hidden ${scrolled ? 'h-0 opacity-0' : 'h-10 opacity-100 bg-transparent border-b border-white/10'}`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                        <div className="flex justify-center items-center h-full gap-12 text-[0.85rem] font-medium font-sans">
                            <div className="flex items-center gap-3 text-gray-300">
                                <Phone className="w-4 h-4 text-red-600" />
                                <span className="flex items-center">
                                    <a href="tel:+919475414545" className="hover:text-red-500 transition-colors">+91 9475414545</a>
                                    <span className="text-gray-600 mx-2">/</span>
                                    <a href="tel:+919475424545" className="hover:text-red-500 transition-colors">+91 9475424545</a>
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <Mail className="w-4 h-4 text-red-600" />
                                <span className="flex items-center">
                                    <a href="mailto:Admin@lustomotive.com" className="hover:text-red-500 transition-colors">Admin@lustomotive.com</a>
                                    <span className="text-gray-600 mx-2">/</span>
                                    <a href="mailto:Lustomotive@gmail.com" className="flex items-center hover:text-red-500 transition-colors group">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Gmail" className="w-3.5 h-3.5 mr-1.5 group-hover:scale-110 transition-transform" />
                                        Lustomotive@gmail.com
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Navbar */}
                {/* Main Navbar */}
                <nav className={`w-full transition-all duration-300 ${scrolled ? "bg-black/95 backdrop-blur-md shadow-lg shadow-black/50 py-3 border-b border-red-900/30" : "bg-transparent py-4 border-b border-transparent"}`}>
                    <div className="w-full max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between w-full min-h-[45px]">
                            {/* Logo */}
                            <div className="flex-shrink flex items-center z-10 min-w-0 max-w-[50%]">
                                <Link href="/" className="block truncate">
                                    {/* Use an image fallback to matching stylized text if the image fails. Using normal img because we want native rendering directly */}
                                    <img
                                        src="/images/lustomotive_small_logo.png"
                                        alt="LUSTOMOTIVE"
                                        className="h-[45px] w-auto max-w-full object-contain hidden md:block"
                                        onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.classList.remove('hidden') }}
                                    />
                                    <span className="hidden font-roboto text-2xl font-black tracking-widest text-white uppercase truncate">
                                        Lusto<span className="text-red-600">Motive</span>
                                    </span>

                                    <img
                                        src="/images/lustomotive_small_logo.png"
                                        alt="LUSTOMOTIVE"
                                        className="h-[32px] sm:h-[35px] w-auto max-w-[130px] sm:max-w-[150px] object-contain md:hidden"
                                        onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.classList.remove('hidden') }}
                                    />
                                    <span className="hidden font-roboto text-lg sm:text-xl font-black tracking-widest text-white uppercase truncate">
                                        Lusto<span className="text-red-600">Motive</span>
                                    </span>
                                </Link>
                            </div>

                            {/* Desktop Links */}
                            <div className="hidden xl:flex items-center gap-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-white hover:text-red-500 transition-colors uppercase text-[0.8rem] tracking-wider font-bold"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>

                            {/* Desktop Right Side */}
                            <div className="hidden xl:flex items-center gap-6">
                                <a
                                    href="https://www.offers.lustomotive.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 border border-red-600/80 bg-red-950/20 text-red-500 hover:bg-red-600 hover:text-white px-5 py-2 rounded-full uppercase text-xs font-bold tracking-widest transition-all shadow-[0_0_15px_rgba(255,23,68,0.1)] group"
                                >
                                    <Tag className="w-4 h-4 group-hover:text-white transition-colors rotate-90" />
                                    OFFERS
                                </a>

                                <div className="w-[1px] h-6 bg-neutral-800 border-l border-white/5 mx-2 rounded-full"></div>

                                <div className="flex items-center gap-4">
                                    {/* Instagram Brand Logo */}
                                    <a href="https://www.instagram.com/lustomotive" target="_blank" rel="noopener noreferrer"
                                        className="text-[#E1306C] hover:drop-shadow-[0_0_8px_rgba(225,48,108,0.8)] transition-all relative group"
                                        title="Instagram">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] opacity-0 group-hover:opacity-20 blur-md transition-opacity rounded-full"></div>
                                        <FaInstagram className="w-5 h-5 relative z-10" />
                                    </a>

                                    {/* WhatsApp Brand Logo */}
                                    <a href="https://wa.me/919475414545?text=Hi%20Lustomotive%20Team!%0A%0AI%E2%80%99d%20like%20to%20book%20an%20appointment%20for%20my%20vehicle.%0A%0APlease%20let%20me%20know%20the%20available%20slots%20and%20the%20details%20you%20need%20from%20me.%0A%0AThank%20you!"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#25D366] hover:drop-shadow-[0_0_8px_rgba(37,211,102,0.8)] transition-all relative group"
                                        title="WhatsApp">
                                        <div className="absolute inset-0 bg-[#25D366] opacity-0 group-hover:opacity-20 blur-md transition-opacity rounded-full"></div>
                                        <FaWhatsapp className="w-5 h-5 relative z-10" />
                                    </a>

                                    {/* Google Maps Style Pin Logo */}
                                    <a href="https://maps.app.goo.gl/QEgLTb45cyx8QbW58" target="_blank" rel="noopener noreferrer"
                                        className="text-[#EA4335] hover:drop-shadow-[0_0_8px_rgba(234,67,53,0.8)] transition-all relative group"
                                        title="Location">
                                        <div className="absolute inset-0 bg-[#EA4335] opacity-0 group-hover:opacity-20 blur-md transition-opacity rounded-full"></div>
                                        <FaLocationDot className="w-[1.15rem] h-[1.15rem] relative z-10" />
                                    </a>
                                </div>
                            </div>

                            {/* Mobile menu button */}
                            <div className="flex xl:hidden items-center justify-end gap-2 sm:gap-3 flex-shrink-0 ml-auto mr-4 pr-1">
                                <a
                                    href="tel:+919475424545"
                                    className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-red-950/20 border border-red-600/80 text-red-500 hover:bg-red-600 hover:text-white transition-colors"
                                    aria-label="Call Us"
                                >
                                    <Phone className="w-3.5 h-3.5" />
                                </a>
                                <a
                                    href="https://www.offers.lustomotive.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 sm:gap-1.5 border border-red-600/80 bg-red-950/20 text-red-500 px-2 py-1.5 sm:px-3 rounded-full uppercase text-[0.6rem] sm:text-[0.65rem] font-bold tracking-widest whitespace-nowrap flex-shrink-0"
                                >
                                    <Tag className="w-3 h-3 rotate-90" />
                                    <span className="inline">OFFERS</span>
                                </a>
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="relative flex justify-center items-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-red-600/30 text-red-500 bg-red-950/20 hover:text-white hover:bg-red-600 focus:outline-none transition-all duration-500 group flex-shrink-0 z-[70]"
                                >
                                    <span className="sr-only">{isOpen ? "Close main menu" : "Open main menu"}</span>
                                    <span className={`absolute block h-[2px] bg-current rounded-full transition-all duration-300 ${isOpen ? 'w-5 rotate-45' : 'w-4 sm:w-5 -translate-y-[5px] sm:-translate-y-[6px] group-hover:w-5 sm:group-hover:w-6'}`}></span>
                                    <span className={`absolute block h-[2px] bg-current rounded-full transition-all duration-300 ${isOpen ? 'w-0 opacity-0' : 'w-3 sm:w-4 group-hover:w-5 sm:group-hover:w-6'}`}></span>
                                    <span className={`absolute block h-[2px] bg-current rounded-full transition-all duration-300 ${isOpen ? 'w-5 -rotate-45' : 'w-4 sm:w-5 translate-y-[5px] sm:translate-y-[6px] group-hover:w-5 sm:group-hover:w-6'}`}></span>
                                </button>
                            </div>
                        </div>
                    </div>

                </nav>
            </header>

            {/* Ultra-modern Mobile Drawer Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="xl:hidden fixed inset-0 bg-black/95 z-[65] flex flex-col justify-center items-center overflow-hidden pt-16 sm:pt-24 pb-4 sm:pb-10"
                    >
                        {/* Background cinematic glows */}
                        <div className="absolute top-0 left-0 w-[120%] h-64 bg-red-600/10 rounded-[100%] blur-[80px] -translate-x-[10%] -translate-y-1/2 pointer-events-none"></div>
                        <div className="absolute bottom-0 right-0 w-[120%] h-64 bg-red-600/10 rounded-[100%] blur-[80px] translate-x-[10%] translate-y-1/2 pointer-events-none"></div>

                        {/* Menu Links */}
                        <div className="flex flex-col gap-0 sm:gap-2 w-full px-8 sm:px-16 items-center justify-center flex-1 z-10 max-w-lg mx-auto">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                                    transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                                    className="w-full"
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="group relative flex items-center justify-between w-full py-[0.8rem] sm:py-5 border-b border-white/5 overflow-hidden"
                                    >
                                        <span className="text-[1.2rem] sm:text-2xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 group-hover:from-white group-hover:to-red-400 transition-all duration-500 tracking-widest uppercase origin-left group-hover:scale-105">
                                            {link.name}
                                        </span>
                                        <span className="text-red-600 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                                            <Tag className="w-5 h-5 sm:w-6 sm:h-6 -rotate-90" />
                                        </span>
                                        {/* Hover sweep effect */}
                                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-red-600/0 via-red-600/10 to-red-600/0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s] ease-in-out"></div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Contact Info in Mobile Menu */}
                        <motion.div
                            className="flex flex-col items-center gap-2 sm:gap-4 mt-1 sm:mt-4 z-10 w-full px-8 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                        >
                            <div className="flex flex-col items-center gap-1 sm:gap-2 text-gray-400 text-[0.65rem] sm:text-sm">
                                <div className="flex items-center gap-2">
                                    <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-red-600" />
                                    <a href="tel:+919475414545" className="hover:text-white transition-colors">+91 9475414545</a>
                                    <span className="text-gray-700">/</span>
                                    <a href="tel:+919475424545" className="hover:text-white transition-colors">+91 9475424545</a>
                                </div>
                                <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                                    <div className="flex items-center gap-2">
                                        <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-red-600" />
                                        <a href="mailto:Admin@lustomotive.com" className="hover:text-white transition-colors">Admin@lustomotive.com</a>
                                    </div>
                                    <span className="text-gray-700 hidden sm:inline">/</span>
                                    <a href="mailto:Lustomotive@gmail.com" className="flex items-center hover:text-white transition-colors group">
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Gmail" className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1.5 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                                        Lustomotive@gmail.com
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Socials at bottom */}
                        <motion.div
                            className="flex flex-col items-center gap-4 sm:gap-8 mt-14 sm:mt-20 mb-2 sm:mb-4 z-10 w-full px-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                        >
                            <div className="flex items-center gap-6 sm:gap-10">
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#E1306C] hover:drop-shadow-[0_0_10px_rgba(225,48,108,0.8)] transition-all hover:-translate-y-2">
                                    <FaInstagram className="w-6 h-6 sm:w-8 sm:h-8" />
                                </a>
                                <a href="https://wa.me/919475414545?text=Hi%20Lustomotive%20Team!%0A%0AI%E2%80%99d%20like%20to%20book%20an%20appointment%20for%20my%20vehicle.%0A%0APlease%20let%20me%20know%20the%20available%20slots%20and%20the%20details%20you%20need%20from%20me.%0A%0AThank%20you!" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:drop-shadow-[0_0_10px_rgba(37,211,102,0.8)] transition-all hover:-translate-y-2">
                                    <FaWhatsapp className="w-6 h-6 sm:w-8 sm:h-8" />
                                </a>
                                <a href="https://maps.app.goo.gl/QEgLTb45cyx8QbW58" target="_blank" rel="noopener noreferrer" className="text-[#EA4335] hover:drop-shadow-[0_0_10px_rgba(234,67,53,0.8)] transition-all hover:-translate-y-2">
                                    <FaLocationDot className="w-[1.4rem] h-[1.4rem] sm:w-[1.8rem] sm:h-[1.8rem]" />
                                </a>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-16 h-[2px] rounded-full mx-auto bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
                                <div className="text-gray-600 font-orbitron text-[0.65rem] sm:text-xs tracking-[0.3em] uppercase">Lustomotive © {new Date().getFullYear()}</div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
