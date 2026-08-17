import Image from "next/image";

const row1Images = [
    "/images/mp1.jpg",
    "/images/mp2.jpg",
    "/images/mp3.jpg",
    "/images/mp4.jpg",
    "/images/mp5.jpg",
    "/images/1.jpg",
    "/images/Image1.jpeg",
    "/images/Image2.jpeg",
];

const row2Images = [
    "/images/mp6.jpg",
    "/images/mp7.jpg",
    "/images/mp8.jpg",
    "/images/mp9.jpg",
    "/images/bike1.jpg",
    "/images/2.jpg",
    "/images/Image3.jpeg",
    "/images/Image4.jpeg",
];

export default function ImageBanner() {
    return (
        <section className="relative w-full overflow-hidden bg-black py-4 md:py-6">
            <style>{`
                @keyframes marquee-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes marquee-right {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .animate-marquee-left {
                    animation: marquee-left 35s linear infinite;
                }
                .animate-marquee-right {
                    animation: marquee-right 35s linear infinite;
                }
            `}</style>

            <div className="flex flex-col gap-2 md:gap-4">
                {/* Top Row: Scrolling Left */}
                <div className="relative w-full overflow-hidden marquee-container flex">
                    <div className="flex animate-marquee-left w-max">
                        {/* Duplicate the array to create an infinite seamless loop */}
                        {[...row1Images, ...row1Images].map((src, i) => (
                            <div key={`top-${i}`} className="relative h-[15vh] sm:h-[20vh] md:h-[25vh] w-[25vh] sm:w-[30vh] md:w-[40vh] flex-shrink-0 mx-2 md:mx-4 overflow-hidden rounded-xl border border-white/10 group">
                                <img src={src} alt="Detailing Masterpiece" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Center Row: The Main Banner (footerX.jpg) */}
                <div className="relative w-full h-[20vh] sm:h-[25vh] md:h-[30vh] lg:h-[40vh] border-y border-red-900/30 overflow-hidden group shadow-[0_0_50px_rgba(220,38,38,0.15)] z-10">
                    <img
                        src="/images/footerX.jpg"
                        alt="Lustomotive Auto Detailing"
                        className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute inset-0 bg-black/50"></div>
                        <h2 className="relative font-orbitron text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-widest drop-shadow-[0_0_15px_rgba(255,23,68,0.8)] uppercase translate-y-10 group-hover:translate-y-0 transition-all duration-700">
                            The <span className="text-[#ff1744]">Finish</span>
                        </h2>
                    </div>
                </div>

                {/* Bottom Row: Scrolling Right */}
                <div className="relative w-full overflow-hidden marquee-container flex">
                    <div className="flex animate-marquee-right w-max">
                        {/* Duplicate the array to create an infinite seamless loop */}
                        {[...row2Images, ...row2Images].map((src, i) => (
                            <div key={`bottom-${i}`} className="relative h-[15vh] sm:h-[20vh] md:h-[25vh] w-[25vh] sm:w-[30vh] md:w-[40vh] flex-shrink-0 mx-2 md:mx-4 overflow-hidden rounded-xl border border-white/10 group">
                                <img src={src} alt="Detailing Masterpiece" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
