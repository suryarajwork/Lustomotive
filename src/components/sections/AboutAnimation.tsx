"use client";

import { useEffect, useRef, useState, memo } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import { BlurText } from "@/components/ui/blur-text";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Zap, Settings, Crosshair } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 274;
const SCROLL_DURATION = 6;
const FRAME_PATH = (n: number) =>
    `/about_frames/frame_${String(n).padStart(4, "0")}.jpg`;

// ── Cinematic Text Component ───────────────────────────────────────────────
const CinematicText = memo(function CinematicText({ 
    title, 
    subtitle,
    text, 
    delayVal 
}: { 
    title?: string, 
    subtitle?: string,
    text: string, 
    delayVal: number 
}) {
    const [inView, setInView] = useState(false);
    return (
        <motion.div 
            onViewportEnter={() => setInView(true)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: delayVal, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full relative px-2 mb-10"
        >
            {title && (
                <div className="flex items-center gap-4 mb-6">
                    <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-[#ff1744]/50"></div>
                    <h3 className="text-[#ff1744] font-orbitron uppercase tracking-[0.3em] font-bold text-[0.65rem] drop-shadow-[0_0_10px_rgba(255,23,68,0.8)] whitespace-nowrap">
                        {title}
                    </h3>
                    <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-[#ff1744]/50"></div>
                </div>
            )}
            
            {subtitle && (
                <p className="text-white text-center font-orbitron uppercase tracking-widest font-bold mb-4 text-[0.8rem] drop-shadow-md">
                    {subtitle}
                </p>
            )}
            
            <div className="text-gray-100 font-light leading-[1.8] text-[0.95rem] tracking-wide text-justify drop-shadow-xl">
                <BlurText
                    text={text}
                    delay={20}
                    stepDuration={0.12}
                    animateBy="words"
                    direction="bottom"
                    play={inView}
                />
            </div>
        </motion.div>
    );
});

// ── Hyper-Engine Reactor Component ───────────────────────────────────────
const HyperReactor = memo(function HyperReactor({ opacity, scale }: { opacity: any, scale: any }) {
    return (
        <motion.div style={{ opacity, scale }} className="relative flex items-center justify-center w-[250px] h-[250px] xl:w-[350px] xl:h-[350px] pointer-events-none">
            
            {/* Deep Background Glow */}
            <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-[#ff1744]/20 blur-[80px] rounded-full" 
            />

            {/* Crosshairs (Static) */}
            <div className="absolute inset-[10%] flex items-center justify-center">
                <div className="w-full h-[1px] bg-white/5" />
                <div className="h-full w-[1px] bg-white/5 absolute" />
            </div>

            {/* Outer Containment Ring */}
            <div className="absolute inset-[5%] rounded-full border-2 border-white/5 shadow-[inset_0_0_30px_rgba(255,23,68,0.1)]" />

            {/* Tech Ring 1 (Dashed thin) - Rotates Clockwise */}
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[8%]"
            >
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,23,68,0.4)" strokeWidth="0.5" strokeDasharray="4 2 8 2" />
                </svg>
            </motion.div>

            {/* Turbine Blades (Thick white accents) - Rotates Clockwise */}
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[15%] rounded-full"
            >
                {Array.from({ length: 12 }).map((_, i) => (
                    <div 
                        key={i} 
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full"
                        style={{ transform: `rotate(${i * 30}deg)` }}
                    >
                        <div className="w-[3px] xl:w-[4px] h-6 xl:h-10 bg-gradient-to-b from-white/30 to-transparent mx-auto rounded-full" />
                    </div>
                ))}
            </motion.div>

            {/* Accelerator Ring (Red bold dashed) - Rotates Clockwise like outer ring */}
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[25%]"
            >
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="48" fill="none" stroke="#ff1744" strokeWidth="2" strokeDasharray="30 15 5 15" />
                    <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="2 4" />
                </svg>
            </motion.div>

            {/* Inner Custom Alloy Rim Shape (Twin-Spoke) */}
            <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[28%] flex items-center justify-center rounded-full"
            >
                {/* Outer Lip of the Rim */}
                <div className="absolute inset-0 rounded-full border-[4px] border-[#ff1744]/70 shadow-[0_0_20px_rgba(255,23,68,0.5)]" />
                {/* Inner Step Lip */}
                <div className="absolute inset-[6%] rounded-full border border-white/20" />
                
                {/* 5 Twin-Spokes */}
                {Array.from({ length: 5 }).map((_, i) => (
                    <div 
                        key={i} 
                        className="absolute top-1/2 left-1/2 w-10 xl:w-14 h-[48%] origin-top -translate-x-1/2 flex justify-between"
                        style={{ transform: `rotate(${i * 72}deg) translateX(-50%)` }}
                    >
                        <div className="w-[35%] h-full bg-gradient-to-b from-[#ff1744]/90 to-[#ff1744]/10 rounded-b-full shadow-[0_0_15px_rgba(255,23,68,0.4)]" />
                        <div className="w-[35%] h-full bg-gradient-to-b from-[#ff1744]/90 to-[#ff1744]/10 rounded-b-full shadow-[0_0_15px_rgba(255,23,68,0.4)]" />
                    </div>
                ))}

                {/* Inner Hub Ring */}
                <div className="absolute inset-[35%] rounded-full border-[3px] border-[#ff1744]/60 z-10" />
            </motion.div>

            {/* Pulsating Logo Core */}
            <div className="absolute inset-[39%] bg-black rounded-full border border-[#ff1744]/40 shadow-[0_0_15px_rgba(255,23,68,0.4)] flex items-center justify-center overflow-hidden z-20">
                {/* Pulsating background glow */}
                <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-[#ff1744] rounded-full blur-[8px]"
                />
                
                {/* Project Logo */}
                <img 
                    src="/images/lustomotive_small_logo.png" 
                    alt="Lustomotive Logo" 
                    className="relative z-10 w-[75%] h-[75%] object-contain"
                />
            </div>
            
        </motion.div>
    );
});

export default function AboutAnimation() {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const { scrollYProgress } = useScroll({
        target: wrapperRef,
        offset: ["start start", "end end"],
    });

    const springProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    const canvasY = useTransform(springProgress, [0, 1], ["0%", "-4%"]);
    const canvasScale = useTransform(springProgress, [0, 1], [1, 1.06]);

    // Left text phases
    const titleOpacity = useTransform(scrollYProgress, [0.05, 0.14, 0.26, 0.85, 0.91], [0, 1, 1, 1, 0]);
    const titleY = useTransform(scrollYProgress, [0.05, 0.16], [40, 0]);
    const lineWidth = useTransform(scrollYProgress, [0.12, 0.22], ["0%", "100%"]);
    const lineOpacity = useTransform(scrollYProgress, [0.10, 0.18, 0.87, 0.93], [0, 1, 1, 0]);
    const desc1Opacity = useTransform(scrollYProgress, [0.22, 0.32, 0.42, 0.88, 0.94], [0, 1, 1, 1, 0]);
    const desc1Y = useTransform(scrollYProgress, [0.22, 0.34], [35, 0]);
    const desc2Opacity = useTransform(scrollYProgress, [0.38, 0.48, 0.58, 0.91, 0.97], [0, 1, 1, 1, 0]);
    const desc2Y = useTransform(scrollYProgress, [0.38, 0.50], [35, 0]);
    const overlayOpacity = useTransform(scrollYProgress, [0, 0.04, 0.94, 1.0], [1, 0, 0, 1]);
    
    // HUD Rings opacity and scale
    const hudOpacity = useTransform(scrollYProgress, [0.1, 0.2, 0.85, 0.95], [0, 1, 1, 0]);
    
    // Using springProgress makes the scale incredibly smooth and adds a natural physics delay
    const hudScale = useTransform(springProgress, [0.15, 0.45, 0.85, 0.95], [0.1, 1, 1, 0.85]);

    const [playDesc1, setPlayDesc1] = useState(false);
    useMotionValueEvent(desc1Opacity, "change", (latest) => {
        if ((latest as number) > 0.1) setPlayDesc1(true);
        else setPlayDesc1(false);
    });

    const [playDesc2, setPlayDesc2] = useState(false);
    useMotionValueEvent(desc2Opacity, "change", (latest) => {
        if ((latest as number) > 0.1) setPlayDesc2(true);
        else setPlayDesc2(false);
    });


    // GSAP frame scrubbing
    useEffect(() => {
        if (!wrapperRef.current || !canvasRef.current) return;
        const canvas = canvasRef.current;
        const ctx2d = canvas.getContext("2d");
        if (!ctx2d) return;

        const setSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setSize();
        window.addEventListener("resize", setSize);

        const images: HTMLImageElement[] = [];
        const currentFrame = { n: 0 };

        const drawFrame = (n: number) => {
            const img = images[n];
            if (!img?.complete) return;
            ctx2d.clearRect(0, 0, canvas.width, canvas.height);
            const scale = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
            const w = img.naturalWidth * scale;
            const h = img.naturalHeight * scale;
            ctx2d.drawImage(img, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h);
        };

        for (let i = 1; i <= TOTAL_FRAMES; i++) {
            const img = new Image();
            img.src = FRAME_PATH(i);
            images.push(img);
        }
        images[0]?.addEventListener("load", () => drawFrame(0));

        const ctx = gsap.context(() => {
            gsap.to(currentFrame, {
                n: TOTAL_FRAMES - 1,
                snap: "n",
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: "top top",
                    end: () => `+=${SCROLL_DURATION * window.innerHeight}`,
                    scrub: 0.8,
                },
                onUpdate: () => drawFrame(Math.round(currentFrame.n)),
            });
        });

        return () => {
            ctx.revert();
            window.removeEventListener("resize", setSize);
        };
    }, []);

    return (
        <section id="about" className="relative w-full bg-black">
            
            {/* ── DESKTOP VIEW (Canvas Animation) ── */}
            <div
                ref={wrapperRef}
                style={{ height: `${SCROLL_DURATION * 100}vh` }}
                className="hidden md:block relative w-full"
            >
                <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
                    {/* Frame canvas */}
                    <motion.div className="absolute inset-0" style={{ y: canvasY, scale: canvasScale }}>
                        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
                    </motion.div>

                    {/* Gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/10 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40 pointer-events-none" />

                    {/* Seamless crossfade */}
                    <motion.div className="absolute inset-0 bg-black pointer-events-none z-20" style={{ opacity: overlayOpacity }} />

                    {/* Desktop Content Layout (Title Top, 3 Columns Below) */}
                    <div className="absolute inset-0 z-10 flex flex-col pointer-events-none">
                        
                        {/* Top Center Title */}
                        <div className="flex-none pt-[12vh] flex flex-col items-center justify-center">
                            <motion.h2
                                style={{ opacity: titleOpacity, y: titleY, fontSize: "clamp(1.8rem, 4.5vw, 4.5rem)" }}
                                className="font-orbitron font-bold tracking-widest text-white leading-tight drop-shadow-[0_0_20px_rgba(255,23,68,0.5)] mb-3 text-center"
                            >
                                About <span className="text-[#ff1744]">Lustomotive</span>
                            </motion.h2>

                            {/* Red accent line (Centered gradient) */}
                            <motion.div style={{ opacity: lineOpacity }} className="overflow-hidden h-[2px] mb-6 w-40">
                                <motion.div style={{ width: lineWidth }} className="h-full bg-gradient-to-r from-transparent via-[#ff1744] to-transparent mx-auto" />
                            </motion.div>
                        </div>

                        {/* Three Column Content Area */}
                        <div className="flex-1 flex flex-row items-center justify-center px-10 lg:px-14 xl:px-20 gap-8 xl:gap-16 pb-[10vh]">
                            
                            {/* LEFT: Description */}
                            <div className="flex-1 max-w-[450px] pointer-events-auto">
                                <motion.div
                                    style={{ opacity: desc1Opacity, y: desc1Y, fontSize: "clamp(0.8rem, 1.4vw, 1.05rem)" }}
                                    className="text-gray-200 font-light leading-relaxed text-justify"
                                >
                                    <p className="text-white font-orbitron uppercase tracking-widest font-bold mb-3" style={{ fontSize: "0.95rem" }}>More Than Just an Auto Workshop.</p>
                                    <BlurText
                                        text="Lustomotive is a complete automotive solution dedicated to keeping your vehicle looking great and performing at its best. From professional detailing and maintenance to mechanical repairs, diagnostics, and customization, we bring everything your vehicle needs under one roof. With quality workmanship and customer-focused service, we aim to make every visit reliable and hassle-free."
                                        delay={15}
                                        stepDuration={0.15}
                                        animateBy="words"
                                        direction="bottom"
                                        play={playDesc1}
                                    />
                                </motion.div>
                            </div>

                            {/* CENTER: HyperReactor */}
                            <div className="flex-shrink-0">
                                <HyperReactor opacity={hudOpacity} scale={hudScale} />
                            </div>

                            {/* RIGHT: Our Mission */}
                            <div className="flex-1 max-w-[450px] pointer-events-auto">
                                <motion.div style={{ opacity: desc2Opacity, y: desc2Y }}>
                                    <p className="text-[#ff1744] font-orbitron uppercase tracking-widest font-bold mb-2 text-right" style={{ fontSize: "0.75rem" }}>Our Mission</p>
                                    <p className="text-white font-orbitron uppercase tracking-widest font-bold mb-3 text-right" style={{ fontSize: "0.95rem" }}>Driven by Quality. Built on Trust.</p>
                                    <div className="text-gray-300 font-light leading-relaxed text-justify" style={{ fontSize: "clamp(0.8rem, 1.4vw, 1.05rem)" }}>
                                        <BlurText
                                            text="Our mission is to deliver reliable, professional, and transparent automotive services that our customers can trust. We strive to combine skilled expertise, modern solutions, and quality products to provide the right care for every vehicle. At Lustomotive, we're committed to making vehicle ownership easier, safer, and better—one vehicle at a time."
                                            delay={15}
                                            stepDuration={0.15}
                                            animateBy="words"
                                            direction="bottom"
                                            play={playDesc2}
                                        />
                                    </div>
                                </motion.div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* ── MOBILE VIEW (Glassmorphic Cards) ── */}
            <div className="block md:hidden relative w-full overflow-hidden py-24">
                {/* Parallax Static Background Image */}
                <div 
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-70"
                    style={{ backgroundImage: `url('/images/about_bg.png')` }}
                />
                
                {/* Dark Overlays for Text Readability */}
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-black/40 to-black"></div>

                <div className="relative z-10 px-6 flex flex-col gap-6">
                    {/* Mobile Title */}
                    <div className="text-center mb-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="font-orbitron font-bold tracking-widest text-white text-[1.6rem] mb-2 uppercase drop-shadow-[0_0_20px_rgba(255,23,68,0.5)]"
                        >
                            About <span className="text-[#ff1744]">Lustomotive</span>
                        </motion.h2>
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: "60px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="h-[2px] bg-gradient-to-r from-transparent via-[#ff1744] to-transparent mx-auto" 
                        />
                    </div>

                    {/* Cinematic Text Flow */}
                    <div className="mt-8">
                        <CinematicText 
                            subtitle="More Than Just an Auto Workshop."
                            text="Lustomotive is a complete automotive solution dedicated to keeping your vehicle looking great and performing at its best. From professional detailing and maintenance to mechanical repairs, diagnostics, and customization, we bring everything your vehicle needs under one roof. With quality workmanship and customer-focused service, we aim to make every visit reliable and hassle-free."
                            delayVal={0.2}
                        />

                        <CinematicText 
                            title="Our Mission"
                            subtitle="Driven by Quality. Built on Trust."
                            text="Our mission is to deliver reliable, professional, and transparent automotive services that our customers can trust. We strive to combine skilled expertise, modern solutions, and quality products to provide the right care for every vehicle. At Lustomotive, we're committed to making vehicle ownership easier, safer, and better—one vehicle at a time."
                            delayVal={0.4}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
